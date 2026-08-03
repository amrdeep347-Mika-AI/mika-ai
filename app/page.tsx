import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero/Hero";
import FeatureStrip from "@/components/home/FeatureStrip";
import ClassroomSection from "@/components/home/classroom/ClassroomSection";
import SubjectsSection from "@/components/home/subjects/SubjectsSection";
import ExperienceSection from "@/components/home/experience/ExperienceSection";
import ResultsSection from "@/components/home/results/ResultsSection";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import FAQ from "@/components/home/faq/FAQ";
import Footer from "@/components/home/footer/Footer";
import Dashboard from "@/components/home/dashboard/Dashboard";



export default function Home() {
  return (
    <main className="bg-[#040816]">

      <Navbar />
      <Hero />
      <FeatureStrip />
      <Dashboard />
      <Footer />

    </main>
  );
}