"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedFadeIn } from "@/components/bitpact/shared/animated-section";
import { 
  Lightbulb, 
  ArrowRight, 
  Clock, 
  Users,
  TrendingUp,
  DollarSign,
  Code,
  Star
} from "lucide-react";
import Link from "next/link";

export function DeveloperOpportunitiesSection() {
  const opportunities = [
    {
      title: "🪙 BitPact",
      description: "Decentralized P2P Bitcoin protocol with multisig enforcement and bonded arbiters",
      category: "Bitcoin",
      status: "Development",
      difficulty: "Advanced",
      estimatedTime: "4-6 months",
      revenuePotential: "High",
      skills: ["Bitcoin", "Smart Contracts", "Multisig", "Arbitration"],
      icon: <Lightbulb className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      link: "/ideas/bitpact",
      partnershipModel: "Treasury Share Partnership"
    },
    {
      title: "MirrorVault",
      description: "Decentralized copy-trading protocol with Aegis Score reputation system",
      category: "DeFi",
      status: "Development",
      difficulty: "Advanced",
      estimatedTime: "3-5 months",
      revenuePotential: "High",
      skills: ["Ethereum", "DeFi", "Trading", "Smart Contracts"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      link: "/ideas/mirrorvault",
      partnershipModel: "Standalone Partnership"
    },
    {
      title: "KIN Protocol",
      description: "Undercollateralized lending platform with vouch staking and NFT-backed loans",
      category: "DeFi",
      status: "Research",
      difficulty: "Expert",
      estimatedTime: "6-8 months",
      revenuePotential: "Very High",
      skills: ["Lending", "Risk Management", "NFTs", "Smart Contracts"],
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      link: "/ideas/kin-protocol",
      partnershipModel: "Standalone Partnership"
    },
    {
      title: "Hedera Bus-FI",
      description: "Crowdfunding platform for African bus networks with NFT investment certificates",
      category: "Impact",
      status: "Planning",
      difficulty: "Intermediate",
      estimatedTime: "2-4 months",
      revenuePotential: "Medium",
      skills: ["Hedera", "NFTs", "Crowdfunding", "Mobile"],
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      link: "/ideas/bus-fi",
      partnershipModel: "Standalone Partnership"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Development": return "bg-blue-500/10 text-blue-500";
      case "Research": return "bg-yellow-500/10 text-yellow-500";
      case "Planning": return "bg-green-500/10 text-green-500";
      default: return "bg-gray-500/10 text-gray-500";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Intermediate": return "bg-green-500/10 text-green-500";
      case "Advanced": return "bg-yellow-500/10 text-yellow-500";
      case "Expert": return "bg-red-500/10 text-red-500";
      default: return "bg-gray-500/10 text-gray-500";
    }
  };

  const getRevenueColor = (potential: string) => {
    switch (potential) {
      case "Medium": return "bg-blue-500/10 text-blue-500";
      case "High": return "bg-green-500/10 text-green-500";
      case "Very High": return "bg-purple-500/10 text-purple-500";
      default: return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <section id="opportunities" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedFadeIn delay={0.1}>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Current Opportunities</h2>
          </AnimatedFadeIn>
          <AnimatedFadeIn delay={0.2}>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us in building these innovative projects and earn revenue share
            </p>
          </AnimatedFadeIn>
        </div>
        
        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <AnimatedFadeIn key={index} delay={0.3 + index * 0.1} direction="up">
              <Card className={`h-full border-2 ${opportunity.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${opportunity.color.split(' ')[0]} ${opportunity.color.split(' ')[1]}`}>
                        {opportunity.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {opportunity.category}
                          </Badge>
                          <Badge className={`text-xs ${getStatusColor(opportunity.status)}`}>
                            {opportunity.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {opportunity.description}
                  </CardDescription>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Timeline</span>
                      </div>
                      <div className="text-sm font-medium">{opportunity.estimatedTime}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Revenue</span>
                      </div>
                      <Badge className={`text-xs ${getRevenueColor(opportunity.revenuePotential)}`}>
                        {opportunity.revenuePotential}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Required Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {opportunity.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Partnership Model */}
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Partnership Model</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{opportunity.partnershipModel}</div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={opportunity.link}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Learn More
                      </Link>
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link href="#application">
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedFadeIn>
          ))}
        </div>
        
        {/* Additional Info */}
        <AnimatedSection delay={0.7}>
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Why These Projects?</CardTitle>
              <CardDescription className="text-lg">
                Each opportunity is carefully selected for its potential impact and revenue generation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">Market Demand</h4>
                  <p className="text-sm text-muted-foreground">
                    Projects address real market needs with clear user bases
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">Revenue Potential</h4>
                  <p className="text-sm text-muted-foreground">
                    Sustainable business models with clear revenue streams
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">Community Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Strong DAO backing and community engagement
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}