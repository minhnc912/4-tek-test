import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import CopyRight from "./components/CopyRight";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4tek Landing Page",
  description: "4tek Landing Page test",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
          <Footer />
          <CopyRight />
          <BackToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
