"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const navGroups = [
  {
    title: "Core",
    items: ["/", "/plan"],
  },
  {
    title: "Preparation",
    items: ["/pitch", "/stories", "/qa", "/frameworks"],
  },
  {
    title: "Reference",
    items: ["/interview", "/competitive", "/cheat-sheet"],
  },
];

export function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const getNavGroup = (href: string) => {
    for (const group of navGroups) {
      if (group.items.includes(href)) {
        return group;
      }
    }
    return null;
  };

  const organizedItems = navGroups.map((group) => ({
    ...group,
    navItems: navItems.filter((item) => group.items.includes(item.href)),
  }));

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[280px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle className="text-left bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
            Interview Prep
          </SheetTitle>
        </SheetHeader>

        <motion.div
          className="mt-8 space-y-6"
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              transition: { staggerChildren: 0.05, delayChildren: 0.1 },
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
        >
          {organizedItems.map((group) => (
            <motion.div
              key={group.title}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -10 },
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Button
                      key={item.href}
                      variant="ghost"
                      asChild
                      className={`w-full justify-start relative overflow-hidden group ${
                        active
                          ? "text-rose-600 bg-rose-500/10 font-semibold"
                          : "text-muted-foreground"
                      }`}
                      onClick={onClose}
                    >
                      <Link href={item.href}>
                        {/* Active indicator */}
                        {active && (
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 rounded-r"
                            layoutId="mobileActiveNav"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                        {/* Hover effect */}
                        <span className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/5 transition-colors" />
                        <span className="relative">{item.label}</span>
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
