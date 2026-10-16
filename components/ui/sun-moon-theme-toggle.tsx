"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

export type SunMoonTheme = "light" | "dark";

export interface SunMoonThemeToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "children"> {
  /** Controlled theme. Leave undefined to let the toggle manage it. */
  theme?: SunMoonTheme;
  /** Initial theme when nothing is stored and `syncDocument` is off. Defaults to "light". */
  defaultTheme?: SunMoonTheme;
  /** Called with the next theme on every toggle. */
  onThemeChange?: (theme: SunMoonTheme) => void;
  /** Follow and toggle the `.dark` class on <html> (shadcn convention), fading the page colors over `duration`. */
  syncDocument?: boolean;
  /** Persist the choice in localStorage under this key. Defaults to "kosk_theme". */
  storageKey?: string;
  /** Length of the whole swap in milliseconds; the page colors fade over the same time. */
  duration?: number;
  /** Button diameter in pixels. */
  size?: number;
  /** Override the default sun / moon color classes. */
  classNames?: { sun?: string; moon?: string };
  /** Paint a night / day sky inside the button that cross-fades with the swap. */
  sky?: boolean;
  /** React 19 / 18 ref. */
  ref?: React.Ref<HTMLButtonElement>;
}

type CelestialBody = { side: -1 | 1; spin: number };

const MOON: CelestialBody = { side: -1, spin: 25 };
const SUN: CelestialBody = { side: 1, spin: 120 };
const ARC_RADIUS = 115;
const QUARTER_TURN = Math.PI / 2;
const KEYFRAME_STEPS = 30;
const BODY_CLASS = "pointer-events-none absolute inset-0 flex items-center justify-center";
const SKY_CLASS = "pointer-events-none absolute inset-0 -z-10";
const NIGHT_SKY = "linear-gradient(180deg, #090f2a 0%, #16204b 60%, #2a2f66 100%)";
const DAY_SKY = "linear-gradient(180deg, #4ea8ff 0%, #9fd3ff 60%, #e3f3ff 100%)";
const STARS = [
  { x: 24, y: 22, r: 1.6, t: 2100 },
  { x: 66, y: 16, r: 1.2, t: 2600 },
  { x: 80, y: 42, r: 1.8, t: 1900 },
  { x: 38, y: 58, r: 1.1, t: 2900 },
  { x: 58, y: 74, r: 1.4, t: 2300 },
  { x: 14, y: 72, r: 1.2, t: 2500 },
];
const SKY_EASING = "cubic-bezier(0.65, 0, 0.35, 1)";
const PAGE_FADE_STYLE_ID = "sun-moon-theme-fade";
const PAGE_FADE_PROPERTIES = "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke";

const THEME_TOGGLE_STYLES = `
.smt-btn {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 9999px;
  border: 1px solid rgba(212, 181, 158, 0.4);
  background-color: #1A1716;
  color: #EFECE6;
  padding: 0;
  margin: 0;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, filter 0.3s ease;
}
.smt-btn:hover {
  filter: brightness(1.18);
  border-color: #B8956E;
  transform: scale(1.08);
}
.smt-btn:focus-visible {
  outline: 2px solid #B8956E;
  outline-offset: 2px;
}
.smt-btn:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.smt-sky {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: -10;
  border-radius: 9999px;
  transition: opacity 0.5s ease;
}
.smt-star {
  position: absolute;
  border-radius: 9999px;
  background-color: #ffffff;
}
.smt-body {
  pointer-events: none;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease;
}
.smt-body svg {
  width: 50%;
  height: 50%;
}
.smt-moon {
  color: #fde68a;
  filter: drop-shadow(0 0 6px rgba(252, 211, 77, 0.65));
}
.smt-sun {
  color: #fb923c;
  filter: drop-shadow(0 0 8px rgba(251, 146, 60, 0.75));
}
`;

let pageFadeCleanup = 0;

// Both bodies ride one circle centered below the button, like a sky dome:
// angle 0 is the middle of the button, a quarter turn is past the lower corner.
function arcPoint(side: number, angle: number) {
  return { x: side * ARC_RADIUS * Math.sin(angle), y: ARC_RADIUS * (1 - Math.cos(angle)) };
}

function easeInCubic(t: number) {
  return t * t * t;
}

function easeOutBack(t: number) {
  const overshoot = 1.4;
  return 1 + (overshoot + 1) * (t - 1) ** 3 + overshoot * (t - 1) ** 2;
}

function settingKeyframes({ side, spin }: CelestialBody): Keyframe[] {
  return Array.from({ length: KEYFRAME_STEPS + 1 }, (_, i) => {
    const t = i / KEYFRAME_STEPS;
    const travelled = easeInCubic(t);
    const { x, y } = arcPoint(side, travelled * QUARTER_TURN);
    return {
      offset: t,
      transform: `translate(${x}%, ${y}%) rotate(${side * spin * travelled}deg)`,
      opacity: t < 0.55 ? 1 : (1 - t) / 0.45,
    };
  });
}

function risingKeyframes({ side, spin }: CelestialBody): Keyframe[] {
  return Array.from({ length: KEYFRAME_STEPS + 1 }, (_, i) => {
    const t = i / KEYFRAME_STEPS;
    const remaining = 1 - easeOutBack(t);
    const { x, y } = arcPoint(side, remaining * QUARTER_TURN);
    return {
      offset: t,
      transform: `translate(${x}%, ${y}%) rotate(${side * spin * remaining}deg) scale(${1 - 0.28 * remaining})`,
      opacity: Math.min(1, t / 0.3),
    };
  });
}

const KEYFRAMES = {
  moonSets: settingKeyframes(MOON),
  moonRises: risingKeyframes(MOON),
  sunSets: settingKeyframes(SUN),
  sunRises: risingKeyframes(SUN),
};

const useIsomorphicLayoutEffect = typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readDocumentTheme(): SunMoonTheme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyDocumentTheme(theme: SunMoonTheme, duration: number) {
  if (typeof document === "undefined") return;
  if (duration > 0 && !prefersReducedMotion()) {
    const style =
      document.getElementById(PAGE_FADE_STYLE_ID) ??
      document.head.appendChild(Object.assign(document.createElement("style"), { id: PAGE_FADE_STYLE_ID }));
    style.textContent = `*, *::before, *::after { transition-property: ${PAGE_FADE_PROPERTIES} !important; transition-duration: ${duration}ms !important; transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1) !important; transition-delay: 0s !important; }`;
    window.clearTimeout(pageFadeCleanup);
    pageFadeCleanup = window.setTimeout(() => style.remove(), duration + 100);
  }
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function swapBodies(
  moon: HTMLElement | null,
  sun: HTMLElement | null,
  skies: { night: HTMLElement | null; day: HTMLElement | null },
  flight: { current: Animation[] },
  next: SunMoonTheme,
  duration: number,
) {
  if (flight.current.length > 0) {
    for (const animation of flight.current) animation.reverse();
    return;
  }
  if (!moon || !sun || typeof moon.animate !== "function" || prefersReducedMotion()) return;
  const toLight = next === "light";
  const setting = (toLight ? moon : sun).animate(toLight ? KEYFRAMES.moonSets : KEYFRAMES.sunSets, {
    duration: duration * 0.65,
    fill: "both",
  });
  const rising = (toLight ? sun : moon).animate(toLight ? KEYFRAMES.sunRises : KEYFRAMES.moonRises, {
    duration: duration * 0.64,
    delay: duration * 0.36,
    fill: "both",
  });
  const pair = [setting, rising];
  if (skies.night && skies.day) {
    const skyOptions = { duration, easing: SKY_EASING, fill: "both" as const };
    pair.push(
      skies.night.animate([{ opacity: toLight ? 1 : 0 }, { opacity: toLight ? 0 : 1 }], skyOptions),
      skies.day.animate([{ opacity: toLight ? 0 : 1 }, { opacity: toLight ? 1 : 0 }], skyOptions),
    );
  }
  flight.current = pair;
  Promise.all(pair.map((animation) => animation.finished)).then(
    () => {
      if (flight.current !== pair) return;
      flight.current = [];
      for (const animation of pair) animation.cancel();
    },
    (error: unknown) => {
      if (!(error instanceof DOMException && error.name === "AbortError")) throw error;
    },
  );
}

export function SunMoonThemeToggle({
  theme: controlledTheme,
  defaultTheme = "light",
  onThemeChange,
  syncDocument = true,
  storageKey = "kosk_theme",
  duration = 1000,
  size = 36,
  classNames,
  sky = true,
  ref,
  className,
  style,
  onClick,
  ...rest
}: SunMoonThemeToggleProps) {
  const isControlled = controlledTheme !== undefined;
  const [internalTheme, setInternalTheme] = React.useState<SunMoonTheme>(defaultTheme);
  const [mounted, setMounted] = React.useState(false);
  const theme = controlledTheme ?? internalTheme;
  const moonRef = React.useRef<HTMLSpanElement>(null);
  const sunRef = React.useRef<HTMLSpanElement>(null);
  const nightRef = React.useRef<HTMLSpanElement>(null);
  const dayRef = React.useRef<HTMLSpanElement>(null);
  const flight = React.useRef<Animation[]>([]);
  const committed = React.useRef({ theme, mounted });
  const initialized = React.useRef(false);

  React.useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    if (!isControlled) {
      const stored = storageKey ? window.localStorage.getItem(storageKey) : null;
      const initial: SunMoonTheme =
        stored === "light" || stored === "dark" ? stored : syncDocument ? readDocumentTheme() : defaultTheme;
      setInternalTheme(initial);
      if (syncDocument && initial !== readDocumentTheme()) {
        document.documentElement.classList.toggle("dark", initial === "dark");
      }
    }
    setMounted(true);
  }, [isControlled, defaultTheme, storageKey, syncDocument]);

  React.useEffect(() => {
    if (!syncDocument || isControlled) return;
    const observer = new MutationObserver(() => setInternalTheme(readDocumentTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [syncDocument, isControlled]);

  useIsomorphicLayoutEffect(() => {
    const before = committed.current;
    committed.current = { theme, mounted };
    if (before.mounted && before.theme !== theme) {
      swapBodies(moonRef.current, sunRef.current, { night: nightRef.current, day: dayRef.current }, flight, theme, duration);
    }
  }, [theme, mounted, duration]);

  React.useEffect(() => {
    const night = nightRef.current;
    if (!night || !sky || prefersReducedMotion() || typeof night.animate !== "function") return;
    const twinkles = Array.from(night.querySelectorAll<HTMLElement>("[data-star]")).map((star, index) =>
      star.animate([{ opacity: 0.35 }, { opacity: 1 }, { opacity: 0.35 }], {
        duration: STARS[index]?.t ?? 2400,
        delay: -index * 530,
        iterations: Infinity,
        easing: "ease-in-out",
      }),
    );
    return () => twinkles.forEach((animation) => animation.cancel());
  }, [sky]);

  React.useEffect(() => {
    const pending = flight;
    return () => {
      for (const animation of pending.current) animation.cancel();
    };
  }, []);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    const next: SunMoonTheme = theme === "dark" ? "light" : "dark";
    if (!isControlled) setInternalTheme(next);
    if (storageKey) window.localStorage.setItem(storageKey, next);
    if (syncDocument) applyDocumentTheme(next, duration);
    onThemeChange?.(next);
  };

  const restingStyle = (body: CelestialBody, visible: boolean): React.CSSProperties => ({
    transform: visible ? "none" : `translate(${body.side * ARC_RADIUS}%, ${ARC_RADIUS}%)`,
    opacity: mounted && visible ? 1 : 0,
  });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: THEME_TOGGLE_STYLES }} />
      <button
        ref={ref}
        type="button"
        data-slot="theme-toggle"
        data-state={theme}
        aria-label={theme === "dark" ? "Gündüz moduna geç (Açık tema)" : "Gece moduna geç (Karanlık tema)"}
        title={theme === "dark" ? "Gündüz Modu" : "Gece Modu"}
        className={cx("smt-btn", className)}
        style={{ width: size, height: size, ...style }}
        onClick={toggle}
        {...rest}
      >
        {sky && (
          <>
            <span
              ref={nightRef}
              aria-hidden
              data-sky="night"
              className="smt-sky"
              style={{ background: NIGHT_SKY, opacity: mounted ? (theme === "dark" ? 1 : 0) : 0 }}
            >
              {STARS.map((star, index) => (
                <span
                  key={index}
                  data-star
                  className="smt-star"
                  style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.r * 2, height: star.r * 2, opacity: 0.6 }}
                />
              ))}
            </span>
            <span
              ref={dayRef}
              aria-hidden
              data-sky="day"
              className="smt-sky"
              style={{ background: DAY_SKY, opacity: mounted ? (theme === "light" ? 1 : 0) : 0 }}
            />
          </>
        )}
        <span
          ref={moonRef}
          aria-hidden
          data-body="moon"
          className={cx("smt-body", "smt-moon", classNames?.moon)}
          style={restingStyle(MOON, theme === "dark")}
        >
          <Moon fill="currentColor" />
        </span>
        <span
          ref={sunRef}
          aria-hidden
          data-body="sun"
          className={cx("smt-body", "smt-sun", classNames?.sun)}
          style={restingStyle(SUN, theme === "light")}
        >
          <Sun />
        </span>
      </button>
    </>
  );
}

export default SunMoonThemeToggle;
