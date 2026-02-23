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
      <body className="antialiased selection:bg-jade-500/30 font-sans text-slate-600 bg-white">
        {children}
      </body>
    </html>
  );
}
