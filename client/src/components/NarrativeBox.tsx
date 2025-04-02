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

  // Style for adding vibrant doodle elements
  const doodleStyle = {
    position: "absolute" as const,
    width: "40px",
    height: "40px",
    top: "-15px",
    right: "-15px",
    opacity: 0.9,
    zIndex: 10,
  };

  return (
    <motion.div
      ref={boxRef}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`relative backdrop-blur-sm p-6 max-w-xl ${alignmentClasses} ${className}`}
      style={{ 
        textShadow: "1px 1px 0px rgba(255, 255, 255, 0.9)",
      }}
    >
      {/* Decorative doodle element */}
      <div style={doodleStyle} className="peek-animation">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <path 
            d="M10,50 Q25,25 50,50 T90,50" 
            stroke="#FF5A5F" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round"
          />
          <path 
            d="M20,70 Q35,45 60,70 T100,70" 
            stroke="#33CA7F" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round"
            strokeDasharray="5,5"
          />
        </svg>
      </div>
      
      {title && (
        <h2 
          className="font-display text-2xl font-medium mb-4" 
          style={{ color: "#3D5A80", letterSpacing: "0.02em" }}
        >
          {title}
        </h2>
      )}
      <div 
        className="font-body leading-relaxed" 
        style={{ color: "#2D3047", fontWeight: 500, fontSize: "1.05rem" }}
      >
        {children}
      </div>
      
      {/* Extra decorative elements */}
      <div className="absolute -bottom-2 -left-2 w-8 h-8">
        <svg viewBox="0 0 30 30" width="100%" height="100%">
          <circle cx="15" cy="15" r="10" fill="none" stroke="#FFD600" strokeWidth="2" />
          <circle cx="15" cy="15" r="5" fill="none" stroke="#FFD600" strokeWidth="1" />
        </svg>
      </div>
    </motion.div>
  );
};

export default NarrativeBox;
