import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="footer" id="footer">
      <Separator className="mb-6 bg-[rgba(255,107,157,0.1)]" />
      <p className="footer-text">
        Made with <span className="footer-heart">💖</span> for Nhã Phương
        &nbsp;·&nbsp; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
