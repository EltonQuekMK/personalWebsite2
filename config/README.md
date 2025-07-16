# Configuration Setup

This project supports two methods for managing configuration:

## Method 1: Environment Variables (Recommended for Deployment)

1. **Create a `.env.local` file:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Add your Google Analytics tracking ID:**
   ```env
   NEXT_PUBLIC_GA_ID=G-YOUR-ACTUAL-GA4-ID
   ```

3. **For Vercel deployment:** Add the environment variable in your Vercel dashboard under Settings > Environment Variables.

## Method 2: Config File (Local Development)

1. **Copy the example config file:**
   ```bash
   cp config/config.example.json config/config.json
   ```

2. **Update the config file with your actual values:**
   ```json
   {
     "analytics": {
       "googleAnalytics": {
         "enabled": true,
         "trackingId": "G-YOUR-ACTUAL-ID"
       }
     }
   }
   ```

## Priority Order

The system checks configuration in this order:
1. Environment variables (`NEXT_PUBLIC_GA_ID`)
2. Config file (`config/config.json`)
3. Safe defaults (disabled)

## Security Features

- Config file is excluded from Git commits
- Environment variables are secure for deployment
- Falls back to safe defaults if configuration is missing
- Only loads analytics when properly configured

## For Production Deployment

**Vercel:** Set `NEXT_PUBLIC_GA_ID` in your Vercel environment variables
**Other platforms:** Set the environment variable in your deployment platform
