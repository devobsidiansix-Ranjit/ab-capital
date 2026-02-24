# Tracking Setup Guide

This guide explains how to set up conversion tracking for the AB Capital Company Formation website.

## Overview

The website now includes comprehensive tracking for:
- Google Ads Conversion Tracking
- Google Analytics Events
- Facebook Pixel Lead Tracking
- LinkedIn Insight Tag Conversions

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Google Ads Conversion Tracking
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-CONVERSION_ID
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=CONVERSION_LABEL

# Facebook Pixel
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=FACEBOOK_PIXEL_ID

# LinkedIn Insight Tag
NEXT_PUBLIC_LINKEDIN_CONVERSION_ID=LINKEDIN_CONVERSION_ID

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## How It Works

### 1. Form Submission
When a user submits the contact form, they are redirected to `/thank-you` with their service and name as URL parameters.

### 2. Conversion Tracking
The Thank You page automatically tracks conversions across all platforms:
- **Google Ads**: Sends conversion event with service-specific values
- **Google Analytics**: Tracks form submission as engagement event
- **Facebook Pixel**: Tracks lead generation
- **LinkedIn**: Tracks conversion with service value

### 3. Service-Specific Values
Different services have different conversion values:
- Business Setup: 1.0
- Business Advices: 0.8
- Financial Forecast and Projections: 0.9
- Dubai Customs Registration: 0.7
- Tax Residency Certificate: 0.6

## Implementation Details

### Tracking Script Component
Located at `components/tracking-script.tsx`, this component:
- Loads all tracking scripts asynchronously
- Initializes tracking with proper configuration
- Only loads scripts when valid IDs are provided

### Thank You Page
Located at `app/thank-you/page.tsx`, this page:
- Receives form data via URL parameters
- Automatically tracks conversions on page load
- Provides personalized next steps based on service
- Offers related services to keep users engaged

### Global Types
The `types/global.d.ts` file provides TypeScript definitions for:
- `window.gtag` (Google Analytics/Ads)
- `window.fbq` (Facebook Pixel)
- `window.lintrk` (LinkedIn Insight Tag)

## Testing

1. Fill out and submit the contact form
2. You'll be redirected to `/thank-you`
3. Check your browser's Network tab for tracking requests
4. Verify events in your analytics dashboards

## Troubleshooting

### Tracking Not Working?
- Ensure environment variables are set correctly
- Check browser console for JavaScript errors
- Verify tracking IDs are valid
- Test with browser developer tools

### Conversion Values
- Update `lib/tracking-config.ts` to modify service values
- Ensure currency matches your Google Ads account
- Test with small values first

## Security Notes

- All tracking IDs are exposed to the client (required for functionality)
- No sensitive data is sent to tracking platforms
- Only form submission events are tracked
- User privacy is maintained through proper data handling

