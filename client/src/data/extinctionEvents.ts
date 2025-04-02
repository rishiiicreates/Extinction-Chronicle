export interface ExtinctionEvent {
  id: string;
  year: number;
  era: string;
  title: string;
  description: string;
  species: string[];
  causes: string[];
  imageUrl?: string;
}

export const extinctionEvents: ExtinctionEvent[] = [
  {
    id: "ordovician-silurian",
    year: -440000000, // 440 million years ago
    era: "Ordovician-Silurian",
    title: "Ordovician-Silurian Extinction",
    description: "The first of the five major extinction events, caused by rapid cooling, glaciation, and falling sea levels. An estimated 85% of marine species were lost.",
    species: ["Trilobites", "Brachiopods", "Graptolites", "Conodonts"],
    causes: ["Climate change", "Glaciation", "Sea level drop"],
  },
  {
    id: "late-devonian",
    year: -375000000, // 375 million years ago
    era: "Late Devonian",
    title: "Late Devonian Extinction",
    description: "A prolonged series of extinctions lasting perhaps 20 million years, wiping out 70-80% of species. Particularly affected reef-building organisms and shallow marine life.",
    species: ["Armored fish", "Primitive sharks", "Ammonites", "Trilobites"],
    causes: ["Ocean anoxia", "Climate change", "Meteor impacts"],
  },
  {
    id: "permian-triassic",
    year: -252000000, // 252 million years ago
    era: "Permian-Triassic",
    title: "Permian-Triassic Extinction",
    description: "The most severe extinction event, known as 'The Great Dying'. Around 96% of marine species and 70% of land vertebrates disappeared. Life took 10 million years to recover.",
    species: ["Trilobites", "Rugose corals", "Many reptile species", "Most large amphibians"],
    causes: ["Volcanic eruptions", "Methane release", "Ocean acidification", "Global warming"],
  },
  {
    id: "triassic-jurassic",
    year: -201000000, // 201 million years ago
    era: "Triassic-Jurassic",
    title: "Triassic-Jurassic Extinction",
    description: "This event eliminated about 80% of species, including many large reptile groups, opening niches for dinosaurs to diversify in the Jurassic period.",
    species: ["Conodonts", "Many marine reptiles", "Large amphibians", "Many therapsids"],
    causes: ["Volcanic activity", "Climate change", "Sea level changes"],
  },
  {
    id: "cretaceous-paleogene",
    year: -66000000, // 66 million years ago
    era: "Cretaceous-Paleogene",
    title: "Cretaceous-Paleogene Extinction",
    description: "The famous extinction that killed the non-avian dinosaurs. About 75% of all species went extinct, likely due to an asteroid impact combined with volcanic activity.",
    species: ["Non-avian dinosaurs", "Pterosaurs", "Mosasaurs", "Ammonites", "Many marine reptiles"],
    causes: ["Asteroid impact", "Volcanic eruptions", "Climate change"],
  },
  {
    id: "quaternary",
    year: -50000, // 50,000 years ago
    era: "Quaternary",
    title: "Quaternary Extinction",
    description: "An ongoing extinction event that began about 50,000 years ago, characterized by the extinction of many large mammals (megafauna) and island species.",
    species: ["Woolly mammoths", "Giant ground sloths", "Cave bears", "Saber-toothed cats", "Dodos"],
    causes: ["Human activity", "Climate change", "Habitat loss"],
  },
  {
    id: "dodo",
    year: -1662, // 1662 CE
    era: "Human Era",
    title: "Dodo Extinction",
    description: "The flightless dodo bird of Mauritius became extinct within less than a century after its discovery by humans. The last confirmed sighting was in 1662.",
    species: ["Dodo (Raphus cucullatus)"],
    causes: ["Hunting", "Habitat destruction", "Introduced predators"],
  },
  {
    id: "great-auk",
    year: -1844, // 1844 CE
    era: "Human Era",
    title: "Great Auk Extinction",
    description: "The last pair of great auks was killed in Iceland in 1844. This flightless seabird was hunted for food, eggs, and for museum collections.",
    species: ["Great Auk (Pinguinus impennis)"],
    causes: ["Hunting", "Egg collection", "Commercial exploitation"],
  },
  {
    id: "passenger-pigeon",
    year: -1914, // 1914 CE
    era: "Modern Era",
    title: "Passenger Pigeon Extinction",
    description: "Once the most abundant bird in North America with flocks of billions, the last passenger pigeon, Martha, died in Cincinnati Zoo in 1914.",
    species: ["Passenger Pigeon (Ectopistes migratorius)"],
    causes: ["Commercial hunting", "Habitat loss", "Population fragmentation"],
  },
  {
    id: "thylacine",
    year: -1936, // 1936 CE
    era: "Modern Era",
    title: "Thylacine Extinction",
    description: "The last known Tasmanian tiger (thylacine) died in Hobart Zoo in 1936. It was hunted to extinction due to fears it would kill livestock.",
    species: ["Thylacine (Thylacinus cynocephalus)"],
    causes: ["Bounty hunting", "Habitat loss", "Disease"],
  },
  {
    id: "baiji",
    year: -2006, // 2006 CE
    era: "Contemporary Era",
    title: "Baiji River Dolphin Extinction",
    description: "Declared functionally extinct in 2006 after an extensive survey of the Yangtze River failed to find any specimens. It was the first dolphin species driven to extinction by humans.",
    species: ["Baiji (Lipotes vexillifer)"],
    causes: ["Industrial pollution", "Ship accidents", "Overfishing", "Dam construction"],
  },
  {
    id: "western-black-rhino",
    year: -2011, // 2011 CE
    era: "Contemporary Era",
    title: "Western Black Rhino Extinction",
    description: "Declared extinct in 2011 after no sightings since 2006. Intensive poaching for rhino horn was the primary cause.",
    species: ["Western Black Rhinoceros (Diceros bicornis longipes)"],
    causes: ["Poaching", "Habitat loss", "Insufficient conservation"],
  }
];

// Helper function to format timeline dates
export const formatTimelineYear = (year: number): string => {
  if (year < 0) {
    const absYear = Math.abs(year);
    if (absYear >= 1000000) {
      return `${(absYear / 1000000).toFixed(0)} million years ago`;
    } else if (absYear > 2025) {
      return `${(absYear / 1000).toFixed(0)}k years ago`;
    } else {
      return `${absYear} BCE`;
    }
  } else {
    return `${year} CE`;
  }
};