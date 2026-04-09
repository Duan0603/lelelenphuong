"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IMAGE_ONLY, VIDEO_ONLY } from "@/lib/media-data";

export function HeroSection() {
  const heroImages = IMAGE_ONLY.slice(0, 5);

  return (
    <section className="hero-section" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-[61.8%_1fr] gap-12 lg:gap-8 items-center w-full">
        {/* Khối Trái: Tỷ lệ 61.8% */}
        <div className="flex flex-col items-start text-left">
          {/* Top Badge */}
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-[rgba(255,107,157,0.25)] bg-[rgba(255,107,157,0.08)] px-5 py-1.5 text-sm font-semibold text-[var(--accent-pink)] animate-in fade-in-0 slide-in-from-top-4 duration-700"
          >
            ✨ Bộ sưu tập khoảnh khắc đẹp
          </Badge>

          {/* Title */}
          <h1 className="hero-title">Lê Nhã Phương</h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Mỗi bức ảnh là một câu chuyện, mỗi khoảnh khắc là một kỷ niệm đáng
            trân trọng 💝
          </p>
        </div>

        {/* Khối Phải: Tỷ lệ 38.2% */}
        <div className="flex flex-col items-start lg:items-end gap-10 lg:pl-10">
          {/* Avatar Row */}
          <div className="hero-avatar-row m-0 justify-start lg:justify-end">
            <AvatarGroup>
              {heroImages.map((item, i) => (
                <Avatar
                  key={i}
                  size="lg"
                  className="size-[80px] border-3 border-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:scale-115 hover:-rotate-5 hover:shadow-[var(--shadow-hover)] hover:z-10"
                >
                  <AvatarImage src={item.src} alt={item.alt} />
                  <AvatarFallback>NP</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap gap-4 animate-in fade-in-0 slide-in-from-bottom-6 duration-700 delay-500 justify-start lg:justify-end w-full">
            <Card className="bg-white/60 backdrop-blur-xl border-0 ring-1 ring-[rgba(255,107,157,0.1)] shadow-[var(--shadow-soft)] py-3 flex-1 min-w-[140px] max-w-[200px]">
              <CardContent className="flex flex-col items-center justify-center gap-1 p-4">
                <span className="text-2xl mb-1 mt-1">📷</span>
                <div className="stat-number text-2xl">{IMAGE_ONLY.length}</div>
                <div className="stat-label text-xs">Bức Ảnh</div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-xl border-0 ring-1 ring-[rgba(255,107,157,0.1)] shadow-[var(--shadow-soft)] py-3 flex-1 min-w-[140px] max-w-[200px]">
              <CardContent className="flex flex-col items-center justify-center gap-1 p-4">
                <span className="text-2xl mb-1 mt-1">🎬</span>
                <div className="stat-number text-2xl">{VIDEO_ONLY.length}</div>
                <div className="stat-label text-xs">Video</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span />
      </div>
    </section>
  );
}
