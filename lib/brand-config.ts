/**
 * Brand Configuration System
 *
 * This file centralizes all branding configurations for the portfolio.
 * - Personal Brand: Executive Navy (default) - showcases JD's methodology
 * - Company Themes: Customizable for specific applications
 */

export type BrandTheme = {
  name: string;
  description: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    accent: string;
    accentLight: string;
    text: string;
  };
  meta: {
    title: string;
    description: string;
    companyName?: string;
    roleName: string;
  };
  hero: {
    title: string;
    subtitle: string;
    roleTitle: string;
  };
  navigation: {
    brand: string;
  };
};

/**
 * Personal Brand Theme - Executive Orange with Stone Neutrals
 * Multi-tone color system using Orange 50-900 + Stone 50-900
 * Recommended for general portfolio use and most enterprise sales applications
 */
export const personalBrand: BrandTheme = {
  name: "Executive Orange",
  description: "Bold, energetic, results-driven personal brand with warm neutral palette",
  colors: {
    primary: "#f97316", // Orange-500
    primaryLight: "#fb923c", // Orange-400
    primaryDark: "#ea580c", // Orange-600
    accent: "#fb923c", // Orange-400
    accentLight: "#fdba74", // Orange-300
    text: "#44403c", // Stone-700
  },
  meta: {
    title: "Strategic 30-60-90 Day Action Plan | Enterprise Account Executive - Joshua Deleon",
    description: "Proven B2B SaaS sales methodology and strategic 30-60-90 day framework for enterprise account executives. Technical sales expertise in DevOps, AI infrastructure, and cloud-native solutions.",
    roleName: "Enterprise Account Executive",
  },
  hero: {
    title: "30-60-90 Day Strategic Framework",
    subtitle: "Enterprise B2B SaaS Sales Methodology",
    roleTitle: "Strategic Account Executive",
  },
  navigation: {
    brand: "JD • Enterprise Sales",
  },
};

/**
 * Company-Specific Theme: CircleCI
 * Teal and Green color scheme
 */
export const circleciTheme: BrandTheme = {
  name: "CircleCI",
  description: "CircleCI-branded application theme",
  colors: {
    primary: "#0A5C6B", // CircleCI Teal
    primaryLight: "#1A8799", // Light Teal
    primaryDark: "#003740", // Deep Teal
    accent: "#049B4A", // CircleCI Green
    accentLight: "#10B981", // Light Green
    text: "#374151",
  },
  meta: {
    title: "30-60-90 Day Strategic Plan | CircleCI Enterprise Account Executive - Joshua Deleon",
    description: "Strategic 30-60-90 Day Action Plan for CircleCI Strategic Account Executive Role. DevOps expertise, enterprise sales methodology, and proven CI/CD transformation results.",
    companyName: "CircleCI",
    roleName: "Strategic Account Executive",
  },
  hero: {
    title: "30-60-90 Day Strategic Briefing",
    subtitle: "DevOps Transformation & Enterprise Pipeline Growth",
    roleTitle: "Strategic Account Executive • CircleCI",
  },
  navigation: {
    brand: "JD • CircleCI",
  },
};

/**
 * Company-Specific Theme: Innovation Purple
 * For tech-forward, AI-first, or innovation-focused companies
 */
export const innovationPurpleTheme: BrandTheme = {
  name: "Innovation Purple",
  description: "Bold, innovative theme for AI-first and cutting-edge tech companies",
  colors: {
    primary: "#7C3AED", // Vibrant Purple
    primaryLight: "#A78BFA", // Light Purple
    primaryDark: "#6D28D9", // Deep Purple
    accent: "#EC4899", // Pink Accent
    accentLight: "#F472B6", // Light Pink
    text: "#374151",
  },
  meta: {
    title: "Strategic 30-60-90 Day Plan | AI & Innovation Sales Leader - Joshua Deleon",
    description: "Innovative B2B SaaS sales methodology with AI infrastructure and technical sales expertise. Proven enterprise account executive with cloud-native and DevOps transformation experience.",
    roleName: "Enterprise Account Executive",
  },
  hero: {
    title: "30-60-90 Day Strategic Framework",
    subtitle: "AI-Driven Enterprise Sales & Technical Innovation",
    roleTitle: "Strategic Account Executive",
  },
  navigation: {
    brand: "JD • Innovation Sales",
  },
};

/**
 * Company-Specific Theme: Growth Green
 * For RevOps, sales enablement, or growth-focused organizations
 */
export const growthGreenTheme: BrandTheme = {
  name: "Growth Green",
  description: "Fresh, growth-oriented theme for RevOps and sales tools",
  colors: {
    primary: "#059669", // Emerald Green
    primaryLight: "#10B981", // Bright Green
    primaryDark: "#047857", // Deep Green
    accent: "#10B981", // Light Emerald
    accentLight: "#34D399", // Mint Green
    text: "#374151",
  },
  meta: {
    title: "Strategic 30-60-90 Day Plan | Revenue Growth Executive - Joshua Deleon",
    description: "Revenue-focused B2B SaaS sales methodology and proven enterprise growth strategies. Technical sales expertise with systematic pipeline generation and expansion.",
    roleName: "Strategic Account Executive",
  },
  hero: {
    title: "30-60-90 Day Growth Framework",
    subtitle: "Revenue Acceleration & Enterprise Pipeline Development",
    roleTitle: "Strategic Account Executive",
  },
  navigation: {
    brand: "JD • Revenue Growth",
  },
};

/**
 * Company-Specific Theme: HG Insights
 * Technology Intelligence platform - Principal Account Manager (Renewals/Expansion)
 */
export const hgInsightsTheme: BrandTheme = {
  name: "HG Insights",
  description: "HG Insights Revenue Growth Intelligence platform theme",
  colors: {
    primary: "#c9194a", // HG Insights Red/Pink
    primaryLight: "#e63366", // Light Pink
    primaryDark: "#a01139", // Deep Red
    accent: "#0f172a", // Navy accent
    accentLight: "#334155", // Slate
    text: "#1e293b", // Dark slate text
  },
  meta: {
    title: "30-60-90 Day Strategic Plan | Principal Account Manager - Joshua Deleon",
    description: "Strategic 30-60-90 Day Action Plan for HG Insights Principal Account Manager. Proven retention & expansion expertise with $7.5M+ closed revenue, enterprise account management, and cross-functional GTM leadership.",
    companyName: "HG Insights",
    roleName: "Principal Account Manager",
  },
  hero: {
    title: "30-60-90 Day Strategic Framework",
    subtitle: "Strategic Account Retention & Expansion Excellence",
    roleTitle: "Principal Account Manager • HG Insights",
  },
  navigation: {
    brand: "JD • HG Insights",
  },
};

/**
 * Company-Specific Theme: ARP Blue
 * For AI SaaS founding sales roles - clean, professional blue
 */
export const arpTheme: BrandTheme = {
  name: "ARP Blue",
  description: "Professional blue theme for AI SaaS founding sales roles",
  colors: {
    primary: "#3b82f6", // Blue-500
    primaryLight: "#60a5fa", // Blue-400
    primaryDark: "#2563eb", // Blue-600
    accent: "#3b82f6", // Blue-500
    accentLight: "#60a5fa", // Blue-400
    text: "#475569", // Slate-600
  },
  meta: {
    title: "Strategic 30-60-90 Day Action Plan | Founding Account Executive - Joshua Deleon",
    description: "Strategic 30-60-90 Day Action Plan for AI SaaS Founding Account Executive. Building repeatable sales motion from the ground up with proven enterprise sales methodology and technical expertise.",
    roleName: "Founding Account Executive",
  },
  hero: {
    title: "30-60-90 Day Strategic Framework",
    subtitle: "Founding Sales & GTM Execution",
    roleTitle: "Founding Account Executive",
  },
  navigation: {
    brand: "JD • Founding Sales",
  },
};

/**
 * Active Theme Configuration
 * Change this to switch between themes
 */
export const activeTheme: BrandTheme = arpTheme;

/**
 * Available Themes Export
 * Useful for theme switching UI in the future
 */
export const availableThemes = {
  personal: personalBrand,
  circleci: circleciTheme,
  innovationPurple: innovationPurpleTheme,
  growthGreen: growthGreenTheme,
  hgInsights: hgInsightsTheme,
  arp: arpTheme,
};
