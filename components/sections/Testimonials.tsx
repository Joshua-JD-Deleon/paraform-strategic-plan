"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] text-center mb-4 md:mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Featured Recommendations
          </div>
          <h2 className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2">
            What Leaders & Partners Say
          </h2>
          <p className="text-base md:text-lg text-stone-600">
            LinkedIn recommendations from managers, clients, and direct reports
          </p>
        </div>

        <div className="relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}
