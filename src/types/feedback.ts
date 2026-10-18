export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number; // 1-5
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}
