"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-glass ${scrolled ? "scrolled" : ""}`} id="nav-main">
      <div className="nav-inner">
        <div className="nav-logo">🌸 Nhã Phương</div>
        <ul className="nav-links">
          <li>
            <a href="#gallery">
              <Button variant="ghost" className="font-[var(--font-display)] font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-pink)] hover:bg-[rgba(255,107,157,0.08)] rounded-full px-4">
                📸 Ảnh
              </Button>
            </a>
          </li>
          <li>
            <a href="#videos">
              <Button variant="ghost" className="font-[var(--font-display)] font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-pink)] hover:bg-[rgba(255,107,157,0.08)] rounded-full px-4">
                🎬 Video
              </Button>
            </a>
          </li>
          <li>
            <a href="#about">
              <Button variant="ghost" className="font-[var(--font-display)] font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-pink)] hover:bg-[rgba(255,107,157,0.08)] rounded-full px-4">
                💝 Giới thiệu
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
