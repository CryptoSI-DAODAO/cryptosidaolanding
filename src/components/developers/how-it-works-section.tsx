"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/bitpact/shared/animated-section";
import { 
  Search, 
  FileText, 
  Users, 
  Handshake,
  Code,
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export function DeveloperHowItWorksSection() {
  const processSteps = [
    {
      step: "1",
      title: "Explore Ideas",
      description: "Review our current project ideas and identify opportunities that match your expertise",
      icon: <Search className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      details: [
        "Browse our Ideas section",
        "Review technical specifications",
        "Assess project requirements",
        "Match with your skills"
      ]
    },
    {
      step: "2",
      title: "Submit Proposal",
      description: "Create a detailed development proposal outlining your approach and timeline",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      details: [
        "Technical implementation plan",
        "Development timeline",
        "Resource requirements",
        "Revenue model preference"
      ]
    },
    {
      step: "3",
      title: "DAO Review",
      description: "Community evaluates your proposal for technical feasibility and alignment",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      details: [
        "Community discussion",
        "Technical review",
        "Governance vote",
        "Feedback incorporation"
      ]
    },
    {
      step: "4",
      title: "Partnership Agreement",
      description: "Formalize the partnership with a smart contract-based agreement",
      icon: <Handshake className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      details: [
        "Smart contract deployment",
        "Revenue share terms",
        "Milestone definitions",
        "Governance rights"
      ]
    },
    {
      step: "5",
      title: "Development",
      description: "Build the dApp with DAO support, resources, and community feedback",
      icon: <Code className="w-6 h-6" />,
      color: "bg-red-500/10 text-red-500 border-red-500/20",
      details: [
        "Access to DAO resources",
        "Community feedback loops",
        "Regular progress updates",
        "Technical support"
      ]
    },
    {
      step: "6",
      title: "Launch & Earn",
      description: "Deploy the dApp and start receiving automatic revenue distributions",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
      details: [
        "Production deployment",
        "Marketing support",
        "Revenue tracking",
        "Ongoing partnership"
      ]
    }
  ];

  const timelineFeatures = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Transparent Process",
      description: "Every step is documented and visible to the community"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Community Driven",
      description: "Decisions are made through DAO governance"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Fair Compensation",
      description: "Revenue sharing is enforced by smart contracts"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Long-term Support",
      description: "Partnerships extend beyond initial development"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedFadeIn delay={0.1}>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">How It Works</h2>
          </AnimatedFadeIn>
          <AnimatedFadeIn delay={0.2}>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From idea to revenue in six transparent steps
            </p>
          </AnimatedFadeIn>
        </div>
        
        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <AnimatedFadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold z-10">
                    {step.step}
                  </div>
                  
                  {/* Step Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <Card className={`h-full border-2 ${step.color} hover:shadow-lg transition-all duration-300`}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${step.color.split(' ')[0]} ${step.color.split(' ')[1]}`}>
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedFadeIn>
            ))}
          </div>
        </div>
        
        {/* Features */}
        <AnimatedSection delay={0.9}>
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 mt-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Partnership Features</CardTitle>
              <CardDescription className="text-lg">
                What makes our partnership program unique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {timelineFeatures.map((feature, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Badge variant="secondary" className="px-4 py-2">
                  Average partnership timeline: 3-6 months from proposal to launch
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}