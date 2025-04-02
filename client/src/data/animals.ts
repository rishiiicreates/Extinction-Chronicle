export const animals = [
  {
    id: 1,
    name: "Amur Leopard",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Less than 100 remain in the wild",
    location: "Far East Russia",
    description: "The Amur leopard is one of the world's most endangered big cats. It is known for its beautiful spotted coat and long legs, making it well adapted to the cold climate and snowy landscapes of its habitat.",
    threats: [
      "Poaching for fur and body parts",
      "Habitat loss due to human development",
      "Forest fires",
      "Inbreeding due to small population"
    ],
    conservation: "Conservation efforts include anti-poaching patrols, habitat protection, and captive breeding programs. The Land of the Leopard National Park in Russia has been established to protect their remaining habitat."
  },
  {
    id: 2,
    name: "Vaquita Porpoise",
    image: "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Only 10 individuals estimated to remain",
    location: "Gulf of California",
    description: "The vaquita is the world's smallest cetacean and the most endangered marine mammal. These small porpoises are rarely seen and have a distinctive dark ring around their eyes.",
    threats: [
      "Illegal gillnet fishing",
      "Bycatch in fishing gear intended for other species",
      "Small population size leading to genetic issues",
      "Habitat degradation"
    ],
    conservation: "Conservation measures include a gillnet ban in their habitat, increased enforcement against illegal fishing, and efforts to develop alternative fishing gear that does not threaten vaquitas."
  },
  {
    id: 3,
    name: "Sumatran Orangutan",
    image: "https://images.unsplash.com/photo-1544298903-35ebd535431c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Fewer than 14,000 remain",
    location: "Indonesia",
    description: "Sumatran orangutans are known for their remarkable intelligence and striking red fur. They are the most arboreal of all great apes, spending nearly all their time in the trees.",
    threats: [
      "Deforestation for palm oil plantations",
      "Illegal pet trade",
      "Human-wildlife conflict",
      "Road development fragmenting habitat"
    ],
    conservation: "Conservation efforts include habitat protection, rehabilitation of orphaned orangutans, sustainable palm oil initiatives, and community education programs."
  },
  {
    id: 4,
    name: "Javan Rhino",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Only 67 individuals remain",
    location: "Java, Indonesia",
    description: "The Javan rhino is one of the rarest large mammals on Earth. Unlike African rhinos, Asian rhinos like the Javan have only one horn and skin folds that give them an armored appearance.",
    threats: [
      "Extremely small population size",
      "Potential for disease outbreak",
      "Habitat loss",
      "Natural disasters like tsunamis or volcanic eruptions"
    ],
    conservation: "Conservation is focused on protecting their last remaining habitat in Ujung Kulon National Park, controlling invasive species that compete for food, and potentially establishing a second population as insurance."
  },
  {
    id: 5,
    name: "Hawksbill Turtle",
    image: "https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Unknown, but severely declining",
    location: "Tropical oceans worldwide",
    description: "Hawksbill turtles play a crucial role in maintaining healthy coral reefs by removing sponges that would otherwise outcompete reef-building corals. They have a distinctive pointed beak resembling a hawk's bill.",
    threats: [
      "Illegal shell trade (tortoiseshell)",
      "Egg harvesting",
      "Coastal development destroying nesting beaches",
      "Ocean pollution, especially plastic"
    ],
    conservation: "Conservation includes protecting nesting beaches, reducing bycatch in fishing gear, regulating the tortoiseshell trade, and raising awareness about their importance to coral reef ecosystems."
  },
  {
    id: 6,
    name: "Saola",
    image: "https://images.unsplash.com/photo-1586094332066-ff4b44049c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Unknown, possibly fewer than 100",
    location: "Vietnam and Laos",
    description: "The saola, often called the 'Asian unicorn,' was only discovered by scientists in 1992. This elusive forest-dwelling bovine has two parallel horns and a striking white facial pattern.",
    threats: [
      "Hunting with snares set for other animals",
      "Habitat loss from logging and agriculture",
      "Small population size",
      "Infrastructure development"
    ],
    conservation: "Conservation strategies include snare removal programs, establishment of protected areas, training of conservation teams, and efforts to use camera traps to better understand their distribution."
  },
  {
    id: 7,
    name: "Giant Panda",
    image: "https://images.unsplash.com/photo-1566487097168-e91a4f38bee2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Vulnerable" as const,
    population: "Around 1,864 in the wild",
    location: "Central China",
    description: "The giant panda is recognized worldwide for its distinctive black and white coat. They have a specialized diet consisting almost entirely of bamboo, requiring them to eat up to 38 kg per day.",
    threats: [
      "Habitat fragmentation",
      "Limited food resources (bamboo flowering and die-off)",
      "Low reproductive rate",
      "Climate change affecting bamboo distribution"
    ],
    conservation: "Conservation successes include establishment of nature reserves, captive breeding programs, and habitat corridors connecting isolated populations. Giant pandas have been downlisted from Endangered to Vulnerable due to conservation efforts."
  },
  {
    id: 8,
    name: "California Condor",
    image: "https://images.unsplash.com/photo-1612811323089-7dce012d0a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Around 500 individuals (captive and wild)",
    location: "California, Arizona, Utah, and Baja California",
    description: "The California condor is North America's largest land bird with a wingspan of up to 3 meters. These magnificent scavengers play a vital role in their ecosystem by cleaning up carrion.",
    threats: [
      "Lead poisoning from ammunition in carcasses",
      "Habitat loss",
      "Power line collisions",
      "Microtrash ingestion"
    ],
    conservation: "Conservation includes captive breeding and reintroduction programs, lead ammunition bans, power line modifications, and nest site protection. The population has increased from just 22 individuals in the 1980s."
  },
  {
    id: 9,
    name: "Cross River Gorilla",
    image: "https://images.unsplash.com/photo-1548699371-3f92dee3e0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Fewer than 300 remain",
    location: "Nigeria-Cameroon border region",
    description: "The Cross River gorilla is the most endangered of all great apes. They differ from other gorilla subspecies in skull and tooth dimensions and have distinct behavioral and habitat preferences.",
    threats: [
      "Poaching",
      "Habitat loss due to logging and agriculture",
      "Small, fragmented population",
      "Disease transmission from humans"
    ],
    conservation: "Conservation strategies include community-based protection, anti-poaching patrols, land-use planning, and genetic research to monitor population health and diversity."
  },
  {
    id: 10,
    name: "Philippine Eagle",
    image: "https://images.unsplash.com/photo-1557119275-e7d71869d8fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Less than 400 breeding pairs",
    location: "Philippines",
    description: "The Philippine eagle is one of the world's largest eagles, with a wingspan of over 2 meters. These powerful birds of prey are apex predators and serve as indicators of forest health and biodiversity.",
    threats: [
      "Deforestation",
      "Hunting",
      "Mining and development",
      "Climate change affecting breeding"
    ],
    conservation: "Conservation includes captive breeding programs, habitat protection, community education, and strengthening legal protections. The Philippine Eagle Center plays a key role in conservation efforts."
  },
  {
    id: 11,
    name: "Snow Leopard",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Vulnerable" as const,
    population: "4,000-6,500 in the wild",
    location: "Central and South Asia mountain ranges",
    description: "Snow leopards are perfectly adapted to life in the harsh, cold mountains with their thick fur, wide paws, and long tails that help with balance. Their pale gray color provides excellent camouflage against rocky slopes.",
    threats: [
      "Poaching for fur and body parts",
      "Retaliatory killing by farmers protecting livestock",
      "Mining and infrastructure development",
      "Climate change affecting mountain ecosystems"
    ],
    conservation: "Conservation efforts include anti-poaching initiatives, community-based livestock insurance programs, protected area management, and international cooperation across their range countries."
  },
  {
    id: 12,
    name: "Black Rhino",
    image: "https://images.unsplash.com/photo-1557050661-8930a7f5d764?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Around 5,600 individuals",
    location: "Eastern and Southern Africa",
    description: "The black rhinoceros is a browser with a pointed upper lip that helps it feed on leaves from bushes and trees. Despite its name, it's actually gray in color and distinguished from white rhinos by its smaller size and hooked upper lip.",
    threats: [
      "Poaching for rhino horn",
      "Habitat loss",
      "Political instability in range countries",
      "Genetic bottlenecks in small populations"
    ],
    conservation: "Conservation includes intensive anti-poaching efforts, dehorning programs, translocation to establish new populations, community engagement, and demand reduction campaigns in consumer countries."
  },
  {
    id: 13,
    name: "Kakapo",
    image: "https://images.unsplash.com/photo-1544979590-37e9b46f40e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Around 200 individuals",
    location: "New Zealand",
    description: "The kakapo is the world's only flightless parrot and one of the longest-living birds, potentially reaching 90 years of age. They are nocturnal, with moss-green feathers that provide excellent camouflage in their forest habitat.",
    threats: [
      "Introduced predators (cats, rats, stoats)",
      "Low genetic diversity",
      "Low reproductive rate",
      "History of habitat loss"
    ],
    conservation: "Conservation includes intensive management on predator-free islands, supplementary feeding, artificial incubation of eggs, and genetic management to maintain diversity in this small population."
  },
  {
    id: 14,
    name: "Tiger",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Endangered" as const,
    population: "Around 3,900 in the wild",
    location: "Parts of Asia",
    description: "The tiger is the largest cat species and a formidable apex predator. Each tiger has a unique pattern of stripes, much like human fingerprints. As keystone species, they help maintain the health of their ecosystems.",
    threats: [
      "Poaching for traditional medicine and trophies",
      "Habitat loss and fragmentation",
      "Human-wildlife conflict",
      "Depletion of prey species"
    ],
    conservation: "Conservation includes anti-poaching patrols, protected area management, wildlife corridors connecting habitats, community-based conservation, and international cooperation through initiatives like the Global Tiger Recovery Program."
  },
  {
    id: 15,
    name: "North Atlantic Right Whale",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Critically Endangered" as const,
    population: "Fewer than 370 remain",
    location: "North Atlantic Ocean",
    description: "The North Atlantic right whale is one of the world's most endangered large whale species. They have distinctive callosities (rough patches of skin) on their heads, which appear white due to whale lice and allow scientists to identify individuals.",
    threats: [
      "Ship strikes",
      "Entanglement in fishing gear",
      "Ocean noise pollution",
      "Climate change affecting feeding areas"
    ],
    conservation: "Conservation measures include vessel speed restrictions, fishing gear modifications, acoustic monitoring systems to track whale locations, and emergency response networks for entangled whales."
  }
];
