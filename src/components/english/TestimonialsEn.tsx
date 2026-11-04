import { Star } from 'lucide-react';

export const TestimonialsEn = () => {
  const testimonial = {
    name: 'Vasiliki Bekri',
    text: 'I would like to express my thanks for the wedding we held last Saturday at the venue and we are completely satisfied. The space was simple but extremely romantic, clean and tasteful, the wedding scenery was truly beautiful. The food was simply excellent! The PLEIADES catering exceeded every expectation, our guests are still talking about how delicious everything was.'
  };

  return (
    <section className="section-padding bg-gradient-to-r from-champagne to-sage/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-heading mb-6">
            Guest <span className="text-gradient-brand">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear what our guests say about their experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elegant p-8 md:p-12">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-brand-main fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground mb-8 italic">
              "{testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="font-bold text-xl text-gradient-brand mb-2">
                {testimonial.name}
              </div>
              <div className="text-muted-foreground">
                Happy Bride
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
