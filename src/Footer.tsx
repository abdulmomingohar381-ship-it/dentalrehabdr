import { MessageCircle, Phone, MapPin, Globe } from 'lucide-react';
import {
  CLINIC_INFO,
  TREATMENT_CATEGORIES,
  buildGeneralWhatsAppInquiry,
} from '../data/clinicData';
import { DentalBrandMark } from './Navbar';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11514E] text-white tracking-[0.01em]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 text-white mb-4"
            >
              <DentalBrandMark />
              <span className="font-display text-xl font-bold tracking-tight">
                {CLINIC_INFO.name}
              </span>
            </a>

            <p className="text-sm leading-relaxed text-[#DDEFEA]/90 max-w-[36ch] mb-6">
              Dental Rehab is a specialist dental clinic in Sahiwal led by{' '}
              {CLINIC_INFO.doctorName}, offering personalized dental care across
              cosmetic, restorative, orthodontic, and oral surgery treatments.
            </p>

            <a
              href={buildGeneralWhatsAppInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#11514E] bg-[#75C9C3] hover:bg-white rounded-xl transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#DDEFEA]/85">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#75C9C3] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatment Categories */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white mb-4">
              Treatment Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-[#DDEFEA]/85">
              {TREATMENT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <a
                    href="#treatments"
                    className="hover:text-[#75C9C3] transition-colors"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Address */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white mb-4">
              Clinic Details
            </h3>
            <ul className="space-y-3.5 text-sm text-[#DDEFEA]/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#75C9C3] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CLINIC_INFO.addressFull}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#75C9C3] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:+${CLINIC_INFO.phoneRaw}`}
                  className="hover:text-[#75C9C3] transition-colors tabular-nums"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#75C9C3] shrink-0" aria-hidden="true" />
                <a
                  href={CLINIC_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#75C9C3] transition-colors"
                >
                  {CLINIC_INFO.websiteDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DDEFEA]/75">
          <p>
            &copy; {currentYear} {CLINIC_INFO.name}. All rights reserved.
          </p>
          <p>
            {CLINIC_INFO.doctorName} · {CLINIC_INFO.doctorTitle}
          </p>
        </div>
      </div>
    </footer>
  );
}
