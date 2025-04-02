import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calculate scroll progress (0 to 1)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initialize values
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, scrollProgress };
}
