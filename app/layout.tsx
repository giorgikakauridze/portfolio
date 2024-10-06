import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import Partners from "./_components/Partners";
import Explore from "./_components/Explore";
import { MyProvider } from "./_context/context";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100  900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100  900",
});

export const metadata: Metadata = {
  title: "CoinStonks",
  description:
    "CoinStonks.com best platform for crypto transactions , make your first deposit now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.svg" />
      <meta
        name="google-site-verification"
        content="bPngOzOT2F5D9Xb9MO4xpHbWUhEkJ5WQTE12mnx40ZQ"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="1700:pl-20 1700:pr-20 mobile:p-0">
          <NextUIProvider>
            <MyProvider>
              <Toaster />
              <Navigation />

              <div className="pb-96">{children}</div>

              <Partners />
              <Explore />
            </MyProvider>
          </NextUIProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
