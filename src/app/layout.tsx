import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.scss";
import { Header, Sidebar } from "@components";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Canestin Ndong",
  description: "Software Engineer Student",
  openGraph: {
    url: "https://canestin.ndong.co",
    images: {
      url: "https://canestin.ndong.co/meta.png",
      width: 500,
      height: 250,
    },
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
