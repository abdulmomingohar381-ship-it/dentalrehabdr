import { MapPin, Phone, Globe, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function LocationSection() {
  return (
    <section
      id="contact"
      aria-labelledby="location-heading"
      className="bg-white py-16 sm:py-24 border-t border-[#DDEFEA]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#176B68] uppercase mb-3">
            Clinic Location
          </p>
          <h2
            id="location-heading"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#203A39] [text-wrap:balance] mb-3"
          >
            Visit Dental Rehab
          </h2>
          <p className="text-base sm:text-lg text-[#647775]">
            Find us in Sahiwal. We look forward to assisting you with your
            dental care needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Responsive Google Maps Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#DDEFEA] bg-[#F8FBFA] min-h-[340px] sm:min-h-[400px]">
            <iframe
              title="Dental Rehab at Langriyal Surgimed Hospital, Fateh Sher Colony, Sahiwal"
              src={CLINIC_INFO.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[340px] sm:min-h-[400px] border-0"
              allowFullScreen
            />
          </div>

          {/* Clinic Address & Direct Contact Details */}
          <div className="lg:col-span-5 bg-[#F8FBFA] border border-[#DDEFEA] rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#DDEFEA] text-[#176B68] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#203A39] mb-1">
                    Clinic Address
                  </h3>
                  <address className="not-italic text-sm leading-relaxed text-[#647775]">
                    Langriyal Surgimed Hospital,
                    <br />
                    Near Bloom Field Hall School,
                    <br />
                    Fateh Sher Colony,
                    <br />
                    Sahiwal, Punjab, 57000, Pakistan.
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-5 border-t border-[#DDEFEA]">
                <div className="w-10 h-10 rounded-xl bg-[#DDEFEA] text-[#176B68] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#203A39] mb-1">
                    Phone / WhatsApp
                  </h3>
                  <a
                    href={`tel:+${CLINIC_INFO.phoneRaw}`}
                    className="text-sm font-semibold text-[#176B68] hover:text-[#11514E] transition-colors tabular-nums"
                  >
                    {CLINIC_INFO.phoneLocal}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-5 border-t border-[#DDEFEA]">
                <div className="w-10 h-10 rounded-xl bg-[#DDEFEA] text-[#176B68] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#203A39] mb-1">
                    Website
                  </h3>
                  <a
                    href={CLINIC_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#176B68] hover:text-[#11514E] transition-colors"
                  >
                    {CLINIC_INFO.websiteDisplay}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={CLINIC_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#176B68] hover:bg-[#11514E] rounded-xl transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] focus-visible:ring-offset-2"
            >
              <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
