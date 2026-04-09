import { FloatingParticles } from "@/components/floating-particles";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { GallerySection } from "@/components/gallery-section";
import { CircularGallerySection } from "@/components/circular-gallery-section";
import { GlobalFluidGlass } from "@/components/fluid-glass-section";
import { AboutSection } from "@/components/about-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg" aria-hidden="true" />
      
      {/* Global 3D Fluid Glass Overlay */}
      <GlobalFluidGlass />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <HeroSection />

      {/* Gallery with Lightbox */}
      <GallerySection />

      {/* 3D Circular Gallery */}
      <CircularGallerySection />

      {/* About */}
      <AboutSection />

      {/* Footer */}
      <SiteFooter />
    </>
  );
}

