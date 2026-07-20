"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  wide?: boolean;
};

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className="mt-10 grid auto-rows-[260px] gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Otvoriť fotografiu: ${item.alt}`}
            className={`group relative overflow-hidden rounded-3xl text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/40 ${item.wide ? "lg:col-span-2" : ""}`}
            data-reveal
            data-reveal-delay={String((index % 3) * 90)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={item.wide ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition duration-300 group-hover:bg-ink/20" />
            <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-white/95 text-ink opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Maximize2 className="h-5 w-5" />
            </span>
          </button>
        ))}
      </div>

      {activeImage && activeIndex !== null && (
        <div
          className="lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Galéria fotografií"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
            const distance = endX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(distance) < 50) return;
            if (distance > 0) showPrevious();
            else showNext();
          }}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:top-7"
            aria-label="Zavrieť galériu"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-7 sm:h-14 sm:w-14"
            aria-label="Predchádzajúca fotografia"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <div className="relative h-[75vh] w-[calc(100vw-6rem)] max-w-6xl sm:w-[calc(100vw-10rem)]">
            <Image
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              sizes="100vw"
              className="lightbox-image object-contain"
            />
            <p className="absolute inset-x-0 -bottom-10 text-center text-xs font-bold tracking-widest text-white/55">
              {activeIndex + 1} / {images.length}
            </p>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:h-14 sm:w-14"
            aria-label="Nasledujúca fotografia"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </>
  );
}
