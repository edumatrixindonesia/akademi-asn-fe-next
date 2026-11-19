"use client";

import { useEffect, useState, type ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setSelected(api.selectedScrollSnap());
      setSnaps(api.scrollSnapList().length);
      setPlaying(api.plugins().autoplay?.isPlaying() ?? false);
    };
    sync();
    // Autoplay starts here, not on init, so reduced-motion users never see it move.
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) api.plugins().autoplay?.play();
    api.on("select", sync).on("reInit", sync).on("autoplay:play", sync).on("autoplay:stop", sync);
    return () => {
      api.off("select", sync).off("reInit", sync).off("autoplay:play", sync).off("autoplay:stop", sync);
    };
  }, [api]);

  const autoplay = api?.plugins().autoplay;

  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <CarouselPrevious className={controlClassName} aria-label="Sebelumnya" />
      <div className="flex items-center gap-1.5">
        {Array.from({ length: snaps }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ke slide ${index + 1}`}
            aria-current={index === selected}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === selected ? "w-6 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50",
            )}
          />
        ))}
      </div>
      <CarouselNext className={controlClassName} aria-label="Berikutnya" />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="size-9 rounded-full"
        aria-label={playing ? "Jeda putar otomatis" : "Putar otomatis"}
        onClick={() => (playing ? autoplay?.stop() : autoplay?.play())}
      >
        {playing ? <Pause aria-hidden /> : <Play aria-hidden />}
      </Button>
    </div>
  );
};

type AutoplayCarouselProps = { label: string; children: ReactNode };

// Slides come in as server-rendered `CarouselItem`s, so they are in the initial HTML.
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
