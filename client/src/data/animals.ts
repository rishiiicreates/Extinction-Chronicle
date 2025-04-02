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
    image: "https://images.unsplash.com/photo-1580164631075-b3f1304f4051?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
  }
];
