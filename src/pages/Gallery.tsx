import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IMAGES } from '@/data/images';

const CAPTIONS = [
  'Precision crown reduction',
  'Crane-assisted removal',
  'Stump grinding complete',
  'Storm cleanup — road cleared',
  'Structural pruning in progress',
  'Heritage tree preservation',
  'Lot clearing for new build',
  'Emergency limb removal',
  'Finished — yard restored',
];

export default function Gallery() {
  useScrollReveal();

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center pt-32 pb-16">
        <div className="absolute inset-0">
          <img src={IMAGES.gallery.hero} alt="Lush green foliage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/40 to-brand-cream" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold mb-5 backdrop-blur">
            <Camera className="w-4 h-4" />
            Project Gallery
          </div>
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white mb-5 leading-tight">
            Our work, in the wild
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A look at recent tree care projects — from delicate pruning to full removals
            and storm recovery. Every job, done right.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {IMAGES.gallery.items.map((img, i) => (
              <figure
                key={i}
                className="reveal-scale break-inside-avoid rounded-2xl overflow-hidden shadow-3d card-3d relative group"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="img-zoom">
                  <img
                    src={img}
                    alt={CAPTIONS[i] || 'Tree service project'}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/90 to-transparent p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-sm">{CAPTIONS[i] || 'Tree service project'}</p>
                  <p className="text-white/60 text-xs mt-0.5">Project #{String(i + 1).padStart(3, '0')}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center reveal-scale">
          <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-brand-charcoal mb-4">
            Want your property to look this good?
          </h2>
          <p className="text-brand-charcoal/60 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and let our crew show you what professional tree
            care can do for your landscape.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-bold shadow-3d-lg hover:-translate-y-1 transition-all"
          >
            Get Your Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
