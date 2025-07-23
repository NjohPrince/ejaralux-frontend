import type { Metadata } from "next";

import "./globals.css";

import { dmSans } from "../shared/lib/utils/fonts.util";
import Providers from "@/shared/redux/provider";
import NotificationTemplate from "@/shared/components/templates/notification/notification.template";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "EJARALUX | Luxury Skin, Timeless Glow",
  description:
    "Luxury skincare crafted to reveal your most radiant self. Shop glow essentials and elevate your beauty ritual.",
  openGraph: {
    title: "EJARALUX | Luxury Skin, Timeless Glow",
    description:
      "Luxury skincare crafted to reveal your most radiant self. Shop glow essentials and elevate your beauty ritual.",
    url: "https://ejaralux.vercel.app",
    siteName: "EJARALUX",
    images: [
      {
        url: "https://ejaralux.vercel.app/images/products/blur.webp",
        width: 512,
        height: 512,
        alt: "EJARALUX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EJARALUX | Luxury Skin, Timeless Glow",
    description:
      "Luxury skincare crafted to reveal your most radiant self. Shop glow essentials and elevate your beauty ritual.",
    images: ["https://ejaralux.vercel.app/images/products/blur.webp"],
  },
};

/**
 * The RootLayout component serves as the main layout structure for the application.
 * It provides a consistent layout across the app by wrapping the child components
 * with essential providers and templates.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - The props object containing
 * the React children components to be wrapped.
 * @returns {JSX.Element} The HTML structure with providers and templates applied.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}`}>
        <Providers>
          <NotificationTemplate>{children}</NotificationTemplate>
        </Providers>
      </body>
    </html>
  );
}
