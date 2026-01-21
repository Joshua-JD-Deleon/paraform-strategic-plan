import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PasswordGate } from "@/components/auth/PasswordGate";
import { ContentProtection } from "@/components/security/ContentProtection";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Paraform | Account Manager Strategic Plan",
  description: "Strategic 30-60-90 day action plan for Account Manager role. Supply-side growth, recruiter success, and marketplace operations.",
  authors: [{ name: "Joshua (JD) Deleon" }],
  robots: "noindex, nofollow",
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased`}>
        <PasswordGate>
          <ContentProtection>{children}</ContentProtection>
        </PasswordGate>
      </body>
    </html>
  );
}
