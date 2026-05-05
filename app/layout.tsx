import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bearworks.uk",
  description: "Personal Hub Site and Digital Garden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} min-h-screen p-4 md:p-8 flex justify-center`}>
        {children}
      </body>
    </html>
  );
}
