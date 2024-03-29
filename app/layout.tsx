import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { AxiomWebVitals } from "next-axiom";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

import "./globals.css";

const borna = localFont({
  src: [
    {
      path: "../fonts/borna/borna-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/borna/borna-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/borna/borna-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/borna/borna-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "marcogianni.it",
  description:
    "I'm a Frontend Engineer and I create simple, elegant designs and code to bring them to life.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={borna.className}>
        <AxiomWebVitals />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
