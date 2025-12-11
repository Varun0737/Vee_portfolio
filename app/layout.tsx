import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varun Reddy Shyamala | Cloud & DevOps Engineer",
  description: "Portfolio of Varun Reddy Shyamala - Cloud & DevOps Engineer specializing in AWS, Linux, and Automation.",
};

import Navbar from "@/components/Navbar";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased bg-cyber-black text-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
