"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GalleryCard } from "@/components/gallery-card";
import { Lightbox } from "@/components/lightbox";
import { MEDIA_ITEMS, IMAGE_ONLY, VIDEO_ONLY } from "@/lib/media-data";

type FilterType = "all" | "image" | "video";

export function GallerySection() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    filter === "all"
      ? MEDIA_ITEMS
      : filter === "image"
        ? IMAGE_ONLY
        : VIDEO_ONLY;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const prevItem = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [filteredItems.length]);

  const nextItem = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [filteredItems.length]);

  return (
    <>
      <section className="gallery-section" id="gallery">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>📸</span> Bộ Sưu Tập
          </div>
          <h2 className="section-title">Khoảnh Khắc Đáng Yêu</h2>
          <div className="section-divider" />
        </div>

        {/* Filter Buttons using shadcn Button */}
        <div className="gallery-filter">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            className={`rounded-full px-5 font-semibold transition-all duration-300 ${
              filter === "all"
                ? "bg-[var(--accent-pink)] text-white border-[var(--accent-pink)] shadow-[0_4px_16px_rgba(255,107,157,0.3)] hover:bg-[var(--accent-rose)]"
                : "border-[rgba(255,107,157,0.2)] bg-white/70 text-[var(--text-secondary)] backdrop-blur-md hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)]"
            }`}
            onClick={() => setFilter("all")}
            id="filter-all"
          >
            🎨 Tất cả
            <Badge variant="secondary" className="ml-1.5 rounded-full text-[0.65rem] h-4 px-1.5 bg-white/30 text-inherit border-0">
              {MEDIA_ITEMS.length}
            </Badge>
          </Button>

          <Button
            variant={filter === "image" ? "default" : "outline"}
            className={`rounded-full px-5 font-semibold transition-all duration-300 ${
              filter === "image"
                ? "bg-[var(--accent-pink)] text-white border-[var(--accent-pink)] shadow-[0_4px_16px_rgba(255,107,157,0.3)] hover:bg-[var(--accent-rose)]"
                : "border-[rgba(255,107,157,0.2)] bg-white/70 text-[var(--text-secondary)] backdrop-blur-md hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)]"
            }`}
            onClick={() => setFilter("image")}
            id="filter-photos"
          >
            📷 Ảnh
            <Badge variant="secondary" className="ml-1.5 rounded-full text-[0.65rem] h-4 px-1.5 bg-white/30 text-inherit border-0">
              {IMAGE_ONLY.length}
            </Badge>
          </Button>

          <Button
            variant={filter === "video" ? "default" : "outline"}
            className={`rounded-full px-5 font-semibold transition-all duration-300 ${
              filter === "video"
                ? "bg-[var(--accent-pink)] text-white border-[var(--accent-pink)] shadow-[0_4px_16px_rgba(255,107,157,0.3)] hover:bg-[var(--accent-rose)]"
                : "border-[rgba(255,107,157,0.2)] bg-white/70 text-[var(--text-secondary)] backdrop-blur-md hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)]"
            }`}
            onClick={() => setFilter("video")}
            id="filter-videos"
          >
            🎬 Video
            <Badge variant="secondary" className="ml-1.5 rounded-full text-[0.65rem] h-4 px-1.5 bg-white/30 text-inherit border-0">
              {VIDEO_ONLY.length}
            </Badge>
          </Button>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.src}
              item={item}
              index={index}
              onOpen={openLightbox}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={prevItem}
        onNext={nextItem}
      />
    </>
  );
}
