const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://orrsman.com.au";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orrsman Express Logistic",
  legalName: "Orrsman Express Logistic",
  url: baseUrl,
  logo: `${baseUrl}/FullLogo.png`,
  foundingDate: "2024",
  description:
    "Australian logistics provider connecting businesses to global markets. Expert freight forwarding, customs clearance, and international trade solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "707/289 King St",
    addressLocality: "Mascot",
    addressRegion: "NSW",
    postalCode: "2020",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61-451-919-253",
    contactType: "customer service",
    email: "tarik@orrsman.com.au",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com", // Update with your actual LinkedIn URL
    "https://www.facebook.com", // Update with your actual Facebook URL
    "https://www.instagram.com", // Update with your actual Instagram URL
  ],
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  taxID: "30 645 247 169",
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#localbusiness`,
  name: "Orrsman Express Logistic",
  image: `${baseUrl}/FullLogo.png`,
  url: baseUrl,
  telephone: "+61-451-919-253",
  email: "tarik@orrsman.com.au",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "707/289 King St",
    addressLocality: "Mascot",
    addressRegion: "NSW",
    postalCode: "2020",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9258,
    longitude: 151.1986,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:30",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com", // Update with your actual LinkedIn URL
    "https://www.facebook.com", // Update with your actual Facebook URL
    "https://www.instagram.com", // Update with your actual Instagram URL
  ],
};

// Service Schemas
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "International Logistics Services",
  provider: {
    "@type": "Organization",
    name: "Orrsman Express Logistic",
    url: baseUrl,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Logistics Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air Freight Services",
          description:
            "Fast and reliable air cargo services for time-sensitive shipments with 24/7 monitoring.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sea Freight Services",
          description:
            "Cost-effective ocean freight solutions for FCL and LCL shipments with worldwide port coverage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Customs Clearance",
          description:
            "Expert customs brokerage services handling all documentation and compliance requirements.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warehousing & Storage",
          description:
            "Secure and flexible warehousing solutions with professional inventory management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cartage Transport",
          description:
            "Reliable domestic cartage and transportation services across Australia.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "FMCG Logistics",
          description:
            "Fast-moving consumer goods logistics with specialized handling and distribution.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Meat Export & Trading",
          description:
            "Specialized meat export with strict temperature control and international food safety compliance.",
        },
      },
    ],
  },
};

// BreadcrumbList Schema Generator
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[],
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Orrsman Express Logistic",
  url: baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
