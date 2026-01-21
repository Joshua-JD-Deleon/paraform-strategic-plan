"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Target,
  Users,
  Zap,
  CheckCircle2,
  Clock,
  Brain,
  TrendingUp,
  Phone,
  Mail,
  FileText,
  Briefcase,
  Settings,
  Lightbulb,
  ArrowRight,
  BookOpen,
  MessageSquare,
  BarChart3
} from "lucide-react";

export default function MotionSetupPage() {
  // Job responsibilities from the Founding AE role
  const roleResponsibilities = [
    {
      category: "Pipeline Generation",
      tasks: [
        "Outbound prospecting sequences",
        "Conference/event activation",
        "Inbound lead qualification",
        "Social selling activities",
        "Cold call blocks"
      ],
      motionProject: "Pipeline Development",
      aiEnhancement: "Auto-schedule optimal call times, AI task prioritization"
    },
    {
      category: "Full-Cycle Sales",
      tasks: [
        "Discovery call prep",
        "Demo execution",
        "Proposal creation",
        "Negotiation & close",
        "Contract management"
      ],
      motionProject: "Active Deals",
      aiEnhancement: "Auto-block prep time before meetings, deadline tracking"
    },
    {
      category: "Playbook Building",
      tasks: [
        "Document winning patterns",
        "Create email templates",
        "Build talk tracks",
        "Develop objection handling",
        "Process documentation"
      ],
      motionProject: "Sales Playbook",
      aiEnhancement: "Recurring blocks for documentation, weekly review cadence"
    },
    {
      category: "CRM & Operations",
      tasks: [
        "Pipeline hygiene",
        "Deal stage updates",
        "Activity logging",
        "Forecast preparation",
        "Weekly reporting"
      ],
      motionProject: "Sales Operations",
      aiEnhancement: "Daily CRM blocks, automated reminders for updates"
    }
  ];

  // Motion projects aligned to Founding AE role
  const motionProjects = [
    {
      name: "Pipeline Development",
      color: "blue",
      icon: Target,
      description: "Outbound, inbound, and conference prospecting",
      tasks: [
        { name: "Daily cold call block", duration: "1.5 hrs", recurring: true, priority: "high" },
        { name: "Email sequence optimization", duration: "30 min", recurring: true, priority: "medium" },
        { name: "LinkedIn engagement", duration: "30 min", recurring: true, priority: "medium" },
        { name: "Inbound lead qualification", duration: "Auto", recurring: true, priority: "high" },
        { name: "Conference prep/follow-up", duration: "Varies", recurring: false, priority: "high" }
      ]
    },
    {
      name: "Active Deals",
      color: "green",
      icon: TrendingUp,
      description: "Discovery to close execution",
      tasks: [
        { name: "Discovery call prep (30 min before)", duration: "30 min", recurring: false, priority: "high" },
        { name: "Demo prep & customization", duration: "45 min", recurring: false, priority: "high" },
        { name: "Post-call debrief & CRM update", duration: "15 min", recurring: false, priority: "high" },
        { name: "Proposal/business case creation", duration: "1-2 hrs", recurring: false, priority: "high" },
        { name: "Deal review & strategy", duration: "30 min", recurring: true, priority: "medium" }
      ]
    },
    {
      name: "Sales Playbook",
      color: "purple",
      icon: BookOpen,
      description: "Building repeatable processes",
      tasks: [
        { name: "Document winning call patterns", duration: "30 min", recurring: true, priority: "medium" },
        { name: "Create/refine email templates", duration: "30 min", recurring: true, priority: "medium" },
        { name: "Objection library updates", duration: "15 min", recurring: true, priority: "low" },
        { name: "Weekly playbook review", duration: "1 hr", recurring: true, priority: "high" },
        { name: "Competitive intel updates", duration: "30 min", recurring: true, priority: "medium" }
      ]
    },
    {
      name: "Sales Operations",
      color: "amber",
      icon: Settings,
      description: "CRM, reporting, and pipeline hygiene",
      tasks: [
        { name: "Morning pipeline review", duration: "15 min", recurring: true, priority: "high" },
        { name: "Deal stage updates", duration: "15 min", recurring: true, priority: "high" },
        { name: "Weekly forecast prep", duration: "30 min", recurring: true, priority: "high" },
        { name: "Activity logging cleanup", duration: "15 min", recurring: true, priority: "medium" },
        { name: "Report generation", duration: "30 min", recurring: true, priority: "medium" }
      ]
    }
  ];

  // Weekly schedule template
  const weeklySchedule = {
    monday: [
      { time: "8:00 AM", task: "Pipeline review & weekly planning", project: "Operations" },
      { time: "9:00 AM", task: "Cold call block #1", project: "Pipeline" },
      { time: "11:00 AM", task: "Discovery/Demo calls", project: "Active Deals" },
      { time: "2:00 PM", task: "Follow-up & email sequences", project: "Pipeline" },
      { time: "4:00 PM", task: "Playbook documentation", project: "Playbook" }
    ],
    tuesday: [
      { time: "8:00 AM", task: "Inbound lead qualification", project: "Pipeline" },
      { time: "9:30 AM", task: "Discovery/Demo calls", project: "Active Deals" },
      { time: "12:00 PM", task: "Lunch & LinkedIn engagement", project: "Pipeline" },
      { time: "1:00 PM", task: "Demo prep block", project: "Active Deals" },
      { time: "3:00 PM", task: "Cold call block #2", project: "Pipeline" }
    ],
    wednesday: [
      { time: "8:00 AM", task: "Deal strategy review", project: "Active Deals" },
      { time: "9:00 AM", task: "Discovery/Demo calls", project: "Active Deals" },
      { time: "11:00 AM", task: "Proposal/business case work", project: "Active Deals" },
      { time: "2:00 PM", task: "Cold call block", project: "Pipeline" },
      { time: "4:00 PM", task: "CRM hygiene", project: "Operations" }
    ],
    thursday: [
      { time: "8:00 AM", task: "Cold call block #1", project: "Pipeline" },
      { time: "10:00 AM", task: "Discovery/Demo calls", project: "Active Deals" },
      { time: "1:00 PM", task: "Competitive intel research", project: "Playbook" },
      { time: "2:30 PM", task: "Follow-up sequences", project: "Pipeline" },
      { time: "4:00 PM", task: "Forecast preparation", project: "Operations" }
    ],
    friday: [
      { time: "8:00 AM", task: "Weekly metrics review", project: "Operations" },
      { time: "9:00 AM", task: "Discovery/Demo calls", project: "Active Deals" },
      { time: "11:00 AM", task: "Playbook refinement", project: "Playbook" },
      { time: "1:00 PM", task: "Cold call block", project: "Pipeline" },
      { time: "3:00 PM", task: "Week close & next week planning", project: "Operations" }
    ]
  };

  // AI features to highlight during demo
  const aiFeatures = [
    {
      feature: "Intelligent Scheduling",
      description: "AI automatically finds optimal time slots based on your energy patterns and meeting types",
      demoPoint: "Show how prep time auto-blocks before discovery calls"
    },
    {
      feature: "Task Prioritization",
      description: "AI weighs deadlines, importance, and dependencies to suggest what to work on next",
      demoPoint: "Demonstrate priority shifts when a hot deal needs attention"
    },
    {
      feature: "Calendar Optimization",
      description: "AI batches similar tasks together for focus and flow state",
      demoPoint: "Show cold call blocks grouped for momentum"
    },
    {
      feature: "Deadline Intelligence",
      description: "AI warns when tasks are at risk and auto-reschedules",
      demoPoint: "Show how quarterly close deadlines affect task urgency"
    }
  ];

  // Connection to Paraform role
  const paraformConnection = [
    {
      motionSkill: "AI-Powered Workflows",
      paraformRelevance: "Selling AI that enhances productivity - I use AI daily to be more effective",
      demoTalkTrack: "I built my Motion setup around the same principle as Paraform - AI should do the work, not just assist"
    },
    {
      motionSkill: "Full-Cycle Execution",
      paraformRelevance: "Managing the entire sales cycle from prospecting to close",
      demoTalkTrack: "Each project maps to a stage - Pipeline, Active Deals, Playbook, Operations"
    },
    {
      motionSkill: "Playbook Building",
      paraformRelevance: "First sales hire needs to document what works",
      demoTalkTrack: "I've allocated weekly time for playbook documentation - critical for scaling"
    },
    {
      motionSkill: "Process Discipline",
      paraformRelevance: "CRM hygiene, forecasting, and operational excellence",
      demoTalkTrack: "Daily pipeline reviews and structured CRM time ensures nothing falls through"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-400/20 text-blue-100 border-blue-400/30 mb-4">
              Motion App Setup
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Motion Setup for Founding AE</h1>
            <p className="text-blue-100/80 mb-4">
              Configure Motion to demonstrate how you'd execute on all role responsibilities
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>AI-Powered Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Role-Aligned Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span>Workflow Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="setup" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="setup">Project Setup</TabsTrigger>
              <TabsTrigger value="schedule">Weekly Schedule</TabsTrigger>
              <TabsTrigger value="ai">AI Features</TabsTrigger>
              <TabsTrigger value="demo">Demo Strategy</TabsTrigger>
            </TabsList>

            {/* Project Setup Tab */}
            <TabsContent value="setup">
              <div className="space-y-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-blue-800">
                      <Lightbulb className="h-5 w-5" />
                      <p className="font-medium">
                        Create these 4 projects in Motion aligned to the Founding AE role responsibilities
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {motionProjects.map((project, index) => (
                    <Card key={index} className="border-2">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-${project.color}-100 flex items-center justify-center`}>
                            <project.icon className={`h-5 w-5 text-${project.color}-600`} />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{project.name}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {project.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className={`h-4 w-4 ${task.priority === 'high' ? 'text-red-500' : task.priority === 'medium' ? 'text-amber-500' : 'text-slate-400'}`} />
                                <span className="text-sm text-slate-700">{task.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{task.duration}</Badge>
                                {task.recurring && <Badge className="text-xs bg-green-100 text-green-700">Recurring</Badge>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Role Alignment Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-purple-600" />
                      Role Responsibility Alignment
                    </CardTitle>
                    <CardDescription>How each Motion project maps to the Founding AE job description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {roleResponsibilities.map((resp, index) => (
                        <div key={index} className="p-4 bg-slate-50 rounded-lg border">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-900">{resp.category}</span>
                            <Badge className="bg-purple-100 text-purple-700">{resp.motionProject}</Badge>
                          </div>
                          <ul className="text-sm text-slate-600 space-y-1 mb-3">
                            {resp.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-center gap-2">
                                <ArrowRight className="h-3 w-3 text-slate-400" />
                                {task}
                              </li>
                            ))}
                          </ul>
                          <div className="text-xs text-purple-600 bg-purple-50 p-2 rounded">
                            <span className="font-medium">AI Enhancement:</span> {resp.aiEnhancement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Weekly Schedule Tab */}
            <TabsContent value="schedule">
              <div className="space-y-6">
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-amber-800">
                      <Calendar className="h-5 w-5" />
                      <p className="font-medium">
                        Sample weekly schedule showing balanced allocation across all responsibilities
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-5 gap-4">
                  {Object.entries(weeklySchedule).map(([day, tasks]) => (
                    <Card key={day} className="h-fit">
                      <CardHeader className="py-4">
                        <CardTitle className="text-sm capitalize">{day}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {tasks.map((task, index) => (
                          <div key={index} className={`p-2 rounded text-xs ${
                            task.project === 'Pipeline' ? 'bg-blue-50 border-l-2 border-blue-500' :
                            task.project === 'Active Deals' ? 'bg-green-50 border-l-2 border-green-500' :
                            task.project === 'Playbook' ? 'bg-purple-50 border-l-2 border-purple-500' :
                            'bg-amber-50 border-l-2 border-amber-500'
                          }`}>
                            <div className="font-medium text-slate-500">{task.time}</div>
                            <div className="text-slate-700">{task.task}</div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-blue-500"></div>
                    <span className="text-sm text-slate-600">Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-green-500"></div>
                    <span className="text-sm text-slate-600">Active Deals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-purple-500"></div>
                    <span className="text-sm text-slate-600">Playbook</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-amber-500"></div>
                    <span className="text-sm text-slate-600">Operations</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* AI Features Tab */}
            <TabsContent value="ai">
              <div className="space-y-6">
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-purple-800">
                      <Brain className="h-5 w-5" />
                      <p className="font-medium">
                        Highlight these AI features during your Motion demo - they parallel Paraform's value prop
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                  {aiFeatures.map((feature, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Zap className="h-5 w-5 text-purple-600" />
                          {feature.feature}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 mb-4">{feature.description}</p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <span className="text-xs font-medium text-green-700">Demo Point:</span>
                          <p className="text-sm text-green-800">{feature.demoPoint}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Demo Strategy Tab */}
            <TabsContent value="demo">
              <div className="space-y-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-green-800">
                      <Target className="h-5 w-5" />
                      <p className="font-medium">
                        Use your Motion demo to show how you'd execute on the Paraform Founding AE role
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Motion to Paraform Connection Points</CardTitle>
                    <CardDescription>What to emphasize during the demo to connect to the role</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paraformConnection.map((connection, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-blue-100 text-blue-700">{connection.motionSkill}</Badge>
                            <ArrowRight className="h-4 w-4 text-slate-400" />
                            <Badge className="bg-purple-100 text-purple-700">Paraform Relevance</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">{connection.paraformRelevance}</p>
                          <div className="bg-slate-50 rounded p-3">
                            <span className="text-xs font-medium text-slate-500">Talk Track:</span>
                            <p className="text-sm text-slate-800 italic">"{connection.demoTalkTrack}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Demo Flow */}
                <Card className="border-2 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-800">
                      <BarChart3 className="h-5 w-5" />
                      Suggested Demo Flow (5-10 min)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { step: "1", title: "Show Project Structure", time: "1 min", content: "Show the 4 projects aligned to Founding AE responsibilities" },
                        { step: "2", title: "Weekly Schedule View", time: "2 min", content: "Show how AI balances prospecting, deals, playbook, and ops time" },
                        { step: "3", title: "Task Prioritization", time: "2 min", content: "Demonstrate how AI reprioritizes when a hot deal needs attention" },
                        { step: "4", title: "Auto-Scheduling", time: "2 min", content: "Show prep time auto-blocking before discovery calls" },
                        { step: "5", title: "Connect to Paraform", time: "2 min", content: "\"This is how I'd manage my day from Day 1 at Paraform - systematic, AI-enhanced, disciplined\"" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-slate-900">{item.title}</span>
                              <Badge variant="outline">{item.time}</Badge>
                            </div>
                            <p className="text-sm text-slate-600">{item.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
