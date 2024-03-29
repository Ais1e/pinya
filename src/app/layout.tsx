import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import * as React from "react";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} h-full`}>
     
        {children}
    
      </body>
    </html>
  );
}
