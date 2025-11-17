export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  category: 'wedding' | 'baptism' | 'tips' | 'news';
  categoryLabel: string;
  categoryLabelEn: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  keywords: string;
  keywordsEn: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "pos-na-organosete-enan-mikro-gamo",
    title: "Πώς να Οργανώσετε έναν Μικρό Γάμο στην Κερατέα",
    titleEn: "How to Organize a Small Wedding in Keratea",
    excerpt: "Οι μικροί γάμοι κερδίζουν όλο και περισσότερο έδαφος. Ανακαλύψτε πώς να δημιουργήσετε μια ιντιμ τελετή με προσωπικότητα.",
    excerptEn: "Small weddings are gaining more and more ground. Discover how to create an intimate ceremony with personality.",
    content: `
# Πώς να Οργανώσετε έναν Μικρό Γάμο στην Κερατέα

Οι μικροί γάμοι έχουν γίνει η νέα τάση στις γαμήλιες δεξιώσεις. Με λιγότερους καλεσμένους (συνήθως 30-80 άτομα), μπορείτε να δημιουργήσετε μια πιο προσωπική και ουσιαστική εμπειρία.

## Γιατί να Επιλέξετε Μικρό Γάμο;

Οι μικροί γάμοι προσφέρουν πολλά πλεονεκτήματα:
- **Περισσότερος χρόνος με κάθε καλεσμένο**: Μπορείτε να απολαύσετε πραγματικά την παρουσία των αγαπημένων σας
- **Μειωμένο κόστος**: Περισσότερος προϋπολογισμός για λεπτομέρειες που μετράνε
- **Λιγότερο άγχος**: Πιο εύκολη οργάνωση και λιγότερες αποφάσεις
- **Μεγαλύτερη ευελιξία**: Περισσότερες επιλογές σε χώρους και ημερομηνίες

## Επιλογή του Τέλειου Χώρου

Για έναν μικρό γάμο στην Κερατέα, το Κτήμα Ωρίων προσφέρει:
- Ιντιμ ατμόσφαιρα με αποκλειστική χρήση χώρου
- Κοντά σε γραφικά εκκλησάκια όπως η Παναγία Γκαρικά (ιδανική για μικρούς γάμους)
- Ευέλικτες επιλογές catering προσαρμοσμένες στις ανάγκες σας
- Φυσικό περιβάλλον που δημιουργεί μαγικές φωτογραφίες

## Βασικές Συμβουλές

1. **Κρατήστε τη λίστα καλεσμένων στενή**: Μόνο οι πιο αγαπημένοι σας άνθρωποι
2. **Επενδύστε σε ποιότητα**: Λιγότεροι καλεσμένοι = καλύτερο φαγητό και ποτά
3. **Προσωποποιήστε κάθε λεπτομέρεια**: Χειροποίητα στοιχεία, προσωπικά μηνύματα
4. **Επιλέξτε την κατάλληλη εκκλησία**: Μικρά εκκλησάκια δημιουργούν ιδανική ατμόσφαιρα
5. **Μην ξεχάσετε τη διασκέδαση**: Μικρός γάμος δεν σημαίνει λιγότερο πάρτι!

## Προϋπολογισμός Μικρού Γάμου

Με λιγότερους καλεσμένους, μπορείτε να εστιάσετε στην ποιότητα:
- Επιλέξτε premium επιλογές catering
- Επενδύστε σε εντυπωσιακή διακόσμηση
- Προσφέρετε ιδιαίτερα cocktails
- Κρατήστε επαγγελματία φωτογράφο και videographer

## Συμπέρασμα

Ένας μικρός γάμος στο Κτήμα Ωρίων σας επιτρέπει να εστιάσετε στο πραγματικά σημαντικό: την αγάπη σας και τους πιο αγαπημένους σας ανθρώπους. Επικοινωνήστε μαζί μας για να οργανώσουμε τον τέλειο ιντιμ γάμο σας.
    `,
    contentEn: `
# How to Organize a Small Wedding in Keratea

Small weddings have become the new trend in wedding receptions. With fewer guests (usually 30-80 people), you can create a more personal and meaningful experience.

## Why Choose a Small Wedding?

Small weddings offer many advantages:
- **More time with each guest**: You can truly enjoy the presence of your loved ones
- **Reduced cost**: More budget for details that matter
- **Less stress**: Easier organization and fewer decisions
- **Greater flexibility**: More choices in venues and dates

## Choosing the Perfect Venue

For a small wedding in Keratea, Ktima Orion offers:
- Intimate atmosphere with exclusive venue use
- Close to picturesque chapels like Panagia Gkarika (ideal for small weddings)
- Flexible catering options tailored to your needs
- Natural environment that creates magical photos

## Key Tips

1. **Keep the guest list tight**: Only your most beloved people
2. **Invest in quality**: Fewer guests = better food and drinks
3. **Personalize every detail**: Handmade elements, personal messages
4. **Choose the right church**: Small chapels create the ideal atmosphere
5. **Don't forget the fun**: Small wedding doesn't mean less party!

## Small Wedding Budget

With fewer guests, you can focus on quality:
- Choose premium catering options
- Invest in impressive decoration
- Offer special cocktails
- Keep a professional photographer and videographer

## Conclusion

A small wedding at Ktima Orion allows you to focus on what really matters: your love and your most beloved people. Contact us to organize your perfect intimate wedding.
    `,
    category: 'wedding',
    categoryLabel: 'Γάμος',
    categoryLabelEn: 'Wedding',
    image: '/assets/gamos/DSC_7637.JPG',
    date: '2025-01-15',
    author: 'Κτήμα Ωρίων',
    readTime: '5 λεπτά',
    keywords: 'μικρός γάμος, γάμος κερατέα, ιντιμ γάμος, μικρή δεξίωση',
    keywordsEn: 'small wedding, wedding keratea, intimate wedding, small reception'
  },
  {
    slug: "ekklisies-dipla-sti-thalassa-keratea",
    title: "Οι Καλύτερες Εκκλησίες Δίπλα στη Θάλασσα στην Κερατέα",
    titleEn: "Best Churches by the Sea in Keratea",
    excerpt: "Ανακαλύψτε τα πιο ρομαντικά εκκλησάκια με θέα στο Αιγαίο για τον γάμο ή τη βάπτισή σας.",
    excerptEn: "Discover the most romantic chapels with Aegean views for your wedding or baptism.",
    content: `
# Οι Καλύτερες Εκκλησίες Δίπλα στη Θάλασσα στην Κερατέα

Η Κερατέα και η ευρύτερη περιοχή προσφέρουν μερικά από τα πιο γραφικά παραθαλάσσια εκκλησάκια της Αττικής. Ιδανικά για γάμους και βαπτίσεις, συνδυάζουν τη θρησκευτική τελετή με την εκπληκτική θέα στο Αιγαίο.

## 1. Προφήτης Ηλίας, Θορικό

Το εκκλησάκι του Προφήτη Ηλία στο Θορικό είναι ίσως το πιο εντυπωσιακό:
- **Θέση**: Πάνω σε λόφο με πανοραμική θέα
- **Απόσταση από Κτήμα Ωρίων**: 8.8 km (11 λεπτά)
- **Ιδανικό για**: Μεσημεριανούς γάμους με ηλιοβασίλεμα
- **Χωρητικότητα**: Μεσαία (50-80 άτομα)
- **Ιδιαιτερότητα**: Η θέα στη θάλασσα είναι μαγευτική

## 2. Άγιος Παντελεήμονας, Κακή Θάλασσα

Παραδοσιακή εκκλησία με ρουστίκ χαρακτήρα:
- **Θέση**: Δίπλα στη θάλασσα
- **Απόσταση**: 8.6 km (13 λεπτά)
- **Ιδανικό για**: Βαπτίσεις και μικρούς γάμους
- **Ατμόσφαιρα**: Γνήσια παραδοσιακή
- **Parking**: Διαθέσιμο κοντά

## 3. Άγιος Αλέξανδρος, Δασκαλειό

Πολύ κοντά στο Κτήμα Ωρίων:
- **Απόσταση**: 3.8 km (8 λεπτά)
- **Χωρητικότητα**: Μεγάλη (έως 170 άτομα)
- **Πλεονέκτημα**: Η εγγύτητα με το κτήμα
- **Ιδανικό για**: Μεγάλους γάμους

## 4. Παναγία Γκαρικά

Το πλησιέστερο εκκλησάκι:
- **Απόσταση**: 3.1 km (6 λεπτά)
- **Στυλ**: Ιντιμ και γραφικό
- **Ιδανικό για**: Μικρούς, προσωπικούς γάμους
- **Bonus**: Ελάχιστος χρόνος μετακίνησης

## Γιατί να Επιλέξετε Παραθαλάσσια Εκκλησία;

- **Μοναδικές φωτογραφίες**: Η θάλασσα δημιουργεί μαγικό φόντο
- **Ρομαντική ατμόσφαιρα**: Ο ήχος των κυμάτων
- **Φυσικό φωτισμό**: Το φυσικό φως της θάλασσας
- **Μοναδικές αναμνήσεις**: Εμπειρία που δεν ξεχνιέται

## Συνδυασμός με Δεξίωση στο Κτήμα Ωρίων

Το Κτήμα Ωρίων βρίσκεται σε ιδανική απόσταση από όλες αυτές τις εκκλησίες. Μπορείτε:
1. Να τελέσετε το μυστήριο με θέα στη θάλασσα
2. Να μεταβείτε στο κτήμα σε 5-15 λεπτά
3. Να συνεχίσετε με μια υπέροχη δεξίωση

Επικοινωνήστε μαζί μας για να σας βοηθήσουμε να οργανώσετε τον τέλειο γάμο ή βάπτιση!
    `,
    contentEn: `
# Best Churches by the Sea in Keratea

Keratea and the surrounding area offer some of the most picturesque seaside chapels in Attica. Ideal for weddings and baptisms, they combine religious ceremony with stunning Aegean views.

## 1. Profitis Ilias, Thoriko

The chapel of Profitis Ilias in Thoriko is perhaps the most impressive:
- **Location**: On a hill with panoramic views
- **Distance from Ktima Orion**: 8.8 km (11 minutes)
- **Ideal for**: Afternoon weddings with sunset
- **Capacity**: Medium (50-80 people)
- **Special feature**: The sea view is magical

## 2. Agios Panteleimonas, Kakia Thalassa

Traditional church with rustic character:
- **Location**: By the sea
- **Distance**: 8.6 km (13 minutes)
- **Ideal for**: Baptisms and small weddings
- **Atmosphere**: Genuinely traditional
- **Parking**: Available nearby

## 3. Agios Alexandros, Daskaleio

Very close to Ktima Orion:
- **Distance**: 3.8 km (8 minutes)
- **Capacity**: Large (up to 170 people)
- **Advantage**: Proximity to the venue
- **Ideal for**: Large weddings

## 4. Panagia Gkarika

The closest chapel:
- **Distance**: 3.1 km (6 minutes)
- **Style**: Intimate and picturesque
- **Ideal for**: Small, personal weddings
- **Bonus**: Minimal travel time

## Why Choose a Seaside Church?

- **Unique photos**: The sea creates a magical backdrop
- **Romantic atmosphere**: The sound of the waves
- **Natural lighting**: The natural light of the sea
- **Unique memories**: An unforgettable experience

## Combination with Reception at Ktima Orion

Ktima Orion is ideally located from all these churches. You can:
1. Hold the ceremony with a sea view
2. Travel to the venue in 5-15 minutes
3. Continue with a wonderful reception

Contact us to help you organize the perfect wedding or baptism!
    `,
    category: 'tips',
    categoryLabel: 'Συμβουλές',
    categoryLabelEn: 'Tips & Guides',
    image: '/assets/home/DSC_7816.JPG',
    date: '2025-01-10',
    author: 'Κτήμα Ωρίων',
    readTime: '6 λεπτά',
    keywords: 'εκκλησίες θάλασσα, παραθαλάσσια εκκλησία γάμος, εκκλησάκι κερατέα',
    keywordsEn: 'churches by sea, seaside church wedding, chapel keratea'
  },
  {
    slug: "kalokerinos-vs-heimoniatikos-gamos",
    title: "Καλοκαιρινός vs Χειμωνιάτικος Γάμος: Ποιος να Επιλέξετε;",
    titleEn: "Summer vs Winter Wedding: Which to Choose?",
    excerpt: "Κάθε εποχή έχει τη μαγεία της. Δείτε τα πλεονεκτήματα και μειονεκτήματα για να κάνετε την καλύτερη επιλογή.",
    excerptEn: "Each season has its magic. See the pros and cons to make the best choice.",
    content: `
# Καλοκαιρινός vs Χειμωνιάτικος Γάμος: Ποιος να Επιλέξετε;

Η επιλογή της εποχής του γάμου σας είναι μια σημαντική απόφαση που επηρεάζει πολλές πτυχές της εκδήλωσής σας. Ας δούμε τα πλεονεκτήματα κάθε εποχής.

## Καλοκαιρινός Γάμος (Μάιος-Σεπτέμβριος)

### Πλεονεκτήματα
- **Υπαίθριος χώρος**: Μπορείτε να αξιοποιήσετε πλήρως τον εξωτερικό χώρο
- **Περισσότερες ώρες φωτός**: Ιδανικό για φωτογραφίες
- **Θαλασσινό feeling**: Εκκλησίες και δεξίωση με θέα στη θάλασσα
- **Ανοιξιάτικα λουλούδια**: Περισσότερες επιλογές διακόσμησης
- **Χαλαρή ατμόσφαιρα**: Οι καλεσμένοι απολαμβάνουν το ύπαιθρο

### Μειονεκτήματα
- **Υψηλή ζήτηση**: Περιορισμένες διαθεσιμότητες
- **Θερμοκρασίες**: Μπορεί να κάνει πολύ ζέστη
- **Υψηλότερο κόστος**: Peak season τιμές

### Λύσεις στο Κτήμα Ωρίων
- Κλιματιζόμενη εσωτερική αίθουσα
- Ημιυπαίθρια παγόδα με σκίαση
- Βραδινές ώρες για δροσιά

## Χειμωνιάτικος Γάμος (Νοέμβριος-Μάρτιος)

### Πλεονεκτήματα
- **Μαγική ατμόσφαιρα**: Ρομαντικό, ζεστό feeling
- **Περισσότερες διαθεσιμότητες**: Ευκολότερος προγραμματισμός
- **Χαμηλότερες τιμές**: Εκπτώσεις σε υπηρεσίες
- **Cozy διακόσμηση**: Κεριά, φωτάκια, ζεστές αποχρώσεις
- **Λιγότερο άγχος**: Πιο χαλαρή οργάνωση

### Μειονεκτήματα
- **Περιορισμένος εξωτερικός χώρος**: Εξαρτάται από τον καιρό
- **Λιγότερες ώρες φωτός**: Νωρίτερο σούρουπο
- **Πιθανή κακοκαιρία**: Χρειάζεται plan B

### Λύσεις στο Κτήμα Ωρίων
- Πλήρως κλιματιζόμενη αίθουσα
- Ευέλικτος χώρος για εσωτερικές εκδηλώσεις
- Μαγική χειμωνιάτικη διακόσμηση

## Ενδιάμεσες Εποχές (Άνοιξη & Φθινόπωρο)

Οι καλύτερες επιλογές για πολλά ζευγάρια:

### Άνοιξη (Απρίλιος-Μάιος)
- Ιδανικές θερμοκρασίες
- Ανθισμένη φύση
- Λιγότερο κόστος από καλοκαίρι

### Φθινόπωρο (Οκτώβριος)
- Υπέροχο φως για φωτογραφίες
- Άνετες θερμοκρασίες
- Όμορφα χρώματα φύσης

## Ποια Εποχή να Επιλέξω;

Επιλέξτε με βάση:
1. **Προσωπική προτίμηση**: Τι σας αντιπροσωπεύει;
2. **Προϋπολογισμό**: Χειμώνας = λιγότερο κόστος
3. **Αριθμό καλεσμένων**: Καλοκαίρι για μεγάλους γάμους
4. **Στυλ δεξίωσης**: Εξωτερικό vs εσωτερικό

## Συμπέρασμα

Στο Κτήμα Ωρίων, κάθε εποχή έχει τη μαγεία της. Με τις κατάλληλες εγκαταστάσεις, ο γάμος σας θα είναι τέλειος όποτε και αν τον επιλέξετε!
    `,
    contentEn: `
# Summer vs Winter Wedding: Which to Choose?

Choosing the season for your wedding is an important decision that affects many aspects of your event. Let's look at the advantages of each season.

## Summer Wedding (May-September)

### Advantages
- **Outdoor space**: You can fully utilize the outdoor area
- **More daylight hours**: Ideal for photos
- **Beach feeling**: Churches and reception with sea views
- **Spring flowers**: More decoration options
- **Relaxed atmosphere**: Guests enjoy the outdoors

### Disadvantages
- **High demand**: Limited availability
- **Temperatures**: It can get very hot
- **Higher cost**: Peak season prices

### Solutions at Ktima Orion
- Air-conditioned indoor hall
- Semi-outdoor pavilion with shading
- Evening hours for coolness

## Winter Wedding (November-March)

### Advantages
- **Magical atmosphere**: Romantic, warm feeling
- **More availability**: Easier scheduling
- **Lower prices**: Discounts on services
- **Cozy decoration**: Candles, lights, warm tones
- **Less stress**: More relaxed organization

### Disadvantages
- **Limited outdoor space**: Depends on weather
- **Fewer daylight hours**: Earlier sunset
- **Possible bad weather**: Need plan B

### Solutions at Ktima Orion
- Fully air-conditioned hall
- Flexible space for indoor events
- Magical winter decoration

## In-Between Seasons (Spring & Autumn)

The best choices for many couples:

### Spring (April-May)
- Ideal temperatures
- Blooming nature
- Lower cost than summer

### Autumn (October)
- Beautiful light for photos
- Comfortable temperatures
- Beautiful nature colors

## Which Season Should I Choose?

Choose based on:
1. **Personal preference**: What represents you?
2. **Budget**: Winter = lower cost
3. **Number of guests**: Summer for large weddings
4. **Reception style**: Outdoor vs indoor

## Conclusion

At Ktima Orion, every season has its magic. With the right facilities, your wedding will be perfect whenever you choose it!
    `,
    category: 'wedding',
    categoryLabel: 'Γάμος',
    categoryLabelEn: 'Wedding',
    image: '/assets/gamos/DSC_7712.JPG',
    date: '2025-01-05',
    author: 'Κτήμα Ωρίων',
    readTime: '7 λεπτά',
    keywords: 'καλοκαιρινός γάμος, χειμωνιάτικος γάμος, εποχή γάμου',
    keywordsEn: 'summer wedding, winter wedding, wedding season'
  },
  {
    slug: "ti-na-proseksete-sti-vaptisi",
    title: "Βάπτιση: Τι να Προσέξετε για μια Τέλεια Εκδήλωση",
    titleEn: "Baptism: What to Watch for a Perfect Event",
    excerpt: "Ολοκληρωμένος οδηγός για να οργανώσετε μια αξέχαστη βαπτιστική δεξίωση που θα θυμούνται όλοι.",
    excerptEn: "Complete guide to organize an unforgettable baptism reception that everyone will remember.",
    content: `
# Βάπτιση: Τι να Προσέξετε για μια Τέλεια Εκδήλωση

Η βάπτιση είναι μια από τις πιο χαρούμενες και τρυφερές στιγμές στη ζωή μιας οικογένειας. Ας δούμε πώς να οργανώσετε μια τέλεια βαπτιστική δεξίωση.

## 1. Επιλογή Εκκλησίας

### Παράγοντες που Μετράνε
- **Μέγεθος**: Πόσοι καλεσμένοι θα παρευρεθούν;
- **Τοποθεσία**: Κοντά στο χώρο δεξίωσης
- **Ατμόσφαιρα**: Παραδοσιακή ή σύγχρονη;
- **Διαθεσιμότητα**: Κρατήστε νωρίς!

### Προτάσεις για Κερατέα
- **Παναγία Γκαρικά**: Ιδανική για μικρές βαπτίσεις
- **Άγιος Αλέξανδρος**: Για μεγαλύτερες εκδηλώσεις
- **Προφήτης Ηλίας**: Με θέα στη θάλασσα

## 2. Χώρος Δεξίωσης

### Τι να Ζητήσετε
- **Ασφάλεια για παιδιά**: Ασφαλής χώρος για τρέξιμο
- **Παιδικό μενού**: Ειδικές επιλογές για μικρούς
- **Εσωτερικός & εξωτερικός χώρος**: Για κάθε καιρό
- **Parking**: Εύκολη πρόσβαση

### Κτήμα Ωρίων Πλεονεκτήματα
- Ασφαλής, κλειστός χώρος
- Ειδικό παιδικό μενού
- Baby-friendly εγκαταστάσεις
- Τεράστιος χώρος στάθμευσης

## 3. Διακόσμηση

### Θέματα που Πάντα Πετυχαίνουν
- **Παστέλ χρώματα**: Ροζ, γαλάζιο, λεμονί
- **Θέμα με ζωάκια**: Αρκουδάκια, ζωάκια του δάσους
- **Nautical**: Για θαλασσινό feeling
- **Boho**: Φυσικά υλικά, λουλούδια

### Must-Have Στοιχεία
- Κολυμβήθρα διακοσμημένη
- Photo corner για αναμνηστικές φωτό
- Τραπέζι για μπομπονιέρες
- Λαμπάδα με matching διακόσμηση

## 4. Catering

### Μενού Βάπτισης
**Για Ενήλικες**
- Ελαφριά ορεκτικά
- Σαλάτες
- Κύρια πιάτα (ψάρι, κοτόπουλο)
- Γλυκά & τούρτα

**Για Παιδιά**
- Nuggets, πατατούλες
- Μικρά σάντουιτς
- Φρέσκα φρούτα
- Mini cupcakes

## 5. Ψυχαγωγία

### Για τα Παιδιά
- Face painting
- Κλόουν ή μαγικός
- Φουσκωτά παιχνίδια
- Παιδική μουσική

### Για τους Μεγάλους
- DJ με ποικίλο ρεπερτόριο
- Χώρος χορού
- Lounge area για συζήτηση

## 6. Χρονοδιάγραμμα

**Ιδανικό Πρόγραμμα**
- 11:00-12:00: Άφιξη στην εκκλησία
- 12:00-13:00: Τελετή βάπτισης
- 13:00-13:30: Μετάβαση στο κτήμα
- 13:30-14:00: Ποτό υποδοχής
- 14:00-17:00: Δεξίωση
- 17:00: Κοπή τούρτας

## 7. Φωτογραφία

### Στιγμές που Πρέπει να Απαθανατιστούν
- Προετοιμασία στο σπίτι
- Άφιξη στην εκκλησία
- Η τελετή (με συνεννόηση παπά)
- Οικογενειακές φωτό μετά την τελετή
- Λεπτομέρειες διακόσμησης
- Το παιδί με τους νονούς
- Οικογενειακές στιγμές

## 8. Προϋπολογισμός

### Πού να Επενδύσετε
1. **Φωτογραφία**: Αναμνήσεις για πάντα
2. **Catering**: Ποιότητα φαγητού
3. **Διακόσμηση**: Δημιουργεί ατμόσφαιρα
4. **Χώρος**: Ασφάλεια & άνεση

### Πού να Εξοικονομήσετε
- DIY μπομπονιέρες
- Απλούστερα προσκλητήρια
- Λιγότερα λουλούδια (έμφαση σε key points)

## Συμπέρασμα

Μια επιτυχημένη βάπτιση είναι αυτή που απολαμβάνουν όλοι - παιδιά και ενήλικες. Στο Κτήμα Ωρίων φροντίζουμε για κάθε λεπτομέρεια ώστε εσείς να απολαύσετε αυτή τη μοναδική μέρα!
    `,
    contentEn: `
# Baptism: What to Watch for a Perfect Event

Baptism is one of the most joyful and tender moments in a family's life. Let's see how to organize a perfect baptism reception.

## 1. Church Selection

### Factors that Matter
- **Size**: How many guests will attend?
- **Location**: Close to the reception venue
- **Atmosphere**: Traditional or modern?
- **Availability**: Book early!

### Suggestions for Keratea
- **Panagia Gkarika**: Ideal for small baptisms
- **Agios Alexandros**: For larger events
- **Profitis Ilias**: With sea views

## 2. Reception Venue

### What to Ask For
- **Child safety**: Safe space for running
- **Children's menu**: Special options for kids
- **Indoor & outdoor space**: For any weather
- **Parking**: Easy access

### Ktima Orion Advantages
- Safe, enclosed space
- Special children's menu
- Baby-friendly facilities
- Huge parking area

## 3. Decoration

### Themes that Always Work
- **Pastel colors**: Pink, blue, lemon
- **Animal theme**: Teddy bears, forest animals
- **Nautical**: For beach feeling
- **Boho**: Natural materials, flowers

### Must-Have Elements
- Decorated font
- Photo corner for souvenir photos
- Table for favors
- Candle with matching decoration

## 4. Catering

### Baptism Menu
**For Adults**
- Light appetizers
- Salads
- Main courses (fish, chicken)
- Desserts & cake

**For Children**
- Nuggets, fries
- Small sandwiches
- Fresh fruits
- Mini cupcakes

## 5. Entertainment

### For Children
- Face painting
- Clown or magician
- Inflatable games
- Children's music

### For Adults
- DJ with varied repertoire
- Dance floor
- Lounge area for conversation

## 6. Timeline

**Ideal Schedule**
- 11:00-12:00: Arrival at church
- 12:00-13:00: Baptism ceremony
- 13:00-13:30: Travel to venue
- 13:30-14:00: Welcome drinks
- 14:00-17:00: Reception
- 17:00: Cake cutting

## 7. Photography

### Moments to Capture
- Preparation at home
- Arrival at church
- The ceremony (with priest's permission)
- Family photos after ceremony
- Decoration details
- Child with godparents
- Family moments

## 8. Budget

### Where to Invest
1. **Photography**: Memories forever
2. **Catering**: Food quality
3. **Decoration**: Creates atmosphere
4. **Venue**: Safety & comfort

### Where to Save
- DIY favors
- Simpler invitations
- Fewer flowers (emphasis on key points)

## Conclusion

A successful baptism is one that everyone enjoys - children and adults. At Ktima Orion we take care of every detail so you can enjoy this unique day!
    `,
    category: 'baptism',
    categoryLabel: 'Βάπτιση',
    categoryLabelEn: 'Baptism',
    image: '/assets/vaftisi/DSC_7662.JPG',
    date: '2024-12-28',
    author: 'Κτήμα Ωρίων',
    readTime: '8 λεπτά',
    keywords: 'βάπτιση, βαπτιστική δεξίωση, οργάνωση βάπτισης, βάπτιση κερατέα',
    keywordsEn: 'baptism, baptism reception, baptism organization, baptism keratea'
  },
  {
    slug: "epilogi-horou-dexiosis-athina",
    title: "Επιλογή Χώρου Δεξίωσης στην Αθήνα: Ο Πλήρης Οδηγός",
    titleEn: "Choosing a Reception Venue in Athens: Complete Guide",
    excerpt: "Τι να προσέξετε κατά την επιλογή του χώρου για τη δεξίωσή σας. Checklist και συμβουλές από επαγγελματίες.",
    excerptEn: "What to watch for when choosing your reception venue. Checklist and advice from professionals.",
    content: `
# Επιλογή Χώρου Δεξίωσης στην Αθήνα: Ο Πλήρης Οδηγός

Η επιλογή του κατάλληλου χώρου είναι ίσως η πιο σημαντική απόφαση στον σχεδιασμό της δεξίωσής σας. Ας δούμε τι πρέπει να προσέξετε.

## Βασικοί Παράγοντες

### 1. Τοποθεσία

**Τι να Εξετάσετε:**
- Απόσταση από την εκκλησία (ιδανικά <15 λεπτά)
- Εύκολη πρόσβαση από Αθήνα
- Κοντά σε κεντρικές οδούς
- Διαθεσιμότητα ξενοδοχείων κοντά

**Κτήμα Ωρίων:**
- 30 λεπτά από κέντρο Αθήνας
- Εύκολη πρόσβαση από Αττική Οδό
- Κοντά σε 4 γραφικές εκκλησίες
- Ήσυχη περιοχή, μακριά από θόρυβο

### 2. Χωρητικότητα

**Πώς να Υπολογίσετε:**
- Μετρήστε τους βέβαιους καλεσμένους
- Προσθέστε 20% για ίσως
- Δείτε τη χωρητικότητα σε διάφορες διατάξεις
- Ελέγξτε αν χωράνε άνετα

**Τι να Ρωτήσετε:**
- Μέγιστη χωρητικότητα
- Ελάχιστος αριθμός καλεσμένων
- Ανά πόσα άτομα οι τιμές
- Flexibility σε αριθμούς

### 3. Εγκαταστάσεις

**Must-Have:**
- Καθαρές τουαλέτες (επαρκείς)
- Κουζίνα για catering
- Χώροι για μουσική/DJ
- Parking (1 θέση ανά 3-4 άτομα)
- Baby facilities

**Nice-to-Have:**
- Χώρος προετοιμασίας για το ζευγάρι
- Lounge areas
- Χώροι για παιδιά
- Εξωτερικός χώρος
- Wi-Fi

### 4. Εσωτερικός vs Εξωτερικός Χώρος

**Εξωτερικός:**
- Pros: Φυσικό περιβάλλον, ανοιχτός χώρος
- Cons: Εξαρτάται από καιρό

**Εσωτερικός:**
- Pros: Ελεγχόμενο περιβάλλον, κλιματισμός
- Cons: Μπορεί να φαίνεται στενός

**Ιδανικό:** 
Συνδυασμός και των δύο! (Όπως το Κτήμα Ωρίων)

### 5. Ατμόσφαιρα & Αισθητική

**Τι να Προσέξετε:**
- Ταιριάζει στο στυλ σας;
- Χρειάζεται πολλή διακόσμηση;
- Το φυσικό περιβάλλον είναι όμορφο;
- Υπάρχει καλός φωτισμός;

**Στυλ Χώρων:**
- Rustic/παραδοσιακό
- Μοντέρνο/contemporary
- Κλασικό/elegant
- Boho/φυσικό

## Πρακτικά Ζητήματα

### Budget

**Τι Περιλαμβάνεται:**
- Ενοίκιο χώρου
- Catering
- Ποτά
- Υπηρεσίες
- Διακόσμηση βασική

**Τι ΔΕΝ Περιλαμβάνεται:**
- Επιπλέον διακόσμηση
- Φωτογράφος
- DJ/Μουσική
- Wedding planner
- Ειδικές προσθήκες

### Συμβόλαιο

**Τι να Διαβάσετε Προσεκτικά:**
- Ακριβής χρέωση
- Τι περιλαμβάνει
- Πολιτική ακύρωσης
- Πότε πληρώνετε
- Υπάρχει προκαταβολή;
- Επιστροφή προκαταβολής;

### Ημερομηνία & Ώρες

**Να Ρωτήσετε:**
- Πόσες ώρες έχετε;
- Υπάρχει overtime;
- Κόστος επιπλέον ωρών;
- Τι ώρα πρέπει να φύγετε;
- Πότε μπορείτε να στήσετε;

## Επίσκεψη στο Χώρο

### Checklist Επίσκεψης

**Να Δείτε:**
- Χώρο σε διαφορετικές ώρες
- Πώς φαίνεται με φυσικό φως
- Την κατάσταση εγκαταστάσεων
- Parking και πρόσβαση
- Θέα/περιβάλλον γύρω

**Να Ρωτήσετε:**
- Αν έχουν available την ημερομηνία σας
- Για προηγούμενες εκδηλώσεις
- Για references
- Για όρους συνεργασίας
- Αν έχουν προτιμώμενους προμηθευτές

## Ειδικές Περιπτώσεις

### Για Γάμους σε Εποχές Αιχμής
- Κρατήστε 12-18 μήνες πριν
- Προετοιμαστείτε για υψηλότερες τιμές
- Έχετε backup ημερομηνίες

### Για Μικρούς Γάμους
- Ψάξτε χώρους με flexibility
- Μην πληρώνετε για μεγάλη χωρητικότητα
- Προτιμήστε ιντιμ περιβάλλον

### Για Μεγάλους Γάμους
- Βεβαιωθείτε για επαρκές parking
- Ελέγξτε sound system
- Πολλές τουαλέτες

## Γιατί το Κτήμα Ωρίων;

### Τι μας Ξεχωρίζει:
- ✅ Αποκλειστική χρήση (1 event/day)
- ✅ Εσωτερικός & εξωτερικός χώρος
- ✅ Κλιματισμός πλήρης
- ✅ Τεράστιο parking (100+ θέσεις)
- ✅ Κοντά σε εκκλησίες (5-15')
- ✅ 15+ χρόνια εμπειρίας
- ✅ All-inclusive πακέτα available
- ✅ Ευέλικτες επιλογές

## Συμπέρασμα

Η επιλογή χώρου είναι προσωπική απόφαση. Επισκεφθείτε αρκετούς χώρους, κάντε ερωτήσεις, και διαλέξτε αυτόν που σας κάνει να νιώθετε σπίτι σας.

**Ετοιμοι να δείτε το Κτήμα Ωρίων; Κλείστε δωρεάν ξενάγηση σήμερα!**
    `,
    contentEn: `
# Choosing a Reception Venue in Athens: Complete Guide

Choosing the right venue is perhaps the most important decision in planning your reception. Let's see what you need to watch for.

## Key Factors

### 1. Location

**What to Consider:**
- Distance from church (ideally <15 minutes)
- Easy access from Athens
- Close to main roads
- Available hotels nearby

**Ktima Orion:**
- 30 minutes from Athens center
- Easy access from Attiki Odos
- Close to 4 picturesque churches
- Quiet area, away from noise

### 2. Capacity

**How to Calculate:**
- Count confirmed guests
- Add 20% for maybe
- See capacity in different layouts
- Check if they fit comfortably

**What to Ask:**
- Maximum capacity
- Minimum number of guests
- Pricing per number of people
- Flexibility in numbers

### 3. Facilities

**Must-Have:**
- Clean restrooms (sufficient)
- Kitchen for catering
- Areas for music/DJ
- Parking (1 spot per 3-4 people)
- Baby facilities

**Nice-to-Have:**
- Preparation room for couple
- Lounge areas
- Children's areas
- Outdoor space
- Wi-Fi

### 4. Indoor vs Outdoor Space

**Outdoor:**
- Pros: Natural environment, open space
- Cons: Weather dependent

**Indoor:**
- Pros: Controlled environment, air conditioning
- Cons: May feel tight

**Ideal:** 
Combination of both! (Like Ktima Orion)

### 5. Atmosphere & Aesthetics

**What to Watch:**
- Does it match your style?
- Does it need a lot of decoration?
- Is the natural environment beautiful?
- Is there good lighting?

**Venue Styles:**
- Rustic/traditional
- Modern/contemporary
- Classic/elegant
- Boho/natural

## Practical Matters

### Budget

**What's Included:**
- Venue rental
- Catering
- Drinks
- Services
- Basic decoration

**What's NOT Included:**
- Additional decoration
- Photographer
- DJ/Music
- Wedding planner
- Special additions

### Contract

**What to Read Carefully:**
- Exact charges
- What's included
- Cancellation policy
- When you pay
- Is there a deposit?
- Deposit refund?

### Date & Hours

**To Ask:**
- How many hours do you have?
- Is there overtime?
- Cost of extra hours?
- What time must you leave?
- When can you set up?

## Venue Visit

### Visit Checklist

**To See:**
- Space at different times
- How it looks with natural light
- Facility condition
- Parking and access
- View/surrounding environment

**To Ask:**
- If they have your date available
- For previous events
- For references
- For terms of cooperation
- If they have preferred vendors

## Special Cases

### For Peak Season Weddings
- Book 12-18 months in advance
- Prepare for higher prices
- Have backup dates

### For Small Weddings
- Look for venues with flexibility
- Don't pay for large capacity
- Prefer intimate environment

### For Large Weddings
- Ensure adequate parking
- Check sound system
- Many restrooms

## Why Ktima Orion?

### What Sets Us Apart:
- ✅ Exclusive use (1 event/day)
- ✅ Indoor & outdoor space
- ✅ Full air conditioning
- ✅ Huge parking (100+ spaces)
- ✅ Close to churches (5-15')
- ✅ 15+ years experience
- ✅ All-inclusive packages available
- ✅ Flexible options

## Conclusion

Choosing a venue is a personal decision. Visit several venues, ask questions, and choose the one that makes you feel at home.

**Ready to see Ktima Orion? Book a free tour today!**
    `,
    category: 'tips',
    categoryLabel: 'Συμβουλές',
    categoryLabelEn: 'Tips & Guides',
    image: '/assets/home/DSC_7588.JPG',
    date: '2024-12-20',
    author: 'Κτήμα Ωρίων',
    readTime: '10 λεπτά',
    keywords: 'χώρος δεξίωσης, κτήμα γάμου αθήνα, επιλογή χώρου, venue wedding',
    keywordsEn: 'reception venue, wedding venue athens, venue selection, wedding venue'
  },
  {
    slug: "nea-ktimaorion-2025",
    title: "Νέα από το Κτήμα Ωρίων: Σεζόν 2025",
    titleEn: "News from Ktima Orion: 2025 Season",
    excerpt: "Ανακαλύψτε τις νέες υπηρεσίες και αναβαθμίσεις που έχουμε προετοιμάσει για εσάς για το 2025.",
    excerptEn: "Discover the new services and upgrades we have prepared for you for 2025.",
    content: `
# Νέα από το Κτήμα Ωρίων: Σεζόν 2025

Το Κτήμα Ωρίων ετοιμάζεται για μια εντυπωσιακή σεζόν το 2025! Δείτε τι νέο έχουμε να σας προσφέρουμε.

## Νέες Υπηρεσίες

### 1. Premium Wedding Packages

Δημιουργήσαμε νέα all-inclusive πακέτα που περιλαμβάνουν:
- Πλήρες catering με premium επιλογές
- Επαγγελματική διακόσμηση
- Φωτισμός & ήχος
- Συντονισμός εκδήλωσης
- Ειδικές εκπτώσεις για φωτογράφηση

### 2. Bridal Suite Upgrade

Αναβαθμίσαμε το studio του ζευγαριού με:
- Νέο makeup station
- Καλύτερο φωτισμό για προετοιμασία
- Πιο άνετο χώρο
- Ιδιωτικό μπαλκόνι

### 3. Outdoor Lounge Area

Νέα lounge περιοχή για:
- Ποτό υποδοχής
- Chill out moments
- Cocktail hour
- Φωτογραφίες

## Αναβαθμίσεις Εγκαταστάσεων

### Τεχνολογική Αναβάθμιση
- Νέο premium sound system
- Architectural lighting
- Προβολείς για εντυπωσιακά effects
- Wi-Fi σε όλο τον χώρο

### Χώροι
- Επέκταση parking
- Νέα landscaping
- Περισσότερα σημεία Instagram-worthy
- Βελτιωμένος φωτισμός νυχτερινός

## Νέες Συνεργασίες

### Catering Partners
Συνεργαζόμαστε με νέους caterers που προσφέρουν:
- Διεθνή κουζίνα
- Vegan & vegetarian options
- Fusion επιλογές
- Themed menus

### Decoration Teams
Νέοι διακοσμητές με εξειδίκευση σε:
- Bohemian style
- Minimalist weddings
- Luxury events
- Themed parties

## Early Booking Offers

### Κλείστε τώρα για το 2025!

**Προσφορές που ισχύουν:**
- 15% έκπτωση σε κρατήσεις έως 28/02/2025
- Δωρεάν upgrade σε premium catering
- Complimentary engagement photoshoot στο κτήμα
- Ειδικές τιμές για mid-week weddings

### Διαθεσιμότητα

Οι πιο δημοφιλείς ημερομηνίες γεμίζουν γρήγορα:
- Μάιος-Ιούνιος: 70% booked
- Σεπτέμβριος-Οκτώβριος: 65% booked
- Απρίλιος: Ακόμα πολλές διαθεσιμότητες!

## Βιωσιμότητα

### Πράσινες Πρωτοβουλίες

Το 2025 δίνουμε έμφαση στη βιωσιμότητα:
- Ανακυκλώσιμα υλικά διακόσμησης
- LED φωτισμός παντού
- Τοπικοί προμηθευτές
- Μείωση food waste
- Eco-friendly επιλογές catering

## Success Stories 2024

### Τα Highlights της Σεζόν

- **50+ επιτυχημένα events**
- **98% ικανοποίηση καλεσμένων**
- **45+ five-star reviews**
- **20+ featured σε wedding blogs**

### Τι Λένε οι Πελάτες μας

*"Το Κτήμα Ωρίων ξεπέρασε κάθε προσδοκία μας! Η ομάδα ήταν απίστευτη."*
- Μαρία & Γιάννης, Γάμος Ιούνιος 2024

*"Ο χώρος, το φαγητό, η εξυπηρέτηση - όλα τέλεια!"*
- Ελένη, Βάπτιση Σεπτέμβριος 2024

## Open Days 2025

### Ελάτε να μας Γνωρίσετε!

Οργανώνουμε open house events:
- **Κάθε Κυριακή του Μαρτίου**
- 11:00-16:00
- Δωρεάν ξενάγηση
- Meet & greet με το team
- Catering tasting
- Δείγματα διακόσμησης

**Προσοχή:** Χρειάζεται κράτηση!

## Επικοινωνήστε

Ετοιμοι να κλείσετε την ημερομηνία σας;

📞 **Τηλέφωνο:** 2299068812 / 6981889560  
📧 **Email:** info@ktimaorion.gr  
📍 **Διεύθυνση:** Κερατέα, Αττική

### Κοινωνικά Δίκτυα

Ακολουθήστε μας για:
- Behind-the-scenes content
- Real wedding inspiration
- Special offers
- Wedding tips

---

Το Κτήμα Ωρίων σας περιμένει για να δημιουργήσουμε μαζί αξέχαστες στιγμές το 2025!
    `,
    contentEn: `
# News from Ktima Orion: 2025 Season

Ktima Orion is preparing for an impressive 2025 season! See what's new we have to offer.

## New Services

### 1. Premium Wedding Packages

We've created new all-inclusive packages that include:
- Full catering with premium options
- Professional decoration
- Lighting & sound
- Event coordination
- Special discounts for photography

### 2. Bridal Suite Upgrade

We upgraded the couple's studio with:
- New makeup station
- Better lighting for preparation
- More comfortable space
- Private balcony

### 3. Outdoor Lounge Area

New lounge area for:
- Welcome drinks
- Chill out moments
- Cocktail hour
- Photos

## Facility Upgrades

### Technology Upgrade
- New premium sound system
- Architectural lighting
- Projectors for impressive effects
- Wi-Fi throughout the venue

### Spaces
- Parking expansion
- New landscaping
- More Instagram-worthy spots
- Improved night lighting

## New Partnerships

### Catering Partners
We partner with new caterers offering:
- International cuisine
- Vegan & vegetarian options
- Fusion options
- Themed menus

### Decoration Teams
New decorators specializing in:
- Bohemian style
- Minimalist weddings
- Luxury events
- Themed parties

## Early Booking Offers

### Book now for 2025!

**Offers valid:**
- 15% discount on bookings until 28/02/2025
- Free upgrade to premium catering
- Complimentary engagement photoshoot at the venue
- Special rates for mid-week weddings

### Availability

Most popular dates fill up quickly:
- May-June: 70% booked
- September-October: 65% booked
- April: Still many availabilities!

## Sustainability

### Green Initiatives

In 2025 we emphasize sustainability:
- Recyclable decoration materials
- LED lighting everywhere
- Local suppliers
- Reducing food waste
- Eco-friendly catering options

## Success Stories 2024

### Season Highlights

- **50+ successful events**
- **98% guest satisfaction**
- **45+ five-star reviews**
- **20+ featured on wedding blogs**

### What Our Clients Say

*"Ktima Orion exceeded every expectation! The team was incredible."*
- Maria & John, Wedding June 2024

*"The venue, food, service - everything perfect!"*
- Helen, Baptism September 2024

## Open Days 2025

### Come Meet Us!

We organize open house events:
- **Every Sunday in March**
- 11:00-16:00
- Free tour
- Meet & greet with the team
- Catering tasting
- Decoration samples

**Attention:** Reservation required!

## Contact

Ready to book your date?

📞 **Phone:** 2299068812 / 6981889560  
📧 **Email:** info@ktimaorion.gr  
📍 **Address:** Keratea, Attica

### Social Media

Follow us for:
- Behind-the-scenes content
- Real wedding inspiration
- Special offers
- Wedding tips

---

Ktima Orion awaits you to create unforgettable moments together in 2025!
    `,
    category: 'news',
    categoryLabel: 'Νέα',
    categoryLabelEn: 'News',
    image: '/assets/ekdiloseis/DSC_7859.JPG',
    date: '2025-01-20',
    author: 'Κτήμα Ωρίων',
    readTime: '5 λεπτά',
    keywords: 'κτήμα ωρίων νέα, γάμος 2025, νέες υπηρεσίες γάμου',
    keywordsEn: 'ktima orion news, wedding 2025, new wedding services'
  }
];

// Helper functions
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = () => {
  return [
    { value: 'wedding', label: 'Γάμος', labelEn: 'Wedding' },
    { value: 'baptism', label: 'Βάπτιση', labelEn: 'Baptism' },
    { value: 'tips', label: 'Συμβουλές', labelEn: 'Tips & Guides' },
    { value: 'news', label: 'Νέα', labelEn: 'News' }
  ];
};
