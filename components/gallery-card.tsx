"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { MediaItem } from "@/lib/media-data";

interface GalleryCardProps {
  item: MediaItem;
  index: number;
  onOpen: (index: number) => void;
}

export function GalleryCard({ item, index, onOpen }: GalleryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="gallery-card reveal"
      style={{ animationDelay: `${(index % 8) * 0.08}s` }}
      onClick={() => onOpen(index)}
      id={`gallery-card-${index}`}
    >
      {/* Video Badge */}
      {item.type === "video" && (
        <Badge
          variant="secondary"
          className="absolute top-2.5 right-2.5 z-[3] rounded-full bg-[rgba(255,61,127,0.88)] text-white border-0 backdrop-blur-md px-2.5 py-0.5 text-[0.7rem] font-bold shadow-lg"
        >
          ▶ Video
        </Badge>
      )}

      {/* Image / Video Thumbnail */}
      <Image
        src={item.type === "video" && item.thumbnail ? item.thumbnail : item.src}
        alt={item.alt}
        width={600}
        height={800}
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
      />

      {/* Hover Overlay */}
      <div className="card-overlay">
        <div className="card-overlay-actions">
          <Button
            variant="ghost"
            size="icon"
            className="size-11 rounded-full bg-white/90 backdrop-blur-md text-[var(--accent-pink)] hover:bg-[var(--accent-pink)] hover:text-white shadow-lg transition-all duration-300 hover:scale-110"
            title="Xem ảnh"
          >
            🔍
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-11 rounded-full bg-white/90 backdrop-blur-md text-[var(--accent-pink)] hover:bg-[var(--accent-pink)] hover:text-white shadow-lg transition-all duration-300 hover:scale-110"
            title="Yêu thích"
          >
            💖
          </Button>
        </div>
        <div className="card-footer">{item.alt}</div>
      </div>
    </div>
  );
}
