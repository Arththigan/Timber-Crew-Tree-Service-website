import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-charcoal pb-10 pt-20 text-white">
      <div className="absolute inset-0 opacity-10 hero-mesh" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green-light to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="reveal">
            <Link
              to="/"
              className="mb-5 block h-20 w-56 overflow-hidden rounded-2xl bg-white/95 shadow-3d"
              aria-label="Timber Crew Tree Service home"
            >
              <img
                src="/images/WhatsApp_Image_2026-07-21_at_18.40.44-Photoroom.png"
                alt="Timber Crew Tree Service"
                className="h-56 w-56 -translate-y-[4.75rem] object-contain transition-transform duration-300 hover:scale-[1.03]"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Professional tree care you can trust. Licensed, insured, and dedicated to
              keeping your property safe and beautiful for over 15 years.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-green-light mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-green-light mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Tree Removal',
                'Tree Trimming',
                'Stump Grinding',
                'Emergency Cleanup',
                'Land Clearing',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-green-light mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-brand-green-light shrink-0 mt-0.5" />
                <span>9950 County Rd<br />Clarence Center, NY 14032</span>
              </li>
              <li>
                <a href="tel:+17164428118" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                  <Phone className="w-5 h-5 text-brand-green-light shrink-0" />
                  +1 (716) 442-8118
                </a>
              </li>
              <li>
                <a href="mailto:info@timbercrew.com" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                  <Mail className="w-5 h-5 text-brand-green-light shrink-0" />
                  info@timbercrew.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Timber Crew Tree Service. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link to="/privacy-policy" className="text-white/50 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-white/50 transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
            <p className="text-white/40">
              Proudly serving Clarence, Buffalo, and the surrounding communities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
