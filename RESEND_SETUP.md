# Resend Email Integration Setup

## Overview
The contact form now uses Resend API to send emails when users submit the form.

## Features
✅ Beautiful HTML email templates in Greek
✅ Automatic confirmation email sent to customers
✅ Notification email sent to business owner (bousoulag@gmail.com)
✅ Success/error handling with user-friendly messages
✅ Loading states during submission

## How It Works

### 1. **Netlify Function** (`netlify/functions/send-email.ts`)
   - Serverless function that handles email sending
   - Keeps API key secure (not exposed to frontend)
   - Sends two emails:
     1. **To Business**: Detailed form submission with all customer info
     2. **To Customer**: Beautiful confirmation email with links to website

### 2. **Form Component** (`src/pages/greek/Request.tsx`)
   - Controlled form with React state
   - Validates required fields
   - Shows loading spinner during submission
   - Displays success/error messages
   - Clears form after successful submission

## Email Templates

### Customer Confirmation Email
Beautiful responsive email with:
- Personalized greeting
- Confirmation message
- Links to:
  - Photo Gallery
  - Reviews
  - Website sections
- Contact information
- Business hours
- Social media links

### Owner Notification Email
Organized email with all form data:
- Customer contact details
- Event information (type, date, guests, budget)
- Selected services
- Special requests
- Source (how they found you)

## Deployment Instructions

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy to Netlify
The project is already configured for Netlify (see `netlify.toml`).

When you deploy, Netlify will automatically:
- Build the React app
- Deploy the serverless function
- Make it available at `/.netlify/functions/send-email`

### Step 3: Environment Variables (Optional but Recommended)
For production, you should store the API key as an environment variable:

1. Go to Netlify Dashboard → Site Settings → Environment Variables
2. Add:
   - Key: `RESEND_API_KEY`
   - Value: `re_J23qgF7W_JvFeu3fB1FLnyYeuKHDwBJnX`

3. Update `netlify/functions/send-email.ts`:
```typescript
const resend = new Resend(process.env.RESEND_API_KEY);
```

## Testing Locally

### Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Run Development Server
```bash
netlify dev
```

This will:
- Start the Vite dev server
- Start the Netlify Functions locally
- Make functions available at `http://localhost:8888/.netlify/functions/send-email`

### Test the Form
1. Open `http://localhost:8888`
2. Navigate to "Αίτημα Πληροφοριών"
3. Fill out the form
4. Submit and check:
   - `bousoulag@gmail.com` for business email
   - The customer email address you entered

## Email Addresses

- **From**: `onboarding@resend.dev` (Resend's test domain)
- **To (Business)**: `bousoulag@gmail.com`
- **To (Customer)**: User's submitted email

### Production: Use Your Own Domain
For production, you should:
1. Verify your domain in Resend Dashboard
2. Update the `from` field in `send-email.ts`:
```typescript
from: 'Κτήμα Ωρίων <info@ktimaorion.gr>'
```

## API Key Information

**Current API Key**: `re_J23qgF7W_JvFeu3fB1FLnyYeuKHDwBJnX`

⚠️ **Security Note**: This API key is currently hardcoded. For production:
- Move to environment variables
- Never commit API keys to version control
- Rotate keys if exposed

## Troubleshooting

### Form Submission Fails
- Check Netlify Function logs in dashboard
- Verify API key is valid
- Check browser console for errors

### Emails Not Received
- Check spam folder
- Verify email addresses
- Check Resend Dashboard for delivery logs

### Local Development Issues
- Make sure Netlify CLI is installed
- Use `netlify dev` instead of `npm run dev`
- Check function logs in terminal

## Links to Update

In the customer email template, update these links to your actual URLs:
- Gallery: `https://ktimaorion.gr/gallery`
- Reviews: `https://ktimaorion.gr/reviews`
- Main site: `https://ktimaorion.gr`
- Social media links

## Future Enhancements

- [ ] Add email verification
- [ ] Send reminder emails
- [ ] Create email templates for different event types
- [ ] Add attachments (venue photos, price lists)
- [ ] Implement email scheduling
- [ ] Add analytics tracking

## Support

For Resend API documentation: https://resend.com/docs
For Netlify Functions: https://docs.netlify.com/functions/overview/

