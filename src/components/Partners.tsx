import { Card, CardContent } from '@/components/ui/card';
import pleiadesLogo from '@/assets/pleiades LOGO_transparent.black.png';

export const Partners = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-brand">Συνεργάτες</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Επιλεγμένοι συνεργάτες που απογειώνουν την εμπειρία της εκδήλωσής σας
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="card-elegant group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex items-center justify-center">
              <img
                src={pleiadesLogo}
                alt="Pleiades Catering Stars"
                className="w-full max-w-[320px] opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};


