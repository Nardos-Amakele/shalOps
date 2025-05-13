import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import { Jost } from "next/font/google";
import { Metadata } from "next";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700"],
  variable: "--font-joseph-sans",
});

const Jostt = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-joseph-sans",
});

export const metadata: Metadata = {
  title: "ShalOps - Digital Solutions Provider",
  description:
    "We create reliable business solutions tailored to your needs. By understanding your challenges, we build technology that streamlines operations, boosts growth, and drives success.",
  keywords: [
    "software development",
    "web development",
    "system development",
    "digital solutions",
    "Ethiopia",
    "technology",
    "business solutions",
  ],
  authors: [{ name: "ShalOps", url: "https://shalops.com" }],
  metadataBase: new URL("https://shalops.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ShalOps - Bridging Business & Technology",
    description:
      "We create reliable business solutions tailored to your needs. By understanding your challenges, we build technology that streamlines operations, boosts growth, and drives success.",
    url: "https://shalops.com",
    siteName: "ShalOps",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "ShalOps - Digital Solutions Provider",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShalOps - Digital Solutions Provider",
    description:
      "We create reliable business solutions tailored to your needs.",
    images: ["/twitter-image.jpg"], // You'll need to create this image
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Add your verification codes here if available
    // google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${Jostt.variable}`}>
      <body className={`${josefinSans.className}`}>{children}</body>
    </html>
  );
}
