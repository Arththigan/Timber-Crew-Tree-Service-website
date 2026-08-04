import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check, TreePine, Scissors, CircleSlash, Zap, Mountain, HeartPulse } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IMAGES } from '@/data/images';

const SERVICES = [
  {
    icon: TreePine,
    id: 'tree-removal',
    title: 'Tree Removal',
    desc: 'Safe, controlled removal of dead, diseased, or hazardous trees. We handle trees of any size, even in tight spaces near structures, fences, and power lines.',
    features: ['Crane-assisted removal', 'Complete debris cleanup', 'Permit assistance'],
    img: IMAGES.services.removal,
  },
  {
    icon: Scissors,
    id: 'tree-trimming',
    title: 'Tree Trimming & Pruning',
    desc: 'Precision pruning that promotes healthy growth, removes deadwood, and improves structure. We follow ISA best practices to keep your trees thriving.',
    features: ['Crown thinning & raising', 'Deadwood removal', 'Structural pruning'],
    img: IMAGES.services.trimming,
  },
  {
    icon: CircleSlash,
    id: 'stump-grinding',
    title: 'Stump Grinding',
    desc: 'Reclaim your yard with complete stump removal. We grind stumps below grade and backfill, leaving your landscape clean and ready for new planting.',
    features: ['Grind 6-12" below grade', 'Debris & sawdust removal', 'Optional backfill & leveling'],
    img: IMAGES.services.stump,
  },
  {
    icon: Zap,
    id: 'emergency-cleanup',
    title: 'Emergency Storm Cleanup',
    desc: 'When storms strike, we are ready 24/7. Our rapid-response team safely removes fallen trees and limbs from homes, driveways, and power lines.',
    features: ['24/7 rapid response', 'Insurance documentation', 'Hazard assessment'],
    img: IMAGES.services.emergency,
  },
  {
    icon: Mountain,
    id: 'land-clearing',
    title: 'Land Clearing',
    desc: 'Preparing for a build or a big landscape project? We clear lots, remove brush, and grind stumps to get your land development-ready.',
    features: ['Full lot clearing', 'Brush & debris removal', 'Site prep for construction'],
    img: IMAGES.services.clearing,
  },
  {
    icon: HeartPulse,
    id: 'tree-health',
    title: 'Tree Health & Cabling',
    desc: 'Keep valuable trees standing strong. We diagnose disease, treat pests, and install support cabling for structurally weak or heritage trees.',
    features: ['Disease diagnosis', 'Pest treatment', 'Support cabling & bracing'],
    img: IMAGES.services.health,
  },
];

const PROCESS = [
  { step: '01', title: 'Free Consultation', desc: 'We visit your property, assess your trees, and listen to your goals.' },
  { step: '02', title: 'Honest Quote', desc: 'You get a clear, itemized estimate with no hidden fees or pressure.' },
  { step: '03', title: 'Expert Execution', desc: 'Our certified crew completes the work safely and on schedule.' },
  { step: '04', title: 'Thorough Cleanup', desc: 'We leave your property cleaner than we found it. Guaranteed.' },
];

export default function Services() {
  useScrollReveal();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash]);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16">
        <div className="absolute inset-0">
          <img src={IMAGES.services.hero} alt="Arborist cutting large tree" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/85 via-brand-charcoal/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl reveal-left">
            <p className="text-brand-green-light font-bold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white mb-5 leading-tight">
              Every tree service your property needs
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              From routine trimming to emergency removals, our certified crew delivers
              safe, professional tree care — backed by 15 years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20">
          {SERVICES.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={s.title}
                id={s.id}
                className={`grid scroll-mt-32 items-center gap-12 lg:grid-cols-2 ${reversed ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`reveal-left ${reversed ? 'lg:col-start-2' : ''}`}>
                  <div className="rounded-[2rem] overflow-hidden shadow-3d-lg img-zoom">
                    <img src={s.img} alt={s.title} className="w-full h-[420px] object-cover" />
                  </div>
                </div>
                <div className={`reveal-right ${reversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-dark flex items-center justify-center shadow-3d">
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-brand-green font-bold text-sm uppercase tracking-wider">
                      Service {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-brand-charcoal mb-4">
                    {s.title}
                  </h2>
                  <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-brand-green" strokeWidth={3} />
                        </span>
                        <span className="text-brand-charcoal/80 font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-charcoal text-white font-bold shadow-3d hover:-translate-y-1 transition-all"
                  >
                    Request This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-charcoal">
              Simple, transparent, stress-free
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="reveal-scale card-3d bg-brand-cream rounded-2xl p-7 shadow-3d relative"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className="font-display font-extrabold text-5xl text-brand-green/30 mb-3">{p.step}</p>
                <h3 className="font-display font-bold text-xl text-brand-charcoal mb-2">{p.title}</h3>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.services.cta} alt="Arborist at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/90 to-brand-charcoal/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center text-white reveal-scale">
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-5">
            Not sure which service you need?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation. We will walk your property, assess your trees,
            and recommend exactly what is needed — nothing more.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-brand-green-dark font-bold shadow-3d-lg hover:-translate-y-1 transition-all"
          >
            Book a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
