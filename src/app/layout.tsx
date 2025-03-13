import type { Metadata } from "next";
import { Navbar } from "@/components/gsp/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "GSP Phonebook",
  description: "Phonebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
