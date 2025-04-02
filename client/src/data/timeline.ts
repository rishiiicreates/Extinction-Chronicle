export interface TimelineMarker {
  id: string;
  year: number;
  percentage: number;
  description: string;
}

export const timelineMarkers: TimelineMarker[] = [
  {
    id: "marker-1900",
    year: 1900,
    percentage: 0,
    description: "Island ecosystems largely intact, with estimated 95% of native vegetation and biodiversity preserved."
  },
  {
    id: "marker-1950",
    year: 1950,
    percentage: 25,
    description: "Widespread agriculture, logging, and development begins to impact island habitats. 20% of island species showing population decline."
  },
  {
    id: "marker-1980",
    year: 1980,
    percentage: 40,
    description: "Invasive species introductions accelerate biodiversity loss. Tourism and infrastructure development further fragment habitats."
  },
  {
    id: "marker-2000",
    year: 2000,
    percentage: 60,
    description: "Over 60% of island vegetation cleared or degraded. 124 island species declared extinct in the 20th century."
  },
  {
    id: "marker-2023",
    year: 2023,
    percentage: 75,
    description: "Islands have lost over 73% of their native vegetation. Climate change impacts (rising sea levels, coral bleaching) further threaten island ecosystems."
  },
  {
    id: "marker-2050",
    year: 2050,
    percentage: 100,
    description: "Projected scenario without intervention: 90% of island biodiversity severely threatened or extinct. With conservation: potential to restore 40% of critical habitats."
  }
];
