"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/bitpact/shared/animated-section";
import { 
  Code, 
  ArrowRight, 
  Users, 
  DollarSign,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";

export function DevelopersSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlights = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "50% Revenue Share",
      description: "Earn up to 50% of dApp revenues for lifetime of the project"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "4+ Projects Available",
      description: "Choose from Bitcoin, DeFi, and Impact projects"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "DAO Support",
      description: "Get technical resources, marketing, and community backing"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Long-term Partnership",
      description: "Build your Web3 career with ongoing opportunities"
    }
  ];

  return (
    <section id="developers" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Code className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Developer Partnerships</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
            </Button>
          </div>
          {isExpanded && (
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Partner with CryptoSI DAO to build innovative dApps and earn sustainable revenue. 
              We provide the resources, community, and support you need to succeed.
            </p>
          )}
        </div>
        
        {isExpanded && (
          <>
            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {highlights.map((highlight, index) => (
                <AnimatedFadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                  <Card className="text-center h-full border-primary/20 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {highlight.icon}
                      </div>
                      <h3 className="font-bold text-lg">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
            
            {/* Call to Action */}
            <AnimatedSection delay={0.7}>
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 mt-12">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">Ready to Build With Us?</CardTitle>
                  <CardDescription className="text-lg">
                    Join our ecosystem of developers creating the future of DeFi
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="group" asChild>
                      <Link href="/developers">
                        Explore Opportunities
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/ideas">
                        <Code className="mr-2 h-4 w-4" />
                        View Projects
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="px-3 py-1">
                      Open to All Developers
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      Smart Contract Protected
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      Community Driven
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            {/* Quick Stats */}
            <AnimatedSection delay={0.8}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Revenue Share</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Partnership Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">On-chain</div>
                </div>
              </div>
            </AnimatedSection>
          </>
        )}
      </div>
    </section>
  );
}