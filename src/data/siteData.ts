export interface ProductItem {
  id: string;
  name: string;
  category: 'chana_dal' | 'besan' | 'specialty' | 'gota' | 'churi' | 'husk';
  badge: string;
  description: string;
  purity: string;
  moisture?: string;
  packaging: string;
  applications?: string[];
  image: string;
}

export interface BrandSpec {
  label: string;
  value: string;
}

export interface BrandItem {
  id: string;
  brandName: string;
  subTitle: string;
  description: string;
  specs: BrandSpec[];
  badge?: string;
  image?: string;
}

export interface AdvantageItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  highlight: string;
}

export const SITE_DATA = {
  company: {
    name: "RHSPL",
    fullName: "Ramkaran Heeralal & Sons",
    tagline: "Premium Chana Dal & Besan Manufacturer & Bulk Supplier",
    established: "2017",
    description: "Premium quality Chana Dal and Besan manufacturer, committed to purity, advanced processing, and reliable supply chain since 2017.",
    contact: {
      phone: "+91 94141 11368 / +91 98290 82512",
      email: "rhsplbesan@gmail.com",
      whatsapp: "+919001208781",
      address: "Araji No.- 368 Mi., Industrial Area Mandaldeh, Chittorgarh, 312201 Rajasthan, India",
    },
    certifications: [
      "ISO 22000 Certified",
      "FSSAI Licensed",
      "HACCP Compliant",
      "APEDA Registered Exporter",
      "HALAL Certified"
    ]
  },
  
  metrics: [
    { title: "40,000 sq.ft", subtitle: "Modern Processing Plant", iconName: "Factory" },
    { title: "Fully Automatic", subtitle: "Production Line", iconName: "Settings" },
    { title: "Premium Chana", subtitle: "Rajasthani Grade-A", iconName: "Star" },
    { title: "Pan-India", subtitle: "Reliable Bulk Supply", iconName: "Truck" }
  ],

  products: [
    {
      id: "chana-dal",
      name: "Chana Dal",
      category: "chana_dal",
      badge: "CCD Color Sorted",
      description: "Sortex-cleaned split chickpeas with high sorting accuracy. Sorted using advanced CCD color sorters for zero defects.",
      purity: "99.8% Minimum Purity",
      packaging: "30kg, 50kg PP Bags",
      applications: ["Wholesale Retail", "Catering Units"],
      image: "/images/prod_chana_dal.png"
    },
    {
      id: "chana-gota",
      name: "Chana Gota",
      category: "gota",
      badge: "High Nutrient Density",
      description: "Husk-less whole chickpeas, ideal for specialized roasting and grinding processes requiring high nutrient density.",
      purity: "Zero Hull Purity",
      packaging: "50kg",
      applications: ["Roasting Plants", "Protein Concentrates"],
      image: "/images/prod_chana_gota.png"
    },
    {
      id: "chana-besan",
      name: "Chana Besan",
      category: "besan",
      badge: "Finely Milled",
      description: "Finely milled, high-protein gram flour processed through multi-stage pulse cleaning systems for consistent granulation and purity.",
      purity: "100% Pure Gram Flour",
      packaging: "500gm, 10kg, 30kg, 40kg",
      applications: ["Snack Manufacturing", "Bakeries", "Processed Foods"],
      image: "/images/prod_chana_besan.png"
    },
    {
      id: "chana-churi",
      name: "Chana Churi",
      category: "churi",
      badge: "High-Nutrient Feed",
      description: "High-nutrient byproduct for the cattle feed industry. Consistent quality and supply.",
      purity: "Natural Nutrient Content",
      packaging: "50kg PP Bags",
      applications: ["Wholesale Retail", "Catering Units"],
      image: "/images/prod_chana_churi.png"
    },
    {
      id: "chana-husk",
      name: "Chana Husk",
      category: "husk",
      badge: "High Fiber Content",
      description: "Outer shell byproduct, highly sought after for dietary fiber content in animal feed formulations.",
      purity: "100% Organic Fiber Base",
      packaging: "25kg PP Bags",
      applications: ["Wholesale Retail", "Catering Units"],
      image: "/images/prod_chana_husk.png"
    }
  ] as ProductItem[],

  brands: [
    {
      id: "bhawani-gold",
      brandName: "BHAWANI GOLD",
      subTitle: "PREMIUM CHANA DAL",
      description: "Premium sortex-clean Chana Dal known for its consistent quality, uniform grain size, and excellent cooking characteristics. A trusted name in wholesale markets.",
      specs: [
        { label: "Protein Content", value: "20-22%" },
        { label: "Moisture", value: "< 12%" },
        { label: "Sortex Clean", value: "99.9%" }
      ],
      badge: "WHOLESALE TRUSTED",
      image: "/images/besan_flour.png"
    },
    {
      id: "rhspl-besan",
      brandName: "RHSPL BESAN",
      subTitle: "SUPERFINE CHANA BESAN",
      description: "Superfine Besan (Gram Flour) processed from 100% pure Chana Dal. Ideal for snacks manufacturing, sweets, and premium culinary applications.",
      specs: [
        { label: "Granulation", value: "Superfine" },
        { label: "Ash Content", value: "< 1.2%" },
        { label: "Shelf Life", value: "3 Months" }
      ],
      badge: "INDUSTRIAL GRADE",
      image: "/images/besan_flour.png"
    }
  ] as BrandItem[],

  advantages: [
    {
      id: "adv-1",
      number: "01",
      title: "Superior Raw Material Sourcing",
      description: "Direct farmer relationships in Madhya Pradesh & Rajasthan ensure procurement of bold, unblemished chana with high protein content.",
      iconName: "Wheat"
    },
    {
      id: "adv-2",
      number: "02",
      title: "Swiss Buhler Milling Machinery",
      description: "Fully automated, dust-free processing lines featuring optical color sorters, magnetic separators, and multi-deck sieves.",
      iconName: "Cpu"
    },
    {
      id: "adv-3",
      number: "03",
      title: "Strict Quality Control Laboratory",
      description: "In-house lab tests every batch for moisture levels, protein content, ash value, zero gluten contamination, and microbial purity.",
      iconName: "ShieldCheck"
    },
    {
      id: "adv-4",
      number: "04",
      title: "Custom Granulation & Mesh Control",
      description: "Ability to customize flour particle sizes (from 80 to 150 mesh) to match specific client recipe and food processing requirements.",
      iconName: "Sliders"
    },
    {
      id: "adv-5",
      number: "05",
      title: "Private Labeling & Customized Packaging",
      description: "End-to-end OEM services including multi-color bag printing, custom bag weights (1kg retail up to 50kg bulk), and private brand tags.",
      iconName: "PackageCheck"
    },
    {
      id: "adv-6",
      number: "06",
      title: "Seamless Port & Logistics Delivery",
      description: "Direct highway and rail links to Mundra and JNPT ports. Full assistance with Phytosanitary certificates, APEDA clearance, and export shipping.",
      iconName: "Truck"
    }
  ] as AdvantageItem[],

  processSteps: [
    {
      step: 1,
      title: "Raw Material Sourcing & Arrival",
      description: "Selection of premium Grade-A Whole Chana from central Indian mandi yards with strict moisture and size inspection upon arrival.",
      highlight: "Grade-A Sourcing"
    },
    {
      step: 2,
      title: "De-Stoning & Optical Sorting",
      description: "Multi-stage magnetic separation, de-stoning, and Buhler optical sorting to remove all foreign particles, broken grains, and dust.",
      highlight: "99.8% Pure Cleaning"
    },
    {
      step: 3,
      title: "Hulling & Splitting (Chana Dal)",
      description: "Hygienic hulling to separate skin without chemical soaking, yielding naturally vibrant yellow split Chana Dal.",
      highlight: "Zero Chemical Touch"
    },
    {
      step: 4,
      title: "Multi-Stage Buhler Milling",
      description: "Low-temperature precision milling preserving natural pulse aroma, flavor, oil content, and golden color.",
      highlight: "Cool Temperature Mill"
    },
    {
      step: 5,
      title: "Automated Sieving & Packaging",
      description: "Vibratory sifting to guarantee uniform mesh particle size, followed by automatic weighing, nitrogen flushing, and bag stitching.",
      highlight: "Sealed & Stitch Packed"
    }
  ] as ProcessStep[],

  supplyNetwork: {
    domesticStates: ["Madhya Pradesh", "Rajasthan", "Gujarat", "Maharashtra", "Karnataka", "Tamil Nadu", "Delhi NCR", "West Bengal"],
    exportPorts: ["Mundra Port (Gujarat)", "JNPT Port (Mumbai)", "Chennai Port (Tamil Nadu)"],
    globalDestinations: ["Middle East & UAE", "North America (USA & Canada)", "Europe & UK", "Southeast Asia & Australia"]
  }
};
