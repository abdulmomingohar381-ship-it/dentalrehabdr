import { Star, ExternalLink, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO, GOOGLE_REVIEWS } from '../data/clinicData';

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-white py-16 sm:py-24 border-t border-[#DDEFEA]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Aggregate Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#176B68] uppercase mb-3">
              Patient Feedback
            </p>
            <h2
              id="reviews-heading"
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#203A39] [text-wrap:balance]"
            >
              What Patients Say About Their Experience
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 bg-[#F8FBFA] border border-[#DDEFEA] rounded-xl px-4 py-3">
              <div className="flex items-center gap-1 text-[#176B68]" aria-hidden="true">
                <Star className="w-4 h-4 fill-[#176B68]" />
                <Star className="w-4 h-4 fill-[#176B68]" />
                <Star className="w-4 h-4 fill-[#176B68]" />
                <Star className="w-4 h-4 fill-[#176B68]" />
                <Star className="w-4 h-4 fill-[#176B68]" />
              </div>
              <div className="text-sm text-[#203A39] tabular-nums">
                <span className="font-bold">{CLINIC_INFO.rating}/5 Google Rating</span>
                <span className="text-[#75C9C3] mx-2" aria-hidden="true">
                  ·
                </span>
                <span className="text-[#647775]">
                  {CLINIC_INFO.reviewCount} Google Reviews
                </span>
              </div>
            </div>

            <a
              href={CLINIC_INFO.mapsReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#176B68] bg-[#DDEFEA]/70 hover:bg-[#DDEFEA] rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68]"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Authentic Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review, idx) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.35,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#F8FBFA] border border-[#DDEFEA] rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div
                    className="flex items-center gap-1 text-[#176B68]"
                    aria-label="5 star review"
                  >
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                    <Star className="w-4 h-4 fill-[#176B68]" aria-hidden="true" />
                  </div>
                  <Quote className="w-5 h-5 text-[#75C9C3]" aria-hidden="true" />
                </div>

                <p className="text-base leading-relaxed text-[#203A39] mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <footer className="pt-4 border-t border-[#DDEFEA] text-xs font-medium text-[#647775]">
                {review.source}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
