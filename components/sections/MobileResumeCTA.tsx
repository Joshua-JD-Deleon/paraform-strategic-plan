"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export function MobileResumeCTA() {
  const handleDownload = () => {
    // Replace with actual resume URL
    window.open("/resume.pdf", "_blank");
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-4 left-4 right-4 z-40 block md:hidden"
    >
      <Button
        onClick={handleDownload}
        size="lg"
        className="w-full bg-indigo-500 text-white hover:bg-indigo-600 shadow-xl hover:shadow-2xl transition-all font-semibold text-base py-6"
      >
        <Download className="h-5 w-5 mr-2" />
        Download Resume
      </Button>
    </motion.div>
  );
}
