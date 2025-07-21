import type { Metadata } from "next";

import "./globals.css";

import { dmSans } from "../shared/lib/utils/fonts.util";
import Providers from "@/shared/redux/provider";
import NotificationTemplate from "@/shared/components/templates/notification/notification.template";

export const metadata: Metadata = {
  title: "EJARALUX | Luxury Skin, Timeless Glow",
  description:
    "Luxury skincare crafted to reveal your most radiant self. Shop glow essentials and elevate your beauty ritual.",
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
