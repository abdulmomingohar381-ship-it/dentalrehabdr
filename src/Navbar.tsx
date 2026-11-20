import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { buildGeneralWhatsAppInquiry } from '../data/clinicData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const;

export function DentalBrandMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="28" height="28" rx="8" fill="#176B68" />
      <path
        d="M9.75 7.5C7.95 7.5 6.75 8.92 6.75 10.95C6.75 12.88 7.52 14.55 8.18 16.58C8.69 18.14 9.05 20.5 10.35 20.5C11.24 20.5 11.72 19.05 12.22 17.52C12.66 16.18 13.15 15.5 14 15.5C14.85 15.5 15.34 16.18 15.78 17.52C16.28 19.05 16.76 20.5 17.65 20.5C18.95 20.5 19.31 18.14 19.82 16.58C20.48 14.55 21.25 12.88 21.25 10.95C21.25 8.92 20.05 7.5 18.25 7.5C16.76 7.5 15.65 8.38 14 8.38C12.35 8.38 11.24 7.5 9.75 7.5Z"
        stroke="#FFFFFF"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1 10.45C11.6 10.1 12.25 10.05 12.85 10.22"
        stroke="#75C9C3"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#DDEFEA] shadow-[0_2px_16px_rgba(23,107,104,0.05)]'
          : 'bg-[#F8FBFA]/95 backdrop-blur-sm border-b border-[#DDEFEA]/80'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Clean single-line brand wordmark + dental mark */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 text-[#203A39] hover:text-[#176B68] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] rounded-md py-1"
        >
          <DentalBrandMark />
          <span className="font-display text-lg font-bold tracking-tight">
            Dental Rehab
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#647775] hover:text-[#176B68] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#75C9C3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#appointment"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#176B68] hover:bg-[#11514E] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] focus-visible:ring-offset-2"
          >
            Book Appointment
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#203A39] hover:bg-[#DDEFEA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-white border-b border-[#DDEFEA] px-4 sm:px-6 py-4"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-[#203A39] hover:text-[#176B68] hover:bg-[#F8FBFA] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#DDEFEA] flex flex-col sm:flex-row gap-2.5">
            <a
              href="#appointment"
              onClick={() => setMobileOpen(false)}
              className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-[#176B68] hover:bg-[#11514E] rounded-lg transition-colors whitespace-nowrap"
            >
              Book Appointment
            </a>
            <a
              href={buildGeneralWhatsAppInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#176B68] bg-[#DDEFEA] hover:bg-[#cde6df] rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>WhatsApp Clinic</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
