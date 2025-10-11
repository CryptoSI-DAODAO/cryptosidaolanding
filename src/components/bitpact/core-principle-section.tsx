"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "./shared/animated-section";
import { 
  Shield, 
  Users, 
  FileText, 
  Bitcoin,
  Handshake,
  Eye
} from "lucide-react";

export function BitpactCorePrincipleSection() {
  const pactElements = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Digital Oath",
      description: "Every trade is a sacred digital oath between two sovereign parties",
      color: "text-blue-500"
    },
    {
      icon: <Bitcoin className="w-8 h-8" />,
      title: "Sealed with Bitcoin",
      description: "Cryptographically secured by the world's most robust blockchain",
      color: "text-orange-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Observed by Arbiter",
      description: "Bonded arbiters witness and enforce the terms of each pact",
      color: "text-green-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Etched in Public Record",
      description: "Permanently recorded and accessible for all time",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pactElements.map((element, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <div className="text-center space-y-3">
              <div className={`mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 ${element.color}`}>
                {element.icon}
              </div>
              <h3 className="font-semibold text-lg">{element.title}</h3>
              <p className="text-sm text-muted-foreground">{element.description}</p>
            </div>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.5}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 shadow-xl">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/20">
                <Shield className="w-12 h-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl text-primary mb-4">The Pact System</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              Sealed with Bitcoin, observed by a bonded arbiter, and forever etched into the public record.
              BitPact doesn't need trust — it demands proof.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <AnimatedFadeIn delay={0.2} className="pt-6">
              <div className="bg-background/50 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold text-primary mb-4">The Philosophy</h4>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  In traditional systems, trust is placed in intermediaries. In BitPact, trust is replaced with
                  cryptographic proof. Every participant's actions are verifiable, every decision is transparent,
                  and every outcome is permanent. This is not just trading — this is the future of sovereign commerce.
                </p>
                <div className="mt-6 flex justify-center">
                  <Badge className="text-base px-6 py-2 bg-primary/10 text-primary border-primary/20">
                    Trustless by Design, Trustworthy by Construction
                  </Badge>
                </div>
              </div>
            </AnimatedFadeIn>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      <AnimatedSection delay={0.7}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">0%</CardTitle>
              <CardDescription>Counterparty Risk</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Multisig protection eliminates the need to trust your counterparty
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">100%</CardTitle>
              <CardDescription>Transparency</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every action, decision, and outcome is publicly verifiable
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">∞</CardTitle>
              <CardDescription>Immutability</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Permanent records stored on decentralized storage networks
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
}