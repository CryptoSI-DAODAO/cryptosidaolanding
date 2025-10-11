"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "./shared/animated-section";
import { 
  Database, 
  Globe, 
  Shield, 
  Clock,
  Server,
  FileText,
  CheckCircle,
  Infinity
} from "lucide-react";

export function BitpactStorageSection() {
  const storageTypes = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "IPFS",
      subtitle: "Active Log Storage",
      description: "Every user has a log file of trade reviews and reports pinned to IPFS.",
      features: [
        "Log updated with each new review → pushed to user's public rep address",
        "Lightweight, fast access",
        "Distributed content addressing",
        "Version-controlled reputation history"
      ],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      useCase: "Active, frequently accessed data"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Arweave",
      subtitle: "Final Judgment Storage",
      description: "Each arbitration report is stored permanently on Arweave.",
      features: [
        "Report includes: Summary of dispute, Ruling decision, Both parties' positions",
        "Timestamp, Signature from arbiter, Image evidence",
        "Linked to trade ID + included in future rep logs for transparency",
        "One-time payment for permanent storage"
      ],
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      useCase: "Permanent, critical records"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Hidden History",
      description: "No arbiter can hide past judgments. No trader can fake their record."
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "Permanent Memory",
      description: "BitPact remembers everything. Forever."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Decentralized Access",
      description: "No single point of failure or censorship."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Stamped Proof",
      description: "Cryptographic timestamps prove when events occurred."
    }
  ];

  return (
    <section id="storage" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedSection>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
              🧾 Immutable Storage: IPFS + Arweave
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A hybrid storage system optimized for both accessibility and permanence
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {storageTypes.map((storage, index) => (
            <AnimatedFadeIn key={index} delay={0.3 + index * 0.2} direction={index === 0 ? "left" : "right"}>
              <Card className={`h-full border-2 ${storage.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="text-center pb-6">
                  <div className={`mx-auto w-16 h-16 rounded-full ${storage.color.split(' ')[0]} ${storage.color.split(' ')[1]} flex items-center justify-center mb-4`}>
                    {storage.icon}
                  </div>
                  <CardTitle className="text-2xl">{storage.title}</CardTitle>
                  <CardDescription className="text-lg font-medium">
                    {storage.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-base leading-relaxed">
                    {storage.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {storage.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Best for: {storage.useCase}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedFadeIn>
          ))}
        </div>
        
        <AnimatedSection delay={0.8} className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">The Result: Complete Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-background/50 rounded-lg">
                <h4 className="text-lg font-semibold text-primary mb-4">Storage Architecture</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-blue-500">IPFS</div>
                    <div className="text-muted-foreground">Active Logs</div>
                    <div className="text-xs">Fast access, distributed</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-green-500">Arweave</div>
                    <div className="text-muted-foreground">Final Records</div>
                    <div className="text-xs">Permanent, immutable</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-purple-500">Hybrid</div>
                    <div className="text-muted-foreground">Optimized</div>
                    <div className="text-xs">Best of both worlds</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}