import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section className="gallery-section flex flex-col items-center pb-24" id="about">
      <div className="section-header">
        <div className="section-tag">
          <span>💝</span> Giới Thiệu
        </div>
        <h2 className="section-title">Về Nhã Phương</h2>
        <div className="section-divider" />
      </div>

      <Card className="w-full max-w-[900px] lg:w-[61.8vw] mx-auto bg-white/70 backdrop-blur-xl border-0 ring-1 ring-[rgba(255,107,157,0.1)] shadow-[var(--shadow-hover)] py-8 relative overflow-hidden group">
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-lavender)] opacity-5 blur-[80px] rounded-full mix-blend-multiply pointer-events-none transition-opacity duration-1000 group-hover:opacity-10" />

        <CardContent className="p-8 md:p-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[38.2%_1fr] gap-10 items-center">
            {/* Cột 38.2% (Biểu tượng thị giác) */}
            <div className="flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[rgba(255,107,157,0.1)] pb-8 md:pb-0 md:pr-8">
              <div className="text-8xl mb-4 filter drop-shadow-[var(--shadow-soft)] hover:scale-110 transition-transform duration-500 cursor-default">
                🌸
              </div>
              <div className="font-[var(--font-display)] font-semibold text-[var(--accent-pink)] letter-spacing-tight">
                2024 Collection
              </div>
            </div>

            {/* Cột 61.8% (Nội dung) */}
            <div className="flex flex-col text-left pl-0 md:pl-2">
              <h3 className="font-[var(--font-display)] text-2xl font-bold mb-4 text-[var(--text-primary)]">
                Lưu Giữ Khoảnh Khắc
              </h3>
              <p className="font-[var(--font-body)] text-[1.05rem] leading-[1.8] text-[var(--text-secondary)] mb-6">
                Đây là bộ sưu tập những khoảnh khắc đẹp nhất được trân trọng lưu giữ lại. 
                Mỗi bức ảnh mang theo một câu chuyện, một nụ cười, và những kỷ niệm không thể nào quên.
              </p>
              <div className="flex items-center gap-3">
                <Separator className="flex-1 bg-[rgba(255,107,157,0.15)]" />
                <span className="text-[var(--accent-pink)] font-medium text-sm font-[var(--font-display)]">Cảm ơn vì đã đồng hành 💕</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
