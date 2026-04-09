"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { MediaItem } from "@/lib/media-data";

interface LightboxProps {
  items: MediaItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className={`lightbox-overlay ${isOpen ? "active" : ""}`}
      onClick={onClose}
      id="lightbox"
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lightbox-close hover:bg-[var(--accent-pink)] hover:rotate-90 hover:scale-110"
        onClick={onClose}
        title="Đóng"
      >
        ✕
      </Button>

      {/* Previous Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lightbox-nav lightbox-prev hover:bg-[var(--accent-pink)]"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        title="Ảnh trước"
      >
        ‹
      </Button>

      {/* Next Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lightbox-nav lightbox-next hover:bg-[var(--accent-pink)]"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        title="Ảnh tiếp"
      >
        ›
      </Button>

      {/* Main Content */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {currentItem.type === "image" ? (
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            width={1200}
            height={900}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
            }}
            priority
          />
        ) : (
          <video
            src={currentItem.src}
            controls
            autoPlay
            playsInline
            style={{ maxWidth: "90vw", maxHeight: "85vh" }}
          />
        )}
      </div>

      {/* Counter Badge */}
      <Badge
        variant="outline"
        className="lightbox-counter border-white/20 bg-white/10 backdrop-blur-md text-white/70 px-4 py-1 rounded-full text-sm font-semibold"
      >
        {currentIndex + 1} / {items.length}
      </Badge>
    </div>
  );
}
