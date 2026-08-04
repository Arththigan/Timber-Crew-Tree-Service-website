import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Clock, Award } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ScrollReveal from '@/components/ScrollReveal';
import { IMAGES } from '@/data/images';

export default function Home() {
  useScrollReveal();

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/images/hero-bg.webp" type="image/webp" />
            <img
              src="/images/hero-bg.jpg"
              alt="Timber Crew arborists working on a large tree in the forest"
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
              decoding="async"
              width={1920}
              height={1080}
            />
          </picture>
          {/* Dark gradient overlay — heavier at bottom-left for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        {/* Top-left: company name */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between px-6 sm:px-10 pt-8">
          <p className="text-white/90 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mt-1">
            Timber Crew Tree Service
          </p>
          {/* Scroll hint — right side */}
          <div className="hidden lg:flex flex-col items-center gap-2 text-white/50 text-[11px] font-semibold uppercase tracking-widest pt-1">
            <span>Scroll to explore</span>
            <span className="block w-px h-8 bg-white/30 mx-auto" />
          </div>
        </div>

        {/* Right side: large vertical word — decorative only, hidden from a11y */}
        <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center pr-4 sm:pr-8 pointer-events-none" aria-hidden="true">
          <span
            className="text-white/10 font-extrabold select-none"
            style={{
              fontSize: 'clamp(5rem, 14vw, 13rem)',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.06em',
              lineHeight: 1,
              willChange: 'auto',
            }}
          >
            ARBORISTS
          </span>
        </div>

        {/* Bottom-left: tagline + CTAs */}
        <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-10 pb-12 sm:pb-16 max-w-xl">
          <h1 className="font-display font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Expert Tree Care,<br />
            Done Right.
          </h1>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-sm bg-brand-green text-white text-sm font-bold hover:bg-brand-green-dark transition-colors duration-300"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/services"
              className="px-7 py-3.5 rounded-sm border border-white/40 text-white text-sm font-bold hover:bg-white/10 transition-colors duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Bottom-right: trust stat */}
        <div className="absolute bottom-12 right-10 z-20 hidden lg:flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-brand-amber text-brand-amber" />
            ))}
          </div>
          <p className="text-white/60 text-xs font-medium">4.9 / 5 · 320+ reviews</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 bg-brand-charcoal overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-12 px-6">
              {['Tree Removal', 'Stump Grinding', 'Emergency Service', 'Tree Trimming', 'Land Clearing', 'Tree Health'].map((item) => (
                <span key={item} className="text-white/70 font-bold text-lg tracking-wide flex items-center gap-12">
                  {item}
                  <span className="text-brand-green-light">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" distance={100} className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-3d-lg img-zoom">
              <img
                src={IMAGES.home.about}
                alt="Tree surgeon pruning branches"
                className="w-full h-[480px] object-cover"
                loading="lazy"
                decoding="async"
                width={600}
                height={480}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-green rounded-2xl p-6 shadow-3d-lg text-white max-w-[180px]">
              <p className="font-display font-extrabold text-4xl">15+</p>
              <p className="text-sm text-white/80 font-medium">Years serving the community</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={100}>
            <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-3">Who We Are</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-charcoal mb-6 leading-tight">
              A crew that treats your trees like our own.
            </h2>
            <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-8">
              Timber Crew was founded on a simple belief: tree work should be precise,
              safe, and honest. Every arborist on our team is ISA-certified and equipped
              with modern gear to handle everything from delicate pruning to full
              removals — all while protecting your property.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: ShieldCheck, title: 'Fully Insured', desc: 'Liability & workers comp' },
                { icon: Award, title: 'ISA Certified', desc: 'Trained arborists' },
                { icon: Clock, title: 'On-Time', desc: 'We respect your schedule' },
                { icon: Star, title: 'Top Rated', desc: '320+ five-star reviews' },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-charcoal text-sm">{f.title}</p>
                    <p className="text-xs text-brand-charcoal/60">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-green-dark font-bold hover:gap-3 transition-all"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-green-light/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-charcoal mb-4">
              Comprehensive tree services
            </h2>
            <p className="text-brand-charcoal/60 text-lg">
              Whatever your trees need, our crew has the gear and the know-how to get it done safely.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: IMAGES.home.service1, title: 'Tree Removal', desc: 'Safe, controlled removal of hazardous or unwanted trees.' },
              { img: IMAGES.home.service2, title: 'Tree Trimming', desc: 'Precision pruning for health, shape, and safety.' },
              { img: IMAGES.home.service3, title: 'Stump Grinding', desc: 'Complete stump removal to reclaim your yard.' },
              { img: IMAGES.home.service4, title: 'Emergency Cleanup', desc: '24/7 storm response when you need it most.' },
            ].map((s, i) => (
              <ScrollReveal key={s.title} direction="up" distance={120} delay={i * 0.08}>
                <div className="card-3d bg-white rounded-2xl overflow-hidden shadow-3d h-full">
                  <div className="img-zoom h-48 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" decoding="async" width={400} height={192} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-brand-charcoal mb-2">{s.title}</h3>
                    <p className="text-sm text-brand-charcoal/60 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-charcoal text-white font-bold shadow-3d hover:-translate-y-1 transition-all"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-brand-green-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 hero-mesh" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: '2,400+', label: 'Trees Cared For' },
            { num: '15+', label: 'Years Experience' },
            { num: '1,800+', label: 'Happy Clients' },
            { num: '24/7', label: 'Emergency Service' },
          ].map((stat, i) => (
            <div key={stat.label} className="reveal-scale text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
              <p className="font-display font-extrabold text-4xl lg:text-5xl mb-2">{stat.num}</p>
              <p className="text-white/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-3">Client Stories</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-charcoal">
              Trusted by homeowners & businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', role: 'Homeowner', text: 'They removed a massive oak leaning over our house with zero damage. The crew was professional, fast, and cleaned up perfectly.' },
              { name: 'James T.', role: 'Property Manager', text: 'Timber Crew handles all our properties. Always on time, always fair pricing, and they know their trees inside out.' },
              { name: 'Linda P.', role: 'Homeowner', text: 'After a storm brought down a tree at 2am, they were there by sunrise. Lifesavers. I cannot recommend them enough.' },
            ].map((t, i) => (
              <ScrollReveal key={t.name} direction="up" distance={90} delay={i * 0.1}>
                <div className="card-3d bg-white rounded-2xl p-7 shadow-3d h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-brand-amber text-brand-amber" />
                    ))}
                  </div>
                  <p className="text-brand-charcoal/70 leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-brand-green/15 flex items-center justify-center font-bold text-brand-green-dark">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-brand-charcoal text-sm">{t.name}</p>
                      <p className="text-xs text-brand-charcoal/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.home.cta} alt="Landscaped property" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 to-brand-green-dark/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center text-white reveal-scale">
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-5">
            Ready to transform your trees?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation quote today. Our crew will assess your trees and
            give you honest recommendations — no pressure, no surprises.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-brand-green-dark font-bold shadow-3d-lg hover:-translate-y-1 transition-all pulse-ring"
          >
            Get Your Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
