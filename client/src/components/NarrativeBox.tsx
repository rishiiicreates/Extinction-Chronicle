import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface NarrativeBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right" | "center";
}

const NarrativeBox = ({ title, children, className = "", align = "left" }: NarrativeBoxProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  let alignmentClasses = "";
  if (align === "right") {
    alignmentClasses = "ml-auto text-right";
  } else if (align === "center") {
    alignmentClasses = "mx-auto text-center";
  }

  return (
    <motion.div
      ref={boxRef}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`bg-[#F8F7F3] bg-opacity-95 backdrop-blur-md rounded-lg border border-[#00000015] shadow-sm p-6 max-w-xl relative ${alignmentClasses} ${className}`}
    >
      {title && (
        <h2 className="font-display text-2xl font-medium mb-4 text-[#3D5A80]">{title}</h2>
      )}
      <div className="prose prose-sm font-body text-slate-700 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

export default NarrativeBox;
