/** Transactional email templates. All visitor-supplied text is escaped. */
export function escapeHtml(text: string): string { return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;'); }
export interface InquiryRequestFormData { firstName: string; lastName: string; email: string; phone: string; eventType: string; eventDate?: string; guestCount?: string; budget?: string; specialRequests?: string; howDidYouHear?: string; services: readonly string[]; lang?: 'el' | 'en'; }
export interface ContactFormData { name: string; email: string; phone?: string; subject: string; message: string; lang?: 'el' | 'en'; }
export const eventTypeMap: Record<string,string> = { wedding:'Γάμος',christening:'Βάπτιση','wedding-baptism':'Γάμος & βάπτιση',party:'Πάρτι',corporate:'Εταιρική εκδήλωση',other:'Άλλη εκδήλωση' };
const eventTypeEn: Record<string,string> = { wedding:'Wedding',christening:'Baptism','wedding-baptism':'Wedding & baptism',party:'Private party',corporate:'Corporate event',other:'Other event' };
const navy = '#2f3d57', gold = '#80613b';
function shell(preview: string, body: string, en = false) {
  const name = en ? 'Ktima Orion' : 'Κτήμα Ωρίων';
  // Native text stays legible when Gmail iOS automatically inverts email colors.
  // Transparent dark lettering in a bitmap cannot adapt to that background.
  return `<!doctype html>
<html lang="${en?'en':'el'}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark"><meta name="supported-color-schemes" content="light dark">
<title>${escapeHtml(preview)}</title>
<style>
:root{color-scheme:light dark;supported-color-schemes:light dark}
body{margin:0}a{color:${navy}}
@media(max-width:480px){.pad{padding:24px!important}.action{display:block!important;margin:8px 0!important;text-align:center!important}}
@media(prefers-color-scheme:dark){
 body,.email-bg{background:#151b26!important;color:#eee9e1!important}
 .email-card{background:#202a3a!important;color:#eee9e1!important;border-top-color:#c8aa7d!important}
 .email-card h1,.email-card h2,.email-card p,.email-card td,.email-card a{color:#eee9e1!important}
 .email-card th{color:#c8c2b8!important}
 .email-card td,.email-card th{border-bottom-color:#465064!important}
 .email-card .email-eyebrow{color:#d8bd91!important}
 .email-card .email-message{background:#29364c!important;color:#eee9e1!important;border-left-color:#c8aa7d!important}
 .email-card .action{background:#d8bd91!important;color:#192337!important}
 .email-card .email-footer{background:#172033!important}
 .email-card .email-footer p,.email-card .email-footer a{color:#eee9e1!important}
}
</style></head>
<body class="email-bg" style="margin:0;background:#f5f2ec;color:${navy};font-family:Arial,Helvetica,sans-serif;line-height:1.65">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all">${escapeHtml(preview)}</div>
<table role="presentation" class="email-bg" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f2ec"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" class="email-card" width="600" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;background:#fdfdfd;border-top:4px solid ${gold}">
<tr><td class="pad" style="padding:28px 40px;border-bottom:1px solid #e7e0d5">
<a href="https://ktimaorion.gr${en?'/en':''}" style="display:inline-block;color:${navy};font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.2;text-decoration:none">${name}</a>
<p class="email-eyebrow" style="margin:12px 0 0;font-size:11px;letter-spacing:1.5px;color:${gold}">${en?'KERATEA, ATTICA · SINCE 2009':'ΚΕΡΑΤΕΑ ΑΤΤΙΚΗΣ · ΑΠΟ ΤΟ 2009'}</p>
</td></tr>
<tr><td class="pad" style="padding:36px 40px">${body}</td></tr>
<tr><td class="pad email-footer" style="padding:24px 40px;background:${navy};color:#ffffff">
<p style="margin:0;font-family:Georgia,serif;font-size:22px">${name}</p>
<p style="margin:8px 0;font-size:13px"><a style="color:#ffffff" href="tel:+302299068812">22990 68812</a> &nbsp;·&nbsp; <a style="color:#ffffff" href="mailto:info@ktimaorion.gr">info@ktimaorion.gr</a></p>
<p style="margin:8px 0 0;font-size:12px;color:#e7e0d5">${en?'45th km New Athens–Lavrio Avenue, Keratea 190 01':'45ο χλμ Νέας Λεωφόρου Αθηνών–Λαυρίου, Κερατέα 190 01'}</p>
<p style="margin:12px 0 0;font-size:12px"><a href="https://ktimaorion.gr${en?'/en':''}" style="color:#ffffff">ktimaorion.gr</a></p>
</td></tr></table></td></tr></table></body></html>`;
}
function heading(eyebrow:string,title:string) { return `<p class="email-eyebrow" style="margin:0 0 12px;color:${gold};font-size:11px;font-weight:bold;letter-spacing:1.5px">${escapeHtml(eyebrow)}</p><h1 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:normal;line-height:1.25;color:${navy}">${escapeHtml(title)}</h1>`; }
function row(label:string,value?:string) { return value ? `<tr><th scope="row" align="left" style="padding:12px 12px 12px 0;border-bottom:1px solid #e7e0d5;font-size:13px;font-weight:normal;color:#605d57;vertical-align:top;width:38%">${escapeHtml(label)}</th><td style="padding:12px 0;border-bottom:1px solid #e7e0d5;font-size:14px;word-break:break-word">${escapeHtml(value)}</td></tr>` : ''; }
function message(label:string,value?:string) { return value ? `<h2 style="margin:28px 0 10px;font-family:Georgia,serif;font-weight:normal;font-size:22px">${escapeHtml(label)}</h2><div class="email-message" style="padding:20px;background:#f5f2ec;border-left:3px solid ${gold};font-size:14px;overflow-wrap:anywhere">${escapeHtml(value).replace(/\r?\n/g,'<br>')}</div>` : ''; }
function action(label:string,url:string) { return `<a class="action" href="${escapeHtml(url)}" style="display:inline-block;padding:13px 22px;margin:4px 8px 4px 0;border-radius:4px;background:${navy};color:white;text-decoration:none;font-size:14px;font-weight:bold">${escapeHtml(label)}</a>`; }
function date(value?:string,en=false) { if(!value)return undefined; return new Intl.DateTimeFormat(en?'en-GB':'el-GR',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Athens'}).format(new Date(`${value}T12:00:00Z`)); }
function details(d:InquiryRequestFormData,en=false) { return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">${row(en?'Celebration':'Εκδήλωση',(en?eventTypeEn:eventTypeMap)[d.eventType]||d.eventType)}${row(en?'Preferred date':'Επιθυμητή ημερομηνία',date(d.eventDate,en))}${row(en?'Guests':'Καλεσμένοι',d.guestCount)}${row(en?'Budget':'Προϋπολογισμός',d.budget)}${row(en?'Services of interest':'Υπηρεσίες ενδιαφέροντος',d.services.join(', '))}</table>`; }
export function buildOwnerInquiryEmailHtml(d:InquiryRequestFormData) { const name=`${d.firstName} ${d.lastName}`; return shell(`Νέο αίτημα από ${name}`,heading('ΝΕΟ ΑΙΤΗΜΑ ΕΚΔΗΛΩΣΗΣ',name)+`<p style="font-size:15px">Ζήτησε πληροφορίες για την εκδήλωσή του στο Κτήμα Ωρίων.</p>`+details(d)+`<table role="presentation" width="100%" cellspacing="0" cellpadding="0">${row('Email',d.email)}${row('Τηλέφωνο',d.phone)}${row('Πώς μας βρήκε',d.howDidYouHear)}</table>`+message('Το μήνυμά του',d.specialRequests)+`<p style="margin-top:28px">${action('Απάντηση με email',`mailto:${d.email}?subject=${encodeURIComponent('Η εκδήλωσή σας στο Κτήμα Ωρίων')}`)}${action('Κλήση',`tel:${d.phone.replace(/[^+0-9]/g,'')}`)}</p><p style="font-size:12px;color:#605d57">Απαντώντας σε αυτό το email, η απάντησή σας πηγαίνει στον ενδιαφερόμενο.</p>`); }
export function buildCustomerInquiryEmailHtml(d:InquiryRequestFormData) { const en=d.lang==='en';return shell(en?'Thank you for your inquiry at Ktima Orion':'Ευχαριστούμε για το αίτημά σας στο Κτήμα Ωρίων',heading(en?'YOUR CELEBRATION AT KTIMA ORION':'Η ΕΚΔΗΛΩΣΗ ΣΑΣ ΣΤΟ ΚΤΗΜΑ ΩΡΙΩΝ',en?'Let’s plan your day.':'Ας σχεδιάσουμε τη δική σας ημέρα.')+`<p>${en?'Hello':'Γεια σας'} ${escapeHtml(d.firstName)},</p><p style="font-size:15px">${en?'Thank you for contacting us. We received your inquiry and our team will contact you to discuss availability, the reception and your personal quote.':'Σας ευχαριστούμε που επικοινωνήσατε μαζί μας. Λάβαμε το αίτημά σας και η ομάδα μας θα επικοινωνήσει μαζί σας για τη διαθεσιμότητα, τις παροχές και την προσωπική προσφορά σας.'}</p><h2 style="margin:28px 0 8px;font-family:Georgia,serif;font-size:22px;font-weight:normal">${en?'Your plans at a glance':'Η εκδήλωσή σας με μια ματιά'}</h2>`+details(d,en)+message(en?'Your message':'Το μήνυμά σας',d.specialRequests)+`<p style="font-size:13px;margin-top:24px">${en?'Your preferred date will be confirmed directly with our team. This email confirms your inquiry, not a booking.':'Η επιθυμητή ημερομηνία θα επιβεβαιωθεί σε συνεννόηση με την ομάδα μας. Αυτό το email επιβεβαιώνει την παραλαβή του αιτήματος και δεν αποτελεί κράτηση.'}</p><p>${action(en?'Explore the venue':'Γνωρίστε τον χώρο',`https://ktimaorion.gr${en?'/en/venue':'/o-horos'}`)}</p><p style="font-size:14px">${en?'Have another question? Reply to this email or call us at 22990 68812.':'Θέλετε να προσθέσετε κάτι; Απαντήστε σε αυτό το email ή καλέστε μας στο 22990 68812.'}</p>`,en); }
export function buildContactOwnerEmailHtml(d:ContactFormData) { return shell(`Νέο μήνυμα από ${d.name}`,heading('ΝΕΟ ΜΗΝΥΜΑ',d.subject)+`<table role="presentation" width="100%" cellspacing="0" cellpadding="0">${row('Όνομα',d.name)}${row('Email',d.email)}${row('Τηλέφωνο',d.phone)}</table>`+message('Μήνυμα',d.message)+`<p style="margin-top:24px">${action('Απάντηση με email',`mailto:${d.email}`)}</p>`); }
export function buildContactCustomerEmailHtml(d:ContactFormData) { const en=d.lang==='en';return shell(en?'We received your message':'Λάβαμε το μήνυμά σας',heading(en?'THANK YOU FOR CONTACTING US':'ΕΥΧΑΡΙΣΤΟΥΜΕ ΓΙΑ ΤΗΝ ΕΠΙΚΟΙΝΩΝΙΑ',en?'We received your message.':'Λάβαμε το μήνυμά σας.')+`<p>${en?'Hello':'Γεια σας'} ${escapeHtml(d.name)},</p><p>${en?'Our team will contact you about your inquiry. You can reply to this email if you would like to add anything.':'Η ομάδα μας θα επικοινωνήσει μαζί σας για το αίτημά σας. Μπορείτε να απαντήσετε σε αυτό το email αν θέλετε να προσθέσετε κάτι.'}</p>`+message(d.subject,d.message),en); }
