import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
export function Hero({ lang = 'el' }: { lang?: 'el' | 'en' }) {
  const en=lang==='en';
  return <section id="home" className="bg-cream pt-20">
    <div className="container-max grid gap-9 py-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-12 md:py-12 lg:min-h-[760px] lg:gap-20">
      <div className="min-w-0 py-4 md:py-10">
        <p className="eyebrow flex items-center gap-2 !text-brand-deep"><span className="h-px w-8 bg-brand-deep" />{en?'A venue for your celebration':'Ένας χώρος για τις στιγμές σας'}</p>
        <h1 className="mt-6 font-heading !text-[clamp(2.75rem,5.5vw,5.5rem)] !leading-[1.04] !tracking-[-0.025em] text-brand-text">{en?<>Weddings &<br/>baptisms at<br/><em className="font-normal text-brand-deep">Ktima Orion.</em></>:<>Γάμος &<br/>βάπτιση στο<br/><em className="font-normal text-brand-deep">Κτήμα Ωρίων.</em></>}</h1>
        <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">{en?'A garden with sea views. An indoor hall for every season. A place in Keratea, Attica, to celebrate with the people who matter to you.':'Κήπος με θέα στη θάλασσα. Αίθουσα για κάθε εποχή. Ένα κτήμα στην Κερατέα Αττικής, για να γιορτάσετε με τους ανθρώπους σας.'}</p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><Link href={en?'/en/request':'/request'} className="button button4 w-full max-w-full !gap-4 !whitespace-normal !px-5 !text-sm sm:w-auto">{en?'Plan your celebration':'Σχεδιάστε την εκδήλωσή σας'}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><Link href={en?'/en/venue':'/o-horos'} className="inline-flex min-h-11 items-center gap-2 border-b border-brand-text/30 py-2 text-sm font-semibold">{en?'Explore the venue':'Γνωρίστε τον χώρο'}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        <p className="mt-9 flex items-center gap-2 text-xs uppercase tracking-[.15em] text-brand-deep"><MapPin className="h-4 w-4" aria-hidden="true" />{en?'Keratea, Attica · since 2009':'Κερατέα Αττικής · από το 2009'}</p>
      </div>
      <div className="relative pb-7 pl-5 md:pb-9 md:pl-8">
        <div className="absolute bottom-0 left-0 right-8 top-8 border border-brand-main/40" aria-hidden="true" />
        <div className="relative aspect-[4/5] max-h-[690px] overflow-hidden bg-brand-text md:aspect-[4/5]">
          <Image src="/images/hero-image.webp" alt={en?'Garden reception at Ktima Orion in Keratea':'Ο κήπος του Κτήματος Ωρίων στην Κερατέα, έτοιμος για δεξίωση'} fill priority fetchPriority="high" sizes="(min-width:1280px) 600px, (min-width:768px) 48vw, 100vw" className="object-cover object-[65%_center]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white md:p-8"><p className="max-w-[230px] font-heading text-2xl leading-snug text-white md:text-3xl">{en?'Your people.\nYour day.':'Οι άνθρωποί σας.\nΗ ημέρα σας.'}</p><span className="mb-1 border border-white/50 px-3 py-2 text-[10px] uppercase tracking-widest">{en?'The garden':'Ο κήπος'}</span></div>
        </div>
      </div>
    </div>
    <div className="border-y border-brand-main/25 bg-white/70"><dl className="container-max grid grid-cols-2 gap-x-5 gap-y-7 py-7 sm:grid-cols-4 md:py-9">{(en?[['50–350','guests'],['100+','parking spaces'],['5','nearby churches'],['2009','our story begins']]:[['50–350','καλεσμένοι'],['100+','θέσεις parking'],['5','κοντινές εκκλησίες'],['2009','η αρχή της ιστορίας μας']]).map(([value,label])=><div key={label} className="flex flex-col gap-2 border-l border-brand-main/30 pl-4 sm:pl-6"><dt className="font-heading text-3xl text-brand-text md:text-4xl">{value}</dt><dd className="text-[11px] uppercase tracking-[.12em] text-brand-deep">{label}</dd></div>)}</dl></div>
  </section>;
}
