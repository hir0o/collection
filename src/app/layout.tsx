import "./global.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const inter = Noto_Sans_JP({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
