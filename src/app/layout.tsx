import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EmpactMe",
  description: "Where Brands Meet Influence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}