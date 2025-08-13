"use client";
import { useState } from "react";

type CarouselProps = {
  images: string[];
  alt?: string;
  className?: string;
};

export default function Carousel({
  images,
  alt = "",
  className = "",
}: CarouselProps) {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  if (!images?.length) return null;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border ${className}`}
    >
      <img
        src={images[i]}
        alt={alt}
        className="w-full h-64 md:h-80 object-cover"
      />

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
        aria-label="Siguiente"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === idx ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
