"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import {
  Rocket,
  Trophy,
  Globe,
  CheckCircle,
  Calendar,
  Target,
  Clock,
  Users,
  Shield
} from "lucide-react";

export function MirrorVaultMilestonesSection() {
  const milestones = [
    {
      phase: "Phase 1",
      status: "current",
      icon: <Rocket className="w-6 h-6" />,
      title: "Core MVP",
      duration: "6-8 weeks",
      description: "Deploy the foundational MirrorVault protocol with essential features",
      tasks: [
        "Deploy single ETH/USD vault with leverage up to 5x",
        "Implement fee crystallization + high-water mark logic",
        "Launch basic dApp interface with deposit/withdraw UI",
        "Initial manager onboarding and verification",
        "Basic Aegis Score calculation system"
      ],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      progress: 65
    },
    {
      phase: "Phase 2",
      status: "upcoming",
      icon: <Trophy className="w-6 h-6" />,
      title: "Aegis Reputation System",
      duration: "6 weeks",
      description: "Build comprehensive on-chain reputation and scoring system",
      tasks: [
        "On-chain score tracking for verified managers",
        "Integrate bonding, penalties, and epoch reporting",
        "Public reputation dashboard and badges",
        "Advanced risk metrics and analytics",
        "Community governance features"
      ],
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      progress: 25
    },
    {
      phase: "Phase 3",
      status: "upcoming",
      icon: <Globe className="w-6 h-6" />,
      title: "Expansion",
      duration: "8-10 weeks",
      description: "Scale the protocol with multi-chain support and advanced features",
      tasks: [
        "Add multiple vaults and trading pairs",
        "Integrate cross-chain deployments (Base, Arbitrum)",
        "Launch community points and referral layer",
        "Advanced automation and strategy features",
        "Institutional-grade tools and APIs"
      ],
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      progress: 10
    }
  ];

  const keyMetrics = [
    { label: "Total Development Time", value: "20-24 weeks", icon: <Clock className="w-5 h-5" /> },
    { label: "Core Features", value: "15+", icon: <Target className="w-5 h-5" /> },
    { label: "Target Chains", value: "3+", icon: <Globe className="w-5 h-5" /> },
    { label: "Team Size", value: "5-8", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section id="milestones" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedSection>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
              🚀 Milestones
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our roadmap to revolutionizing decentralized copy trading
            </p>
          </AnimatedSection>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block z-10">
                  {milestone.status === 'current' && (
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                  )}
                </div>
                
                <AnimatedFadeIn delay={0.3 + index * 0.2} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                    <Card className={`h-full border-2 ${milestone.color} hover:shadow-lg transition-all duration-300`}>
                      <CardHeader>
                        <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <div className={`p-2 rounded-lg ${milestone.color.split(' ')[0]} ${milestone.color.split(' ')[1]}`}>
                            {milestone.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{milestone.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={milestone.status === 'current' ? 'default' : 'secondary'}>
                                {milestone.status === 'current' ? 'In Progress' : 'Upcoming'}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {milestone.duration}
                              </Badge>
                              {milestone.status === 'current' && (
                                <div className="flex items-center gap-1 text-xs text-primary">
                                  <Calendar className="w-3 h-3" />
                                  <span>Q1 2024</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base">
                          {milestone.description}
                        </CardDescription>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-foreground">Key Deliverables:</h4>
                          <ul className="space-y-1">
                            {milestone.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{milestone.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${milestone.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedFadeIn>
              </div>
            ))}
          </div>
        </div>
        
        <AnimatedSection delay={0.8} className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Development Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-primary">
                      {metric.icon}
                      <span className="font-semibold">{metric.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Rocket className="w-8 h-8 text-blue-500" />
                  </div>
                  <h4 className="font-semibold">Iterative Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Building incrementally with user feedback at each stage
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="font-semibold">Security First</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive audits and testing at each milestone
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-purple-500" />
                  </div>
                  <h4 className="font-semibold">Community Driven</h4>
                  <p className="text-sm text-muted-foreground">
                    Feature priorities guided by community input and needs
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-background/50 rounded-lg">
                <h4 className="text-lg font-semibold text-primary mb-4">Success Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>TVL Target: $10M+ by end of Phase 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Active Managers: 20+ by end of Phase 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Daily Volume: $1M+ by end of Phase 3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cross-chain Deployment: 3+ networks</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}