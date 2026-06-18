export const mailHref =
  "mailto:megha.rathod@example.com?subject=Portfolio%20conversation%20with%20Megha%20Rathod";

export const caseStudies = [
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    category: "Residential",
    place: "Ahmedabad",
    year: "2024",
    image: "/images/courtyard-residence.webp",
    alt: "A warm courtyard residence with brick jaali walls, planting, and shaded thresholds",
    summary:
      "A compact urban home shaped by shade, airflow, and a planted court that turns daily movement into a calm spatial sequence.",
    role: "Concept design, planning studies, material direction, and presentation drawings",
    status: "Portfolio case study",
    scale: "Private residence",
    scope: ["Site response", "Courtyard planning", "Material palette", "Presentation set"],
    highlight: "The courtyard works as climate device, social room, and visual anchor.",
    challenge:
      "The brief called for privacy and daylight on a constrained urban plot without losing the softness of a family home.",
    approach:
      "The plan compresses service functions along the edges and gives the center back to a shaded court. Brick jaali, lime plaster, and timber frames create privacy while keeping the rooms visually connected.",
    outcome:
      "The study presents a home with a legible section, quiet transitions, and material choices that feel rooted in place.",
    details: ["Climate-first planning", "Brick jaali envelope", "Interior-exterior continuity"],
    accent: "#a8563a"
  },
  {
    slug: "urban-work-loft",
    title: "Urban Work Loft",
    category: "Workplace",
    place: "Mumbai",
    year: "2023",
    image: "/images/urban-workplace.webp",
    alt: "A contemporary workplace edge with shaded plaza, trees, and warm interior light",
    summary:
      "A porous workplace edge with shaded public ground, flexible floor plates, and a layered facade for filtered daylight.",
    role: "Massing options, facade studies, ground-floor experience, and visual narrative",
    status: "Portfolio case study",
    scale: "Mixed-use workplace",
    scope: ["Public realm", "Facade rhythm", "Workplace flexibility", "Client presentation"],
    highlight: "A warmer workplace frontage that softens the street without losing precision.",
    challenge:
      "The project needed to feel civic at the street level while still functioning as a focused, efficient work environment above.",
    approach:
      "A shaded colonnade anchors the ground floor. Upper levels use screens, planting, and terraces to mediate heat, glare, and privacy while preserving a clean architectural rhythm.",
    outcome:
      "The study frames workplace architecture as part of the city, with a clear relationship between public threshold and internal flexibility.",
    details: ["Porous public realm", "Screened daylight", "Flexible floor plates"],
    accent: "#1f5b50"
  },
  {
    slug: "foundry-studio",
    title: "Foundry Studio",
    category: "Adaptive reuse",
    place: "Baroda",
    year: "2022",
    image: "/images/adaptive-reuse-studio.webp",
    alt: "An adaptive reuse gallery and studio inside a brick industrial shell with steel trusses",
    summary:
      "A learning studio inserted into an old industrial shell, preserving structural memory while adding precise new timber interventions.",
    role: "Reuse strategy, interior zoning, mezzanine concept, and detail intent",
    status: "Portfolio case study",
    scale: "Gallery and learning studio",
    scope: ["Existing fabric", "Interior insertion", "Gallery planning", "Material contrast"],
    highlight: "Old brick and steel remain the atmosphere; new work arrives quietly and exactly.",
    challenge:
      "The existing shell carried character, but the new program required daylight, circulation, storage, and flexible teaching zones.",
    approach:
      "The proposal preserves the trusses and brick envelope, then inserts a warm timber mezzanine and a disciplined gallery grid that can support workshops, display, and critique sessions.",
    outcome:
      "The study demonstrates restraint: enough intervention to make the space useful, but not so much that the building loses its memory.",
    details: ["Existing fabric retained", "Inserted mezzanine", "Gallery-workshop hybrid"],
    accent: "#c79b49"
  }
];

export const experienceNotes = [
  {
    phase: "Academic Grounding",
    period: "Studio, climate, and craft",
    text: "Measured drawing, model making, spatial sequencing, passive design, and material research."
  },
  {
    phase: "Practice Exposure",
    period: "Residential and interior studies",
    text: "Concept options, plan development, client-facing boards, and coordination-ready drawing sets."
  },
  {
    phase: "Project Coordination",
    period: "Consultant and site clarity",
    text: "Drawing updates, consultant markups, site constraints, schedules, and presentation refinements."
  },
  {
    phase: "Next Role",
    period: "Employer-ready contribution",
    text: "Looking for teams where thoughtful design, careful documentation, and calm delivery matter."
  }
];

export const capabilities = [
  "Spatial planning and section thinking",
  "Material palettes and facade studies",
  "Presentation drawings and case-study storytelling",
  "Documentation, schedules, and coordination support"
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
