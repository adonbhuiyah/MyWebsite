import AboutMe from "@/components/AboutMe";
import BottomNavbar from "@/components/BottomNavbar";
import Copyright from "@/components/Copyright";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <BottomNavbar />
      <Project />
      <Plans />
      <AboutMe />
      <FAQ />
    </>
  );
}
