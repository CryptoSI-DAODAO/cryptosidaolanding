"use client";

import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Users, 
  Code, 
  Trophy,
  Target,
  Rocket
} from "lucide-react";

const milestones = [
  {
    phase: "Preparation Phase",
    date: "June 1 – July 31, 2025",
    status: "upcoming",
    progress: 0,
    icon: <Target className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    tasks: [
      "Register for Hedera Africa Hackathon",
      "Complete Hedera Certification Program",
      "Refine reputation system metrics",
      "Finalize technical stack selection"
    ]
  },
  {
    phase: "Hacking & Mentorship Phase",
    date: "August 1 – September 30, 2025",
    status: "upcoming",
    progress: 0,
    icon: <Code className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    tasks: [
      "Build core smart contracts on Hedera",
      "Implement reputation system logic",
      "Create user-friendly interface",
      "Develop off-chain integration concepts",
      "Engage with mentors for refinement"
    ]
  },
  {
    phase: "Submission & Evaluation",
    date: "September 30 – November 3, 2025",
    status: "upcoming",
    progress: 0,
    icon: <Trophy className="w-6 h-6" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    tasks: [
      "Submit completed dApp and documentation",
      "Participate in judging process",
      "Attend closing ceremony on November 3, 2025",
      "Winner announcements and awards"
    ]
  }
];

const keyDeliverables = [
  {
    title: "Smart Contract Suite",
    description: "Complete set of production-ready smart contracts",
    components: ["Asset Tokenization", "Investment Pools", "Reputation Engine", "Dividend Distributor"]
  },
  {
    title: "User Interfaces",
    description: "Intuitive web and mobile interfaces for all stakeholders",
    components: ["Investor Dashboard", "Operator Portal", "NFT Explorer", "Reputation Leaderboard"]
  },
  {
    title: "Documentation Suite",
    description: "Comprehensive documentation for developers and users",
    components: ["Technical Whitepaper", "User Guides", "API Documentation", "Integration Tutorials"]
  },
  {
    title: "Demo Environment",
    description: "Fully functional demonstration with simulated data",
    components: ["Interactive Demo", "Test Scenarios", "Performance Metrics", "Impact Analytics"]
  }
];

export function BusFiMilestonesSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Roadmap to Revolutionizing Transportation Finance
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            Our strategic roadmap outlines the journey from concept to impactful implementation. 
            Each phase is carefully designed to build upon the previous, ensuring a robust, 
            scalable, and meaningful solution for African transportation finance.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className="overflow-hidden border-l-4 border-l-yellow-400 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${milestone.bgColor} ${milestone.color} flex-shrink-0`}>
                    {milestone.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{milestone.phase}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {milestone.status === 'upcoming' ? 'Upcoming' : 'In Progress'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{milestone.date}</span>
                    </div>
                    <Progress value={milestone.progress} className="h-2 mb-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {milestone.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedFadeIn delay={0.6}>
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl" style={{ color: "#FFD600" }}>Key Deliverables</CardTitle>
            <CardDescription className="text-lg">
              Core components that will be delivered by the end of the hackathon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyDeliverables.map((deliverable, index) => (
                <AnimatedFadeIn key={index} delay={0.7 + index * 0.1} direction="up">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-yellow-600" />
                      {deliverable.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {deliverable.description}
                    </p>
                    <div className="space-y-1">
                      {deliverable.components.map((component, componentIndex) => (
                        <div key={componentIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{component}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedFadeIn>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.8}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 dark:text-green-400 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Success Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Smart Contract Security Audit</span>
                  <Badge variant="outline" className="text-green-600">Critical</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">User Experience Score</span>
                  <Badge variant="outline" className="text-green-600">85%+</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Technical Innovation</span>
                  <Badge variant="outline" className="text-green-600">High</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Real-World Impact Potential</span>
                  <Badge variant="outline" className="text-green-600">Transformative</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Documentation Quality</span>
                  <Badge variant="outline" className="text-green-600">Comprehensive</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Hackathon Priorities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="font-medium text-sm mb-1">Technical Excellence</div>
                  <div className="text-xs text-muted-foreground">
                    Robust architecture, secure smart contracts, scalable design
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="font-medium text-sm mb-1">Innovation Focus</div>
                  <div className="text-xs text-muted-foreground">
                    Novel reputation system, RWA tokenization, DAO governance
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="font-medium text-sm mb-1">Impact Demonstration</div>
                  <div className="text-xs text-muted-foreground">
                    Clear social value, financial inclusion, community benefits
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="font-medium text-sm mb-1">Presentation Quality</div>
                  <div className="text-xs text-muted-foreground">
                    Compelling narrative, clear demo, comprehensive docs
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <Card className="border-l-4 border-l-yellow-400">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h4 className="font-semibold text-foreground">Beyond the Hackathon</h4>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                While the hackathon focuses on demonstrating the mechanism and potential impact, 
                Bus-Fi is designed for real-world deployment. The post-hackathon roadmap includes 
                pilot testing in target African communities, partnership development with local 
                transportation operators, and iterative improvement based on user feedback.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <Badge variant="outline" className="px-4 py-2">Q4 2025: Pilot Testing</Badge>
                <Badge variant="outline" className="px-4 py-2">Q1 2026: Regional Launch</Badge>
                <Badge variant="outline" className="px-4 py-2">Q2 2026: Scaling Phase</Badge>
                <Badge variant="outline" className="px-4 py-2">Q3 2026: Pan-African Expansion</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}