"use client";

import Timeline from "@/components/ui/timeline";

const settings = {
  textColor: "var(--color-anthracite, #2C2826)",
  mutedTextColor: "var(--color-text-secondary, #524C48)",
  activeColor: "#B8956E",
  backgroundColor: "var(--color-sand, #FAF8F5)",
  duration: 1.4,
};

export default function TimelineDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <main className="bg-background text-foreground">
      {/* Lead-in so the pinned timeline has somewhere to scroll in from. */}
      <section className="flex h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Köşk Düğün Salonu
        </p>
        <h1 className="max-w-[22ch] text-4xl font-semibold leading-tight tracking-tight sm:text-5xl font-serif">
          15 Yıllık Güven, Tek Bir Yatay Akış.
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Aşağı kaydırmaya devam edin — zaman tüneli sabitlenir ve salonumuzun önemli kilometre taşları sırayla açılır.
        </p>
        <span className="mt-2 animate-bounce text-muted-foreground">&darr;</span>
      </section>

      {/* Realistic usage: custom copy, a branded accent, tuned reveal speed. */}
      <Timeline
        title="Köşk Hikayesi & Kilometre Taşları"
        periodLabel="2010 — 2026"
        backgroundColor={s.backgroundColor}
        textColor={s.textColor}
        mutedTextColor={s.mutedTextColor}
        activeColor={s.activeColor}
        imageUrl="/images/venue/kosk-ana-balo-salonu-genel-perspektif.webp"
        imageAlt="Köşk Düğün Salonu Ana Balo Salonu"
        duration={s.duration}
      />

      <section className="flex h-[40vh] items-center justify-center px-6 text-center text-sm text-muted-foreground">
        Temellerimizin atıldığı 2010 yılından bugüne, 1.000+ mutlu ailenin yanında.
      </section>
    </main>
  );
}
