import { useEffect, useRef, useState } from "react";
import { Route, Switch } from "wouter";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import SceneProgress from "@/components/SceneProgress";
import Footer from "@/components/Footer";

// Scenes
import IntroScene from "@/scenes/IntroScene";
import CrystalScene from "@/scenes/CrystalScene";
import BirdsScene from "@/scenes/BirdsScene";
import IslandScene from "@/scenes/IslandScene";
import DesertScene from "@/scenes/DesertScene";
import OutroScene from "@/scenes/OutroScene";

// Hook for handling scroll
import { useScroll } from "@/hooks/useScroll";

function ExtinctionChronicle() {
  const appRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollProgress } = useScroll();
  const [activeScene, setActiveScene] = useState<number>(0);

  // Track which scene is currently active based on scroll position
  useEffect(() => {
    const sceneElements = document.querySelectorAll('.scene');
    
    let currentIndex = 0;
    sceneElements.forEach((scene, index) => {
      const rect = scene.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentIndex = index;
      }
    });
    
    setActiveScene(currentIndex);
  }, [scrollY]);

  const scrollToScene = (index: number) => {
    const sceneElements = document.querySelectorAll('.scene');
    if (sceneElements[index]) {
      window.scrollTo({
        top: sceneElements[index].getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={appRef} className="relative">
      <Navigation />
      <SceneProgress 
        progress={scrollProgress} 
        activeScene={activeScene}
        onSceneClick={scrollToScene}
      />
      
      <main className="relative">
        <IntroScene onBeginClick={() => scrollToScene(1)} />
        <CrystalScene />
        <BirdsScene />
        <IslandScene />
        <DesertScene />
        <OutroScene />
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={ExtinctionChronicle} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
