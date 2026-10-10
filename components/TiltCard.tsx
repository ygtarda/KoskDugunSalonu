'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import styles from './TiltCard.module.css';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (default: 6)
  scale?: number; // scale on hover (default: 1.015)
  glare?: boolean; // enable luxury gold sheen reflection (default: true)
  glareOpacity?: number; // max glare opacity (default: 0.28)
  as?: React.ElementType;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  scale = 1.015,
  glare = true,
  glareOpacity = 0.28,
  as: Component = 'div',
  style,
  ...rest
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const rafId = useRef<number | null>(null);

  // Check if device supports hover (not a pure touch screen)
  const [isHoverSupported, setIsHoverSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHoverSupported(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isHoverSupported || !cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;

      // Percentages from center (-0.5 to +0.5)
      const xPercent = (x / width) - 0.5;
      const yPercent = (y / height) - 0.5;

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        // Subtle 3D tilt
        const rotateX = -(yPercent * maxTilt * 2);
        const rotateY = xPercent * maxTilt * 2;

        setTransformStyle({
          transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
          transition: 'transform 0.1s cubic-bezier(0.2, 0.8, 0.4, 1)',
        });

        if (glare) {
          const glareX = (x / width) * 100;
          const glareY = (y / height) * 100;
          setGlareStyle({
            opacity: glareOpacity,
            background: `radial-gradient(circle 320px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.7) 0%, rgba(212, 181, 158, 0.4) 35%, transparent 75%)`,
            transition: 'opacity 0.2s ease',
          });
        }
      });
    },
    [isHoverSupported, maxTilt, scale, glare, glareOpacity]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isHoverSupported) return;
    setIsHovered(true);
  }, [isHoverSupported]);

  const handleMouseLeave = useCallback(() => {
    if (!isHoverSupported) return;
    setIsHovered(false);

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    // Smooth return to rest state
    setTransformStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
    });

    if (glare) {
      setGlareStyle({
        opacity: 0,
        transition: 'opacity 0.5s ease',
      });
    }
  }, [isHoverSupported, glare]);

  return (
    <Component
      ref={cardRef}
      className={`${styles.tiltWrapper} ${isHovered ? styles.isHovered : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        ...transformStyle,
      }}
      {...rest}
    >
      {children}
      {glare && isHoverSupported && (
        <div
          className={styles.tiltGlare}
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </Component>
  );
}
