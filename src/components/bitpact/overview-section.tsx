"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedStagger, AnimatedFadeIn } from "./shared/animated-section";
import { Shield, Users, FileText, Bitcoin } from "lucide-react";

export function BitpactOverviewSection() {
  const features = [
    {
      icon: <Bitcoin className="w-6 h-6" />,
      title: "Bitcoin Native",
      description: "Built exclusively for Bitcoin with no wrapped assets or altcoins",
      color: "text-orange-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Multisig Protected",
      description: "Non-custodial 2-of-3 multisig using PSBT-compatible wallets",
      color: "text-blue-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Bonded Arbiters",
      description: "Vetted arbiters financially and reputationally committed to fair resolution",
      color: "text-green-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Immutable Reputation",
      description: "Every action permanently recorded on IPFS or Arweave",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className={`mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.5}>
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">The BitPact Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In a world of centralized exchanges and custodial risks, BitPact returns Bitcoin trading to its
              sovereign roots. Every trade is a digital oath between two parties — sealed with Bitcoin,
              observed by a bonded arbiter, and forever etched into the public record.
            </p>
            <div className="mt-6 flex justify-center">
              <Badge className="text-base px-6 py-2 bg-primary/10 text-primary border-primary/20">
                BitPact doesn't need trust — it demands proof
              </Badge>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}