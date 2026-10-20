"use client";

import {
  type CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export type MilestoneItem = {
  id: string;
  year: string;
  month: string;
  content: string;
  category?: string;
  side?: "top" | "bottom";
};

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  items?: MilestoneItem[];
  topItems?: MilestoneItem[];
  bottomItems?: MilestoneItem[];
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

export const defaultMilestones: MilestoneItem[] = [
  {
    id: "2010-mayis",
    year: "2010",
    month: "Mayıs",
    category: "Temeller & Vizyon",
    content: "Polatlı’da kolonsuz, ferah ve modern kapalı düğün salonu vizyonuyla temellerimizi attık.",
    side: "top",
  },
  {
    id: "2012-ekim",
    year: "2012",
    month: "Ekim",
    category: "Dürüst Hizmet",
    content: "Gizli maliyet veya sürpriz ek ücret içermeyen, sözleşmede konuşulanı harfiyen uygulayan dürüst hizmet felsefemizi benimsedik.",
    side: "bottom",
  },
  {
    id: "2014-haziran",
    year: "2014",
    month: "Haziran",
    category: "Ferah Mimari",
    content: "6.5 metre tavan yüksekliği, eko önleyici akustik mimari ve 1.000 kişilik geniş dans pisti standardını hayata geçirdik.",
    side: "top",
  },
  {
    id: "2018-eylul",
    year: "2018",
    month: "Eylül",
    category: "Sıfır Aksaklık",
    content: "Tam otomatik jeneratör desteği ve endüstriyel havalandırma sistemiyle davetlerde sıfır aksaklık standardını tescilledik.",
    side: "bottom",
  },
  {
    id: "2021-kasim",
    year: "2021",
    month: "Kasım",
    category: "Konfor & Otopark",
    content: "Geniş özel otoparkımız, VIP karşılama fuayesi ve gelin-damat hazırlık süitimizle ailelerin tüm konfor ihtiyaçlarını tamamladık.",
    side: "top",
  },
  {
    id: "2024-nisan",
    year: "2024",
    month: "Nisan",
    category: "Zaman & Ziyafet",
    content: "Günlük taze menüler, dakik zaman planlaması ve 1.000 kişilik profesyonel ziyafet servisi organizasyonunu kurumsallaştırdık.",
    side: "bottom",
  },
  {
    id: "2026-mayis",
    year: "2026",
    month: "Bugün",
    category: "1.000+ Mutlu Aile",
    content: "1.000+ mutlu çiftin unutulmaz anılarına ev sahipliği yaparak Polatlı ve bölgesinin en saygın davet merkezi konumuna ulaştık.",
    side: "top",
  },
];

export default function Timeline({
  title = "Köşk Hikayesi & Kilometre Taşları",
  periodLabel = "2010 — 2026",
  textColor = "var(--color-anthracite, #2C2826)",
  mutedTextColor = "var(--color-text-secondary, #524C48)",
  activeColor = "#B8956E",
  backgroundColor = "var(--color-sand, #FAF8F5)",
  items,
  topItems,
  bottomItems,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const trackLineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  // Merge items into an alternating sequence if separate arrays are provided
  const milestoneList: MilestoneItem[] = items ?? (
    topItems && bottomItems
      ? (() => {
          const combined: MilestoneItem[] = [];
          const maxLen = Math.max(topItems.length, bottomItems.length);
          for (let i = 0; i < maxLen; i++) {
            if (topItems[i]) combined.push({ ...topItems[i], side: "top" });
            if (bottomItems[i]) combined.push({ ...bottomItems[i], side: "bottom" });
          }
          return combined;
        })()
      : defaultMilestones
  );

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  // Helper to measure the exact left edge of the .container content above this section
  const alignWithPageContainer = () => {
    const track = wholeSliderRef.current;
    if (!track) return;

    // Look for the section.container directly preceding or on the page
    const container =
      document.querySelector("section.container") ||
      document.querySelector(".container");

    let exactLeft = 0;
    if (container) {
      // Find the inner grid / content wrapper
      const innerContent = container.firstElementChild as HTMLElement | null;
      if (innerContent) {
        exactLeft = innerContent.getBoundingClientRect().left;
      } else {
        const rect = container.getBoundingClientRect();
        const style = window.getComputedStyle(container);
        const pad = parseFloat(style.paddingLeft) || 0;
        exactLeft = rect.left + pad;
      }
    }

    // Fallback if container wasn't measured in DOM
    if (exactLeft <= 0) {
      const winW = window.innerWidth;
      const maxW = 1200;
      const pad = Math.min(Math.max(winW * 0.035, 16), 40);
      exactLeft = Math.max(pad, (winW - maxW) / 2 + pad);
    }

    track.style.paddingLeft = `${exactLeft}px`;
    track.style.paddingRight = `${exactLeft}px`;
  };

  useIsomorphicLayoutEffect(() => {
    alignWithPageContainer();
    window.addEventListener("resize", alignWithPageContainer);
    return () => window.removeEventListener("resize", alignWithPageContainer);
  }, []);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = wholeSliderRef.current;
    if (!section || !track) return;

    // Re-align on GSAP setup
    alignWithPageContainer();

    // Total distance the horizontal track needs to slide so the finale card stops flush with the right container margin
    const getTravelDistance = () => {
      const scrollW = track.scrollWidth;
      const windowW = window.innerWidth;
      return Math.max(scrollW - windowW, 400);
    };

    if (reducedMotion) {
      gsap.set(".journey-progress-line", { width: "100%" });
      milestoneList.forEach((m) => {
        gsap.set(`.card-box-${m.id}`, { opacity: 1, scale: 1, y: 0 });
        gsap.set(`.jl-${m.id}`, { scaleY: 1 });
        gsap.set(`.jd-${m.id}`, { scale: 1, backgroundColor: activeColor });
      });
      gsap.set(".finale-card", { opacity: 1, scale: 1 });
      return;
    }

    // 1. Initial Hidden States (Cards are strictly hidden until golden line reaches them)
    gsap.set(".journey-progress-line", { width: "0%" });
    gsap.set(".finale-card", { opacity: 0, scale: 0.9 });

    milestoneList.forEach((m) => {
      const isTop = (m.side ?? "top") === "top";
      gsap.set(`.card-box-${m.id}`, {
        opacity: 0,
        scale: 0.88,
        y: isTop ? -20 : 20,
      });
      gsap.set(`.jl-${m.id}`, {
        scaleY: 0,
        transformOrigin: isTop ? "bottom center" : "top center",
      });
      gsap.set(`.jd-${m.id}`, {
        scale: 0.6,
        backgroundColor: "var(--color-stone, #E8E4DF)",
      });
    });

    // 2. Master ScrollTrigger Timeline
    const travelDistance = getTravelDistance();
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getTravelDistance()}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: {
        ease: "none",
      },
    });

    // A. Smooth horizontal track sliding
    masterTl.to(
      track,
      {
        x: () => -getTravelDistance(),
        ease: "none",
        duration: 1,
      },
      0
    );

    // B. Golden progress line draws across the track
    masterTl.to(
      ".journey-progress-line",
      {
        width: "100%",
        ease: "none",
        duration: 1,
      },
      0
    );

    // C. Sequential Milestone Triggers (Each station opens in sequence as the golden line reaches it)
    const count = milestoneList.length;
    const startProgress = 0.08;
    const endProgress = 0.86;
    const step = (endProgress - startProgress) / Math.max(count - 1, 1);

    milestoneList.forEach((m, idx) => {
      const triggerTime = startProgress + idx * step;

      // Step 1: Center dot activates and lights up in gold
      masterTl.to(
        `.jd-${m.id}`,
        {
          scale: 1.25,
          backgroundColor: activeColor,
          duration: 0.03,
          ease: "back.out(2)",
        },
        triggerTime
      );

      // Step 2: Stem line grows out towards the card
      masterTl.to(
        `.jl-${m.id}`,
        {
          scaleY: 1,
          duration: 0.04,
          ease: "power2.out",
        },
        triggerTime
      );

      // Step 3: Card box itself reveals in sequence!
      masterTl.to(
        `.card-box-${m.id}`,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.06,
          ease: "power2.out",
        },
        triggerTime + 0.01
      );
    });

    // Final Celebration Card Reveal
    masterTl.to(
      ".finale-card",
      {
        opacity: 1,
        scale: 1,
        duration: 0.08,
        ease: "power2.out",
      },
      0.92
    );

    const handleResize = () => {
      alignWithPageContainer();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [reducedMotion, milestoneList], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative w-full h-screen overflow-hidden select-none bg-[var(--color-sand)]"
      style={sectionStyle}
      aria-label="Köşk Düğün Salonu Tarihçesi ve Kilometre Taşları"
    >
      {/* CSS fallback ensuring zero layout shift before JS measurement */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 1200px) {
              .timeline-slider-track {
                padding-left: calc((100vw - 1200px) / 2 + 2.5rem);
                padding-right: calc((100vw - 1200px) / 2 + 2.5rem);
              }
            }
            @media (max-width: 1199px) {
              .timeline-slider-track {
                padding-left: clamp(1rem, 3.5vw, 2.5rem);
                padding-right: clamp(1rem, 3.5vw, 2.5rem);
              }
            }
          `,
        }}
      />

      {/* Main Horizon Stage */}
      <div className="w-full h-full flex items-center justify-start overflow-hidden p-0">
        <div
          ref={wholeSliderRef}
          className="timeline-slider-track flex items-center gap-12 sm:gap-16 lg:gap-20 py-4 w-max h-[88vh] max-h-[720px]"
          style={{
            willChange: "transform",
          }}
        >
          {/* 1. Intro Title Section (Aligned with upper .container content) */}
          <div className="w-[280px] sm:w-[330px] lg:w-[380px] shrink-0 space-y-3.5 pr-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B8956E] font-semibold block">
              Kurumsal Tarihçe
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-serif text-[var(--color-anthracite)]"
              style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
            >
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Her davete bir sanat eseri titizliğiyle yaklaştığımız 15 yıllık köklü hizmet yolculuğumuz.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-surface-subtle)] text-xs font-mono font-medium text-[var(--color-cashmere)] border border-[var(--color-stone)]">
                {periodLabel}
              </span>
            </div>
          </div>

          {/* 2. The Alternating Chronological Track */}
          <div className="relative flex items-center h-[75vh] max-h-[580px] w-max shrink-0">
            {/* Center Golden Connecting Line */}
            <div className="w-full absolute left-0 top-1/2 -translate-y-1/2 flex items-center z-0 pointer-events-none">
              {/* Background Guide Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[var(--color-stone)] opacity-70"></div>
              {/* Active Golden Progress Line */}
              <div
                ref={trackLineRef}
                className="h-[3px] w-[0%] rounded-full journey-progress-line shadow-sm z-1"
                style={activeStyle}
              ></div>
            </div>

            {/* Alternating Milestone Columns */}
            <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 z-10 px-4">
              {milestoneList.map((m) => {
                const isTop = (m.side ?? "top") === "top";

                return (
                  <div
                    key={`station-${m.id}`}
                    className={`station-${m.id} relative w-[290px] sm:w-[330px] lg:w-[360px] h-[75vh] max-h-[580px] shrink-0 flex flex-col justify-between items-center`}
                  >
                    {/* TOP ZONE */}
                    <div className="w-full h-[calc(50%-22px)] flex flex-col justify-end items-center relative">
                      {isTop && (
                        <>
                          {/* Card Content Box */}
                          <div
                            className={`card-box-${m.id} w-full bg-white/95 dark:bg-[#1E1B19]/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[var(--color-stone)] shadow-lg space-y-2.5 z-20`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#B8956E] font-semibold bg-[#B8956E]/10 px-2.5 py-0.5 rounded-full">
                                {m.category}
                              </span>
                              <span className="text-xs font-mono text-[var(--color-cashmere)] font-medium">
                                {m.month}
                              </span>
                            </div>
                            <h4
                              className="text-xl sm:text-2xl font-serif text-[var(--color-anthracite)] font-medium leading-tight"
                              style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
                            >
                              {m.year}
                            </h4>
                            <p
                              className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed"
                              style={mutedTextStyle}
                            >
                              {m.content}
                            </p>
                          </div>

                          {/* Stem Connecting Line (Reaches from Card Bottom down to Center Line) */}
                          <div className="w-full flex justify-center h-6 pointer-events-none">
                            <div
                              className={`w-[2px] h-full shadow-sm jl-${m.id}`}
                              style={activeStyle}
                            ></div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* CENTER DOT (Sits directly on the line) */}
                    <div className="relative w-8 h-8 flex items-center justify-center shrink-0 z-20 pointer-events-none">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-white dark:border-[#1E1B19] shadow-md transition-colors jd-${m.id}`}
                      ></div>
                    </div>

                    {/* BOTTOM ZONE */}
                    <div className="w-full h-[calc(50%-22px)] flex flex-col justify-start items-center relative">
                      {!isTop && (
                        <>
                          {/* Stem Connecting Line (Reaches from Center Line down to Card Top) */}
                          <div className="w-full flex justify-center h-6 pointer-events-none">
                            <div
                              className={`w-[2px] h-full shadow-sm jl-${m.id}`}
                              style={activeStyle}
                            ></div>
                          </div>

                          {/* Card Content Box */}
                          <div
                            className={`card-box-${m.id} w-full bg-white/95 dark:bg-[#1E1B19]/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[var(--color-stone)] shadow-lg space-y-2.5 z-20`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#B8956E] font-semibold bg-[#B8956E]/10 px-2.5 py-0.5 rounded-full">
                                {m.category}
                              </span>
                              <span className="text-xs font-mono text-[var(--color-cashmere)] font-medium">
                                {m.month}
                              </span>
                            </div>
                            <h4
                              className="text-xl sm:text-2xl font-serif text-[var(--color-anthracite)] font-medium leading-tight"
                              style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
                            >
                              {m.year}
                            </h4>
                            <p
                              className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed"
                              style={mutedTextStyle}
                            >
                              {m.content}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Finale Milestone Card (Flushed nicely with container right margin) */}
          <div className="finale-card w-[290px] sm:w-[340px] h-[75vh] max-h-[580px] rounded-3xl border-2 border-dashed border-[#B8956E]/50 p-6 sm:p-8 shrink-0 flex flex-col justify-center items-center text-center space-y-4 bg-white/80 dark:bg-[#1E1B19]/80 backdrop-blur-md shadow-xl">
            <div className="w-14 h-14 rounded-full bg-[#B8956E]/15 flex items-center justify-center text-[#B8956E] font-serif text-2xl font-semibold shadow-inner">
              ✓
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8956E] font-semibold">
              Geleceği Birlikte Kutlayalım
            </span>
            <h4
              className="text-xl sm:text-2xl font-serif text-[var(--color-anthracite)] font-normal leading-snug"
              style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
            >
              Sıradaki Unutulmaz Hikaye Sizin Olsun
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              1.000 kişilik ferah salonumuz, yüksek tavanımız ve deneyimli ekibimizle en özel gününüzü planlamak için sizi kahveye bekliyoruz.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 w-full">
              <a
                href="tel:+905382969079"
                className="w-full py-3 rounded-full bg-[#B8956E] text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:bg-[#A3825E] transition-all text-center"
              >
                0538 296 90 79
              </a>
              <Link
                href="/iletisim"
                className="w-full py-2.5 rounded-full border border-[var(--color-stone)] text-xs font-medium text-[var(--color-anthracite)] hover:bg-[var(--color-surface-subtle)] transition-colors text-center"
              >
                Ücretsiz Keşif & Teklif Alın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
