import { ArrowUpRight } from 'lucide-react';
import { Heart, Baby, Building, PartyPopper, Camera } from 'lucide-react';
import Link from 'next/link';

export const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Γάμος',
      description: 'Δεξίωση στον κήπο ή στην κλιματιζόμενη αίθουσα, με catering και συντονισμό. Δείτε τον χώρο, τις παροχές και τις επιλογές για την ημέρα του γάμου σας.',
      features: ['Εσωτερικός & εξωτερικός χώρος δεξίωσης', 'Πλήρως κλιματιζόμενη αίθουσα', 'Κοντά σε γραφικά παραθαλάσσια εκκλησάκια'],
      link: '/gamos'
    },
    {
      icon: Baby,
      title: 'Βάπτιση',
      description: 'Ένας χώρος για να γιορτάσετε με την οικογένεια και τους φίλους σας, με παιδικό μενού και κήπο. Δείτε τα πακέτα βάπτισης και τι περιλαμβάνει κάθε επιλογή.',
      features: ['Ειδικό μενού για παιδιά', 'Επαγγελματική εξυπηρέτηση', 'Ιδανικό περιβάλλον για βαπτιστικές εκδηλώσεις'],
      link: '/vaptisi'
    },
    {
      icon: Building,
      title: 'Εταιρικές εκδηλώσεις',
      description: 'Εταιρικές συναντήσεις, παρουσιάσεις και εκδηλώσεις με ευέλικτη διαμόρφωση του χώρου, catering και χώρο στάθμευσης.',
      features: ['Συνεδριακός εξοπλισμός', 'Catering υψηλής ποιότητας', 'Χώρος στάθμευσης 100+ θέσεων'],
      link: '/eterikes-ekdiloseis'
    },
    {
      icon: PartyPopper,
      title: 'Πάρτι',
      description: 'Γενέθλια, αρραβώνας ή μια προσωπική γιορτή. Συζητήστε μαζί μας τη διαμόρφωση, το μενού και τη μουσική για το πάρτι σας.',
      features: ['Ευέλικτος χώρος εκδηλώσεων', 'Μουσική κάλυψη & DJ', 'Bar & cocktails'],
      link: '/parti'
    },
    {
      icon: Camera,
      title: 'Φωτογράφος',
      description: 'Γνωρίστε το Studio Alpha και τις επιλογές φωτογράφισης και βίντεο για την τελετή και τη δεξίωσή σας.',
      features: ['Επαγγελματική κάλυψη', 'Πολύχρονη εμπειρία σε γάμους', 'Φωτογραφία & βίντεο'],
      link: '/fotografos'
    },
  ];

  return <section id="services" className="section-padding bg-background"><div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow">Οι παροχές & οι συνεργάτες</p><h2 className="mt-4 font-heading">Οι λεπτομέρειες της δικής σας ημέρας.</h2><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Γνωρίστε τις επιλογές για τη δεξίωσή σας. Συζητήστε μαζί μας τι χρειάζεστε, ποιοι συνεργάτες ταιριάζουν στο σχέδιό σας και τι θα περιλαμβάνει η προσφορά.</p><Link href="/ypiresies" className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-brand-text/30 text-sm font-semibold">Όλες οι υπηρεσίες <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div><div>{services.map((service,index)=><article key={service.link} className="border-t border-border py-6 first:pt-0 first:border-t-0"><Link href={service.link} className="flex items-start gap-4"><span className="pt-2 text-xs text-brand-deep">0{index+1}</span><div className="min-w-0 flex-1"><h3 className="font-heading text-2xl md:text-3xl">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p></div><ArrowUpRight className="mt-2 h-5 w-5 shrink-0" aria-hidden="true" /></Link></article>)}</div></div></section>;
};
