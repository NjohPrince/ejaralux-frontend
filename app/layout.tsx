import type { Metadata } from "next";

import "./globals.css";

import { inter } from "../shared/lib/utils/fonts.util";

export const metadata: Metadata = {
  title: "EJARALUX",
  description: "Smart Fashion for Every Lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
