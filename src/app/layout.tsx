import type { Metadata } from "next";
import { Bricolage_Grotesque, Nunito } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FitBowl — Healthy Meal Subscription in Mumbai | Fresh Veg & Non-Veg Bowls",
  description:
    "Chef-crafted, macro-balanced healthy meal subscription delivered across Mumbai (Andheri, Bandra, Powai, Lower Parel). 14 signature bowls. Claim your free trial today!",
  keywords: [
    "healthy meal subscription mumbai",
    "diet meal delivery mumbai",
    "healthy lunch bowls mumbai",
    "high protein meal delivery mumbai",
    "office lunch subscription mumbai",
    "free trial healthy food mumbai",
  ],
  authors: [{ name: "FitBowl Culinary Team" }],
  openGraph: {
    title: "FitBowl — Healthy Meal Subscription in Mumbai",
    description:
      "Fresh, chef-crafted healthy bowls delivered to your home or office in Mumbai. One free trial meal with zero payment required.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
