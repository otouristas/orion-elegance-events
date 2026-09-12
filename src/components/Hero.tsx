import Image from "next/image";
import { CalendarHeart, Phone } from "lucide-react";
import { PHONE } from "@/lib/seo/config";

const heroSrc = "/images/hero-image.jpg";

/** Facts shown under the fold line — each one is verifiable on the site. */
const trustPoints: readonly { value: string; label: string }[] = [
  { value: "50–350", label: "καλεσμένοι" },
  { value: "100+", label: "θέσεις parking" },
  { value: "5", label: "εκκλησάκια 6–13′" },
  { value: "2009", label: "έτος ίδρυσης" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88svh] items-end overflow-hidden md:min-h-[78svh]"
    >
      <div className="absolute inset-0">
        <Image
          src={heroSrc}
          alt="Ο κήπος του Κτήματος Ωρίων στην Κερατέα, στημένος για δεξίωση γάμου"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        {/* Two scrims: one weighted to the bottom, one to the left. The headline
            block is left-aligned on wide screens, where it would otherwise sit
            over bright foliage and the gold accent line would wash out. */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-text/90 via-brand-text/60 to-brand-text/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-text/70 via-brand-text/20 to-transparent" />
      </div>

      <div className="container-max relative z-10 pb-14 pt-32 text-white md:pb-20 md:pt-40">
        <div className="max-w-3xl">
          <p className="eyebrow !text-brand-light">Κερατέα Αττικής · από το 2009</p>

          <h1 className="mt-5 font-heading text-white">
            Κτήμα γάμου και βάπτισης
            <span className="block text-gradient-brand-on-dark">
              στην Κερατέα Αττικής
            </span>
          </h1>

          <p className="measure mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
            Κήπος με θέα στη θάλασσα, κλιματιζόμενη αίθουσα και πέντε
            παραθαλάσσια εκκλησάκια σε απόσταση 6–13 λεπτών. Σαράντα πέντε
            λεπτά από το κέντρο της Αθήνας.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="/request" className="button button4">
              <CalendarHeart className="h-[18px] w-[18px]" aria-hidden="true" />
              Κλείστε δωρεάν ξενάγηση
            </a>
            <a
              href={`tel:${PHONE}`}
              className="button button4 button-ghost !border-white/45 !bg-white/10 !text-white hover:!bg-white/20 hover:!text-white"
            >
              <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
              22990 68812
            </a>
          </div>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/20 pt-7 sm:grid-cols-4 md:mt-16">
          {trustPoints.map((point) => (
            <div key={point.label}>
              <dt className="font-heading text-2xl leading-none text-brand-light md:text-3xl">
                {point.value}
              </dt>
              <dd className="mt-1.5 text-xs uppercase tracking-[0.14em] text-white/70">
                {point.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
