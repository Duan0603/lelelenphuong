"use client";

import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { IMAGE_ONLY } from "@/lib/media-data";

// Dynamic import to prevent SSR — OGL uses WebGL which requires browser
const CircularGallery = dynamic(
  () => import("@/components/CircularGallery"),
  { ssr: false }
);

// Select showcase images for the circular gallery
const SHOWCASE_ITEMS = IMAGE_ONLY.slice(0, 12).map((item) => ({
  image: item.src,
  text: item.alt,
}));

export function CircularGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Only mount the WebGL canvas when the section is scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="circular-gallery-section" id="showcase" ref={containerRef}>
      <div className="section-header">
        <div className="section-tag">
          <span>🎠</span> Triển Lãm 3D
        </div>
        <h2 className="section-title">Vòng Xoay Kỷ Niệm</h2>
        <div className="section-divider" />
      </div>

      <p className="circular-gallery-hint">
        <Badge
          variant="outline"
          className="rounded-full border-[rgba(255,107,157,0.2)] bg-[rgba(255,107,157,0.06)] text-[var(--text-muted)] px-4 py-1.5 text-sm font-medium"
        >
          🖱️ Cuộn hoặc kéo để khám phá
        </Badge>
      </p>

      <div className="circular-gallery-container">
        {isVisible ? (
          <CircularGallery
            items={SHOWCASE_ITEMS}
            bend={1}
            textColor="#ff6b9d"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
            font="bold 16px Quicksand"
          />
        ) : (
          <div className="fluid-glass-placeholder">
            <span className="text-4xl">🎠</span>
            <p className="text-[var(--text-muted)] text-sm mt-2">Cuộn đến để khám phá...</p>
          </div>
        )}
      </div>
    </section>
  );
}
