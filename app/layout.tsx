import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutModal } from "@/components/CheckoutModal";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  title: "LEGO LifeBlocks™ — Build Your Day. One Block at a Time.",
  description:
    "The physical modular desk operating system by LEGO Life. Replace 40 browser tabs and digital distractions with tactile weighted focus blocks.",
  keywords: [
    "LEGO LifeBlocks",
    "Physical Productivity",
    "Tactile Desk System",
    "Focus Blocks",
    "Deep Work",
    "Desk Setup",
  ],
  authors: [{ name: "Rutuja Pakhare" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-lego-yellow selection:text-neutral-950">
        <CartProvider>
          {children}
          <CartDrawer />
          <CheckoutModal />
        </CartProvider>
      </body>
    </html>
  );
}
