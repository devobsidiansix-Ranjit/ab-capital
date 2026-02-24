import { NextResponse } from "next/server";
import { google } from "googleapis"

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Check if required environment variables are set
        if (!process.env.CLIENT_EMAIL || !process.env.PRIVATE_KEY || !process.env.SHEET_ID) {
            console.error('Missing required environment variables');
            return new NextResponse("Server configuration error", { status: 500 });
        }

        const client = new google.auth.JWT(
            process.env.CLIENT_EMAIL, 
            undefined, 
            process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'), 
            ['https://www.googleapis.com/auth/spreadsheets']
        );
        
        const sheets = google.sheets({ version: 'v4', auth: client });
        
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'Sheet1!A:J',
            insertDataOption: 'INSERT_ROWS',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[body.name, body.phone, body.email, body.service, body.message, body.company, body.businessActivity, body.premises, body.numberOfOwners, body.numberOfVisas]]
            }
        });
        
        return new NextResponse("Form Submitted Successfully", { status: 200 });
    } catch (error) {
        console.error('API Error:', error);
        return new NextResponse("Sheet API error", { status: 500 });
    }
}