"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/bitpact/shared/animated-section";
import { 
  FileText, 
  Send, 
  CheckCircle, 
  Clock,
  MessageSquare,
  Users,
  Code,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export function DeveloperApplicationSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  const applicationSteps = [
    {
      step: "1",
      title: "Choose Your Project",
      description: "Select from our current opportunities or propose a new idea",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      step: "2",
      title: "Prepare Your Proposal",
      description: "Create a detailed development plan with timeline and technical approach",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Submit your proposal through our governance portal",
      icon: <Send className="w-6 h-6" />,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      step: "4",
      title: "Community Review",
      description: "DAO members review and discuss your proposal",
      icon: <Users className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    },
    {
      step: "5",
      title: "Governance Vote",
      description: "Community votes on the partnership proposal",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    }
  ];

  const proposalRequirements = [
    {
      title: "Technical Approach",
      description: "Detailed implementation plan, architecture, and technology stack",
      required: true
    },
    {
      title: "Development Timeline",
      description: "Realistic milestones with delivery dates and key objectives",
      required: true
    },
    {
      title: "Resource Requirements",
      description: "Budget, tools, infrastructure, and team composition",
      required: true
    },
    {
      title: "Revenue Model Preference",
      description: "Choose between Treasury Share or Standalone Partnership model",
      required: true
    },
    {
      title: "Experience & Portfolio",
      description: "Previous projects, GitHub profile, and relevant expertise",
      required: false
    },
    {
      title: "Community Involvement",
      description: "How you'll engage with the community during development",
      required: false
    }
  ];

  const evaluationCriteria = [
    {
      criterion: "Technical Feasibility",
      weight: "30%",
      description: "Realistic implementation plan and technical expertise"
    },
    {
      criterion: "Market Potential",
      weight: "25%",
      description: "User demand and revenue generation potential"
    },
    {
      criterion: "Innovation",
      weight: "20%",
      description: "Novel approach and competitive advantage"
    },
    {
      criterion: "Community Alignment",
      weight: "15%",
      description: "Fit with DAO values and community needs"
    },
    {
      criterion: "Developer Track Record",
      weight: "10%",
      description: "Previous experience and successful deliveries"
    }
  ];

  return (
    <section id="application" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedFadeIn delay={0.1}>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Apply to Partner</h2>
          </AnimatedFadeIn>
          <AnimatedFadeIn delay={0.2}>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to build with us? Here's how to get started
            </p>
          </AnimatedFadeIn>
        </div>
        
        {/* Application Process */}
        <AnimatedSection delay={0.3}>
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Application Process</h3>
              <p className="text-muted-foreground">From application to partnership in 5 steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {applicationSteps.map((step, index) => (
                <AnimatedFadeIn key={index} delay={0.4 + index * 0.1} direction="up">
                  <Card className={`h-full border-2 ${step.color} hover:shadow-lg transition-all duration-300`}>
                    <CardContent className="p-4 text-center space-y-3">
                      <div className={`mx-auto w-12 h-12 rounded-full ${step.color.split(' ')[0]} ${step.color.split(' ')[1]} flex items-center justify-center text-primary font-bold`}>
                        {step.step}
                      </div>
                      <div className={`w-8 h-8 rounded-full ${step.color.split(' ')[0]} ${step.color.split(' ')[1]} flex items-center justify-center mx-auto`}>
                        {step.icon}
                      </div>
                      <h4 className="font-semibold text-sm">{step.title}</h4>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Proposal Requirements */}
        <AnimatedSection delay={0.5}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Proposal Requirements</h3>
                <p className="text-muted-foreground">What to include in your application</p>
              </div>
              <div className="space-y-4">
                {proposalRequirements.map((req, index) => (
                  <AnimatedFadeIn key={index} delay={0.6 + index * 0.05} direction="left">
                    <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            {req.required ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <div className="w-4 h-4 border-2 border-muted-foreground rounded-full" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm mb-1">{req.title}</h4>
                            <p className="text-xs text-muted-foreground">{req.description}</p>
                            {req.required && (
                              <Badge variant="secondary" className="text-xs mt-1">Required</Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedFadeIn>
                ))}
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Evaluation Criteria</h3>
                <p className="text-muted-foreground">How proposals are assessed</p>
              </div>
              <div className="space-y-4">
                {evaluationCriteria.map((criteria, index) => (
                  <AnimatedFadeIn key={index} delay={0.6 + index * 0.05} direction="right">
                    <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm">{criteria.criterion}</h4>
                          <Badge variant="outline" className="text-xs">{criteria.weight}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{criteria.description}</p>
                        <div className="mt-2 w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: criteria.weight }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedFadeIn>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Timeline */}
        <AnimatedSection delay={0.7}>
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Application Timeline</CardTitle>
              <CardDescription className="text-lg">
                What to expect after submission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="font-semibold">1-2 Days</div>
                  <div className="text-sm text-muted-foreground">Initial Review</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                    <MessageSquare className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="font-semibold">3-7 Days</div>
                  <div className="text-sm text-muted-foreground">Community Discussion</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="font-semibold">7-14 Days</div>
                  <div className="text-sm text-muted-foreground">Governance Vote</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="font-semibold">Immediate</div>
                  <div className="text-sm text-muted-foreground">Partnership Launch</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
        
        {/* Call to Action */}
        <AnimatedSection delay={0.8}>
          <Card className="border-primary/20 text-center">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Ready to Get Started?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join our community of developers building the future of decentralized finance. 
                  Submit your proposal today and start earning revenue share.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group" asChild>
                  <a href="https://app.aragon.org/dao/arbitrum-mainnet/0xA736319152057f9c3beb556EeE76Ea56598FFa13/proposals?proposals=tokenvoting" target="_blank" rel="noopener noreferrer">
                    Submit Proposal
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://discord.gg/VSPUucsyvn" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join Discord
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="secondary" className="px-3 py-1">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Open to All Developers
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Transparent Process
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Users className="w-3 h-3 mr-1" />
                  Community Driven
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}