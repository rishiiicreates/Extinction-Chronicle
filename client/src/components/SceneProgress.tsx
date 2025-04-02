import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface SceneProgressProps {
  progress: number;
  activeScene: number;
  onSceneClick: (index: number) => void;
}

const SceneProgress = ({ progress, activeScene, onSceneClick }: SceneProgressProps) => {
  const scenes = [
    { name: "Intro", position: 0 },
    { name: "Crystalline Guardians", position: 20 },
    { name: "Sky Messengers", position: 40 },
    { name: "Island Sanctuaries", position: 60 },
    { name: "Arid Realms", position: 80 },
    { name: "Join Us", position: 100 }
  ];

  return (
    <div className="progress-bar fixed left-4 top-1/2 transform -translate-y-1/2 w-3 h-52 bg-primary bg-opacity-30 z-50 hidden md:block rounded-full">
      <Progress 
        value={progress * 100} 
        className="rounded-full"
        indicatorClassName="bg-accent"
      />
      <div className="progress-markers absolute left-0 w-20 h-full">
        {scenes.map((scene, index) => (
          <motion.div
            key={index}
            className={`scene-marker w-4 h-4 rounded-full bg-white border-2 absolute cursor-pointer transition-all 
            ${activeScene === index ? 'border-accent bg-accent scale-110' : 'border-accent'}`}
            style={{ top: `${scene.position}%`, left: -8, translateY: "-50%" }}
            whileHover={{ scale: 1.2 }}
            onClick={() => onSceneClick(index)}
            title={scene.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SceneProgress;
