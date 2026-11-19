"use client";

import { useEffect, useState, type ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";

const controlClassName = "static inset-auto m-0 size-9 translate-y-0";

const Controls = () => {
  const { api } = useCarousel();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState(0);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setSelected(api.selectedScrollSnap());
      setSnaps(api.scrollSnapList().length);
    };
    sync();
    // Autoplay starts here, not on init, so reduced-motion users never see it move.
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) api.plugins().autoplay?.play();
    api.on("select", sync).on("reInit", sync);
    return () => {
      api.off("select", sync).off("reInit", sync);
    };
  }, [api]);

  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <CarouselPrevious className={controlClassName} aria-label="Sebelumnya" />
      <div className="flex items-center">
        {Array.from({ length: snaps }, (_, index) => (
          // 24px hit area (WCAG target size) around a small visual dot.
          <button
            key={index}
            type="button"
            aria-label={`Ke slide ${index + 1}`}
            aria-current={index === selected}
            onClick={() => api?.scrollTo(index)}
            className="group/dot flex h-6 min-w-6 items-center justify-center"
          >
            <span
              className={cn(
                "h-2 rounded-full transition-all",
                index === selected ? "w-5 bg-primary" : "w-2 bg-primary/25 group-hover/dot:bg-primary/50",
              )}
            />
          </button>
        ))}
      </div>
      <CarouselNext className={controlClassName} aria-label="Berikutnya" />
    </div>
  );
};

type AutoplayCarouselProps = { label: string; children: ReactNode };

// Slides come in as server-rendered `CarouselItem`s, so they are in the initial HTML.
// Autoplay stops on hover, focus, and interaction, which stands in for a pause button.
const AutoplayCarousel = ({ label, children }: AutoplayCarouselProps) => {
  const [autoplay] = useState(() => Autoplay({ delay: 4000, playOnInit: false, stopOnMouseEnter: true }));
  return (
    <Carousel opts={{ loop: true, align: "start" }} plugins={[autoplay]} aria-label={label}>
      <CarouselContent>{children}</CarouselContent>
      <Controls />
    </Carousel>
  );
};

export default AutoplayCarousel;
