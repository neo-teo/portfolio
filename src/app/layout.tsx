import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teo Tsivranidis",
  description: "Teo Tsivranidis is a software developer and designer currently based in Brooklyn, NY. This site contains information about Teo Tsivranidis work experience, his interests, and his contact information.",
  openGraph: {
    type: "website",
    url: "https://teo.fyi",
    siteName: "Teo Tsivranidis",
    title: "Teo Tsivranidis",
    description: "Teo Tsivranidis is a software developer and designer currently based in Brooklyn, NY. This site contains information about Teo Tsivranidis work experience, his interests, and his contact information.",
    images: [{
      url: "https://raw.githubusercontent.com/teo-clone/portfolio/main/public/ogicon.png",
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
