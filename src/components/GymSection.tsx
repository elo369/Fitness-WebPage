import React, { useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

// GymSection.jsx
// A self-contained React component (Tailwind CSS) that displays a responsive
// grid of gym section photos with a lightbox modal viewer.
// Usage:
// <GymSection />
// or
// <GymSection images={[...arrayOfUrlsOrImportedImages]} title="Our Gym Areas" />

export default function GymSection({
  title = "Gym Sections",
  subtitle = "Explore our training areas and equipment",
  images = [
    // Example Unsplash images (feel free to replace with local imports or your own URLs)
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001d8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1583454110551-21f6b5c5f6b1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo--7f94f7f6d8b5?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo--aa88f22d8d2f?auto=format&fit=crop&w=1200&q=80",
    "file:///C:/Users/rohit/OneDrive/Desktop/https://images.stockcake.com/public/a/2/7/a275f6cd-47bc-4b01-a00e-03f843d44189_large/industrial-fitness-space-stockcake.jpghttps://www.google.com/url?sa=i&url=https%3A%2F%2Fstockcake.com%2Fi%2Findustrial-fitness-space_1545738_1177415&psig=AOvVaw2gEhsoxSdHSGCkeUKcXJ__&ust=1754757097581000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCODBjf3R-44DFQAAAAAdAAAAABAf%20Fitness%20Website/public/a275f6cd-47bc-4b01-a00e-03f843d44189_large.webphttps://images.unsplash.com/photo-1519861531928-0c3e8b7d6d4d?auto=format&fit=crop&w=1200&q=80",
  ],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const prev = (e) => {
    e.stopPropagation();
    setIndex((p) => (p - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setIndex((p) => (p + 1) % images.length);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500">{subtitle}</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => openAt(i)}
              className="relative overflow-hidden rounded-2xl group focus:outline-none"
              aria-label={`Open image ${i + 1}`}>
              <img
                src={src}
                alt={`Gym section ${i + 1}`}
                loading="lazy"
                className="w-full h-44 sm:h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute left-3 bottom-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur">
                Section {i + 1}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={close}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-lg"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <img
              src={images[index]}
              alt={`Open gym image ${index + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl bg-white"
            />

            {/* Prev / Next controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg"
                  aria-label="Next image"
                >
                  <ArrowRight size={18} />
                </button>
              </>
            )}

            {/* Caption + index */}
            <div className="mt-3 text-center text-sm text-white">
              <div>Section {index + 1} of {images.length}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
