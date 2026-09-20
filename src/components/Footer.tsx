import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import {
  EMAIL,
  GOOGLE_MAPS_URL,
  POSTAL_CODE,
  STREET_ADDRESS_EL,
} from '@/lib/seo/config';
import { PromoBanner } from '@/components/PromoBanner';

const logoWhite = '/images/logo-white.png';

const eventLinks = [
  { href: '/ktima-gamou', label: 'Κτήμα γάμου' },
  { href: '/gamos', label: 'Γάμος: τι περιλαμβάνει' },
  { href: '/ktima-vaptisis', label: 'Κτήμα βάπτισης' },
  { href: '/vaptisi', label: 'Βάπτιση: πακέτα & μενού' },
  { href: '/eterikes-ekdiloseis', label: 'Εταιρικές εκδηλώσεις' },
  { href: '/parti', label: 'Πάρτι' },
];

const infoLinks = [
  { href: '/o-horos', label: 'Ο χώρος' },
  { href: '/ekklisies', label: 'Εκκλησίες στην Κερατέα' },
  { href: '/blog', label: 'Οδηγοί γάμου & βάπτισης' },
  { href: '/reviews', label: 'Κριτικές' },
  { href: '/fotografos', label: 'Φωτογράφος' },
  { href: '/dj-mousiki', label: 'DJ & μουσική' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
    <PromoBanner />
    <footer className="bg-forest text-secondary-foreground">
      <div className="container-max py-16 md:py-20">
        <div className="mb-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Image
              src={logoWhite}
              alt="Κτήμα Ωρίων"
              width={170}
              height={150}
              className="mb-6 h-24 w-auto object-contain object-left"
              sizes="200px"
              loading="lazy"
            />
            <p className="max-w-md leading-relaxed text-secondary-foreground/80">
              Κτήμα δεξιώσεων στην Κερατέα Αττικής, από το 2009. Κήπος με θέα
              στη θάλασσα, κλιματιζόμενη αίθουσα και δεξιώσεις από 50 έως 350
              άτομα.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.facebook.com/ktimaorion.gr/?locale=el_GR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Το Κτήμα Ωρίων στο Facebook"
                className="rounded-full border border-secondary-foreground/25 p-2.5 text-secondary-foreground/80 transition-colors hover:border-brand-main hover:text-brand-main"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/ktimaorion/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Το Κτήμα Ωρίων στο Instagram"
                className="rounded-full border border-secondary-foreground/25 p-2.5 text-secondary-foreground/80 transition-colors hover:border-brand-main hover:text-brand-main"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Εκδηλώσεις">
            <h3 className="mb-6 font-heading text-xl text-brand-main">Εκδηλώσεις</h3>
            <ul className="space-y-3">
              {eventLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 transition-colors hover:text-brand-main"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Πληροφορίες">
            <h3 className="mb-6 font-heading text-xl text-brand-main">Πληροφορίες</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 transition-colors hover:text-brand-main"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Every contact detail is a live link — the previous footer rendered
              the phone numbers and email as plain text, so a tap on mobile did
              nothing. */}
          <div>
            <h3 className="mb-6 font-heading text-xl text-brand-main">Επικοινωνία</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-main" />
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-italic text-secondary-foreground/80 transition-colors hover:text-brand-main"
                >
                  {STREET_ADDRESS_EL}, Κερατέα {POSTAL_CODE}, Αττική
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-main" />
                <span className="flex flex-col">
                  <a
                    href="tel:+302299068812"
                    className="text-secondary-foreground/80 transition-colors hover:text-brand-main"
                  >
                    22990 68812
                  </a>
                  <a
                    href="tel:+306981889560"
                    className="text-secondary-foreground/80 transition-colors hover:text-brand-main"
                  >
                    698 188 9560
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-main" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all text-secondary-foreground/80 transition-colors hover:text-brand-main"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-main" />
                <span className="text-secondary-foreground/80">
                  Ανοιχτά κάθε μέρα, 09:00–23:00
                </span>
              </li>
            </ul>

            <a href="/request" className="button button4 mt-7 w-full">
              Ζητήστε προσφορά
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-secondary-foreground/60 md:flex-row">
            <p>Γ.Ε.ΜΗ. 062719803000</p>
            <p>© {year} Κτήμα Ωρίων. Με την επιφύλαξη παντός δικαιώματος.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
