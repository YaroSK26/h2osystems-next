import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import  CookieConsent  from "../components/CookieConsent";
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: "H2O Systems",
  description:
    "We are an innovative manufacturing and trading company covering the markets of Slovakia, Czech Republic, and EU countries. Since 1999, we have been professionally engaged in the production, sale, and service of the highest quality water treatment systems.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="sk">
      <body className={montserrat.className}>
        <Header />
        <Analytics/>
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
