import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { extinctionEvents, formatTimelineYear, ExtinctionEvent } from "@/data/extinctionEvents";
import { Calendar, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ExtinctionTimelineProps {
  className?: string;
}

const ExtinctionTimeline: React.FC<ExtinctionTimelineProps> = ({ className = "" }) => {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number>(0);
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState<boolean>(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Sort the events chronologically from oldest to newest
  const sortedEvents = [...extinctionEvents].sort((a, b) => a.year - b.year);

  const selectedEvent = sortedEvents[selectedEventIndex];
  
  // Handle navigation through events
  const navigateEvent = (direction: "next" | "prev") => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsEventDetailsOpen(false);
    
    setTimeout(() => {
      if (direction === "next" && selectedEventIndex < sortedEvents.length - 1) {
        setSelectedEventIndex(prev => prev + 1);
      } else if (direction === "prev" && selectedEventIndex > 0) {
        setSelectedEventIndex(prev => prev - 1);
      }
      setIsAnimating(false);
    }, 300);
  };

  // Calculate the position on the timeline based on event year
  const calculatePosition = (event: ExtinctionEvent) => {
    // Get the oldest and newest events
    const oldestYear = sortedEvents[0].year;
    const newestYear = sortedEvents[sortedEvents.length - 1].year;
    const range = newestYear - oldestYear;
    
    // Calculate position as percentage (oldest = 0%, newest = 100%)
    return ((event.year - oldestYear) / range) * 100;
  };

  // Scroll timeline to center selected event
  useEffect(() => {
    if (timelineRef.current) {
      const eventElement = document.getElementById(`event-marker-${selectedEvent.id}`);
      if (eventElement) {
        const scrollPosition = eventElement.offsetLeft - (timelineRef.current.clientWidth / 2) + (eventElement.clientWidth / 2);
        timelineRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedEventIndex, selectedEvent.id]);

  return (
    <div className={`${className} paper-texture rounded-lg p-6 relative`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-[#E53E3E]" />
          <span>Extinction Timeline</span>
        </h2>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateEvent("prev")}
            disabled={selectedEventIndex === 0 || isAnimating}
            className="border-dashed hover:border-solid"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="ml-1">Older</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateEvent("next")}
            disabled={selectedEventIndex === sortedEvents.length - 1 || isAnimating}
            className="border-dashed hover:border-solid"
          >
            <span className="mr-1">Newer</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Timeline visualization */}
      <div 
        className="w-full overflow-x-auto py-4 mb-4 hide-scrollbar"
        ref={timelineRef}
      >
        <div className="relative w-[1200px] h-8">
          {/* Timeline track */}
          <div className="absolute top-1/2 w-full h-1 bg-gray-200 transform -translate-y-1/2 rounded-full"></div>
          
          {/* Event markers */}
          {sortedEvents.map((event, index) => {
            const position = calculatePosition(event);
            return (
              <div
                id={`event-marker-${event.id}`}
                key={event.id}
                className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-300 z-10 ${selectedEventIndex === index ? 'scale-125' : 'scale-100'}`}
                style={{ left: `${position}%` }}
                onClick={() => {
                  if (selectedEventIndex !== index) {
                    setIsAnimating(true);
                    setIsEventDetailsOpen(false);
                    setTimeout(() => {
                      setSelectedEventIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  } else {
                    setIsEventDetailsOpen(!isEventDetailsOpen);
                  }
                }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          selectedEventIndex === index 
                            ? 'bg-[#E53E3E] ring-4 ring-[#E53E3E] ring-opacity-30' 
                            : 'bg-gray-400 hover:bg-[#E53E3E]'
                        }`}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">
                        <div className="font-bold">{event.title}</div>
                        <div>{formatTimelineYear(event.year)}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            );
          })}
          
          {/* Era labels */}
          <div className="absolute -bottom-8 left-0 text-xs text-gray-500">
            {formatTimelineYear(sortedEvents[0].year)}
          </div>
          <div className="absolute -bottom-8 right-0 text-xs text-gray-500">
            {formatTimelineYear(sortedEvents[sortedEvents.length - 1].year)}
          </div>
        </div>
      </div>

      {/* Selected event info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedEvent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg p-4 shadow-md relative border-2 border-dashed border-[#E53E3E] border-opacity-40"
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-[#E53E3E] border-opacity-40 text-sm whitespace-nowrap">
            {formatTimelineYear(selectedEvent.year)} • {selectedEvent.era}
          </div>
          
          <h3 className="text-xl font-bold mt-2 mb-2 text-[#E53E3E]">{selectedEvent.title}</h3>
          
          <p className="text-gray-700 mb-3">{selectedEvent.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-medium text-sm flex items-center mb-2">
                <span className="w-2 h-2 bg-[#E53E3E] rounded-full mr-2"></span>
                Lost Species
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700 ml-2">
                {selectedEvent.species.map((species, index) => (
                  <li key={index} className="mb-1">{species}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm flex items-center mb-2">
                <span className="w-2 h-2 bg-[#E53E3E] rounded-full mr-2"></span>
                Main Causes
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700 ml-2">
                {selectedEvent.causes.map((cause, index) => (
                  <li key={index} className="mb-1">{cause}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {isEventDetailsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              {/* Additional information would be here */}
              <p className="text-sm text-gray-600">
                This extinction event represents a significant moment in Earth's history where 
                biodiversity was severely impacted. The effects of such mass extinctions can 
                last for millions of years, altering evolutionary paths and ecological systems.
              </p>
            </motion.div>
          )}
          
          <div className="mt-4 flex justify-end">
            <Button
              variant="ghost" 
              size="sm"
              className="text-xs flex items-center"
              onClick={() => setIsEventDetailsOpen(!isEventDetailsOpen)}
            >
              <Info className="w-3 h-3 mr-1" />
              {isEventDetailsOpen ? "Show less" : "Learn more"}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExtinctionTimeline;