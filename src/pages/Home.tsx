import { useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import Navbar from "@/components/home/Navbar";
import SocialIcons from "@/components/home/Social";
import HomeSection from "@/components/home/Home";
import WorksSection from "@/components/home/HowWorks";
import ContactSection from "@/components/home/Contact";
import ContactForm from "@/components/home/ContactForm";
import ContactCombined from "@/components/home/ContactCombined";
import Description from "@/components/home/Description";

type Section = 'home' | 'description' | 'works' | 'contact' | 'form';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (section: Section) => {
    if (section !== currentSection && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSection(section);
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isTransitioning) return;

      const isMobile = window.innerWidth < 768;
      const sections: Section[] = isMobile
        ? ['home', 'description', 'works', 'contact', 'form']
        : ['home', 'description', 'works', 'contact'];

      const index = sections.indexOf(currentSection);
      let nextSection: Section | null = null;

      if (e.deltaY > 0 && index < sections.length - 1) {
        nextSection = sections[index + 1];
      } else if (e.deltaY < 0 && index > 0) {
        nextSection = sections[index - 1];
      }

      if (nextSection) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSection(nextSection!);
          setIsTransitioning(false);
        }, 600);
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) {
        const isMobile = window.innerWidth < 768;
        const sections: Section[] = isMobile
          ? ['home', 'description', 'works', 'contact', 'form']
          : ['home', 'description', 'works', 'contact'];

        const index = sections.indexOf(currentSection);
        let nextSection: Section | null = null;

        if (deltaY > 0 && index < sections.length - 1) {
          nextSection = sections[index + 1];
        } else if (deltaY < 0 && index > 0) {
          nextSection = sections[index - 1];
        }

        if (nextSection) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentSection(nextSection!);
            setIsTransitioning(false);
          }, 600);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isTransitioning]);

  const sectionVariants = {
    enter: { opacity: 0, scale: 1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1 },
  };

  const transition = {
    duration: 0.3,
    ease: easeInOut,
  };


  return (
    <div className="relative w-full h-[100dvh] bg-black text-white overflow-hidden overscroll-contain">
      <Navbar onNavigate={handleNavigate} />
      <SocialIcons />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          variants={sectionVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute inset-0"
        >
          {currentSection === 'home' && <HomeSection />}
          {currentSection === 'works' && <WorksSection />}
          {currentSection === 'description' && <Description />}
          {currentSection === 'contact' && (
            <>
              <div className="block md:hidden">
                <ContactSection />
              </div>
              <div className="hidden md:block">
                <ContactCombined />
              </div>
            </>
          )}
          {currentSection === 'form' && (
            <div className="block md:hidden">
              <ContactForm />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
};