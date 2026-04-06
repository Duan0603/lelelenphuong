import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Lê Lê Nhẫn Phương 🌸 | Photo Gallery",
  description:
    "Bộ sưu tập ảnh đẹp của Lê Lê Nhẫn Phương — những khoảnh khắc đáng yêu được lưu giữ.",
  keywords: ["photo gallery", "Nhẫn Phương", "ảnh đẹp", "kỷ niệm"],
  openGraph: {
    title: "Lê Lê Nhẫn Phương 🌸",
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
    <html lang="vi" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
