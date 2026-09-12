import { Layout } from '@/components/Layout';
import Link from 'next/link';
import { AVERAGE_RATING, REVIEW_COUNT, guestReviews } from '@/data/reviews';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Heart } from 'lucide-react';

export default function Reviews() {
  const reviews = guestReviews;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Γάμος':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Βάπτιση':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Γάμος & Βάπτιση':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="font-heading mb-6">
              <span className="text-gradient-brand">Κριτικές πελατών</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Δείτε τι λένε τα ζευγάρια και οι οικογένειες για τις εκδηλώσεις τους στο Κτήμα Ωρίων.
              Κάθε κριτική είναι μια ιστορία αγάπης και αξέχαστων αναμνήσεων.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="font-heading text-5xl text-brand-deep">
                  {AVERAGE_RATING.toFixed(1)}
                </div>
                <div className="text-muted-foreground">Μέσος όρος αξιολόγησης</div>
                <div className="mt-2 flex">{renderStars(Math.round(AVERAGE_RATING))}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-heading text-5xl text-brand-deep">{REVIEW_COUNT}</div>
                <div className="text-muted-foreground">Δημοσιευμένες κριτικές</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-heading text-5xl text-brand-deep">2009</div>
                <div className="text-muted-foreground">Λειτουργούμε από το</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-y-3 gap-x-4">
                      <div className="flex min-w-0 items-center space-x-4">
                        <div className="w-12 h-12 bg-brand-main rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-heading text-xl text-gradient-brand">{review.name}</h3>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-sm border ${getEventTypeColor(review.type)}`}>
                              {review.type}
                            </span>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-main/20" />
                      <p className="text-muted-foreground leading-relaxed pl-6">
                        {review.text}
                      </p>
                      <Heart className="absolute -bottom-2 -right-2 w-6 h-6 text-brand-main/30" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="font-heading mb-6">
              Θέλετε να γίνετε μέρος της ιστορίας μας;
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να δημιουργήσουμε μαζί αξέχαστες αναμνήσεις 
              για την εκδήλωσή σας.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request" className="button button4">
                Ζητήστε προσφορά
              </Link>
              <Link href="/epikoinonia" className="button button4 button-ghost">
                Επικοινωνία
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
