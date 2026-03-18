import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EmpactMe",
  description: "Where Brands Meet Influence - The premier influencer-commerce marketplace connecting companies with top content creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}