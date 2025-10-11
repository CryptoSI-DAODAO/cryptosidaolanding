"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "./shared/animated-section";
import { 
  Rocket, 
  Users, 
  Globe, 
  CheckCircle,
  Calendar,
  Target
} from "lucide-react";

export function BitpactMilestonesSection() {
  const milestones = [
    {
      phase: "Genesis Pact",
      status: "current",
      icon: <Rocket className="w-6 h-6" />,
      title: "MVP Deployment",
      description: "Deploy the MVP: escrow smart contracts, arbiter registry, reputation module.",
      tasks: [
        "Onboard first arbiters and early users",
        "Launch the BitPact testnet simulation",
        "Simulate real-world trades under load"
      ],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      phase: "Public Ledger Era",
      status: "upcoming",
      icon: <Globe className="w-6 h-6" />,
      title: "Decentralized Integration",
      description: "IPFS/Arweave integration for arbitration logs and trader rep history.",
      tasks: [
        "Release cross-platform UI with multisig wallet integration",
        "Host the first DAO vote to approve/disapprove arbiter performance"
      ],
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    }
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
              Our roadmap to revolutionizing P2P Bitcoin trading
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
                            <CardTitle className="text-xl">{milestone.phase}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={milestone.status === 'current' ? 'default' : 'secondary'}>
                                {milestone.status === 'current' ? 'In Progress' : 'Upcoming'}
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
              <CardTitle className="text-2xl text-primary">Development Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Phase 1</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm text-muted-foreground">75% Complete</span>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Phase 2</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <span className="text-sm text-muted-foreground">25% Planned</span>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Community</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <span className="text-sm text-muted-foreground">Early Adopters</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Join our community to stay updated on development progress and participate in testing
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}