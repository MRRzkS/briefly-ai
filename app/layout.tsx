import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Briefly AI — AI Project Brief Generator",
    template: "%s | Briefly AI",
  },
  description:
    "Turn a rough software idea into a structured project brief, requirements, user stories, acceptance criteria, and task breakdown with AI.",
  keywords: [
    "AI Project Brief Generator",
    "Software Requirements Generator",
    "AI User Story Generator",
    "AI Product Requirements Generator",
    "Project Planning AI",
  ],
  openGraph: {
    title: "Briefly AI — Turn an idea into a structured software plan.",
    description:
      "AI-powered project planning for builders who want clarity before code.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Briefly AI",
    description: "Turn an idea into a structured software plan.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
