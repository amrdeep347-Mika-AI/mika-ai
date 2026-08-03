"use client";

import { BrainCircuit, Send } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#081321] via-[#0b1d32] to-[#081321]">

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1300px] h-[350px] rounded-full bg-cyan-500/8 blur-[180px]" />

      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-2">

        <div className="grid grid-cols-12 gap-1">

          {/* Brand */}

          <div className="col-span-3">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">

                <BrainCircuit
                  size={24}
                  className="text-cyan-300"
                />

              </div>

              <div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  Mika AI
                </h2>

                <p className="text-sm text-slate-200">
                  Your Personal AI Teacher
                </p>

              </div>

            </div>

            <p className="mt-3 text-sm leading-6 text-slate-200">

              Empowering students from Class 1 to 12 through
              AI-powered personalized learning and smart education.

            </p>

            {/* Social */}

            <div className="mt-4 flex gap-3">

              {[FaFacebookF, FaInstagram, FaYoutube, FaXTwitter].map(
                (Icon, index) => (

                  <button
                    key={index}
                    className="
                      w-11
                      h-11
                      rounded-xl
                      border
                      border-cyan-400/20
                      bg-white/5
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      hover:border-cyan-300
                      hover:bg-cyan-500/15
                      hover:shadow-[0_0_25px_rgba(34,211,238,.35)]
                    "
                  >

                    <Icon className="text-cyan-300 text-base" />

                  </button>

                )
              )}

            </div>

          </div>

          {/* Product */}

          <div className="col-span-2">

            <h3 className="mb-3 text-xl font-bold text-white">
  Product
</h3>

<div className="space-y-2 text-sm">
  <a
  href="#"
  style={{
    color: "#ffffff",
    fontWeight: "500",
  }}
>
  Classes
</a>
  <a href="#" className="block text-cyan-200 hover:text-cyan-400 hover:text-cyan-300 transition">
    Features
  </a>
  <a href="#" className="block text-cyan-200 hover:text-cyan-400 hover:text-cyan-300 transition">
    Pricing
  </a>
  <a href="#" className="block text-cyan-200 hover:text-cyan-400 hover:text-cyan-300 transition">
    AI Tutor
  </a>
</div>

          </div>

          {/* Company */}

          <div className="col-span-2">

            <h3 className="mb-3 text-xl font-bold text-white">
              Company
            </h3>

            <div className="space-y-2 text-sm">
  <a href="#" className="block text-emerald-300 hover:text-cyan-300 transition">
    About us
  </a>
  <a href="#" className="block text-emerald-300 hover:text-cyan-300 transition">
    Blog
  </a>
  <a href="#" className="block text-emerald-300 hover:text-cyan-300 transition">
    Careers
  </a>
  <a href="#" className="block text-emerald-300 hover:text-cyan-300 transition">
    Contact
  </a>
</div>

          </div>

          {/* Support */}

          <div className="col-span-2">

            <h3 className="mb-3 text-xl font-bold text-white">
              Support
            </h3>

            <div className="space-y-2 text-sm">
  <a href="#" className="block text-emerald-300 hover:text-cyan-300 transition">
    Help Center
  </a>
  <a href="#" className="block text-emerald-300 hover:text-cyan-300 transition">
    Privacy Policy
  </a>
  <a href="#" className="block text-emerald-300 hover:text-cyan-300 transition">
    Terms of Use
  </a>
  <a href="#" className="block text-emerald-300 hover:text-cyan-300 transition">
    Refund Policy
  </a>
</div>

          </div>

          {/* Newsletter */}

          <div className="col-span-3">

            <h3 className="mb-3 text-xl font-bold text-white">
              Stay Updated
            </h3>

            <p className="text-sm leading-6 text-slate-200">

              Subscribe for product updates, AI learning tips,
              and exciting new features from Mika AI.

            </p>

            <div className="relative mt-4">

              <input
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-xl
                  border
                  border-cyan-400/20
                  bg-white/5
                  py-3
                  pl-5
                  pr-14
                  text-white
                  placeholder:text-slate-300
                  outline-none
                  focus:border-cyan-300
                "
              />

              <button
                className="
                  absolute
                  right-2
                  top-1/2
                  -translate-y-1/2
                  w-10
                  h-10
                  rounded-lg
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-600
                  flex
                  items-center
                  justify-center
                  transition
                  hover:scale-105
                "
              >

                <Send
                  size={16}
                  className="text-white"
                />

              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-1 border-t border-cyan-400/20 pt-4 flex items-center justify-between">

          <p className="text-sm text-slate-300">
            © 2026 Mika AI. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm">

            <a
              href="#"
              className="text-slate-300 transition hover:text-cyan-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-slate-300 transition hover:text-cyan-300"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}