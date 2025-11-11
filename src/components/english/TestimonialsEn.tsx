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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-brand mb-2">500+</div>
            <div className="text-muted-foreground">Events</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-brand mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-brand mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-brand mb-2">7</div>
            <div className="text-muted-foreground">Nearby Chapels</div>
          </div>
        </div>
      </div>
    </section>
  );
};
