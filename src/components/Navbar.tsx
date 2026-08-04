import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, ChevronDown, CircleSlash, Home, Images, Menu, MessageCircle, Mountain, Phone, Scissors, TreePine, UsersRound, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', mobileLabel: 'Home', path: '/', icon: Home },
  { label: 'Services', mobileLabel: 'Services', path: '/services', icon: Briefcase },
  { label: 'About Us', mobileLabel: 'About', path: '/about', icon: UsersRound },
  { label: 'Gallery', mobileLabel: 'Gallery', path: '/gallery', icon: Images },
  { label: 'Contact Us', mobileLabel: 'Contact', path: '/contact', icon: MessageCircle },
];

const SERVICE_LINKS = [
  { label: 'Tree Removal', description: 'Safe removal of hazardous or unwanted trees.', path: '/services#tree-removal', icon: TreePine },
  { label: 'Tree Trimming', description: 'Precision pruning for healthier, safer trees.', path: '/services#tree-trimming', icon: Scissors },
  { label: 'Stump Grinding', description: 'Clear old stumps and reclaim your landscape.', path: '/services#stump-grinding', icon: CircleSlash },
  { label: 'Emergency Cleanup', description: 'Rapid 24/7 response for storm-damaged trees.', path: '/services#emergency-cleanup', icon: Zap },
  { label: 'Land Clearing', description: 'Prepare lots and sites for your next project.', path: '/services#land-clearing', icon: Mountain },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <>
    <header
      className={`glass fixed left-0 right-0 top-0 z-50 h-24 transition-all duration-500 lg:h-auto ${
        scrolled ? 'lg:py-3 lg:shadow-3d' : 'lg:py-4'
      }`}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <nav className="flex h-24 items-center justify-between px-5 sm:px-8 lg:hidden">
        <Link to="/" className="block h-14 w-44 overflow-hidden" aria-label="Timber Crew Tree Service home">
          <img
            src="/images/WhatsApp_Image_2026-07-21_at_18.40.44-Photoroom.png"
            alt="Timber Crew Tree Service"
            className="h-44 w-44 -translate-y-[3.75rem] object-contain"
          />
        </Link>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green text-white shadow-3d"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <nav className="mx-auto hidden max-w-7xl items-center justify-between px-5 sm:px-8 lg:flex">
        <Link to="/" className="group block h-14 w-44 overflow-hidden" aria-label="Timber Crew Tree Service home">
          <img
            src="/images/WhatsApp_Image_2026-07-21_at_18.40.44-Photoroom.png"
            alt="Timber Crew Tree Service"
            className="h-44 w-44 -translate-y-[3.75rem] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        <nav
          className="hidden rounded-full border border-white/70 bg-white/65 p-1.5 shadow-sm backdrop-blur-xl lg:block"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <DesktopDockItem
                key={link.path}
                link={link}
                active={location.pathname === link.path}
                servicesOpen={servicesOpen}
                onOpenServices={() => setServicesOpen(true)}
                onCloseServices={() => setServicesOpen(false)}
              />
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+17164428118"
            className="flex items-center gap-2 text-sm font-bold text-brand-charcoal hover:text-brand-green transition-colors"
          >
            <span className="w-9 h-9 rounded-full bg-brand-green/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-brand-green" />
            </span>
            +1 (716) 442-8118
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-green to-brand-green-dark text-white text-sm font-bold shadow-3d hover:shadow-3d-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Free Quote
          </Link>
        </div>

      </nav>

      <div
        className={`absolute left-0 right-0 top-full hidden transition-all duration-300 lg:block ${
          servicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="border-y border-brand-charcoal/10 bg-white text-left shadow-[0_24px_50px_rgba(20,40,28,0.16)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-8 py-8 lg:grid-cols-[minmax(190px,0.32fr)_minmax(0,1fr)] xl:gap-12 xl:py-10">
            <div className="border-r border-brand-charcoal/10 pr-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-green">Tree Services</p>
              <h2 className="font-display text-2xl font-extrabold leading-tight text-brand-charcoal">Expert care for every tree.</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/55">Explore our complete range of professional tree care services.</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-green-dark hover:underline" onClick={() => setServicesOpen(false)}>
                View all services <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className="grid min-w-0 gap-x-6 gap-y-2 md:grid-cols-2 xl:gap-x-10">
              {SERVICE_LINKS.map((service) => (
                <li key={service.path} className="min-w-0">
                  <Link
                    to={service.path}
                    className="group/item flex min-w-0 items-start gap-4 rounded-xl p-3 transition-colors hover:bg-brand-cream"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-charcoal/5 text-brand-charcoal/55 transition-colors group-hover/item:bg-brand-green group-hover/item:text-white">
                      <service.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display font-bold text-brand-charcoal group-hover/item:text-brand-green-dark">{service.label}</span>
                      <span className="mt-1 block text-sm leading-snug text-brand-charcoal/55">{service.description}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>

      <button
        type="button"
        className={`fixed inset-0 z-[70] bg-brand-charcoal/45 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Close navigation menu"
        tabIndex={mobileMenuOpen ? 0 : -1}
      />
      <motion.aside
        className={`fixed bottom-0 right-0 top-0 z-[80] w-[min(86vw,380px)] overflow-y-auto bg-white px-6 pb-8 pt-[calc(1.5rem+env(safe-area-inset-top))] shadow-[-20px_0_50px_rgba(20,40,28,0.22)] lg:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={false}
        animate={{ x: mobileMenuOpen ? 0 : '105%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="font-display text-lg font-extrabold text-brand-charcoal">Menu</p>
          <button type="button" onClick={() => setMobileMenuOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-charcoal/5 text-brand-charcoal" aria-label="Close navigation menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="space-y-2">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link to={link.path} className={`flex items-center gap-4 rounded-2xl px-4 py-4 font-bold transition-colors ${active ? 'bg-brand-green text-white' : 'text-brand-charcoal/70 hover:bg-brand-cream hover:text-brand-green-dark'}`}>
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
                {link.path === '/services' && (
                  <ul className="ml-9 mt-2 space-y-1 border-l border-brand-charcoal/10 pl-4">
                    {SERVICE_LINKS.map((service) => (
                      <li key={service.path}>
                        <Link to={service.path} className="block rounded-xl px-3 py-2 text-sm font-medium text-brand-charcoal/55 hover:bg-brand-cream hover:text-brand-green-dark">{service.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-8 space-y-3 border-t border-brand-charcoal/10 pt-6">
          <a href="tel:+17164428118" className="flex items-center justify-center gap-2 rounded-full border border-brand-green/20 px-5 py-3.5 font-bold text-brand-green-dark">
            <Phone className="h-4 w-4" /> +1 (716) 442-8118
          </a>
          <Link to="/contact" className="block rounded-full bg-brand-green px-5 py-3.5 text-center font-bold text-white shadow-3d">Get a Free Quote</Link>
        </div>
      </motion.aside>
    </>
  );
}

function DesktopDockItem({
  link,
  active,
  servicesOpen,
  onOpenServices,
  onCloseServices,
}: {
  link: (typeof NAV_LINKS)[number];
  active: boolean;
  servicesOpen: boolean;
  onOpenServices: () => void;
  onCloseServices: () => void;
}) {
  const isServices = link.path === '/services';

  return (
    <li
      className="relative"
      onMouseEnter={isServices ? onOpenServices : onCloseServices}
      onFocus={isServices ? onOpenServices : onCloseServices}
    >
      <motion.div
        whileHover={{ y: -14, scale: 1.32 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', mass: 0.1, stiffness: 320, damping: 17 }}
      >
        <Link
          to={link.path}
          aria-current={active ? 'page' : undefined}
          className={`relative flex items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${active ? 'text-white' : 'text-brand-charcoal/65 hover:text-brand-green-dark'}`}
        >
        {active && (
          <motion.span
            layoutId="desktop-ios-active-tab"
            className="absolute inset-0 rounded-full bg-brand-green shadow-md"
            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
          />
        )}
        <span className="relative z-10">{link.label}</span>
        {isServices && (
          <ChevronDown className={`relative z-10 h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
        )}
        </Link>
      </motion.div>
    </li>
  );
}
