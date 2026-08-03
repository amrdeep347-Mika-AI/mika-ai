"use client";

import { Check } from "lucide-react";

const plans = [
  {
    title: "Basic",
    price: "Free",
    subtitle: "",
    popular: false,
    border: "border-cyan-400/20",
  },
  {
    title: "Pro",
    price: "₹299",
    subtitle: "/month",
    popular: true,
    border: "border-cyan-400",
  },
  {
    title: "Ultimate",
    price: "₹599",
    subtitle: "/month",
    popular: false,
    border: "border-violet-400/40",
  },
];

export default function PricingRow() {
  return (
    <div className="grid grid-cols-3 gap-5 h-[180px]">
      {plans.map((plan) => (
        <div
          key={plan.title}
          className={`
            relative
            rounded-[10px]
            border
            ${plan.border}
            bg-[#081321]/90
            backdrop-blur-xl
            px-5
            py-4
            flex
            flex-col
            justify-between
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_0_35px_rgba(0,220,255,.12)]
          `}
        >
          {plan.popular && (
            <div className="absolute top-3 right-3 rounded-full bg-cyan-400 px-3 py-1 text-[10px] font-bold text-black">
              POPULAR
            </div>
          )}

          <div>
            <h3 className="text-lg font-bold text-white">
              {plan.title}
            </h3>

            <div className="flex items-end gap-1 mt-2">
              <span className="text-3xl font-black text-cyan-300">
                {plan.price}
              </span>

              {plan.subtitle && (
                <span className="text-sm text-slate-400 mb-1">
                  {plan.subtitle}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2 text-sm">

            <div className="flex items-center gap-2">
              <Check size={15} className="text-cyan-300" />
              <span className="text-slate-300">
                Unlimited Lessons
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Check size={15} className="text-cyan-300" />
              <span className="text-slate-300">
                AI Teacher
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Check size={15} className="text-cyan-300" />
              <span className="text-slate-300">
                Progress Tracking
              </span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}