import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import TanStackProvider from "@/provider/tanstack-provider";
import { ThemeProvider } from "@/provider/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { env } from "@/lib/env";

export const metadata: Metadata = {
  metadataBase: new URL(env.BETTER_AUTH_URL),
  title: {
    default: "Repositories & Project Manager",
    template: "%s | Repositories & Project Manager",
  },
  description: "Manage your GitHub repositories and projects efficiently.",
  openGraph: {
    title: "Repositories & Project Manager",
    description: "Manage your GitHub repositories and projects efficiently.",
    url: env.BETTER_AUTH_URL,
    siteName: "Repositories & Project Manager",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repositories & Project Manager",
    description: "Manage your GitHub repositories and projects efficiently.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TanStackProvider>{children}</TanStackProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
