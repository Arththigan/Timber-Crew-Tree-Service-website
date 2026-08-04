import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, ShieldCheck, Users, Award, TreePine } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IMAGES } from '@/data/images';

const VALUES = [
  { icon: ShieldCheck, title: 'Safety First', desc: 'Every job follows strict safety protocols. No exceptions, ever.' },
  { icon: Heart, title: 'Honesty', desc: 'Transparent pricing and honest recommendations. We never upsell.' },
  { icon: Leaf, title: 'Stewardship', desc: 'We preserve trees whenever possible and care for the environment.' },
  { icon: Award, title: 'Excellence', desc: 'ISA-certified arborists and modern equipment on every single job.' },
];

const TEAM = [
  { name: 'Mike Reynolds', role: 'Founder & Lead Arborist', initials: 'MR' },
  { name: 'Diego Santos', role: 'Climbing Specialist', initials: 'DS' },
  { name: 'Aisha Bennett', role: 'Tree Health Consultant', initials: 'AB' },
  { name: 'Tom Whitaker', role: 'Crew Foreman', initials: 'TW' },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16">
        <div className="absolute inset-0">
          <img src={IMAGES.about.hero} alt="Tree service crew" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/50 to-brand-cream" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center reveal">
          <p className="text-brand-green-light font-bold text-sm uppercase tracking-wider mb-3">About Timber Crew</p>
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white mb-5 leading-tight">
            Rooted in care, grown by trust
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            For over 15 years, we have been the tree service the community calls first —
            for honest work, fair prices, and crews who genuinely love what they do.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left relative">
            <div className="rounded-[2rem] overflow-hidden shadow-3d-lg img-zoom">
              <img
                src={IMAGES.about.story}
                alt="Gardeners working together"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-5 shadow-3d animate-float-slow">
              <p className="font-display font-extrabold text-3xl text-brand-green-dark">2009</p>
              <p className="text-xs text-brand-charcoal/60 font-medium">Year founded</p>
            </div>
          </div>
          <div className="reveal-right">
            <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-3">Our Story</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-charcoal mb-6 leading-tight">
              From a single truck to the crew the community trusts
            </h2>
            <div className="space-y-4 text-brand-charcoal/70 text-lg leading-relaxed">
              <p>
                Timber Crew started in 2009 with one truck, one chainsaw, and a founder
                who believed tree work should be done right — or not at all. Mark
                Reynolds began by knocking on doors, offering honest assessments, and
                backing every job with a guarantee.
              </p>
              <p>
                Word spread. Today we are a team of ISA-certified arborists equipped with
                cranes, grinders, and modern climbing gear — but the promise has not
                changed. We show up on time, we work safely, and we treat your property
                like it is our own.
              </p>
              <p>
                Over 2,400 trees and 1,800 happy clients later, we are still the crew that
                picks up the phone, gives you a straight answer, and leaves your yard
                cleaner than we found it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-green-light/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-3">What Drives Us</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-charcoal">
              Our core values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal-scale card-3d bg-white rounded-2xl p-7 shadow-3d text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-dark flex items-center justify-center shadow-3d mx-auto mb-5">
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-charcoal mb-2">{v.title}</h3>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-3">Meet The Crew</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-charcoal">
              The people behind the saws
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className="reveal-scale card-3d bg-white rounded-2xl overflow-hidden shadow-3d"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-brand-green to-brand-green-dark flex items-center justify-center">
                  <span className="font-display font-extrabold text-5xl text-white/90">{member.initials}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display font-bold text-lg text-brand-charcoal">{member.name}</h3>
                  <p className="text-sm text-brand-green font-semibold mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <div className="rounded-[2rem] overflow-hidden shadow-3d-lg img-zoom">
              <img
                src={IMAGES.about.crew}
                alt="Crew of workers"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / CTA */}
      <section className="py-24 bg-brand-green-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 hero-mesh" />
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-brand-green-light/20 blur-2xl animate-float" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center reveal-scale">
          <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <TreePine className="w-10 h-10 text-brand-green-light" />
          </div>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl mb-5">
            Our mission is simple
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            To provide the safest, most professional tree care in the region — treating
            every client, every tree, and every property with the respect they deserve.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-brand-green-dark font-bold shadow-3d-lg hover:-translate-y-1 transition-all"
          >
            Work With Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
