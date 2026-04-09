"use client";

import { useState, useEffect } from "react";

// Floating emoji particles for ambient decoration
const EMOJIS = ["🌸", "✨", "💖", "🦋", "🌺", "💫", "🌷", "⭐", "🩷", "🪻"];

interface Particle {
  left: string;
  duration: string;
  delay: string;
  size: string;
  emoji: string;
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        duration: `${8 + Math.random() * 12}s`,
        delay: `${Math.random() * 10}s`,
        size: `${0.8 + Math.random() * 1.2}rem`,
        emoji: EMOJIS[i % EMOJIS.length],
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
