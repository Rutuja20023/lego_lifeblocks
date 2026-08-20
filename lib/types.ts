export type BlockCategory = "focus" | "work" | "health" | "break" | "goal" | "admin";

export interface LegoBlockData {
  id: string;
  name: string;
  category: BlockCategory;
  color: string;
  colorHex: string;
  accentHex: string;
  shadowHex: string;
  duration: string;
  tagline: string;
  description: string;
  cognitiveBenefit: string;
  dimensions: string;
  weight: string;
  material: string;
  iconName: string;
  studs: number;
}

export interface PricingKit {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  popular?: boolean;
  priceINR: number;
  originalPriceINR: number;
  priceUSD: number;
  originalPriceUSD: number;
  description: string;
  includes: string[];
  blockCount: number;
  baseplateType: string;
  features: string[];
  stockCount: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  metric: string;
  metricLabel: string;
  setupType: string;
  verified: boolean;
}

export interface CartItem {
  kitId: string;
  name: string;
  priceINR: number;
  priceUSD: number;
  quantity: number;
  colorTheme?: string;
}
