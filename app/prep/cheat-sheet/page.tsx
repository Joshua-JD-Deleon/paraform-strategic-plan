"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditableContent } from "@/components/ui/editable-content";
import { cheatSheetTemplates } from "@/lib/data/cheat-sheet";
import { Printer, Download, FileText, Sparkles, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function CheatSheet() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="min-h-screen">
        <PageHeader
          title="Quick Reference Cheat Sheet"
          description="AI-powered templates for creating your personalized one-page interview prep sheet"
        />

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            {/* Introduction Card - Hidden on Print */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 no-print"
            >
              <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-blue-900">Create Your Custom Cheat Sheet</CardTitle>
                      <p className="text-sm text-slate-600 mt-2">
                        Use AI to generate a comprehensive interview prep sheet customized for any company and role.
                        Fill in each section, then print or save as PDF for a one-page reference guide.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-700">
                        <strong>Generate with AI:</strong> Click "AI" on any section to see a customizable prompt
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-700">
                        <strong>Customize & Edit:</strong> Paste AI results and refine them with your personal details
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-700">
                        <strong>Print & Study:</strong> Create a print-friendly reference sheet for interview day
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Print Button - Hidden on Print */}
            <div className="no-print mb-8 flex gap-3 justify-center">
              <Button onClick={handlePrint} size="lg" className="bg-blue-500 hover:bg-blue-600">
                <Printer className="h-5 w-5 mr-2" />
                Print Cheat Sheet
              </Button>
              <Button onClick={handlePrint} size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Save as PDF
              </Button>
            </div>

            {/* Cheat Sheet Content */}
            <div className="space-y-6 print:space-y-4">
              {cheatSheetTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="print:break-inside-avoid"
                >
                  <EditableContent
                    id={`cheat-sheet-${template.id}`}
                    title={template.title}
                    description={template.description}
                    defaultContent={template.defaultContent}
                    prompt={template.prompt}
                    promptBlocks={template.promptBlocks}
                    category={template.category}
                    minHeight="120px"
                    className="print:shadow-none"
                  />
                </motion.div>
              ))}
            </div>

            {/* Print Tips - Hidden on Print */}
            <div className="no-print mt-12 text-center">
              <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-start gap-3 justify-center">
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <CardTitle className="text-lg">Printing & Export Tips</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    This cheat sheet is optimized for printing. Fill in your sections, then print or save as PDF.
                  </p>
                  <div className="text-xs text-slate-500">
                    <p className="font-semibold mb-2">Print Tips:</p>
                    <ul className="space-y-1">
                      <li>• Choose "Save as PDF" in your print dialog to create a digital copy</li>
                      <li>• Use portrait orientation for best results</li>
                      <li>• Only sections you've customized will look complete when printed</li>
                      <li>• Print double-sided to save paper</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          /* Hide navigation and non-content elements */
          nav,
          .mobile-nav,
          .no-print,
          footer {
            display: none !important;
          }

          /* Reset page margins and padding */
          body {
            font-size: 10pt;
            line-height: 1.4;
          }

          main {
            padding-top: 0 !important;
            min-height: auto !important;
          }

          .container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Page header adjustments */
          section {
            page-break-before: avoid;
            margin-bottom: 0 !important;
            padding: 12pt 0 !important;
          }

          /* Card styles for print */
          .print\\:shadow-none {
            box-shadow: none !important;
          }

          /* Prevent page breaks inside cards */
          .print\\:break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          /* Spacing adjustments */
          .print\\:space-y-4 > * + * {
            margin-top: 12pt !important;
          }

          /* Ensure cards don't break across pages */
          [class*="EditableContent"] {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          /* Hide AI prompt cards when printing */
          [class*="AIPromptCard"] {
            display: none !important;
          }

          /* Hide edit buttons when printing */
          button {
            display: none !important;
          }

          /* Optimize badge display for print */
          [class*="Badge"] {
            border: 1px solid #cbd5e1;
            background: white !important;
            color: #1e293b !important;
          }
        }
      `}</style>
    </>
  );
}
