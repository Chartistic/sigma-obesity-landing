import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sigma | GLP-1 Support",
  description:
    "GLP-1 medication support, compare options, and clinician recommendations. Prescriptions only after clinician review.",
  robots: "index, follow",
};

export default function GLP1SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
