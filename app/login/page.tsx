"use client";

import LoginBackground from "@/components/auth/LoginBackground";
import LoginHero from "@/components/auth/LoginHero";
import LoginCard from "@/components/auth/LoginCard";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050B1F]">
      <LoginBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 items-center min-h-[85vh] gap-48">

          {/* Left */}
          <LoginHero />

          {/* Right */}
          <LoginCard />

        </div>
      </div>
    </main>
  );
}