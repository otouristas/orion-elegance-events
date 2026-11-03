import Image from 'next/image';

type DesignCreditProps = {
  label?: string;
};

const DesignCredit = ({ label = "Designed by" }: DesignCreditProps) => (
  <a
    href="https://anotherseoguru.com"
    target="_blank"
    rel="noopener"
    className="inline-flex items-center gap-2 text-sm text-secondary-foreground/60 transition-opacity hover:opacity-80"
  >
    <span>{label}</span>
    <Image
      src="/brand/anotherseoguru-lockup-on-dark.svg"
      alt="AnotherSEOGuru"
      width={141}
      height={32}
      unoptimized
      className="h-7 w-auto"
    />
  </a>
);

export default DesignCredit;
