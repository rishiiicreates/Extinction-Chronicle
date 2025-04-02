export interface ConservationProject {
  id: number;
  title: string;
  location: string;
  description: string;
  species: string[];
  impact: string;
  website: string;
}

export const conservationProjects: ConservationProject[] = [
  {
    id: 1,
    title: "Tiger Protection Force",
    location: "India & Nepal",
    description: "A dedicated anti-poaching initiative that employs former poachers as guardians of tiger habitats, utilizing their knowledge of the forest to protect these magnificent big cats.",
    species: ["Bengal Tiger", "Indochinese Tiger"],
    impact: "Helped increase tiger populations by 40% in protected areas since 2015.",
    website: "www.tigerprotection.org"
  },
  {
    id: 2,
    title: "Coral Reef Restoration Project",
    location: "Great Barrier Reef, Australia",
    description: "Uses innovative techniques to grow heat-resistant coral colonies that can withstand rising ocean temperatures due to climate change.",
    species: ["Hawksbill Turtle", "Reef Fish", "Corals"],
    impact: "Successfully restored over 25 acres of damaged reef systems.",
    website: "www.reefrestoration.org"
  },
  {
    id: 3,
    title: "Amazon Connectivity Corridor",
    location: "Brazil & Peru",
    description: "Creates protected forest corridors linking fragmented habitats to allow species movement and genetic diversity across the Amazon rainforest.",
    species: ["Golden Lion Tamarin", "Jaguar", "Poison Dart Frogs"],
    impact: "Connected over 3 million acres of previously isolated forest fragments.",
    website: "www.amazoncorridors.org"
  },
  {
    id: 4,
    title: "African Elephant Sanctuary",
    location: "Kenya",
    description: "Provides safe haven for orphaned elephants and works with local communities to reduce human-wildlife conflict through sustainable practices.",
    species: ["African Forest Elephant", "African Savanna Elephant"],
    impact: "Successfully rehabilitated and released 83 elephants back into the wild.",
    website: "www.elephantsanctuary.org"
  },
  {
    id: 5,
    title: "Island Predator Control Initiative",
    location: "New Zealand",
    description: "Removes invasive predators like rats and stoats from island ecosystems to protect vulnerable native birds that evolved without mammalian predators.",
    species: ["Kakapo", "Kiwi", "Takahe"],
    impact: "Created pest-free sanctuaries on 118 islands, allowing endemic bird species to recover.",
    website: "www.predatorfreeislands.org"
  }
];
