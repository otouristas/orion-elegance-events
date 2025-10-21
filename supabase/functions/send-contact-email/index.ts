import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone?: string;
  eventType?: string;
  guestCount?: string;
  subject: string;
  message: string;
  services?: string[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", { email: formData.email, subject: formData.subject });

    // Build the email body
    const fullName = formData.name || `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
    
    let emailBody = `Νέο μήνυμα από τη φόρμα επικοινωνίας\n\n`;
    emailBody += `Όνομα: ${fullName}\n`;
    emailBody += `Email: ${formData.email}\n`;
    
    if (formData.phone) {
      emailBody += `Τηλέφωνο: ${formData.phone}\n`;
    }
    
    if (formData.eventType) {
      emailBody += `Τύπος Εκδήλωσης: ${formData.eventType}\n`;
    }
    
    if (formData.guestCount) {
      emailBody += `Αριθμός Ατόμων: ${formData.guestCount}\n`;
    }
    
    if (formData.services && formData.services.length > 0) {
      emailBody += `Υπηρεσίες: ${formData.services.join(', ')}\n`;
    }
    
    emailBody += `\nΘέμα: ${formData.subject}\n\n`;
    emailBody += `Μήνυμα:\n${formData.message}\n`;

    // Use SMTP to send email
    const smtpConfig = {
      hostname: 'mail.ktimaorion.gr',
      port: 465,
      username: 'info@ktimaorion.gr',
      password: Deno.env.get('SMTP_PASSWORD'),
      from: 'info@ktimaorion.gr',
      to: 'info@ktimaorion.gr',
      subject: `Νέο Μήνυμα: ${formData.subject}`,
      body: emailBody,
      replyTo: formData.email,
    };

    console.log("Sending email via SMTP...");

    // Use Deno's built-in SMTP capabilities via fetch to a local SMTP service
    // Since Deno doesn't have native SMTP, we'll use a simple approach with nodemailer via npm
    const nodemailer = await import('npm:nodemailer@6.9.7');
    
    const transporter = nodemailer.default.createTransport({
      host: smtpConfig.hostname,
      port: smtpConfig.port,
      secure: true, // use SSL
      auth: {
        user: smtpConfig.username,
        pass: smtpConfig.password,
      },
    });

    const info = await transporter.sendMail({
      from: smtpConfig.from,
      to: smtpConfig.to,
      replyTo: smtpConfig.replyTo,
      subject: smtpConfig.subject,
      text: smtpConfig.body,
    });

    console.log("Email sent successfully:", info.messageId);

    return new Response(
      JSON.stringify({ success: true, messageId: info.messageId }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.toString()
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
