import AboutMeSection from "@/components/AboutMeSection";
// this navbar shows when top navbar hides
import BottomNavbar from "@/components/BottomNavbar";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BottomNavbar />
      <ProjectsSection />
      <PlansSection />
      <AboutMeSection />
      <FAQSection />
    </>
  );
}
