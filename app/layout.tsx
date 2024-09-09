import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const metropolisMedium = localFont({
  src: "./fonts/MetropolisMedium.woff",
  variable: "--font-metropolis-medium",
});
const metropolisLight = localFont({
  src: "./fonts/MetropolisLight.woff",
  variable: "--font-metropolis-light",
});
const metropolisSemiBold = localFont({
  src: "./fonts/MetropolisSemiBold.woff",
  variable: "--font-metropolis-semibold",
});
const metropolisBold = localFont({
  src: "./fonts/MetropolisBold.woff",
  variable: "--font-metropolis-bold",
});

export const metadata: Metadata = {
  title: "Raj Rangani | Node JS Backend Developer",
  description: "",
  icons: "/icons/raj.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${metropolisMedium.variable} ${metropolisLight.variable} ${metropolisSemiBold.variable} ${metropolisBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
