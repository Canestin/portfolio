import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.scss";
import { Header, Sidebar } from "@components";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Canestin Ndong",
  description: "Software Engineer Student & Entrepreneur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://canestin.ndong.co",
    images: [
      {
        url: "https://canestin.ndong.co/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Canestin Ndong",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <Sidebar />
          <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
