# Vercel Deployment Guide

## ✅ **Issues Fixed**

### **1. API Route Issues**
- **Removed problematic `secrets.json` imports** from API routes
- **Added proper error handling** for missing environment variables
- **Fixed typo**: `INSERT_ROWs` → `INSERT_ROWS`

### **2. Next.js Configuration**
- **Updated `next.config.js`** with proper Vercel settings
- **Added `vercel.json`** configuration file
- **Enabled proper image optimization**

## 🚀 **Deployment Steps**

### **Step 1: Environment Variables**
Add these environment variables in your Vercel dashboard:

```
CLIENT_EMAIL=your-google-service-account-email
PRIVATE_KEY=your-google-service-account-private-key
SHEET_ID=your-google-sheet-id
```

### **Step 2: Deploy to Vercel**

1. **Push your code to GitHub**
2. **Connect your repository to Vercel**
3. **Set environment variables** in Vercel dashboard
4. **Deploy**

### **Step 3: Verify Deployment**

Your app should now work without the 404 error!

## 🔧 **Configuration Files**

### **next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ui-avatars.com'],
    unoptimized: true,
  },
  trailingSlash: false,
  basePath: '',
}

module.exports = nextConfig
```

### **vercel.json**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ],
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

## 🐛 **Troubleshooting**

### **If you still get 404 errors:**

1. **Check Vercel logs** in the dashboard
2. **Verify environment variables** are set correctly
3. **Ensure Google Sheets API** is enabled
4. **Check if the build succeeds** in Vercel

### **Common Issues:**

- **Missing environment variables** → Add them in Vercel dashboard
- **Google Sheets API not enabled** → Enable it in Google Cloud Console
- **Incorrect service account credentials** → Regenerate and update

## 📝 **Notes**

- The app uses **Next.js 13+ App Router**
- **API routes** are serverless functions
- **Static pages** are pre-rendered
- **Client-side components** use `"use client"` directive

## 🎯 **Expected Result**

After deployment, you should see:
- ✅ **Homepage loads correctly**
- ✅ **Forms work properly**
- ✅ **Thank you page displays**
- ✅ **No 404 errors**
- ✅ **All components render**

Your AB Capital website should now be fully functional on Vercel! 🚀
