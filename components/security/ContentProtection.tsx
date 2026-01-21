"use client";

import { useEffect } from "react";

interface ContentProtectionProps {
  children: React.ReactNode;
}

export function ContentProtection({ children }: ContentProtectionProps) {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Block keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block Ctrl/Cmd + P (Print)
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
        return false;
      }
      // Block Ctrl/Cmd + S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        return false;
      }
      // Block Ctrl/Cmd + Shift + S (Save As)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "s") {
        e.preventDefault();
        return false;
      }
      // Block Ctrl/Cmd + U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key === "u") {
        e.preventDefault();
        return false;
      }
      // Block Ctrl/Cmd + A (Select All)
      if ((e.ctrlKey || e.metaKey) && e.key === "a") {
        e.preventDefault();
        return false;
      }
      // Block Ctrl/Cmd + C (Copy)
      if ((e.ctrlKey || e.metaKey) && e.key === "c") {
        e.preventDefault();
        return false;
      }
      // Block PrintScreen key
      if (e.key === "PrintScreen") {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable copy
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable drag start (for images)
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("dragstart", handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <div className="select-none" style={{ WebkitUserSelect: "none", userSelect: "none" }}>
      {children}
    </div>
  );
}
