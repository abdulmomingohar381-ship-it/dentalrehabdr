export const CLINIC_INFO = {
  name: 'Dental Rehab',
  doctorName: 'Dr. Muhammad Ahmad Gulzar',
  doctorTitle: 'Specialist Dentist / Oral & Maxillofacial Surgeon',
  category: 'Dental Clinic',
  rating: '4.9',
  reviewCount: 169,
  phoneRaw: '923204885299',
  phoneDisplay: '+92 320 4885299',
  phoneLocal: '0320 4885299',
  website: 'https://dentalrehab.pk',
  websiteDisplay: 'dentalrehab.pk',
  addressShort: 'Langriyal Surgimed Hospital, Fateh Sher Colony, Sahiwal',
  addressFull:
    'Langriyal Surgimed Hospital, near Bloom Field Hall School, Fateh Sher Colony, Sahiwal, Punjab, 57000, Pakistan.',
  city: 'Sahiwal',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Langriyal+Surgimed+Hospital+Fateh+Sher+Colony+Sahiwal+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Langriyal+Surgimed+Hospital,+Near+Bloom+Field+Hall+School,+Fateh+Sher+Colony,+Sahiwal,+Punjab+57000,+Pakistan',
  mapsReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dental+Rehab+Langriyal+Surgimed+Hospital+Fateh+Sher+Colony+Sahiwal',
} as const;

export const CLINIC_IMAGES = {
  heroSuite: '/src/assets/images/hero_dental_suite_1795184534276.jpg',
  doctorPortrait: '/src/assets/images/doctor_portrait_clean_1795184550786.jpg',
  clinicLounge: '/src/assets/images/clinic_reception_lounge_1795184533794.jpg',
  cosmeticCare: '/src/assets/images/cosmetic_smile_care_1795184533651.jpg',
  orthodonticsAligners: '/src/assets/images/orthodontics_aligners_1795184533923.jpg',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralWhatsAppInquiry(topic?: string): string {
  const message = topic
    ? `Hello Dental Rehab,\n\nI would like to inquire about ${topic} and request an appointment with ${CLINIC_INFO.doctorName}.\n\nPlease share available consultation times.\n\nThank you.`
    : `Hello Dental Rehab,\n\nI would like to request a dental appointment with ${CLINIC_INFO.doctorName}.\n\nPlease contact me regarding appointment availability.\n\nThank you.`;

  return buildWhatsAppUrl(message);
}

export interface TreatmentCategory {
  id: string;
  code: string;
  title: string;
  summary: string;
  treatments: string[];
}

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: 'cosmetic',
    code: '01',
    title: 'Cosmetic Dentistry',
    summary:
      'Aesthetic dental options tailored to improve tooth shade, symmetry, and smile harmony following clinical assessment.',
    treatments: [
      'Teeth Whitening / Bleaching',
      'Porcelain Veneers',
      'Composite Veneers',
      'Teeth Gap Closure',
    ],
  },
  {
    id: 'implants-restorative',
    code: '02',
    title: 'Dental Implants & Restorative Dentistry',
    summary:
      'Restorative solutions designed to rebuild damaged teeth, replace missing teeth, and restore everyday chewing function.',
    treatments: [
      'Dental Implants',
      'Porcelain Crowns',
      'Porcelain Dental Bridges',
      'Composite Fillings',
      'Silver Fillings',
      'Amalgam Fillings',
      'GIC Fillings',
    ],
  },
  {
    id: 'orthodontics',
    code: '03',
    title: 'Orthodontics',
    summary:
      'Structured orthodontic alignment options ranging from conventional fixed braces to discreet clear aligner systems.',
    treatments: [
      'Orthodontic Treatment',
      'Metallic Braces',
      'Ceramic Braces',
      'Fixed Braces',
      'Invisible Braces',
      'Clear Aligners',
    ],
  },
  {
    id: 'root-canal',
    code: '04',
    title: 'Root Canal Treatment',
    summary:
      'Focused endodontic care aimed at addressing tooth infection and preserving natural tooth structure where clinically indicated.',
    treatments: [
      'Root Canal Treatment',
      'Single Visit Root Canal Treatment',
    ],
  },
  {
    id: 'oral-surgery',
    code: '05',
    title: 'Oral & Maxillofacial Surgery',
    summary:
      'Surgical dental procedures performed with specialist oversight for problematic, impacted, or non-restorable teeth.',
    treatments: [
      'Tooth Extraction',
      'Wisdom Tooth Removal',
      'Wisdom Tooth Surgery',
    ],
  },
  {
    id: 'general-care',
    code: '06',
    title: 'General Dental Care',
    summary:
      'Routine preventive hygiene, diagnostic imaging, and removable prosthetic dentures for ongoing oral health maintenance.',
    treatments: [
      'Dental Scaling',
      'Teeth Cleaning',
      'Dental X-rays',
      'Complete Dentures',
      'Partial Dentures',
      'Cast Partial Dentures',
    ],
  },
];

export const WHY_CHOOSE_FEATURES = [
  {
    id: 'specialist',
    title: 'Specialist Dental Care',
    description:
      'Care led by Dr. Muhammad Ahmad Gulzar, Specialist Dentist / Oral & Maxillofacial Surgeon, providing focused clinical evaluation.',
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Treatments',
    description:
      'Cosmetic, restorative, orthodontic, endodontic, surgical, and general dental care options available in one location.',
  },
  {
    id: 'patient-focused',
    title: 'Patient-Focused Approach',
    description:
      'Clear communication, attentive consultations, and personalized guidance to help you make informed decisions about your care.',
  },
  {
    id: 'location',
    title: 'Convenient Location',
    description:
      'Located at Langriyal Surgimed Hospital, near Bloom Field Hall School, Fateh Sher Colony in Sahiwal.',
  },
] as const;

export const GOOGLE_REVIEWS = [
  {
    id: 'review-1',
    quote:
      'The doctor was polite and explained everything in a simple way. The staff were cooperative, and the clinic was neat and clean.',
    source: 'Google Review',
  },
  {
    id: 'review-2',
    quote:
      'Very professional, good patient care, economical, staff is good. Highly recommended.',
    source: 'Google Review',
  },
  {
    id: 'review-3',
    quote:
      'Had an amazing experience at Dental Rehab! The clinic is clean, modern and very well managed.',
    source: 'Google Review',
  },
] as const;
