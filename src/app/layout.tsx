import type { Metadata } from "next";
import "./globals.css";
import { SetHtmlLang } from "@/components/set-html-lang";

export const metadata: Metadata = {
  title: "Convertree | Never miss a paying customer call",
  description:
    "AI receptionist for your phone line—answers every call in clear English, handles FAQs, and books appointments. Try a 5-minute demo.",
  icons: {
    icon: "/logo-alternatives/multicolor_alternativeV2.png",
    apple: "/logo-alternatives/multicolor_alternativeV2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="font-body antialiased bg-stone-50 text-stone-950">
        <SetHtmlLang>
          {/* Noise texture overlay */}
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </SetHtmlLang>
      </body>
    </html>
  );
}
