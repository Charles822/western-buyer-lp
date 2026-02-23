import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Convertree | Get a Waiting List of Western Buyers",
  description: "We build your company a predictable pipeline of direct western buyers who place larger orders at better margins—you only pay when it works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased bg-stone-50 text-stone-950">
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
