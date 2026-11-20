import { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Smile,
  Activity,
  Stethoscope,
  ScanLine,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  CLINIC_IMAGES,
  TREATMENT_CATEGORIES,
  buildGeneralWhatsAppInquiry,
  type TreatmentCategory,
} from '../data/clinicData';
import { SafeImage } from './SafeImage';

interface TreatmentsSectionProps {
  onSelectTreatmentForBooking: (treatmentName: string) => void;
}

const CATEGORY_ICONS: Record<string, typeof Sparkles> = {
  cosmetic: Sparkles,
  'implants-restorative': ShieldCheck,
  orthodontics: Smile,
  'root-canal': Activity,
  'oral-surgery': Stethoscope,
  'general-care': ScanLine,
};

export function TreatmentsSection({
  onSelectTreatmentForBooking,
}: TreatmentsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const visibleCategories: TreatmentCategory[] =
    activeCategory === 'all'
      ? TREATMENT_CATEGORIES
      : TREATMENT_CATEGORIES.filter((cat) => cat.id === activeCategory);

  const handleSelectTreatment = (treatment: string) => {
    onSelectTreatmentForBooking(treatment);
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="treatments"
      aria-labelledby="treatments-heading"
      className="bg-white py-16 sm:py-24 border-t border-[#DDEFEA]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Clinical Imagery Pair */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#176B68] uppercase mb-3">
              Treatment Options
            </p>
            <h2
              id="treatments-heading"
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#203A39] [text-wrap:balance] mb-4"
            >
              Comprehensive Dental Treatments
            </h2>
            <p className="text-base sm:text-lg text-[#647775] max-w-[50ch]">
              Explore dental care options available at Dental Rehab. Select any
              treatment to pre-fill your appointment inquiry or message the
              clinic directly on WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-[#DDEFEA] bg-[#F8FBFA] aspect-[4/3]">
              <SafeImage
                src={CLINIC_IMAGES.cosmeticCare}
                alt="Cosmetic smile shade consultation at Dental Rehab"
                fallbackTitle="Cosmetic & Restorative Care"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#DDEFEA] bg-[#F8FBFA] aspect-[4/3]">
              <SafeImage
                src={CLINIC_IMAGES.orthodonticsAligners}
                alt="Clear orthodontic aligners and dental arch model"
                fallbackTitle="Orthodontics & Aligners"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter dental treatment categories"
          className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F8FBFA] border border-[#DDEFEA] rounded-xl mb-10"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] ${
              activeCategory === 'all'
                ? 'bg-[#176B68] text-white'
                : 'text-[#647775] hover:text-[#203A39] hover:bg-white'
            }`}
          >
            All Categories
          </button>

          {TREATMENT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] ${
                activeCategory === category.id
                  ? 'bg-[#176B68] text-white'
                  : 'text-[#647775] hover:text-[#203A39] hover:bg-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Treatment Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Sparkles;
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.35,
                  delay: (idx % 3) * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between bg-[#F8FBFA] hover:bg-white border border-[#DDEFEA] hover:border-[#75C9C3] rounded-2xl p-6 transition-all duration-200 hover:shadow-[0_10px_28px_rgba(23,107,104,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#DDEFEA] group-hover:bg-[#176B68] text-[#176B68] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-display text-xs font-bold tracking-wider text-[#647775] tabular-nums">
                      {category.code}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#203A39] mb-2.5">
                    {category.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#647775] mb-5">
                    {category.summary}
                  </p>

                  <div className="border-t border-[#DDEFEA] pt-4 mb-6">
                    <p className="text-xs font-semibold text-[#203A39] mb-2.5">
                      Available Procedures
                    </p>
                    <ul className="divide-y divide-[#DDEFEA]/80">
                      {category.treatments.map((treatment) => (
                        <li key={treatment}>
                          <button
                            type="button"
                            onClick={() => handleSelectTreatment(treatment)}
                            className="w-full py-2 flex items-center justify-between gap-2 text-left text-sm text-[#203A39] hover:text-[#176B68] transition-colors cursor-pointer group/item focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] rounded-sm"
                          >
                            <span>{treatment}</span>
                            <ArrowUpRight
                              className="w-3.5 h-3.5 text-[#75C9C3] opacity-70 group-hover/item:opacity-100 group-hover/item:text-[#176B68] shrink-0 transition-opacity"
                              aria-hidden="true"
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={buildGeneralWhatsAppInquiry(category.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-[#176B68] bg-white hover:bg-[#176B68] hover:text-white border border-[#75C9C3]/70 hover:border-[#176B68] rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Clinical Suitability Note */}
        <p className="mt-10 text-xs sm:text-sm text-[#647775] text-center max-w-[68ch] mx-auto">
          Note: Treatment options and suitability vary by individual oral health
          needs and are recommended following a clinical assessment with Dr.
          Muhammad Ahmad Gulzar.
        </p>
      </div>
    </section>
  );
}
