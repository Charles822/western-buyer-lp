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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="font-body antialiased bg-stone-50 text-stone-950">
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
