import type { Metadata } from "next";

import "./globals.css";

import { dmSans } from "../shared/lib/utils/fonts.util";
import Providers from "@/shared/redux/provider";
import NotificationTemplate from "@/shared/components/templates/notification/notification.template";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
