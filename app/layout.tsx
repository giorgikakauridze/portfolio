import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { MyProvider } from "./_context/context";

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
  title: "Portfolio",
  description: "Portfolio of GK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-[#141128]">
      <link rel="icon" href="/icon.svg" />
      <meta
        name="google-site-verification"
        content="bPngOzOT2F5D9Xb9MO4xpHbWUhEkJ5WQTE12mnx40ZQ"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="">
          <NextUIProvider>
            <MyProvider>
              <div className="">{children}</div>
            </MyProvider>
          </NextUIProvider>
        </main>
      </body>
    </html>
  );
}
