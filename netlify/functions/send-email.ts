import { Resend } from 'resend';

const resend = new Resend('re_Za5KhddU_5ghCyYTrYzdieqA1ibdHHNrJ');

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate?: string;
  guestCount?: string;
  budget?: string;
  specialRequests?: string;
  howDidYouHear?: string;
  services: string[];
}

export async function handler(event: any) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    const formData: FormData = JSON.parse(event.body);

    // Send email to business owner
    const ownerEmail = await resend.emails.send({
      from: 'Κτήμα Ωρίων <onboarding@resend.dev>',
      to: ['info@ktimaorion.gr'],
      cc: ['bousoulag@gmail.com'],
      subject: `Νέο Αίτημα Πληροφοριών - ${formData.eventType}`,
      html: generateOwnerEmail(formData)
    });

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: 'Κτήμα Ωρίων <onboarding@resend.dev>',
      to: [formData.email],
      subject: 'Λάβαμε το αίτημά σας - Κτήμα Ωρίων',
      html: generateCustomerEmail(formData)
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Emails sent successfully',
        ownerEmailId: ownerEmail.data?.id,
        customerEmailId: customerEmail.data?.id
      })
    };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Error sending email',
        error: error.message 
      })
    };
  }
}

function generateOwnerEmail(data: FormData): string {
  const eventTypeMap: Record<string, string> = {
    wedding: 'Γάμος',
    christening: 'Βάπτιση',
    party: 'Πάρτι',
    corporate: 'Εταιρική εκδήλωση',
    other: 'Άλλο'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8B7355 0%, #A0826D 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; }
        .section { margin-bottom: 25px; }
        .label { font-weight: bold; color: #8B7355; margin-bottom: 5px; }
        .value { color: #333; padding: 8px 0; }
        .footer { background: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; color: #666; }
        .highlight { background: #f9f9f9; padding: 15px; border-left: 4px solid #8B7355; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">🎉 Νέο Αίτημα Πληροφοριών</h1>
          <p style="margin: 10px 0 0 0;">Κτήμα Ωρίων</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="label">👤 Στοιχεία Πελάτη:</div>
            <div class="value">
              <strong>Όνομα:</strong> ${data.firstName} ${data.lastName}<br>
              <strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a><br>
              <strong>Τηλέφωνο:</strong> <a href="tel:${data.phone}">${data.phone}</a>
            </div>
          </div>

          <div class="section">
            <div class="label">🎊 Πληροφορίες Εκδήλωσης:</div>
            <div class="value">
              <strong>Τύπος:</strong> ${eventTypeMap[data.eventType] || data.eventType}<br>
              ${data.eventDate ? `<strong>Ημερομηνία:</strong> ${new Date(data.eventDate).toLocaleDateString('el-GR')}<br>` : ''}
              ${data.guestCount ? `<strong>Αριθμός Καλεσμένων:</strong> ${data.guestCount}<br>` : ''}
              ${data.budget ? `<strong>Budget:</strong> ${data.budget}<br>` : ''}
            </div>
          </div>

          ${data.services.length > 0 ? `
          <div class="section">
            <div class="label">✨ Υπηρεσίες Ενδιαφέροντος:</div>
            <div class="value">
              ${data.services.map(s => `• ${s}`).join('<br>')}
            </div>
          </div>
          ` : ''}

          ${data.specialRequests ? `
          <div class="highlight">
            <div class="label">📝 Ειδικές Απαιτήσεις:</div>
            <div class="value">${data.specialRequests}</div>
          </div>
          ` : ''}

          ${data.howDidYouHear ? `
          <div class="section">
            <div class="label">📱 Πώς μας βρήκατε:</div>
            <div class="value">${data.howDidYouHear}</div>
          </div>
          ` : ''}
        </div>
        
        <div class="footer">
          <p><strong>Κτήμα Ωρίων</strong> - Διοργάνωση Εκδηλώσεων</p>
          <p>Κερατέα, Αττική | 2299068812 | info@ktimaorion.gr</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateCustomerEmail(data: FormData): string {
  const eventTypeMap: Record<string, string> = {
    wedding: 'Γάμος',
    christening: 'Βάπτιση',
    party: 'Πάρτι',
    corporate: 'Εταιρική εκδήλωση',
    other: 'Άλλο'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #8B7355 0%, #A0826D 100%); color: white; padding: 40px 20px; text-align: center; }
        .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
        .content { background: #ffffff; padding: 40px 30px; }
        .greeting { font-size: 24px; color: #8B7355; margin-bottom: 20px; }
        .message { font-size: 16px; margin-bottom: 20px; }
        .highlight-box { background: #f9f6f3; border-left: 4px solid #8B7355; padding: 20px; margin: 25px 0; }
        .cta-section { text-center; margin: 30px 0; }
        .button { display: inline-block; background: #8B7355; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 5px; }
        .button:hover { background: #A0826D; }
        .divider { border-top: 2px solid #e0e0e0; margin: 30px 0; }
        .contact-grid { display: table; width: 100%; margin: 20px 0; }
        .contact-item { display: table-cell; text-align: center; padding: 15px; }
        .contact-icon { font-size: 24px; margin-bottom: 10px; }
        .footer { background: #2d2d2d; color: #ffffff; padding: 30px; text-align: center; }
        .footer-links { margin: 15px 0; }
        .footer-link { color: #A0826D; text-decoration: none; margin: 0 10px; }
        .social-links { margin: 20px 0; }
        .social-link { display: inline-block; margin: 0 10px; color: #A0826D; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <div class="logo">✨ Κτήμα Ωρίων ✨</div>
          <p style="margin: 0; font-size: 18px;">Διοργάνωση Εκδηλώσεων στην Κερατέα</p>
        </div>
        
        <!-- Main Content -->
        <div class="content">
          <div class="greeting">Γεια σας ${data.firstName}! 👋</div>
          
          <div class="message">
            <p><strong>Σας ευχαριστούμε θερμά για το ενδιαφέρον σας!</strong></p>
            
            <p>Λάβαμε το αίτημά σας για <strong>${eventTypeMap[data.eventType] || data.eventType}</strong> και είμαστε ενθουσιασμένοι που θέλετε να γνωρίσετε το Κτήμα Ωρίων!</p>
            
            <p>Η ομάδα μας θα επικοινωνήσει μαζί σας <strong>εντός 24 ωρών</strong> για να συζητήσουμε τις λεπτομέρειες της εκδήλωσής σας και να σας προτείνουμε τις καλύτερες λύσεις.</p>
          </div>

          <div class="highlight-box">
            <p style="margin: 0; font-size: 18px;"><strong>💡 Στο μεταξύ, μπορείτε να:</strong></p>
            <ul style="margin: 15px 0; padding-left: 20px;">
              <li>Δείτε τις <strong>φωτογραφίες</strong> από προηγούμενες εκδηλώσεις μας</li>
              <li>Διαβάσετε τις <strong>κριτικές</strong> από ευχαριστημένους πελάτες</li>
              <li>Εξερευνήστε τις <strong>υπηρεσίες</strong> που προσφέρουμε</li>
              <li>Γνωρίσετε το <strong>χώρο</strong> μας και τις εγκαταστάσεις</li>
            </ul>
          </div>

          <div class="cta-section">
            <p style="font-size: 18px; margin-bottom: 20px;"><strong>Επισκεφτείτε την ιστοσελίδα μας:</strong></p>
            <a href="https://ktimaorion.gr/gallery" class="button">📸 Δείτε Φωτογραφίες</a>
            <a href="https://ktimaorion.gr/reviews" class="button">⭐ Διαβάστε Κριτικές</a>
          </div>

          <div class="divider"></div>

          <!-- Contact Information -->
          <div style="text-align: center;">
            <p style="font-size: 18px; color: #8B7355; margin-bottom: 20px;"><strong>Χρειάζεστε κάτι άμεσα;</strong></p>
            <p>Μπορείτε να επικοινωνήσετε μαζί μας οποιαδήποτε στιγμή:</p>
          </div>

          <div class="contact-grid">
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div><strong>Τηλέφωνο</strong></div>
              <div><a href="tel:2299068812" style="color: #8B7355;">2299068812</a></div>
              <div><a href="tel:6981889560" style="color: #8B7355;">6981889560</a></div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div><strong>Email</strong></div>
              <div><a href="mailto:info@ktimaorion.gr" style="color: #8B7355;">info@ktimaorion.gr</a></div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🕐</div>
              <div><strong>Ώρες Λειτουργίας</strong></div>
              <div>Δευτ. - Κυρ.</div>
              <div>9:00 - 22:00</div>
            </div>
          </div>

          <div style="background: #f0f0f0; padding: 20px; border-radius: 8px; text-align: center; margin-top: 30px;">
            <p style="margin: 0; font-size: 16px;">
              <strong>📍 Βρισκόμαστε στην Κερατέα</strong><br>
              Με εύκολη πρόσβαση από την Αττική Οδό
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="logo" style="font-size: 24px; margin-bottom: 15px;">Κτήμα Ωρίων</div>
          <p style="margin: 10px 0;">Δημιουργούμε αξέχαστες αναμνήσεις για τις πιο ξεχωριστές στιγμές της ζωής σας</p>
          
          <div class="divider" style="border-color: #444;"></div>
          
          <div class="footer-links">
            <a href="https://ktimaorion.gr" class="footer-link">Αρχική</a>
            <a href="https://ktimaorion.gr/gamos" class="footer-link">Γάμος</a>
            <a href="https://ktimaorion.gr/vaptisi" class="footer-link">Βάπτιση</a>
            <a href="https://ktimaorion.gr/parti" class="footer-link">Πάρτι</a>
            <a href="https://ktimaorion.gr/o-horos" class="footer-link">Ο Χώρος</a>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Instagram</a>
          </div>
          
          <p style="font-size: 12px; color: #999; margin-top: 20px;">
            © 2024 Κτήμα Ωρίων. Όλα τα δικαιώματα κατοχυρωμένα.<br>
            Γ.Ε.ΜΗ. 062719803000
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

