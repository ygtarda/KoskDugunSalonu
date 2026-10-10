'use client';

import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const trail1Ref = useRef<HTMLDivElement | null>(null);
  const trail2Ref = useRef<HTMLDivElement | null>(null);
  const trail3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if the user is on a desktop with a mouse
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    // Direct positions
    let mouseX = -100;
    let mouseY = -100;

    // Follower ring position
    let ringX = -100;
    let ringY = -100;

    // Trailing nodes positions (chain lerp for fluid stardust trail)
    let t1X = -100, t1Y = -100;
    let t2X = -100, t2Y = -100;
    let t3X = -100, t3Y = -100;

    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        t1X = mouseX; t1Y = mouseY;
        t2X = mouseX; t2Y = mouseY;
        t3X = mouseX; t3Y = mouseY;
        document.body.classList.add('has-custom-cursor');
      }

      isVisible = true;

      // Detect interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest(
          'a, button, input, textarea, select, [role="button"], .btn, .arch-card, .specCard, .serviceStripe, .tiltWrapper'
        )
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
    };

    const onMouseEnter = () => {
      isVisible = true;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let rafId: number;

    const tick = () => {
      if (hasMoved) {
        // Ring follows mouse with smooth lag
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        // Trail nodes follow in a fluid snake chain
        t1X += (mouseX - t1X) * 0.32;
        t1Y += (mouseY - t1Y) * 0.32;

        t2X += (t1X - t2X) * 0.26;
        t2Y += (t1Y - t2Y) * 0.26;

        t3X += (t2X - t3X) * 0.20;
        t3Y += (t2Y - t3Y) * 0.20;

        const opacity = isVisible ? 1 : 0;

        // Update Dot
        if (dotRef.current) {
          const dotScale = isClicking ? 0.8 : isHovering ? 1.15 : 1;
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${dotScale})`;
          dotRef.current.style.opacity = `${opacity}`;
        }

        // Update Ring
        if (ringRef.current) {
          const ringScale = isClicking ? 0.85 : isHovering ? 1.25 : 1;
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${ringScale})`;
          ringRef.current.style.opacity = isHovering ? `${0.85 * opacity}` : `${0.65 * opacity}`;
          if (isHovering) {
            ringRef.current.classList.add(styles.ringHover);
          } else {
            ringRef.current.classList.remove(styles.ringHover);
          }
        }

        // Update Trail Nodes (subtle gold wake)
        if (trail1Ref.current) {
          trail1Ref.current.style.transform = `translate3d(${t1X}px, ${t1Y}px, 0)`;
          trail1Ref.current.style.opacity = `${0.45 * opacity}`;
        }
        if (trail2Ref.current) {
          trail2Ref.current.style.transform = `translate3d(${t2X}px, ${t2Y}px, 0)`;
          trail2Ref.current.style.opacity = `${0.28 * opacity}`;
        }
        if (trail3Ref.current) {
          trail3Ref.current.style.transform = `translate3d(${t3X}px, ${t3Y}px, 0)`;
          trail3Ref.current.style.opacity = `${0.14 * opacity}`;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <div className={styles.cursorContainer} aria-hidden="true">
      {/* 3 Trailing Stardust Nodes (fluid golden tail) */}
      <div ref={trail3Ref} className={`${styles.trailNode} ${styles.trailNode3}`} />
      <div ref={trail2Ref} className={`${styles.trailNode} ${styles.trailNode2}`} />
      <div ref={trail1Ref} className={`${styles.trailNode} ${styles.trailNode1}`} />

      {/* Trailing Luxury Halo Ring */}
      <div ref={ringRef} className={styles.cursorRing} />

      {/* Primary Gold Pointer Dot */}
      <div ref={dotRef} className={styles.cursorDot} />
    </div>
  );
}
