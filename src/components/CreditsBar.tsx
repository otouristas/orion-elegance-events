/* eslint-disable @next/next/no-img-element */

type Partner = "cyclades" | "crete" | null;

const partners = {
  cyclades: { name: "Discover Cyclades", url: "https://discovercyclades.gr/en", logo: "/images/brand/credits/discover-cyclades.png" },
  crete: { name: "Discover Crete", url: "https://discover-crete.com/", logo: "/images/brand/credits/discover-crete.png" },
};

// Keep the designer credit readable without depending on a remote logo asset.
export function CreditsBar({ partner, source, className = "" }: { partner: Partner; source: string; className?: string }) {
  const p = partner ? partners[partner] : null;
  const utm = `utm_source=${source}&utm_medium=referral&utm_campaign=partner_footer`;
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/75 sm:justify-end ${className}`}
    >
      <a href="https://anotherseoguru.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 transition-colors hover:text-white">
        <span>Designed by</span>
        <span className="font-semibold text-white">AnotherSEOGuru</span>
      </a>
      {p && (
        <a href={`${p.url}?${utm}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 transition-opacity hover:opacity-90">
          <img src={p.logo} alt="" width={24} height={24} className="h-6 w-6 rounded-full bg-white" loading="lazy" />
          <span className="font-semibold text-white">{p.name}</span>
          <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-white/60">Partner</span>
        </a>
      )}
    </div>
  );
}
