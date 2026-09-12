import type { Metadata } from 'next';
import { EB_Garamond, Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppProviders } from '@/components/providers/app-providers';
import { ScrollToTop } from '@/components/ScrollToTop';
import { PromoPopup } from '@/components/PromoPopup';
import { SITE_URL } from '@/lib/seo/config';
import './globals.css';

/**
 * Body face. The `greek` subset is required: the site is Greek, and without it
 * every Greek glyph falls back to a system font while Latin runs render in
 * Inter — two different faces in the same sentence.
 */
const inter = Inter({
  subsets: ['greek', 'latin'],
  variable: '--font-inter',
  display: 'swap',
});

/**
 * Display face for headings. EB Garamond is used rather than a more obvious
 * luxury serif because it actually ships `greek`/`greek-ext` — Cormorant
 * Garamond, Playfair Display, Spectral and Marcellus all publish Latin and
 * Cyrillic only, so Greek headings would silently fall back to a system serif.
 */
const garamond = EB_Garamond({
  subsets: ['greek', 'latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Κτήμα Ωρίων Κερατέα | Κτήμα γάμου & Βάπτισης', template: '%s | Κτήμα Ωρίων' },
  verification: {
    google: ['SjeFWz1wOp8tRyLIARvDR6ECjYEb0Ea_raXH1UIKzdo', 'xuVpFU3oswJIf8NTCV-D8mDL6xd6leTUk62qJBDsmSM'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`${inter.variable} ${garamond.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <AppProviders>
          <ScrollToTop />
          {children}
          <PromoPopup />
        </AppProviders>
        <GoogleAnalytics gaId="G-R3D1HPVZYG" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
