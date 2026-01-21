"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
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

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {!prefersReducedMotion && (
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"
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
      )}

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="mx-auto max-w-[1600px] text-center">
          <motion.h1
            className="mb-2 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="bg-gradient-to-r from-white via-rose-100 to-rose-200 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          {description && (
            <motion.p
              className="text-base font-normal text-slate-300 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
