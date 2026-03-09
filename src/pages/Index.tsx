import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MissionSection from "@/components/sections/MissionSection";
import FocusSection from "@/components/sections/FocusSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ImpactSnapshot from "@/components/sections/ImpactSnapshot";
import FinancialAwarenessExplainer from "@/components/sections/FinancialAwarenessExplainer";
import FinancialLiteracyCore from "@/components/sections/FinancialLiteracyCore";
import EmpowermentFramework from "@/components/sections/EmpowermentFramework";
import WhyItMatters from "@/components/sections/WhyItMatters";
import ImpactJourneySection from "@/components/sections/ImpactJourneySection";
import IndiaMapSection from "@/components/sections/IndiaMapSection";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import GuidingValues from "@/components/sections/GuidingValues";
import CommunityMoments from "@/components/sections/CommunityMoments";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import MissionContinues from "@/components/sections/MissionContinues";
import Footer from "@/components/sections/Footer";
import FloatingAssistant from "@/components/FloatingAssistant";

const Index = () => (
  <main>
    <Navbar />
    <div id="hero"><HeroSection /></div>
    <div id="about"><AboutSection /></div>
    <div id="mission"><MissionSection /></div>
    <div id="focus"><FocusSection /></div>
    <div id="impact"><ImpactSection /></div>
    <ImpactSnapshot />
    <FinancialAwarenessExplainer />
    <FinancialLiteracyCore />
    <div id="framework"><EmpowermentFramework /></div>
    <WhyItMatters />
    <div id="journey"><ImpactJourneySection /></div>
    <IndiaMapSection />
    <JourneyTimeline />
    <GuidingValues />
    <div id="community"><CommunityMoments /></div>
    <div id="founder"><FounderSpotlight /></div>
    <MissionContinues />
    <Footer />
    <FloatingAssistant />
  </main>
);

export default Index;
