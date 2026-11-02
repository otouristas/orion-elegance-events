
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export const FAQ = ({ items, title = "Συχνές ερωτήσεις" }: FAQProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container-max max-w-4xl">
        <h2 className="font-heading text-center mb-12">
          <span className="text-gradient-brand">{title}</span>
        </h2>
        <div className="space-y-3">
          {items.map((item, index) => (
            <details key={index} className="rounded-lg border border-border bg-background px-5 py-1">
              <summary className="cursor-pointer py-4 font-semibold leading-relaxed">{item.question}</summary>
              <p className="pb-5 text-muted-foreground leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
