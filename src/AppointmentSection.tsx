import { useEffect, useRef, useState, type FormEvent } from 'react';
import { MessageCircle, CheckCircle2, ExternalLink, Calendar, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO, buildWhatsAppUrl } from '../data/clinicData';

interface AppointmentSectionProps {
  selectedTreatment: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  concern?: string;
}

export function AppointmentSection({ selectedTreatment }: AppointmentSectionProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [submittedPreview, setSubmittedPreview] = useState<string | null>(null);

  const hiddenLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (selectedTreatment) {
      setConcern(selectedTreatment);
      setErrors((prev) => ({ ...prev, concern: undefined }));
    }
  }, [selectedTreatment]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = fullName.trim();
    const trimmedPhone = phone.trim();
    const trimmedConcern = concern.trim();

    if (trimmedName.length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (digitsOnly.length < 7) {
      nextErrors.phone = 'Please enter a valid contact phone number.';
    }

    if (trimmedConcern.length < 3) {
      nextErrors.concern = 'Please briefly describe your dental concern or desired treatment.';
    }

    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedUrl(null);
      return;
    }

    setErrors({});
    const formattedDate = preferredDate.trim() || 'Not specified';

    const message = [
      'Hello Dental Rehab,',
      '',
      'I would like to request a dental appointment.',
      '',
      `Name: ${fullName.trim()}`,
      `Phone: ${phone.trim()}`,
      `Dental Concern: ${concern.trim()}`,
      `Preferred Date: ${formattedDate}`,
      '',
      'Please contact me regarding appointment availability.',
      '',
      'Thank you.',
    ].join('\n');

    const waUrl = buildWhatsAppUrl(message);
    setSubmittedUrl(waUrl);
    setSubmittedPreview(message);

    // Trigger external WhatsApp link cleanly via anchor click (no window.open / window.alert)
    requestAnimationFrame(() => {
      hiddenLinkRef.current?.click();
    });
  };

  const todayIso = new Date().toISOString().split('T')[0];

  return (
    <section
      id="appointment"
      aria-labelledby="appointment-heading"
      className="bg-[#DDEFEA]/55 py-16 sm:py-24 border-t border-[#DDEFEA]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Guidance Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold tracking-[0.14em] text-[#176B68] uppercase mb-3">
              Appointment Inquiry
            </p>
            <h2
              id="appointment-heading"
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#203A39] [text-wrap:balance] mb-4"
            >
              Ready to Take Care of Your Smile?
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#647775] mb-8">
              Get in touch with Dental Rehab to discuss your dental concerns and
              request an appointment.
            </p>

            <div className="bg-white border border-[#DDEFEA] rounded-2xl p-6 space-y-5">
              <div>
                <h3 className="font-display text-base font-bold text-[#203A39] mb-1.5">
                  How WhatsApp Booking Works
                </h3>
                <p className="text-sm leading-relaxed text-[#647775]">
                  Complete the inquiry form and press{' '}
                  <strong className="font-semibold text-[#203A39]">
                    Submit via WhatsApp
                  </strong>
                  . Your details will open in WhatsApp addressed to Dental
                  Rehab—simply press Send, and our clinic team will respond to
                  coordinate available appointment times.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDEFEA] flex flex-col gap-3">
                <a
                  href={`tel:+${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#176B68] hover:text-[#11514E] transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">{CLINIC_INFO.phoneDisplay}</span>
                </a>
                <p className="text-xs text-[#647775]">
                  {CLINIC_INFO.doctorName} · {CLINIC_INFO.doctorTitle}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white border border-[#DDEFEA] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(23,107,104,0.06)]"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-semibold text-[#203A39] mb-1.5"
                  >
                    Full Name <span className="text-[#176B68]">*</span>
                  </label>
                  <input
                    id="booking-name"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Ayesha Khan"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) {
                        setErrors((prev) => ({ ...prev, fullName: undefined }));
                      }
                    }}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'booking-name-error' : undefined}
                    className={`w-full px-4 py-3 text-sm text-[#203A39] bg-[#F8FBFA] border rounded-xl transition-colors focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#176B68]/25 ${
                      errors.fullName
                        ? 'border-red-600 focus:border-red-600'
                        : 'border-[#DDEFEA] focus:border-[#176B68]'
                    }`}
                  />
                  {errors.fullName && (
                    <p
                      id="booking-name-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-red-700"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-sm font-semibold text-[#203A39] mb-1.5"
                  >
                    Phone Number <span className="text-[#176B68]">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="e.g. 0300 1234567"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) {
                        setErrors((prev) => ({ ...prev, phone: undefined }));
                      }
                    }}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                    className={`w-full px-4 py-3 text-sm text-[#203A39] bg-[#F8FBFA] border rounded-xl transition-colors focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#176B68]/25 ${
                      errors.phone
                        ? 'border-red-600 focus:border-red-600'
                        : 'border-[#DDEFEA] focus:border-[#176B68]'
                    }`}
                  />
                  {errors.phone && (
                    <p
                      id="booking-phone-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-red-700"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-concern"
                  className="block text-sm font-semibold text-[#203A39] mb-1.5"
                >
                  Dental Concern / Issue <span className="text-[#176B68]">*</span>
                </label>
                <textarea
                  id="booking-concern"
                  name="concern"
                  rows={3}
                  required
                  placeholder="Describe your dental concern or select a treatment above (e.g. Teeth Cleaning, Wisdom Tooth Removal, Clear Aligners)"
                  value={concern}
                  onChange={(e) => {
                    setConcern(e.target.value);
                    if (errors.concern) {
                      setErrors((prev) => ({ ...prev, concern: undefined }));
                    }
                  }}
                  aria-invalid={Boolean(errors.concern)}
                  aria-describedby={errors.concern ? 'booking-concern-error' : undefined}
                  className={`w-full px-4 py-3 text-sm text-[#203A39] bg-[#F8FBFA] border rounded-xl transition-colors focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#176B68]/25 ${
                    errors.concern
                      ? 'border-red-600 focus:border-red-600'
                      : 'border-[#DDEFEA] focus:border-[#176B68]'
                  }`}
                />
                {errors.concern && (
                  <p
                    id="booking-concern-error"
                    role="alert"
                    className="mt-1.5 text-xs font-medium text-red-700"
                  >
                    {errors.concern}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="booking-date"
                  className="block text-sm font-semibold text-[#203A39] mb-1.5"
                >
                  Preferred Appointment Date{' '}
                  <span className="text-xs font-normal text-[#647775]">
                    (Optional)
                  </span>
                </label>
                <div className="relative">
                  <Calendar
                    className="w-4 h-4 text-[#647775] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="booking-date"
                    name="preferredDate"
                    type="date"
                    min={todayIso}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 text-sm text-[#203A39] bg-[#F8FBFA] border border-[#DDEFEA] rounded-xl transition-colors focus:outline-none focus:bg-white focus:border-[#176B68] focus:ring-2 focus:ring-[#176B68]/25"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#176B68] hover:bg-[#11514E] rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] focus-visible:ring-offset-2"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Submit via WhatsApp</span>
                </button>
              </div>
            </form>

            {/* Hidden anchor for non-blocking redirect without window.open */}
            <a
              ref={hiddenLinkRef}
              href={submittedUrl ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
            >
              Redirect to WhatsApp
            </a>

            {/* Helpful Confirmation & Instruction Box */}
            {submittedUrl && (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 bg-[#DDEFEA]/65 border border-[#75C9C3] rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#176B68] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-bold text-[#203A39]">
                      WhatsApp Message Prepared — Press Send in WhatsApp
                    </h3>
                    <p className="text-xs sm:text-sm text-[#647775] mt-1 leading-relaxed">
                      Your appointment inquiry has been formatted for Dental Rehab
                      ({CLINIC_INFO.phoneDisplay}). Please press{' '}
                      <strong className="text-[#203A39]">Send</strong> inside
                      WhatsApp to deliver your request. Our team will contact you
                      to discuss available appointment times.
                    </p>

                    {submittedPreview && (
                      <pre className="mt-3 p-3 bg-white border border-[#DDEFEA] rounded-lg text-xs text-[#203A39] whitespace-pre-wrap font-sans leading-relaxed">
                        {submittedPreview}
                      </pre>
                    )}

                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#176B68] hover:bg-[#11514E] rounded-lg transition-colors whitespace-nowrap"
                    >
                      <span>Open WhatsApp Now</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
