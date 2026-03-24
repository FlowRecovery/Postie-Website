import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Postie | Only the post that matters",
  description:
    "Postie connects to your email and delivers only verified letters from organisations you trust. No spam. No scams. Just the post that matters. Launching Spring 2026.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Postie | Only the post that matters",
    description:
      "Postie connects to your email and delivers only verified letters from organisations you trust. No spam. No scams. Just the post that matters.",
    url: "https://getpostie.app",
    siteName: "Postie",
    images: [
      {
        url: "https://getpostie.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Postie | Only the post that matters",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postie | Only the post that matters",
    description: "Only the post that matters. Launching Spring 2026.",
    images: ["https://getpostie.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}