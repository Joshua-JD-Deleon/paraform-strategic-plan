"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
        animate={!prefersReducedMotion ? {
          backgroundPosition: ["0px 0px", "50px 50px"],
        } : {}}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle gradient overlay with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Ambient glow orbs */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </>
      )}

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] text-center">
          {/* Main title with gradient text shimmer effect */}
          <motion.h1
            className="mb-4 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Strategic 30/60/90<br/>
              Account Manager
            </span>
          </motion.h1>

          <motion.p
            className="mb-8 text-xl font-normal text-slate-200 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Supply-Side Growth | Recruiter Success | Marketplace Operations
          </motion.p>

          {/* Contact CTA pills with stagger animation */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.6
                }
              }
            }}
          >
            {[
              {
                href: "mailto:joshua2250@berkeley.edu",
                icon: Mail,
                label: "joshua2250@berkeley.edu",
                shortLabel: "Email"
              },
              {
                href: "https://linkedin.com/in/jd-gtm",
                icon: Linkedin,
                label: "LinkedIn",
                external: true
              },
              {
                href: "tel:+12099476557",
                icon: Phone,
                label: "209-947-6557"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Button
                  asChild
                  size="sm"
                  variant="secondary"
                  className="bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all font-semibold"
                >
                  <a
                    href={contact.href}
                    {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-2"
                  >
                    <contact.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{contact.label}</span>
                    {contact.shortLabel && <span className="sm:hidden">{contact.shortLabel}</span>}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
