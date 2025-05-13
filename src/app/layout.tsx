import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import { Jost } from "next/font/google";

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

export const metadata = {
  title: "ShalOps - Digital Solutions Provider",
  description: "Modern, responsive digital solutions for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${Jostt.variable}`}>
      <head></head>
      <body className={`${josefinSans.className}`}>{children}</body>
    </html>
  );
}
