import { useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IMAGES } from '@/data/images';

export default function Contact() {
  useScrollReveal();

  useEffect(() => {
    const scriptSrc = 'https://link.kdlead.com/js/form_embed.js';
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="relative flex min-h-[55vh] items-center pb-16 pt-32">
        <div className="absolute inset-0">
          <img src={IMAGES.contact.hero} alt="Gardeners tending plants" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/85 to-brand-green-dark/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 reveal">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-green-light">Get In Touch</p>
          <h1 className="mb-5 font-display text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Let&apos;s talk about your trees
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Request a free quote, ask a question, or schedule a consultation. We respond to every message within one business day.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="reveal-left">
              <h2 className="mb-3 font-display text-3xl font-extrabold text-brand-charcoal">Contact details</h2>
              <p className="mb-6 leading-relaxed text-brand-charcoal/60">
                Prefer to call or email? Reach us directly using the info below. For emergencies, call our 24/7 line — we answer day or night.
              </p>
            </div>

            {[
              { icon: Phone, title: 'Phone', value: '+1 (716) 442-8118', sub: '24/7 emergency line' },
              { icon: Mail, title: 'Email', value: 'info@timbercrew.com', sub: 'Replies within 1 business day' },
              { icon: MapPin, title: 'Office', value: '9950 County Rd', sub: 'Clarence Center, NY 14032' },
            ].map((item, index) => (
              <div
                key={item.title}
                className="card-3d flex items-start gap-4 rounded-2xl bg-white p-5 shadow-3d reveal-left"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-green-dark">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-green">{item.title}</p>
                  <p className="font-display font-bold text-brand-charcoal">{item.value}</p>
                  <p className="text-sm text-brand-charcoal/50">{item.sub}</p>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-[2rem] shadow-3d-lg img-zoom reveal-left">
              <img src={IMAGES.contact.side} alt="Landscaped property with trees" className="h-56 w-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-3 reveal-right">
            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-3d-lg sm:p-5">
              <h2 className="mb-2 px-3 pt-3 font-display text-3xl font-extrabold text-brand-charcoal sm:px-5">Request a free quote</h2>
              <p className="mb-5 px-3 text-brand-charcoal/60 sm:px-5">Fill out the form and we will get back to you within one business day.</p>
              <iframe
                src="https://link.kdlead.com/widget/form/RaiMfMNpNqIhtUuEbI8p"
                style={{ width: '100%', height: '871px', border: 'none', borderRadius: '8px' }}
                id="inline-RaiMfMNpNqIhtUuEbI8p"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Timber Crew Tree Service"
                data-height="871"
                data-layout-iframe-id="inline-RaiMfMNpNqIhtUuEbI8p"
                data-form-id="RaiMfMNpNqIhtUuEbI8p"
                title="Timber Crew Tree Service"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 reveal">
          <div className="relative h-80 overflow-hidden rounded-[2rem] bg-brand-cream shadow-3d-lg">
            <iframe
              title="Service area map"
              src="https://www.google.com/maps?q=9950%20County%20Rd%2C%20Clarence%20Center%2C%20NY%2014032&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-brand-charcoal/60">Proudly serving Clarence, Buffalo, and the surrounding areas within a 30-mile radius.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
