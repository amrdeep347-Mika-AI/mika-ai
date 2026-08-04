import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero/Hero";
import FeatureStrip from "@/components/home/FeatureStrip";
import Dashboard from "@/components/home/dashboard/Dashboard";
import Footer from "@/components/home/footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#040816]">
      <Navbar />

      <section id="hero">
  <Hero />
</section>

<section id="features">
  <FeatureStrip />
</section>

<section id="dashboard">
  <Dashboard />
</section>

<section id="footer">
  <Footer />
</section>
    </main>
  );
}