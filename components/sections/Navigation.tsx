"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Target, Sparkles, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Section navigation items for homepage
const sectionItems = [
  { id: "methodology", label: "Expertise" },
  { id: "timeline", label: "30-60-90" },
  { id: "framework", label: "Framework" },
  { id: "icp", label: "Strategy" },
  { id: "testimonials", label: "Recommendations" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSectionNav, setShowSectionNav] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isPartnerStrategy = pathname === "/partner-strategy";
  const isInterviewFollowUp = pathname === "/interview-follow-up";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = sectionItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      // Check if we're past the hero section
      setShowSectionNav(window.scrollY > 400);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-lg border-b border-[#5074F6]/20 shadow-lg"
            : "bg-[#1A1A1A]/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left: Name */}
            <div>
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5074F6] to-[#3d5bd9] flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">JD</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-white font-semibold group-hover:text-[#5074F6] transition-colors">JD Deleon</span>
                  <span className="text-slate-500 text-xs ml-2">Paraform</span>
                </div>
              </Link>
            </div>

            {/* Center: Section Navigation (Homepage only, when scrolled) */}
            <AnimatePresence>
              {isHomePage && showSectionNav && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:flex items-center gap-1 bg-[#1A1A1A]/50 rounded-full px-2 py-1 border border-slate-700/50"
                >
                  {sectionItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute inset-0 bg-[#5074F6] rounded-full"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right: Page Navigation Tabs */}
            <div className="flex items-center gap-1">
              <Button
                asChild
                size="sm"
                className={`h-8 px-3 text-xs font-medium transition-all duration-200 ${
                  isHomePage
                    ? "bg-[#5074F6] text-white hover:bg-[#3d5bd9] shadow-md shadow-[#5074F6]/25"
                    : "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Link href="/" className="flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">30-60-90</span>
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className={`h-8 px-3 text-xs font-medium transition-all duration-200 ${
                  isPartnerStrategy
                    ? "bg-[#5074F6] text-white hover:bg-[#3d5bd9] shadow-md shadow-[#5074F6]/25"
                    : "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Link href="/partner-strategy" className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Sample Strategy</span>
                </Link>
              </Button>
              {process.env.NEXT_PUBLIC_SHOW_MY_APPROACH === "true" && (
                <Button
                  asChild
                  size="sm"
                  className={`h-8 px-3 text-xs font-medium transition-all duration-200 ${
                    isInterviewFollowUp
                      ? "bg-[#5074F6] text-white hover:bg-[#3d5bd9] shadow-md shadow-[#5074F6]/25"
                      : "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <Link href="/interview-follow-up" className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Playbook</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {isHomePage && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#5074F6] to-[#3d5bd9]"
            initial={{ width: "0%" }}
            animate={{
              width: `${Math.min(
                (sectionItems.findIndex((s) => s.id === activeSection) + 1) /
                  sectionItems.length *
                  100,
                100
              )}%`,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}
      </nav>

      {/* Mobile Section Navigation (Bottom bar) */}
      <AnimatePresence>
        {isHomePage && showSectionNav && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
          >
            <div className="bg-[#1A1A1A]/95 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-700/50 p-2">
              <div className="flex items-center justify-around">
                {sectionItems.slice(0, 4).map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#5074F6] text-white"
                          : "text-slate-400"
                      }`}
                    >
                      <span className="text-[10px] font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
