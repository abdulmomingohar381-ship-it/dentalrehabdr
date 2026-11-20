import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data/clinicData';

const TRUST_METRICS = [
  {
    value: `${CLINIC_INFO.rating} / 5`,
    label: 'Google Rating',
    detail: 'Verified patient feedback',
  },
  {
    value: `${CLINIC_INFO.reviewCount}`,
    label: 'Patient Reviews',
    detail: 'Submitted on Google Maps',
  },
  {
    value: 'Specialist',
    label: 'Dental Practice',
    detail: 'Oral & Maxillofacial Surgery',
  },
  {
    value: 'Sahiwal',
    label: 'Clinic Location',
    detail: 'Fateh Sher Colony',
  },
] as const;

export function TrustStripSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="bg-white border-y border-[#DDEFEA] py-12 sm:py-16"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10"
        >
          <h2
            id="trust-heading"
            className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#203A39] [text-wrap:balance]"
          >
            Trusted Dental Care, Focused on Your Smile.
          </h2>
          <p className="text-sm text-[#647775] max-w-[44ch]">
            Patient-centered dental consultations and clinical treatments at{' '}
            {CLINIC_INFO.addressShort}.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#DDEFEA]">
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#176B68] tabular-nums tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-[#203A39]">
                {metric.label}
              </div>
              <div className="text-xs text-[#647775] mt-0.5">
                {metric.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
