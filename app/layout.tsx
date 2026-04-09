import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Blackclap — Connect, Share & Discover",
  description:
    "Blackclap is a modern social media platform for sharing moments, discovering new perspectives, and building meaningful connections in a vibrant community.",
  keywords: ["social media", "connect", "share", "community", "blackclap"],
  icons: {
    icon: "/images/blackclap_logo.png",
    apple: "/images/blackclap_logo.png",
  },
  openGraph: {
    title: "Blackclap — Connect, Share & Discover",
    description:
      "Share your moments, discover new perspectives, and build meaningful connections.",
    type: "website",
    images: ["/images/blackclap_logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
