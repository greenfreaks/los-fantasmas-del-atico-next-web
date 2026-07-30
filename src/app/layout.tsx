import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lobster } from "next/font/google";
import { Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lobster",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Los Fantasmas del Ático",
  description: "Sitio web oficial de Los Fantasmas del Ático, una banda de rock alternativo que combina elementos de rock clásico y moderno para crear un sonido único y envolvente. Descubre su música, próximos conciertos y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lobster.variable} ${oswald.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
