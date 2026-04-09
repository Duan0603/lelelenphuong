import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Lê Nhã Phương 🌸 | Photo Gallery",
  description:
    "Bộ sưu tập ảnh đẹp của Lê Nhã Phương — những khoảnh khắc đáng yêu được lưu giữ.",
  keywords: ["photo gallery", "Nhã Phương", "ảnh đẹp", "kỷ niệm"],
  openGraph: {
    title: "Lê Nhã Phương 🌸",
    description: "Bộ sưu tập ảnh xinh xắn và đáng yêu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`h-full antialiased font-sans ${geist.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="root" className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
