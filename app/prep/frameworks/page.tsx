"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FileText, Grid, BookOpen } from "lucide-react";

export default function Frameworks() {
  const frameworks = [
    {
      title: "Account Plan Template",
      description: "Strategic account planning framework with customizable sections",
      icon: FileText,
      href: "/frameworks/account-plan",
      color: "from-blue-500 to-blue-500"
    },
    {
      title: "Prioritization Matrix",
      description: "Risk/opportunity framework for account prioritization",
      icon: Grid,
      href: "/frameworks/prioritization",
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Playbooks",
      description: "Customizable expansion and renewal playbook templates",
      icon: BookOpen,
      href: "/frameworks/playbooks",
      color: "from-blue-400 to-red-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <PageHeader
          title="Account Management Frameworks"
          description="Customizable strategic tools and methodologies for any account management role"
        />

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              These frameworks provide a systematic approach to managing strategic accounts.
              Each tool can be customized for your specific role, industry, and company using AI-powered prompts
              or manual editing.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {frameworks.map((framework, index) => (
              <motion.div key={index} variants={item}>
                <Link href={framework.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-slate-200">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${framework.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <framework.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                        {framework.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {framework.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-sm text-blue-600 font-medium group-hover:underline">
                        View Framework →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-50 rounded-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Framework Approach</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">1. Strategic Planning</h4>
                <p className="text-slate-700">
                  Comprehensive account plans that align customer priorities with your company's capabilities
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">2. Smart Prioritization</h4>
                <p className="text-slate-700">
                  Data-driven frameworks to allocate time and resources to highest-value opportunities
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">3. Repeatable Playbooks</h4>
                <p className="text-slate-700">
                  Proven methodologies for expansion, renewal, and stakeholder engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
