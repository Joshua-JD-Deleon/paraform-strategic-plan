"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  CheckCircle2,
  Clock,
  Sparkles,
  AlertCircle,
  Edit3
} from "lucide-react";
import { useState } from "react";

interface EmailTemplate {
  id: string;
  title: string;
  timing: string;
  recipient: string;
  subject: string;
  body: string;
  tips: string[];
}

const emailTemplates: EmailTemplate[] = [
  {
    id: "post-virtual",
    title: "Post-Virtual Session Thank You",
    timing: "Within 2 hours of virtual session",
    recipient: "Interviewer(s) from virtual session",
    subject: "Thank you - Excited about Paraform",
    body: `Hi [Name],

Thank you for taking the time to meet with me today. I really enjoyed our conversation about [specific topic discussed - e.g., "Paraform's approach to AI-powered RFP responses" or "the discovery call simulation"].

A few things that stood out to me:

• [Specific insight from the conversation that excited you]
• [Something you learned about the role or company]
• [A point of connection or shared perspective]

Our discussion reinforced my excitement about the Founding AE opportunity. The problem Paraform is solving resonates with pain I've experienced firsthand in enterprise sales, and I'm energized by the chance to help build the GTM motion from the ground up.

I'm looking forward to the in-person session and meeting the rest of the team.

Best,
[Your name]
[Phone number]`,
    tips: [
      "Send within 2 hours while conversation is fresh",
      "Reference specific details from your conversation",
      "Keep it concise - 3-4 paragraphs max",
      "Reiterate enthusiasm without being over-the-top"
    ]
  },
  {
    id: "post-inperson",
    title: "Post-In-Person Session Thank You",
    timing: "Same evening or next morning",
    recipient: "All interviewers (can be individual or group)",
    subject: "Great meeting the team today",
    body: `Hi [Name/Team],

Thank you for hosting me at the Paraform office today. It was a pleasure meeting everyone and getting a feel for the team culture firsthand.

I left our conversations even more excited about this opportunity. [Specific reference to in-person discussions - e.g., "The team's energy and the collaborative dynamic were evident" or "I appreciated hearing about X challenge and how the team approaches it"].

A few reflections from today:

• [Key insight from team lunch or interview]
• [Something that reinforced your fit for the role]
• [Appreciation for specific person or moment]

I'm confident that my experience in [relevant skill/background] combined with my passion for building would make me a strong addition to the Paraform team.

Please don't hesitate to reach out if you have any additional questions. I'm very much looking forward to hearing about next steps.

Best regards,
[Your name]
[Phone number]`,
    tips: [
      "Can send to group or individuals - depends on interview structure",
      "Reference specific moments from the in-person day",
      "Mention people by name if appropriate",
      "Close with clear call-to-action on next steps"
    ]
  },
  {
    id: "dean-checkin",
    title: "Post-Dean Check-in Note",
    timing: "Same day as final check-in",
    recipient: "Dean (or whoever conducts final interview)",
    subject: "Thank you - Ready to contribute",
    body: `Hi Dean,

Thank you for the final check-in today and for the entire interview process. I've genuinely enjoyed every conversation and have only grown more excited about the opportunity to join Paraform as a Founding AE.

Throughout this process, I've been impressed by:

• The clarity of vision for how AI can transform the RFP space
• The caliber and energy of the team
• The thoughtfulness of the interview process itself

I want to reiterate my strong interest in this role. The combination of early-stage building, AI-powered product, and enterprise sales is exactly what I'm looking for in my next chapter. I'm ready to hit the ground running and start contributing to Paraform's growth.

If there's anything else you need from me - references, additional information, or another conversation - please don't hesitate to ask.

Thank you again for the opportunity.

Best,
[Your name]
[Phone number]`,
    tips: [
      "This is your closing argument - make it count",
      "Be direct about your interest and readiness",
      "Offer to provide anything additional they need",
      "Professional but warm tone"
    ]
  },
  {
    id: "follow-up-check",
    title: "Status Check-in (If No Response)",
    timing: "5-7 business days after interview",
    recipient: "Primary contact or recruiter",
    subject: "Following up - Paraform Founding AE",
    body: `Hi [Name],

I hope you're doing well. I wanted to follow up on my interview for the Founding AE position.

I remain very excited about the opportunity to join Paraform and contribute to building out the sales function. If there's any additional information I can provide or questions I can answer, please let me know.

I understand these decisions take time, and I appreciate your consideration.

Best regards,
[Your name]
[Phone number]`,
    tips: [
      "Only send if you haven't heard back in 5-7 business days",
      "Keep it brief and professional",
      "Don't express frustration or impatience",
      "One follow-up is appropriate; more than two can be pushy"
    ]
  }
];

export default function FollowUpPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Close Strong
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Follow-Up Email Templates
            </h1>
            <p className="text-slate-600">
              Pre-drafted thank you notes ready to customize and send
            </p>
          </div>

          {/* Key Principles */}
          <Card className="mb-8 border border-emerald-200 bg-emerald-50/50 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Follow-Up Best Practices</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Timing matters:</strong> Send within 24 hours, ideally same day</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Edit3 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Personalize:</strong> Reference specific conversation details</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Be concise:</strong> Respect their time - 3-4 paragraphs max</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Proofread:</strong> Typos in thank you = attention to detail concerns</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Templates */}
          <div className="space-y-6">
            {emailTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border border-slate-200/50 hover:border-blue-300 transition-all duration-300 shadow-sm">
                  <CardHeader className="py-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-lg">{template.title}</CardTitle>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {template.timing}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            To: {template.recipient}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => copyToClipboard(template.body, template.id)}
                      >
                        {copiedId === template.id ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Subject Line */}
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <span className="text-xs font-medium text-slate-500">Subject: </span>
                      <span className="text-sm text-slate-900">{template.subject}</span>
                    </div>

                    {/* Email Body */}
                    <div className="p-4 bg-white border border-slate-200 rounded-lg">
                      <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                        {template.body}
                      </pre>
                    </div>

                    {/* Tips */}
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <h4 className="font-semibold text-sm text-amber-900 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Tips for This Email
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-1">
                        {template.tips.map((tip, i) => (
                          <li key={i} className="text-xs text-amber-800 flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Customization Reminder */}
          <Card className="mt-8 border border-blue-200 bg-blue-50/50 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Edit3 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Remember to Customize!</h3>
                  <p className="text-sm text-slate-700 mb-3">
                    These templates are starting points. Before sending:
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      Replace all [bracketed text] with specific details
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      Add personal touches from your actual conversation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      Adjust tone to match the rapport you built
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      Proofread twice before hitting send
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
