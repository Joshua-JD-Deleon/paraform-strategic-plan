"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Target, Sparkles, FileText, ChevronRight } from "lucide-react";
import { NavBreadcrumbs } from "@/components/ui/breadcrumbs";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/prep", label: "Interview Prep" },
  { href: "/prep/research", label: "Research Hub" },
  { href: "/prep/playbook", label: "Sales Playbook" },
  { href: "/prep/session-prep", label: "Session Prep" },
  { href: "/prep/practice-tools", label: "Practice Tools" },
  { href: "/prep/execution", label: "Day-Of Execution" },
  { href: "/prep/arphie-discovery", label: "Arphie Discovery" },
  { href: "/prep/motion-demo", label: "Motion Demo" },
  { href: "/prep/in-person", label: "In-Person" },
];

export function PrepNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/prep") {
      return pathname === "/prep";
    }
    return pathname === href;
  };

  const currentPage = navItems.find(item => isActive(item.href));

  return (
    <>
      {/* Main Navigation Bar - Dark Theme (matching main site) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Name + Page Switcher */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <Link href="/" className="flex items-center text-white font-semibold hover:text-blue-300 transition-colors">
                <span>JD Deleon</span>
                <span className="ml-2 text-sm text-slate-400 hidden sm:inline">| Strategic Plans</span>
              </Link>

              <div className="flex items-center gap-1 ml-2 sm:ml-4 border-l border-slate-600 pl-2 sm:pl-4">
                <Button
                  asChild
                  size="sm"
                  className="h-7 px-2 text-xs bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  <Link href="/" className="flex items-center gap-1">
                    <Target className="h-3 w-3" />
                    <span className="hidden sm:inline">30-60-90</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="h-7 px-2 text-xs bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  <Link href="/case-study" className="flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    <span className="hidden sm:inline">Case Study</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="h-7 px-2 text-xs bg-blue-600 text-white hover:bg-blue-500"
                >
                  <Link href="/prep" className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    <span className="hidden sm:inline">Interview Prep</span>
                  </Link>
                </Button>
              </div>

              {/* Breadcrumbs */}
              <NavBreadcrumbs />
            </motion.div>

            {/* Right: Section Nav Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2"
              >
                <span className="hidden sm:inline text-sm">Sections</span>
                <Menu className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Right Sidebar Panel */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 bg-slate-900 border-l border-slate-700 z-50 shadow-2xl"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-semibold text-white">Interview Prep</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSidebarOpen(false)}
                    className="text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Section Links */}
                <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                  {navItems.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.03 }}
                      >
                        <Button
                          asChild
                          variant="ghost"
                          className={`w-full justify-between text-left px-4 py-3 h-auto ${
                            active
                              ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-500"
                              : "text-slate-300 hover:text-white hover:bg-slate-800"
                          }`}
                        >
                          <Link href={item.href} onClick={() => setSidebarOpen(false)}>
                            <span>{item.label}</span>
                            <ChevronRight className={`h-4 w-4 transition-transform ${active ? "text-blue-400" : "text-slate-500"}`} />
                          </Link>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="pt-6 border-t border-slate-700">
                    <p className="text-xs text-slate-500 text-center">
                      Click section to navigate
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
