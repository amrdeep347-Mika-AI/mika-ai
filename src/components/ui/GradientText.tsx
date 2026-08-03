"use client";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`
        bg-gradient-to-r
        from-cyan-300
        via-sky-400
        to-blue-500
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
}