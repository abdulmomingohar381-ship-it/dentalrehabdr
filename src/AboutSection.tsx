import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_IMAGES, CLINIC_INFO } from '../data/clinicData';
import { SafeImage } from './SafeImage';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#F8FBFA] py-16 sm:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Visual Composition: Doctor Portrait + Clinic Lounge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 grid grid-cols-12 gap-4 items-end"
          >
            <div className="col-span-7 rounded-2xl overflow-hidden border border-[#DDEFEA] bg-white aspect-[3/4]">
              <SafeImage
                src={CLINIC_IMAGES.doctorPortrait}
                alt={`${CLINIC_INFO.doctorName}, ${CLINIC_INFO.doctorTitle} at Dental Rehab`}
                fallbackTitle={CLINIC_INFO.doctorName}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="col-span-5 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#DDEFEA] bg-white aspect-[4/3]">
                <SafeImage
                  src={CLINIC_IMAGES.clinicLounge}
                  alt="Clean, welcoming patient lounge and reception area at Dental Rehab in Sahiwal"
                  fallbackTitle="Dental Rehab Clinic Interior"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#DDEFEA]/70 border border-[#75C9C3]/40 rounded-2xl p-4 sm:p-5">
                <div className="flex items-start gap-2.5 text-[#176B68]">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-display text-sm font-bold text-[#203A39]">
                      Sahiwal Practice
                    </div>
                    <p className="text-xs leading-relaxed text-[#647775] mt-1">
                      Langriyal Surgimed Hospital, Fateh Sher Colony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-semibold tracking-[0.14em] text-[#176B68] uppercase mb-3">
              Meet the Specialist
            </p>

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#203A39] [text-wrap:balance] mb-6"
            >
              Expert Care. A Healthier Smile.
            </h2>

            <div className="pb-6 mb-6 border-b border-[#DDEFEA]">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#176B68]">
                {CLINIC_INFO.doctorName}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#203A39] mt-1">
                {CLINIC_INFO.doctorTitle}
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#647775] mb-6">
              Dental Rehab provides a range of dental treatment options in
              Sahiwal, with a focus on personalized care and helping patients
              make informed decisions about their oral health.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#647775] mb-8">
              Every visit begins with an unhurried evaluation and straightforward
              discussion of suitable treatment pathways, ensuring clarity and
              comfort at each step.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#176B68] hover:bg-[#11514E] rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] focus-visible:ring-offset-2"
              >
                <span>Request an Appointment</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-[#176B68] hover:text-[#11514E] transition-colors whitespace-nowrap shrink-0"
              >
                View Treatment Options
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
