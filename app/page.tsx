"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

// ===== Data: All media files =====
interface MediaItem {
  src: string;
  type: "image" | "video";
  alt: string;
  thumbnail?: string;
}

const MEDIA_ITEMS: MediaItem[] = [
  // Images
  { src: "/lelelenphuong/IMG_5905.PNG", type: "image", alt: "Nhẫn Phương bên hoa giấy" },
  { src: "/lelelenphuong/IMG_6060.JPG", type: "image", alt: "Nhẫn Phương selfie" },
  { src: "/lelelenphuong/IMG_0001.JPEG", type: "image", alt: "Nhẫn Phương cute pose" },
  { src: "/lelelenphuong/IMG_6746.JPG", type: "image", alt: "Khoảnh khắc đáng yêu" },
  { src: "/lelelenphuong/IMG_5970.JPEG", type: "image", alt: "Du lịch vui vẻ" },
  { src: "/lelelenphuong/IMG_6758.JPG", type: "image", alt: "Nụ cười tỏa nắng" },
  { src: "/lelelenphuong/IMG_5985.JPEG", type: "image", alt: "Phong cảnh đẹp" },
  { src: "/lelelenphuong/IMG_6063.JPG", type: "image", alt: "Kỷ niệm xinh đẹp" },
  { src: "/lelelenphuong/IMG_5995.JPEG", type: "image", alt: "Hành trình khám phá" },
  { src: "/lelelenphuong/IMG_6004.PNG", type: "image", alt: "Ảnh chân dung" },
  { src: "/lelelenphuong/IMG_6239.PNG", type: "image", alt: "Khoảnh khắc đặc biệt" },
  { src: "/lelelenphuong/IMG_0047.JPEG", type: "image", alt: "Phút giây đáng nhớ" },
  { src: "/lelelenphuong/IMG_0048.JPEG", type: "image", alt: "Nụ cười rạng rỡ" },
  { src: "/lelelenphuong/IMG_0055.JPEG", type: "image", alt: "Lưu giữ kỷ niệm" },
  { src: "/lelelenphuong/IMG_5950.PNG", type: "image", alt: "Bức ảnh đáng yêu" },
  { src: "/lelelenphuong/IMG_5951.PNG", type: "image", alt: "Ảnh xinh xắn" },
  { src: "/lelelenphuong/IMG_6759.JPG", type: "image", alt: "Khoảnh khắc tươi vui" },
  { src: "/lelelenphuong/IMG_6764.JPG", type: "image", alt: "Ngày đẹp trời" },
  { src: "/lelelenphuong/IMG_6765.JPG", type: "image", alt: "Hạnh phúc bình dị" },
  { src: "/lelelenphuong/IMG_6773.JPG", type: "image", alt: "Nhẫn Phương dễ thương" },
  { src: "/lelelenphuong/IMG_6748.JPG", type: "image", alt: "Ảnh chụp đời thường" },
  { src: "/lelelenphuong/IMG_6749.JPG", type: "image", alt: "Chân dung xinh" },
  { src: "/lelelenphuong/att.j983M0vEIr0oPW9bKlIX5td7walDb8EjadqSE22sRWo.jpg", type: "image", alt: "Khoảnh khắc đẹp" },
  { src: "/lelelenphuong/IMG_5978.JPG", type: "image", alt: "Ảnh đáng yêu" },
  { src: "/lelelenphuong/IMG_5965.JPG", type: "image", alt: "Ngây thơ trong sáng" },
  // Live Photos / Videos (using video thumbnails)
  { src: "/lelelenphuong/IMG_5965.MOV", type: "video", alt: "Live Photo - Khoảnh khắc sống động", thumbnail: "/lelelenphuong/IMG_5965.JPG" },
  { src: "/lelelenphuong/IMG_5978.MOV", type: "video", alt: "Live Photo - Nụ cười rạng ngời", thumbnail: "/lelelenphuong/IMG_5978.JPG" },
  { src: "/lelelenphuong/IMG_6749.MOV", type: "video", alt: "Live Photo - Khoảnh khắc vui nhộn", thumbnail: "/lelelenphuong/IMG_6749.JPG" },
  { src: "/lelelenphuong/IMG_6780.MOV", type: "video", alt: "Video đáng yêu 1", thumbnail: "/lelelenphuong/IMG_6780.JPG" },
  { src: "/lelelenphuong/IMG_6781.MOV", type: "video", alt: "Video đáng yêu 2", thumbnail: "/lelelenphuong/IMG_6781.JPG" },
  { src: "/lelelenphuong/IMG_6782.MOV", type: "video", alt: "Video đáng yêu 3", thumbnail: "/lelelenphuong/IMG_6782.JPG" },
  { src: "/lelelenphuong/IMG_6783.MOV", type: "video", alt: "Video đáng yêu 4", thumbnail: "/lelelenphuong/IMG_6783.JPG" },
  { src: "/lelelenphuong/IMG_6784.MOV", type: "video", alt: "Video đáng yêu 5", thumbnail: "/lelelenphuong/IMG_6784.JPG" },
  { src: "/lelelenphuong/IMG_6785.MOV", type: "video", alt: "Video đáng yêu 6", thumbnail: "/lelelenphuong/IMG_6785.JPG" },
  { src: "/lelelenphuong/IMG_6786.MOV", type: "video", alt: "Video đáng yêu 7", thumbnail: "/lelelenphuong/IMG_6786.JPG" },
];

const IMAGE_ONLY = MEDIA_ITEMS.filter((m) => m.type === "image");
const VIDEO_ONLY = MEDIA_ITEMS.filter((m) => m.type === "video");

// ===== Floating Particles =====
const PARTICLES = ["🌸", "✨", "💖", "🦋", "🌺", "💫", "🌷", "⭐", "🩷", "🪻"];

function FloatingParticles() {
  const [particles, setParticles] = useState<
    { left: string; duration: string; delay: string; size: string; emoji: string }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        duration: `${8 + Math.random() * 12}s`,
        delay: `${Math.random() * 10}s`,
        size: `${0.8 + Math.random() * 1.2}rem`,
        emoji: PARTICLES[i % PARTICLES.length],
      }))
    );
  }, []);

  return (
    <div className="particle-container" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.size,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}

// ===== Navigation =====
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-glass ${scrolled ? "scrolled" : ""}`} id="nav-main">
      <div className="nav-inner">
        <div className="nav-logo">🌸 Nhẫn Phương</div>
        <ul className="nav-links">
          <li>
            <a href="#gallery">Ảnh</a>
          </li>
          <li>
            <a href="#videos">Video</a>
          </li>
          <li>
            <a href="#about">Giới thiệu</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// ===== Hero Section =====
function HeroSection() {
  const heroImages = IMAGE_ONLY.slice(0, 5);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-badge">
        <span>✨</span> Bộ sưu tập khoảnh khắc đẹp
      </div>

      <h1 className="hero-title">
        Lê Lê Nhẫn Phương
      </h1>

      <p className="hero-subtitle">
        Mỗi bức ảnh là một câu chuyện, mỗi khoảnh khắc là một kỷ niệm đáng trân trọng 💝
      </p>

      <div className="hero-avatar-row">
        {heroImages.map((item, i) => (
          <Image
            key={i}
            src={item.src}
            alt={item.alt}
            width={80}
            height={80}
            className="hero-avatar"
            style={{ animationDelay: `${0.6 + i * 0.1}s` }}
          />
        ))}
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-number">{IMAGE_ONLY.length}</div>
          <div className="stat-label">Bức Ảnh</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{VIDEO_ONLY.length}</div>
          <div className="stat-label">Video</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">∞</div>
          <div className="stat-label">Kỷ Niệm</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span />
      </div>
    </section>
  );
}

// ===== Gallery Card Component =====
function GalleryCard({
  item,
  index,
  onOpen,
}: {
  item: MediaItem;
  index: number;
  onOpen: (index: number) => void;
}) {
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
      {item.type === "video" && (
        <div className="video-badge">
          <span>▶</span> Video
        </div>
      )}

      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={item.alt}
          width={600}
          height={800}
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
        />
      ) : (
        <Image
          src={item.thumbnail || item.src}
          alt={item.alt}
          width={600}
          height={800}
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
        />
      )}

      <div className="card-overlay">
        <div className="card-overlay-actions">
          <button className="overlay-btn" title="Xem ảnh">
            🔍
          </button>
          <button className="overlay-btn" title="Yêu thích">
            💖
          </button>
        </div>
        <div className="card-footer">{item.alt}</div>
      </div>
    </div>
  );
}

// ===== Lightbox Component =====
function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: {
  items: MediaItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
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
      <button className="lightbox-close" onClick={onClose} title="Đóng">
        ✕
      </button>
      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        title="Ảnh trước"
      >
        ‹
      </button>
      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        title="Ảnh tiếp"
      >
        ›
      </button>

      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
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
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
            }}
          />
        )}
      </div>

      <div className="lightbox-counter">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}

// ===== Main Page Component =====
export default function Home() {
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
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
      {/* Animated Background */}
      <div className="animated-bg" aria-hidden="true" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <HeroSection />

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <div className="section-header">
          <div className="section-tag">
            <span>📸</span> Bộ Sưu Tập
          </div>
          <h2 className="section-title">Khoảnh Khắc Đáng Yêu</h2>
          <div className="section-divider" />
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filter">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
            id="filter-all"
          >
            🎨 Tất cả ({MEDIA_ITEMS.length})
          </button>
          <button
            className={`filter-btn ${filter === "image" ? "active" : ""}`}
            onClick={() => setFilter("image")}
            id="filter-photos"
          >
            📷 Ảnh ({IMAGE_ONLY.length})
          </button>
          <button
            className={`filter-btn ${filter === "video" ? "active" : ""}`}
            onClick={() => setFilter("video")}
            id="filter-videos"
          >
            🎬 Video ({VIDEO_ONLY.length})
          </button>
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

      {/* About Section */}
      <section className="gallery-section" id="about">
        <div className="section-header">
          <div className="section-tag">
            <span>💝</span> Giới Thiệu
          </div>
          <h2 className="section-title">Về Nhẫn Phương</h2>
          <div className="section-divider" />
        </div>
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            textAlign: "center",
            padding: "2rem",
            background: "rgba(255,255,255,0.75)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-soft)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌸</div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
            }}
          >
            Đây là bộ sưu tập những khoảnh khắc đẹp nhất được lưu giữ lại.
            Mỗi bức ảnh mang theo một câu chuyện, một nụ cười, và những kỷ
            niệm không thể nào quên. Cảm ơn vì đã là một phần tuyệt vời trong
            cuộc sống! 💕
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          Made with <span className="footer-heart">💖</span> for Nhẫn Phương
          &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </footer>

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
