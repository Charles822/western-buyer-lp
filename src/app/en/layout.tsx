import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convertree | Get a Waiting List of Western Buyers",
  description: "We build your company a predictable pipeline of direct western buyers who place larger orders at better margins—you only pay when it works.",
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
