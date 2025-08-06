import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AssessmentProvider } from "@/context/AssessmentContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Urgency - Know where to go instantly",
  description: "Urgency guides you in under a minute to determine if you need Emergency Room or Urgent Care treatment.",
  keywords: ["emergency room", "urgent care", "medical symptoms", "health assessment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 min-h-screen flex flex-col`}>
        <AssessmentProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AssessmentProvider>
      </body>
    </html>
  );
}
