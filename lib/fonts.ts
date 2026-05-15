import { Inter, Plus_Jakarta_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Plus Jakarta Sans stands in for Satoshi — geometric, slightly humanist,
// matches the editorial feel and is Google-hosted (no font file needed).
// Swap to a self-hosted Satoshi later by replacing this import.
export const satoshi = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
