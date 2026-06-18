import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Megha Rathod | Architect Portfolio",
  description:
    "Portfolio for architect Megha Rathod, featuring selected architectural case studies, experience notes, process, and capabilities.",
  metadataBase: new URL("https://megharathod.studio"),
  openGraph: {
    title: "Megha Rathod | Architect Portfolio",
    description:
      "Selected architectural work, spatial thinking, and experience notes.",
    images: [
      {
        url: "/images/hero-cultural-center.webp",
        width: 1672,
        height: 941,
        alt: "Contemporary architectural interior opening into a planted courtyard"
      }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: "#f4f3ec",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
