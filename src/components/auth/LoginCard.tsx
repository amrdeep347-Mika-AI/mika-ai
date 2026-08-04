"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Chrome,
} from "lucide-react";

export default function LoginCard() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
      w-full
      max-w-lg
      mx-auto
      rounded-3xl
      border border-white/10
      bg-white/10
      backdrop-blur-2xl
      p-2
      shadow-[0_0_60px_rgba(0,200,255,.15)]
      "
    >
      {/* Heading */}

      <h2 className="text-4xl font-black text-white">
        Welcome
      </h2>

      <p className="text-slate-300 mt-2">
        Continue your learning journey.
      </p>

      {/* Tabs */}

      <div className="flex mt-8 rounded-full bg-white/5 p-1">

        <button
          onClick={() => setTab("login")}
          className={`flex-1 py-3 rounded-full transition ${
            tab === "login"
              ? "bg-cyan-500 text-white"
              : "text-slate-300"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setTab("signup")}
          className={`flex-1 py-3 rounded-full transition ${
            tab === "signup"
              ? "bg-cyan-500 text-white"
              : "text-slate-300"
          }`}
        >
          Sign Up
        </button>

      </div>

      {/* Email */}

      <div className="mt-4">

        <label className="text-slate-300 text-sm">
          Email
        </label>

        <div className="mt-2 flex items-center rounded-2xl bg-white/5 border border-white/10 px-4">

          <Mail size={18} className="text-cyan-300" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent p-4 outline-none text-white"
          />

        </div>

      </div>

      {/* Password */}

      <div className="mt-6">

        <label className="text-slate-300 text-sm">
          Password
        </label>

        <div className="mt-2 flex items-center rounded-2xl bg-white/5 border border-white/10 px-4">

          <Lock size={18} className="text-cyan-300" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full bg-transparent p-4 outline-none text-white"
          />

          <button
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? (
              <EyeOff
                size={18}
                className="text-slate-400"
              />
            ) : (
              <Eye
                size={18}
                className="text-slate-400"
              />
            )}
          </button>

        </div>

      </div>

      {/* Forgot */}

      {tab === "login" && (
        <div className="text-right mt-3">
          <button className="text-cyan-300 text-sm hover:underline">
            Forgot Password?
          </button>
        </div>
      )}

      {/* Continue */}

      <button
        className="
        mt-4
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-cyan-400
        to-blue-600
        py-3
        text-white
        font-bold
        hover:scale-[1.02]
        transition
        "
      >
        {tab === "login"
          ? "Continue"
          : "Create Account"}
      </button>

      {/* Divider */}

      <div className="flex items-center gap-4 my-8">

        <div className="flex-1 h-px bg-white/10" />

        <span className="text-slate-400 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-white/10" />

      </div>

      {/* Google */}

      <button
        className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        py-4
        text-white
        flex
        items-center
        justify-center
        gap-3
        hover:bg-white/10
        transition
        "
      >
        <span className="text-xl">G</span>

        Continue with Google

      </button>

    </motion.div>
  );
}