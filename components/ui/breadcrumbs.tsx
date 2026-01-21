"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Map of paths to readable labels
const pathLabels: Record<string, string> = {
  "": "Home",
  "prep": "Interview Prep",
  "case-study": "Case Study",
  "research": "Research Hub",
  "playbook": "Sales Playbook",
  "session-prep": "Session Prep",
  "practice-tools": "Practice Tools",
  "execution": "Day-Of Execution",
  "arphie-discovery": "Arphie Discovery",
  "motion-demo": "Motion Demo",
  "in-person": "In-Person",
  "meddpicc": "MEDDPICC",
};

// Map of root paths to their parent views
const rootPaths: Record<string, { label: string; href: string }> = {
  "prep": { label: "Interview Prep", href: "/prep" },
  "case-study": { label: "Case Study", href: "/case-study" },
};

export function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on root pages
  if (pathname === "/" || pathname === "/prep" || pathname === "/case-study") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);

  // Build breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = [];

  // Add root based on first segment
  const rootKey = segments[0];
  if (rootPaths[rootKey]) {
    breadcrumbs.push(rootPaths[rootKey]);
  }

  // Add current page if we're deeper than root
  if (segments.length > 1) {
    const currentSegment = segments[segments.length - 1];
    const currentLabel = pathLabels[currentSegment] || currentSegment.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    breadcrumbs.push({
      label: currentLabel,
      href: pathname,
    });
  }

  if (breadcrumbs.length === 0) return null;

  return (
    <div className="flex items-center gap-1 text-xs">
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center gap-1">
          {index > 0 && (
            <ChevronRight className="h-3 w-3 text-slate-500" />
          )}
          {index === breadcrumbs.length - 1 ? (
            // Current page - not a link
            <span className="px-2 py-1 rounded bg-slate-800 text-slate-200 font-medium">
              {item.label}
            </span>
          ) : (
            // Parent page - clickable link
            <Link
              href={item.href}
              className="px-2 py-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

// Compact version for nav bars
export function NavBreadcrumbs() {
  const pathname = usePathname();

  // Don't show on root pages
  if (pathname === "/" || pathname === "/prep" || pathname === "/case-study") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);

  // Get parent and current
  const rootKey = segments[0];
  const currentSegment = segments.length > 1 ? segments[segments.length - 1] : null;

  if (!currentSegment) return null;

  const parentLabel = rootPaths[rootKey]?.label || rootKey;
  const parentHref = rootPaths[rootKey]?.href || `/${rootKey}`;
  const currentLabel = pathLabels[currentSegment] || currentSegment.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="flex items-center gap-1 border-l border-slate-600 pl-3 ml-3">
      <Link
        href={parentHref}
        className="text-xs text-slate-400 hover:text-white transition-colors"
      >
        {parentLabel}
      </Link>
      <ChevronRight className="h-3 w-3 text-slate-500" />
      <span className="text-xs text-slate-200 font-medium">
        {currentLabel}
      </span>
    </div>
  );
}
