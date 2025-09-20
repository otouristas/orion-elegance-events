import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-champagne">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-brand">Επικοινωνία</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ας μιλήσουμε για την ξεχωριστή σας εκδήλωση
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient-brand mb-6">
                Στοιχεία Επικοινωνίας
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-main" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Διεύθυνση</h4>
                    <p className="text-muted-foreground">Κερατέα, Αττική</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-main" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Τηλέφωνα</h4>
                    <p className="text-muted-foreground">2299068812</p>
                    <p className="text-muted-foreground">6981889560</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-main" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@ktimaorion.gr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-main" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ώρες Λειτουργίας</h4>
                    <p className="text-muted-foreground">Δευτέρα - Κυριακή</p>
                    <p className="text-muted-foreground">9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Ακολουθήστε μας</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/ktimaorion.gr/?locale=el_GR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center hover:bg-brand-main hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/ktimaorion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center hover:bg-brand-main hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elegant p-8">
            <h3 className="text-2xl font-bold text-gradient-brand mb-6">
              Στείλτε μας μήνυμα
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ονοματεπώνυμο *</Label>
                  <Input id="name" placeholder="Το όνομά σας" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Τηλέφωνο</Label>
                  <Input id="phone" placeholder="Το τηλέφωνό σας" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="το email σας" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Θέμα</Label>
                <Input id="subject" placeholder="Θέμα μηνύματος" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Μήνυμα</Label>
                <Textarea 
                  id="message" 
                  placeholder="Πείτε μας για την εκδήλωσή σας..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full btn-elegant">
                Αποστολή Μηνύματος
              </Button>
              
              <p className="text-xs text-muted-foreground">
                Υποβάλλοντας αυτή την φόρμα συμφωνείτε με τους όρους μας και την 
                Πολιτική για Προστασία προσωπικών δεδομένων
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};