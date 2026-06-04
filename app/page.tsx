import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Frameworks from "@/components/Frameworks";
import Workflow from "@/components/Workflow";
import Platform from "@/components/Platform";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <TrustBar />
      <Frameworks />
      <Workflow />
      <Platform />
      <CTASection />
      <Footer />
    </main>
  );
}
