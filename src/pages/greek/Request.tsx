import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Phone, Mail } from 'lucide-react';

export default function Request() {
  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Αίτημα Πληροφοριών</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο 
              για να συζητήσουμε τις ανάγκες της εκδήλωσής σας.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding">
          <div className="container-max max-w-4xl">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <form className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-brand mb-6">Προσωπικές Πληροφορίες</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Όνομα *</Label>
                        <Input id="firstName" placeholder="Το όνομά σας" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Επώνυμο *</Label>
                        <Input id="lastName" placeholder="Το επώνυμό σας" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="το email σας" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Τηλέφωνο *</Label>
                        <Input id="phone" placeholder="Το τηλέφωνό σας" required />
                      </div>
                    </div>
                  </div>

                  {/* Event Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-brand mb-6">Πληροφορίες Εκδήλωσης</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eventType">Τύπος Εκδήλωσης *</Label>
                        <select id="eventType" className="w-full px-3 py-2 border border-border rounded-md bg-background" required>
                          <option value="">Επιλέξτε τύπο εκδήλωσης</option>
                          <option value="wedding">Γάμος</option>
                          <option value="christening">Βάπτιση</option>
                          <option value="party">Πάρτι</option>
                          <option value="corporate">Εταιρική εκδήλωση</option>
                          <option value="other">Άλλο</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Ημερομηνία Εκδήλωσης</Label>
                        <Input id="eventDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guestCount">Αριθμός Καλεσμένων</Label>
                        <Input id="guestCount" type="number" placeholder="Π.χ. 80" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget (προαιρετικό)</Label>
                        <Input id="budget" placeholder="Π.χ. €5000" />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-brand mb-6">Επιπλέον Πληροφορίες</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Ειδικές Απαιτήσεις ή Παρατηρήσεις</Label>
                        <Textarea 
                          id="specialRequests" 
                          placeholder="Πείτε μας για ειδικές ανάγκες, διατροφικούς περιορισμούς, ή οτιδήποτε άλλο θέλετε να ξέρουμε..."
                          rows={4}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="howDidYouHear">Πώς μας βρήκατε;</Label>
                        <select id="howDidYouHear" className="w-full px-3 py-2 border border-border rounded-md bg-background">
                          <option value="">Επιλέξτε</option>
                          <option value="google">Google</option>
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="recommendation">Σύσταση</option>
                          <option value="other">Άλλο</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Services Interest */}
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-brand mb-6">Υπηρεσίες Ενδιαφέροντος</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-brand-main" />
                        <span>Διακόσμηση</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-brand-main" />
                        <span>Φωτογραφία & Video</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-brand-main" />
                        <span>Μουσική & DJ</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-brand-main" />
                        <span>Wedding Planner</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-brand-main" />
                        <span>Συντονισμός Εκκλησίας</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-brand-main" />
                        <span>Πλήρης Διοργάνωση</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button type="submit" className="button button4 px-12 py-4">
                      Αποστολή Αιτήματος
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Υποβάλλοντας αυτή την φόρμα συμφωνείτε με τους όρους μας και την 
                      Πολιτική για Προστασία προσωπικών δεδομένων
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Τηλέφωνο</h3>
                <p className="text-muted-foreground">2299068812</p>
                <p className="text-muted-foreground">6981889560</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@ktimaorion.gr</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ώρες Λειτουργίας</h3>
                <p className="text-muted-foreground">Δευτέρα - Κυριακή</p>
                <p className="text-muted-foreground">9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
