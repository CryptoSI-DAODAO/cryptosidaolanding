"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/bitpact/shared/animated-section";
import { 
  DollarSign, 
  Users, 
  Shield, 
  Zap,
  Trophy,
  Globe,
  Lightbulb,
  Heart,
  ArrowUp,
  Code,
  Target
} from "lucide-react";

export function DeveloperBenefitsSection() {
  const financialBenefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Revenue Sharing",
      description: "Earn up to 50% of dApp revenues for the lifetime of the project",
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      details: "Passive income that grows with the project's success"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Performance Bonuses",
      description: "Additional rewards for exceptional development and innovation",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      details: "DAO-funded bonuses for exceeding expectations"
    },
    {
      icon: <ArrowUp className="w-6 h-6" />,
      title: "Token Incentives",
      description: "Receive DAO tokens as part of your partnership package",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      details: "Governance rights and long-term value appreciation"
    }
  ];

  const technicalBenefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Contract Protection",
      description: "Automated revenue distribution secured by blockchain",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      details: "No manual payment processing, completely trustless"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Infrastructure Support",
      description: "Access to DAO-funded development resources and tools",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
      details: "Cloud hosting, APIs, and development environments"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Mentorship",
      description: "Guidance from experienced blockchain developers",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      details: "Code reviews, architecture advice, and best practices"
    }
  ];

  const communityBenefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Building",
      description: "Access to our engaged community of users and contributors",
      color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
      details: "Built-in user base and feedback from day one"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Network Effects",
      description: "Leverage our ecosystem partnerships and integrations",
      color: "bg-teal-500/10 text-teal-500 border-teal-500/20",
      details: "Cross-promotion and collaboration opportunities"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Marketing Support",
      description: "DAO-funded marketing and user acquisition campaigns",
      color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
      details: "Professional marketing team and budget allocation"
    }
  ];

  const careerBenefits = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Platform",
      description: "Bring your ideas to life with DAO support and funding",
      color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      details: "Turn concepts into production-ready applications"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Impact Creation",
      description: "Build projects that make a real difference in Web3",
      color: "bg-red-500/10 text-red-500 border-red-500/20",
      details: "Work on meaningful projects with global reach"
    }
  ];

  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedFadeIn delay={0.1}>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Developer Benefits</h2>
          </AnimatedFadeIn>
          <AnimatedFadeIn delay={0.2}>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              More than just revenue sharing - comprehensive support for your success
            </p>
          </AnimatedFadeIn>
        </div>
        
        {/* Financial Benefits */}
        <AnimatedSection delay={0.3}>
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Financial Benefits</h3>
              <p className="text-muted-foreground">Direct and ongoing financial incentives</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financialBenefits.map((benefit, index) => (
                <AnimatedFadeIn key={index} delay={0.4 + index * 0.1} direction="up">
                  <Card className={`h-full border-2 ${benefit.color} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader className="text-center">
                      <div className={`mx-auto w-16 h-16 rounded-full ${benefit.color.split(' ')[0]} ${benefit.color.split(' ')[1]} flex items-center justify-center mb-4`}>
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-3">
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground italic">
                        {benefit.details}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Technical Benefits */}
        <AnimatedSection delay={0.5}>
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Technical Resources</h3>
              <p className="text-muted-foreground">Everything you need to build successfully</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalBenefits.map((benefit, index) => (
                <AnimatedFadeIn key={index} delay={0.6 + index * 0.1} direction="up">
                  <Card className={`h-full border-2 ${benefit.color} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader className="text-center">
                      <div className={`mx-auto w-16 h-16 rounded-full ${benefit.color.split(' ')[0]} ${benefit.color.split(' ')[1]} flex items-center justify-center mb-4`}>
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-3">
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground italic">
                        {benefit.details}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Community & Career Benefits */}
        <AnimatedSection delay={0.7}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Community & Network</h3>
                <p className="text-muted-foreground">Leverage our ecosystem</p>
              </div>
              <div className="space-y-6">
                {communityBenefits.map((benefit, index) => (
                  <AnimatedFadeIn key={index} delay={0.8 + index * 0.1} direction="left">
                    <Card className={`border-2 ${benefit.color} hover:shadow-lg transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full ${benefit.color.split(' ')[0]} ${benefit.color.split(' ')[1]} flex items-center justify-center flex-shrink-0`}>
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                            <p className="text-xs text-muted-foreground italic">{benefit.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedFadeIn>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Career & Impact</h3>
                <p className="text-muted-foreground">Build your legacy in Web3</p>
              </div>
              <div className="space-y-6">
                {careerBenefits.map((benefit, index) => (
                  <AnimatedFadeIn key={index} delay={0.8 + index * 0.1} direction="right">
                    <Card className={`border-2 ${benefit.color} hover:shadow-lg transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full ${benefit.color.split(' ')[0]} ${benefit.color.split(' ')[1]} flex items-center justify-center flex-shrink-0`}>
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                            <p className="text-xs text-muted-foreground italic">{benefit.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedFadeIn>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Summary Stats */}
        <AnimatedSection delay={0.9}>
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 mt-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Partnership by Numbers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Revenue Share</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Partnership Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Current Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Transparent</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}