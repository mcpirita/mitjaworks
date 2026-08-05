import { AboutSection } from "@/components/AboutSection";
import { AerialSection } from "@/components/AerialSection";
import { ContactSection } from "@/components/ContactSection";
import { GuideRules } from "@/components/GuideRules";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteNav } from "@/components/SiteNav";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <GuideRules />
      <SiteNav />
      <main className="relative z-10 flex-1">
        <Hero />
        <WorkSection />
        <AerialSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
