import AOSProvider from "@/components/AOSProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import UserRoles from "@/components/sections/UserRoles";
import Advantages from "@/components/sections/Advantages";
import Pricing from "@/components/sections/Pricing";
import Statistics from "@/components/sections/Statistics";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <AOSProvider>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <HowItWorks />
        <UserRoles />
        <Advantages />
        <Pricing />
        <Statistics />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </AOSProvider>
  );
}
