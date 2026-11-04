export interface ServiceItem {
  id: string;
  code: string;
  name: string;
  category: string;
  iconName: string;
  description: string;
  descriptionUrdu: string;
  features: string[];
  badge?: string;
}

export const COMPANY_INFO = {
  name: "Northstar Works",
  shortName: "NW",
  tagline: "Smart home care, repairs, and dependable everyday support",
  phone: "+1 (555) 123-4567",
  whatsapp: "+15551234567",
  email: "hello@northstarworks.example",
  address: "Downtown, City Center",
  operatingHours: "Mon-Sat • 8:00 AM - 8:00 PM",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ac-services",
    code: "ASE-AC-005",
    name: "AC Services",
    category: "Cooling & HVAC",
    iconName: "Snowflake",
    description: "Professional AC installation, routine servicing, deep cleaning, and emergency repair for homes and commercial spaces.",
    descriptionUrdu: "AC installation, servicing, maintenance, cleaning aur repairing ki professional services.",
    features: ["Fast On-site Diagnosis", "Deep Chemical Wash", "Gas Refill & Leak Fix", "Master Technicians"],
    badge: "Popular",
  },
  {
    id: "generator-services",
    code: "ASE-GEN-006",
    name: "Generator Services",
    category: "Power Systems",
    iconName: "Zap",
    description: "Comprehensive generator repair, periodic maintenance, troubleshooting, and tuning for residential and commercial power units.",
    descriptionUrdu: "Generator repairing, servicing, maintenance aur troubleshooting services.",
    features: ["Preventative Tune-ups", "Oil & Filter Replacement", "Emergency Breakdown Support", "Certified Mechanics"],
    badge: "Reliable",
  },
  {
    id: "electrician",
    code: "ASE-ELEC-008",
    name: "Electrician Services",
    category: "Electrical",
    iconName: "Flame",
    description: "Certified electrical installation, circuit repairs, full-house rewiring, DB box maintenance, and safety inspections.",
    descriptionUrdu: "Ghar aur business ke liye electrical installation, repairing, wiring aur maintenance services.",
    features: ["Short-circuit Rectification", "Panel & Breaker Upgrades", "Neat Concealed Wiring", "Safe Work Standards"],
    badge: "Essential",
  },
  {
    id: "water-supply",
    code: "ASE-WATER-009",
    name: "Water Supply Services",
    category: "Utilities",
    iconName: "Droplets",
    description: "Dependable potable and utility water bowser/tanker supply delivered promptly to residential, office, and commercial properties.",
    descriptionUrdu: "Ghar, office aur business ke liye reliable water supply aur delivery service.",
    features: ["Scheduled Timely Delivery", "Hygienic Clean Water", "Commercial Bulk Capacities", "Flexible Ordering"],
  },
  {
    id: "lpg-gas",
    code: "ASE-LPG-003",
    name: "LPG Gas Supply",
    category: "Utilities",
    iconName: "Fuel",
    description: "Safe and timely LPG cylinder delivery and regulatory connection assistance for kitchens, restaurants, and heating needs.",
    descriptionUrdu: "Ghar aur business ke liye LPG Gas supply aur delivery service aapki zaroorat ke mutabiq.",
    features: ["Leakage Testing at Delivery", "Standard Certified Cylinders", "Doorstep Convenience", "Quick Dispatch"],
  },
  {
    id: "laundry",
    code: "ASE-LAUNDRY-004",
    name: "Laundry Services",
    category: "Domestic",
    iconName: "Shirt",
    description: "Hygienic fabric washing, gentle care steam pressing, and dry cleaning with seamless pick-and-drop convenience.",
    descriptionUrdu: "Kapron ki washing, cleaning aur laundry services. Saaf sutri aur reliable service.",
    features: ["Pick-up & Drop Facility", "Delicate Garment Care", "Crisp Steam Press", "Affordable Bundles"],
  },
  {
    id: "tv-technician",
    code: "ASE-TV-002",
    name: "LED TV / LCD Services",
    category: "Electronics",
    iconName: "Tv",
    description: "Expert troubleshooting for display panels, backlight repairs, motherboard diagnosis, and audio/video restoration.",
    descriptionUrdu: "LED TV aur LCD ki repairing, troubleshooting aur maintenance services. Home service available.",
    features: ["Panel & Backlight Repair", "Component-Level Board Fix", "Genuine Replacement Parts", "In-home Inspection"],
  },
  {
    id: "grocery",
    code: "ASE-GROCERY-001",
    name: "Grocery Services",
    category: "Domestic",
    iconName: "ShoppingCart",
    description: "Hassle-free grocery delivery bringing fresh, everyday essential kitchen items directly to your doorstep.",
    descriptionUrdu: "Rozmarra ki zarooriyat ka grocery saman asaan aur convenient service ke sath.",
    features: ["Fresh Daily Essentials", "Speedy Doorstep Delivery", "Accurate Order Fulfillment", "Careful Packaging"],
  },
  {
    id: "mac-services",
    code: "ASE-MAC-007",
    name: "MAC & Apple Services",
    category: "Computers",
    iconName: "Laptop",
    description: "Specialized diagnostics, hardware replacement, logic board repairs, and OS recovery for MacBooks and Apple workstations.",
    descriptionUrdu: "MacBook aur MAC devices ki repairing, maintenance aur troubleshooting services.",
    features: ["Logic Board Micro-soldering", "Screen & Battery Replacements", "Thermal Paste & Dust Cleanup", "Data Recovery"],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Vetted Professionals",
    description: "Skilled and background-checked technicians with proven hands-on field experience.",
    icon: "ShieldCheck",
  },
  {
    title: "Rapid Response",
    description: "On-time arrival and fast turnaround for all emergency breakdowns and routine visits.",
    icon: "Clock",
  },
  {
    title: "Transparent Pricing",
    description: "Clear upfront quotes with no hidden fees or unexpected post-service surprises.",
    icon: "Receipt",
  },
  {
    title: "Customer Satisfaction",
    description: "Guaranteed quality and post-job verification to make sure everything works perfectly.",
    icon: "ThumbsUp",
  },
];
