"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

      {/* Ambient glow orbs matching Hero */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
            Ready to Build Repeatable Outbound Motion
          </h2>
          <p className="text-lg text-slate-300 mb-6">
            Let's Scale Your GTM Strategy Together
          </p>

          {/* Resume Download CTA */}
          <div className="mb-6">
            <Button
              asChild
              size="lg"
              className="bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:shadow-xl transition-all duration-300 font-semibold"
            >
              <a
                href="https://drive.google.com/file/d/1ptzKftZT7Nwkyk6fHKnRv3oKmosA9nMC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Resume (PDF)
              </a>
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/10 hover:shadow-indigo-500/20"
            >
              <a href="mailto:joshua2250@berkeley.edu" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">joshua2250@berkeley.edu</span>
                <span className="sm:hidden">Email</span>
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/10 hover:shadow-indigo-500/20"
            >
              <a href="https://linkedin.com/in/jd-gtm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/10 hover:shadow-indigo-500/20"
            >
              <a href="tel:+12099476557" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                209-947-6557
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
