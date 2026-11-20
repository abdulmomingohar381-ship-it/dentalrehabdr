import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStripSection } from './components/TrustStripSection';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState('');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F8FBFA] text-[#203A39]">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <TrustStripSection />
          <AboutSection />
          <TreatmentsSection
            onSelectTreatmentForBooking={(treatment) =>
              setSelectedTreatment(treatment)
            }
          />
          <WhyChooseSection />
          <ReviewsSection />
          <AppointmentSection selectedTreatment={selectedTreatment} />
          <LocationSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
