interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`relative py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1600px] px-16">
        {children}
      </div>
    </section>
  );
}