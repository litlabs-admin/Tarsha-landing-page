import "./globals.css";
import { LenisProvider } from "@/components/animations/LenisProvider";
import { PageLoader } from "@/components/layout/PageLoader";
import { allura, inter, satoshi } from "@/lib/fonts";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tarsha.ai"),
  icons: {
    icon: { url: "/assets/favicon.svg", type: "image/svg+xml" },
    shortcut: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
  },
  title: {
    default: "Tarsha AI, AI receptionist that answers calls 24/7",
    template: "%s · Tarsha AI",
  },
  description:
    "Tarsha AI is the answering service that keeps your phone covered, qualifying leads, booking appointments, and handling customer calls 24/7 with a natural, human-like voice.",
  keywords: [
    "AI receptionist",
    "AI answering service",
    "Voice AI",
    "Tarsha AI",
    "SMB phone service",
    "Missed call recovery",
  ],
  openGraph: {
    title: "Tarsha AI, AI receptionist that answers calls 24/7",
    description:
      "Never miss another customer call. Tarsha AI answers instantly, qualifies leads, and books appointments, all with a natural, human-like voice.",
    url: "https://tarsha.ai",
    siteName: "Tarsha AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarsha AI, AI receptionist for small businesses",
    description:
      "Never miss another customer call. Tarsha AI answers instantly and books appointments 24/7.",
  },
  robots: { index: true, follow: true },
  other: {
    "facebook-domain-verification": "cli6iedfrgu6zyjc8yiea7lqcwt1v4",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFBF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable} ${allura.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tarsha AI",
              url: "https://tarsha.ai",
              description:
                "AI voice receptionist for small businesses, answers calls 24/7, qualifies leads, books appointments.",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <PageLoader />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
