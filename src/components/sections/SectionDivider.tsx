import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "curve" | "leaf";
  flip?: boolean;
  className?: string;
}

const SectionDivider = ({ variant = "wave", flip = false, className = "" }: SectionDividerProps) => {
  const transforms = flip ? "rotate-180" : "";

  return (
    <div className={`w-full overflow-hidden leading-none ${transforms} ${className}`}>
      {variant === "wave" && (
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="hsl(var(--background))" />
        </svg>
      )}
      {variant === "curve" && (
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 60C0 60 360 0 720 0C1080 0 1440 60 1440 60H0Z" fill="hsl(var(--background))" />
        </svg>
      )}
      {variant === "leaf" && (
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
          <path d="M0 80C200 20 400 60 600 30C800 0 1000 50 1200 20C1350 0 1440 40 1440 40V80H0Z" fill="hsl(var(--earth-cream))" />
        </svg>
      )}
    </div>
  );
};

export default SectionDivider;
