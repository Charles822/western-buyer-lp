import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Western Buyer System | Get More Western Buyer Requests",
  description: "Western Buyer System - Turn your factory reputation into consistent Western buyer requests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-orange-500/30 font-sans text-slate-600 bg-white">
        {children}
      </body>
    </html>
  );
}
