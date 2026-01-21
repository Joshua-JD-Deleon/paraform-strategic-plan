"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const featuredTestimonials: Testimonial[] = [
  {
    quote: "JD was an account executive that I really enjoyed meeting with. He knew our business, he thought creatively how to help us accomplish our goals. I highly recommend him as an exceptional salesperson, whether to join your company or consider a business solution he's presenting. He's honest, quick to respond, thoughtful and amazing. JD works hard to understand client companies and industries deeply. He is strategic in his solutions, and is proactive in his process. I told his boss at the time that he was by far the best I'd ever worked with.",
    name: "Jennifer Mullin",
    title: "CMO | 3 exits, 1 IPO | Board Member",
  },
  {
    quote: "Anyone looking for integrity, grit and comprehensive understanding of the sales process will benefit greatly from having JD on the team. He's been a joy to manage and team together. He's a wealth of knowledge and experience. Great focus on quality pipeline generation and forecasting. He has a lot to offer his teammates. One thing I especially like is how our customers talk about JD. Feedback is always positive and they see him as an absolute partner working to broker a sound business engagement.",
    name: "Dan Stachofsky",
    title: "VP Sales - North America",
  },
  {
    quote: "There are many different types of sales leaders, but JD is undoubtedly one of the great ones. His approach is always intelligent, aiming to deeply understand the needs of our clients so he can craft a solution that adds real value. He has an intimate knowledge of the sales process and of the various industries he works across. Because of his helpful and generous manner, JD is also a pleasure to work with. He is always willing to share knowledge and ideas, just as he makes time for colleagues. In short, he is a great leader. I recommend JD without reservation.",
    name: "Neil Saunders",
    title: "Managing Director @ GlobalData Retail",
  },
];

export function FeaturedTestimonials() {
  return (
    <section className="py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="mb-4 md:mb-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Featured Recommendations
            </div>
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2">
              What Leaders & Partners Say
            </h2>
            <p className="text-base md:text-lg text-stone-600">
              Validated across 15+ recommendations from executives, clients, and team members
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="pt-6 pb-6 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-indigo-500 mb-4 opacity-50" />
                    <blockquote className="text-sm md:text-base text-stone-700 leading-relaxed mb-6 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="pt-4">
                      <p className="font-semibold text-stone-900 text-sm md:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs md:text-sm text-stone-600 mt-1">
                        {testimonial.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
