"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection, AnimatedStagger, AnimatedFadeIn } from "./shared/animated-section";
import { Target, Users, Shield, CheckCircle } from "lucide-react";

export function BitpactGoalsSection() {
  const goals = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Restore Sovereign Trade",
      description: "Enable Bitcoiners to transact globally without relying on centralized exchanges or custodians.",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Establish Bonded Arbitration",
      description: "Create a network of vetted arbiters who are financially and reputationally committed to fair resolution.",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Build Immutable Reputation",
      description: "Tie every action — rating, ruling, review — to permanent, transparent records stored on IPFS or Arweave.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Eliminate Trust Through Proof",
      description: "Every release, dispute, and judgment is cryptographically signed and verifiable.",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {goals.map((goal, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.15} direction="up">
            <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${goal.color}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${goal.color.split(' ')[0]} ${goal.color.split(' ')[1]}`}>
                    {goal.icon}
                  </div>
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {goal.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.7}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">The Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground">
                We envision a world where Bitcoin users can trade with complete sovereignty,
                where reputation is immutable, and where disputes are resolved fairly through
                cryptographic proof rather than blind trust.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0%</div>
                  <div className="text-sm text-muted-foreground">Custodial Risk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Transparency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Immutability</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}