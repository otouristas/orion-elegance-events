import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug, blogPosts } from '@/data/blogPosts';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <Layout>
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Το άρθρο δεν βρέθηκε</h1>
            <Link to="/blog" className="text-brand-main hover:underline">
              Επιστροφή στο Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Κτήμα Ωρίων",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ktimaorion.gr/logo.png"
      }
    },
    "description": post.excerpt,
    "keywords": post.keywords
  };

  return (
    <Layout>
      <SEO 
        title={`${post.title} | Blog Κτήμα Ωρίων`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        keywords={post.keywords}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="pt-20">
        {/* Back Button */}
        <section className="section-padding-sm bg-background">
          <div className="container-max">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-brand-main hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Πίσω στο Blog
            </Link>
          </div>
        </section>

        {/* Hero Image */}
        <section className="section-padding-sm bg-background">
          <div className="container-max max-w-4xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Article Header */}
        <article className="section-padding bg-background">
          <div className="container-max max-w-4xl">
            <div className="mb-6">
              <span className="bg-brand-main text-white px-4 py-2 rounded-full text-sm">
                {post.categoryLabel}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('el-GR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} ανάγνωσης</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-brand-main prose-a:text-brand-main hover:prose-a:underline prose-strong:text-foreground">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Social Share */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Μοιραστείτε:</span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1877F2] text-white rounded hover:opacity-90 transition-opacity"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1DA1F2] text-white rounded hover:opacity-90 transition-opacity"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-gradient-brand">Σχετικά Άρθρα</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                    <div className="card-elegant hover:shadow-xl transition-all duration-300 group h-full">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <span className="text-sm text-brand-main">{relatedPost.categoryLabel}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-brand-main transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ετοιμοι για την Εκδήλωσή σας;
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να οργανώσουμε την τέλεια εκδήλωση στο Κτήμα Ωρίων
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="button button4">
                  ΚΛΕΙΣΤΕ ΔΩΡΕΑΝ ΞΕΝΑΓΗΣΗ
                </button>
              </a>
              <a href="/gamos">
                <button className="button button4">
                  ΔΕΙΤΕ ΥΠΗΡΕΣΙΕΣ
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
