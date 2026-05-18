import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivek Dehariya | Full Stack Developer",
  description: "Portfolio of Vivek Dehariya, a Full Stack Developer specializing in MERN stack and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-text-primary antialiased`}>{children}</body>
    </html>
  );
}
