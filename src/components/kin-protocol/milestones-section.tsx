"use client";

import { AnimatedFadeIn, AnimatedStagger } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, 
  CheckCircle, 
  Clock, 
  Target,
  Users,
  Code,
  Globe,
  Smartphone,
  Award,
  TrendingUp
} from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "MVP Launch",
    subtitle: "Core Protocol Foundation",
    status: "planned",
    progress: 0,
    icon: <Rocket className="w-6 h-6" />,
    description: "Launch the foundational KIN Protocol with core lending, vouching, and reputation mechanisms.",
    deliverables: [
      {
        title: "Core Smart Contracts",
        items: [
          "Kin Protocol main contract",
          "Loan contract management",
          "Collateral staking system",
          "Credit Bureau integration",
          "Reputation Endowment contracts"
        ],
        status: "development"
      },
      {
        title: "Front-End Platform",
        items: [
          "Borrower dashboard",
          "Lender interface",
          "Voucher portal",
          "Loan marketplace",
          "Reputation tracking"
        ],
        status: "design"
      },
      {
        title: "Third-Party Integrations",
        items: [
          "Galxe credential verification",
          "Civic optional KYC",
          "Basic reputation scoring",
          "Wallet connectivity"
        ],
        status: "planning"
      }
    ],
    timeline: "Q2 2024",
    kpi: ["100+ active users", "50+ loans originated", "10+ active vouchers"]
  },
  {
    phase: "Phase 2", 
    title: "Reputation Expansion",
    subtitle: "Advanced Trust Systems",
    status: "planned",
    progress: 0,
    icon: <Award className="w-6 h-6" />,
    description: "Enhance reputation systems and introduce advanced features for sophisticated users.",
    deliverables: [
      {
        title: "Full Ontology Integration",
        items: [
          "OScore credit scoring",
          "ONT ID verification",
          "Cross-chain reputation",
          "Advanced credit analytics"
        ],
        status: "planned"
      },
      {
        title: "Advanced Reputation Dashboard",
        items: [
          "Detailed KRS analytics",
          "Reputation trend tracking",
          "Comparative scoring",
          "Reputation improvement suggestions"
        ],
        status: "planned"
      },
      {
        title: "Loan NFT Marketplace",
        items: [
          "Bidify Auction system",
          "Secondary market liquidity",
          "NFT valuation tools",
          "Trading analytics"
        ],
        status: "planned"
      }
    ],
    timeline: "Q3 2024",
    kpi: ["500+ active users", "250+ loans originated", "50+ active vouchers", "NFT marketplace launch"]
  },
  {
    phase: "Phase 3",
    title: "Global Scaling",
    subtitle: "Worldwide Financial Inclusion",
    status: "planned", 
    progress: 0,
    icon: <Globe className="w-6 h-6" />,
    description: "Expand globally with localization, mobile-first approach, and community programs.",
    deliverables: [
      {
        title: "Localization",
        items: [
          "Multi-language support",
          "Regional compliance",
          "Local payment methods",
          "Cultural adaptation"
        ],
        status: "planned"
      },
      {
        title: "Community Grant Programs",
        items: [
          "Entrepreneur funding",
          "Education initiatives",
          "Local ambassador programs",
          "Community governance"
        ],
        status: "planned"
      },
      {
        title: "Mobile-First Version",
        items: [
          "Native mobile apps",
          "SMS-based notifications",
          "Offline functionality",
          "Low-bandwidth optimization"
        ],
        status: "planned"
      }
    ],
    timeline: "Q4 2024",
    kpi: ["5,000+ active users", "2,500+ loans originated", "500+ active vouchers", "10+ countries"]
  }
];

const successMetrics = [
  {
    metric: "Total Value Locked",
    target: "$10M",
    timeline: "12 months",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    metric: "Active Users",
    target: "10,000+",
    timeline: "12 months", 
    icon: <Users className="w-5 h-5" />
  },
  {
    metric: "Loans Originated",
    target: "5,000+",
    timeline: "12 months",
    icon: <Target className="w-5 h-5" />
  },
  {
    metric: "Countries Reached",
    target: "25+",
    timeline: "18 months",
    icon: <Globe className="w-5 h-5" />
  }
];

export function KinProtocolMilestonesSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Roadmap to Revolutionizing Undercollateralized Lending
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            Our strategic roadmap outlines a phased approach to building the KIN Protocol ecosystem. 
            Each phase builds upon the previous one, ensuring sustainable growth while delivering 
            increasing value to our community of borrowers, lenders, and vouchers.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="space-y-8">
        <AnimatedStagger staggerDelay={0.1} initialDelay={0.2}>
          {phases.map((phase, index) => (
            <Card key={index} className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {phase.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-sm">
                        {phase.phase}
                      </Badge>
                      <Badge variant={phase.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                        {phase.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {phase.subtitle}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Timeline</div>
                    <div className="font-semibold">{phase.timeline}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-base leading-relaxed">
                  {phase.description}
                </CardDescription>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Progress value={phase.progress} className="flex-1" />
                    <span className="text-sm font-medium">{phase.progress}%</span>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-3">
                    {phase.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-sm">{deliverable.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {deliverable.status}
                          </Badge>
                        </div>
                        <ul className="space-y-1">
                          {deliverable.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-semibold text-sm mb-3">Key Performance Indicators</h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.kpi.map((kpi, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {kpi}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedStagger>
      </div>

      <AnimatedFadeIn delay={0.8}>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center border border-primary/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-background/80 rounded-full">
              <Badge variant="outline" className="mr-2 border-primary/20 text-primary">
                Success Metrics
              </Badge>
              <span className="text-sm font-medium">Measuring Our Impact</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Key Success Indicators
            </h3>
            <p className="text-lg text-muted-foreground">
              We're committed to measurable impact and transparent progress tracking. 
              These metrics represent our commitment to creating real change in the world of decentralized finance.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center space-y-3 p-6 bg-background/60 rounded-lg border border-border/50">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary">{metric.target}</div>
                  <h4 className="font-semibold">{metric.metric}</h4>
                  <p className="text-xs text-muted-foreground">Target: {metric.timeline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Development Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  {
                    quarter: "Q2 2024",
                    focus: "MVP Development",
                    status: "In Progress"
                  },
                  {
                    quarter: "Q3 2024", 
                    focus: "Reputation Systems",
                    status: "Planned"
                  },
                  {
                    quarter: "Q4 2024",
                    focus: "Global Expansion",
                    status: "Planned"
                  },
                  {
                    quarter: "Q1 2025",
                    focus: "Advanced Features",
                    status: "Planned"
                  }
                ].map((quarter, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm font-medium">{quarter.quarter}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">{quarter.focus}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {quarter.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Strategic Priorities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    priority: "Security First",
                    description: "Audited smart contracts and comprehensive testing"
                  },
                  {
                    priority: "User Experience",
                    description: "Intuitive interfaces for all participant types"
                  },
                  {
                    priority: "Scalability",
                    description: "Architecture designed for mass adoption"
                  },
                  {
                    priority: "Community Governance",
                    description: "Decentralized decision-making processes"
                  },
                  {
                    priority: "Financial Inclusion",
                    description: "Focus on underserved communities globally"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">{item.priority}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.2}>
        <Card className="border-primary/20 bg-muted/30">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              Join Us on This Journey
            </CardTitle>
            <CardDescription className="text-base">
              Be part of the revolution in undercollateralized lending
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The KIN Protocol roadmap represents our commitment to building a more inclusive, 
              efficient, and trustworthy financial system. Whether you're a borrower seeking 
              capital, a lender looking for returns, or a voucher building reputation, 
              there's a place for you in our ecosystem.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Badge variant="outline" className="px-3 py-1">🚀 Building Together</Badge>
              <Badge variant="outline" className="px-3 py-1">🌍 Global Impact</Badge>
              <Badge variant="outline" className="px-3 py-1">💎 Trust as Currency</Badge>
              <Badge variant="outline" className="px-3 py-1">🔄 Sustainable Growth</Badge>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}