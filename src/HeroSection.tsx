import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_IMAGES, CLINIC_INFO } from '../data/clinicData';
import { SafeImage } from './SafeImage';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[#F8FBFA] pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 overflow-x-clip"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Value Proposition & Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-[#176B68] uppercase mb-4">
              ADVANCED DENTAL CARE IN SAHIWAL
            </p>

            <h1 className="font-display text-[clamp(2.25rem,4vw,3.625rem)] font-bold leading-[1.1] tracking-tight text-[#203A39] [text-wrap:balance] mb-5">
              Your Smile Deserves Expert Care.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#647775] max-w-[54ch] mb-8">
              Experience personalized dental care with modern treatment options,
              professional attention, and a patient-first approach at Dental Rehab.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#176B68] hover:bg-[#11514E] rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] focus-visible:ring-offset-2"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-[#176B68] bg-white hover:bg-[#DDEFEA]/60 border border-[#75C9C3]/60 rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] focus-visible:ring-offset-2"
              >
                Explore Treatments
              </a>
            </div>

            {/* Clean unboxed typographic trust strip */}
            <div className="pt-6 border-t border-[#DDEFEA] flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#203A39]">
              <span className="font-semibold tabular-nums">
                {CLINIC_INFO.rating}/5 Google Rating
              </span>
              <span className="text-[#75C9C3]" aria-hidden="true">
                ·
              </span>
              <span className="font-medium text-[#647775] tabular-nums">
                {CLINIC_INFO.reviewCount} Google Reviews
              </span>
              <span className="text-[#75C9C3]" aria-hidden="true">
                ·
              </span>
              <span className="font-medium text-[#647775]">
                Specialist Dental Practice
              </span>
            </div>
          </motion.div>

          {/* Right Column: Bright Modern Dental Clinic Photography + Subtle Rating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex"
          >
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#DDEFEA] border border-[#DDEFEA] aspect-[4/3] lg:aspect-auto lg:min-h-[460px]">
              <SafeImage
                src={CLINIC_IMAGES.heroSuite}
                alt="Bright, modern dental treatment suite at Dental Rehab in Sahiwal with natural daylight and ergonomic equipment"
                loading="eager"
                fallbackTitle="Dental Rehab Treatment Suite"
                className="w-full h-full object-cover"
              />

              {/* Subtle bottom gradient scrim only behind floating rating card area for clean contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#203A39]/25 to-transparent pointer-events-none"
              />

              {/* Subtle Floating Rating Card */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md border border-[#DDEFEA] rounded-xl px-4 py-3.5 shadow-[0_8px_24px_rgba(23,107,104,0.12)]">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-display text-xl font-bold text-[#203A39] tabular-nums">
                    {CLINIC_INFO.rating}
                  </span>
                  <div className="flex items-center gap-0.5 text-[#176B68]" aria-label="Rated 4.9 out of 5 stars">
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-xs font-medium text-[#647775] tabular-nums">
                  Based on {CLINIC_INFO.reviewCount} Google Reviews.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
