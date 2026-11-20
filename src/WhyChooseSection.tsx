import { Award, Layers, HeartHandshake, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_FEATURES } from '../data/clinicData';

const FEATURE_ICONS = {
  specialist: Award,
  comprehensive: Layers,
  'patient-focused': HeartHandshake,
  location: MapPin,
} as const;

export function WhyChooseSection() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="bg-[#F8FBFA] py-16 sm:py-24 border-t border-[#DDEFEA]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#176B68] uppercase mb-3">
            Patient Experience
          </p>
          <h2
            id="why-choose-heading"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#203A39] [text-wrap:balance]"
          >
            Why Patients Choose Dental Rehab
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_FEATURES.map((feature, idx) => {
            const Icon = FEATURE_ICONS[feature.id];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#DDEFEA]/65 border border-[#75C9C3]/35 rounded-2xl p-6 sm:p-7 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#DDEFEA] text-[#176B68] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                <h3 className="font-display text-lg font-bold text-[#203A39] mb-2.5">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#647775]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
