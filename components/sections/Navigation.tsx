"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Target, Sparkles, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "methodology", label: "Expertise" },
  { id: "timeline", label: "30-60-90 Plan" },
  { id: "framework", label: "Framework" },
  { id: "icp", label: "ICP & Strategy" },
  { id: "testimonials", label: "Recommendations" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isCaseStudy = pathname === "/case-study";
  const isInterviewFollowUp = pathname === "/interview-follow-up";
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="flex items-center text-white font-semibold hover:text-blue-300 transition-colors">
              <span>JD Deleon</span>
              <span className="ml-2 text-sm text-slate-400 hidden sm:inline">| Strategic Plans</span>
            </Link>
          </motion.div>

          {/* Right: Page Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1"
          >
            <Button
              asChild
              size="sm"
              className={`h-7 px-2 text-xs ${
                isHomePage
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Link href="/" className="flex items-center gap-1">
                <Target className="h-3 w-3" />
                <span className="hidden sm:inline">30-60-90</span>
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className={`h-7 px-2 text-xs ${
                isCaseStudy
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Link href="/case-study" className="flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                <span className="hidden sm:inline">Case Study</span>
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className={`h-7 px-2 text-xs ${
                isInterviewFollowUp
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Link href="/interview-follow-up" className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span className="hidden sm:inline">My Approach</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
