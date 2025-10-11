"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedStagger, AnimatedFadeIn } from "./shared/animated-section";
import {
  Bitcoin,
  Shield,
  Users,
  FileText,
  Globe,
  Database,
  Lock,
  Network
} from "lucide-react";

export function BitpactSpecificationsSection() {
  const specifications = [
    {
      icon: <Bitcoin className="w-6 h-6" />,
      title: "Chain",
      description: "Bitcoin-native; no wrapped assets, no altcoins.",
      details: "Pure Bitcoin protocol maintaining the ethos of decentralization",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Escrow",
      description: "Non-custodial 2-of-3 multisig using PSBT-compatible wallets.",
      details: "Secure, non-custodial escrow with industry-standard PSBT support",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Arbiters",
      description: "Bonded with BTC, always paid a share of fees, and held accountable through public Arweave reports.",
      details: "Financially incentivized arbiters with transparent accountability",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Reputation",
      description: "Signed reviews stored immutably, linked to public keys, and browsable on decentralized profiles.",
      details: "Cryptographically signed, permanent reputation records",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Storage",
      description: "Hybrid system — IPFS for active review logs, Arweave for final judgments.",
      details: "Optimized storage strategy balancing accessibility and permanence",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Interface",
      description: "Frontend dApp hosted on IPFS; backends peer-coordinated or optionally mirrored via Tor.",
      details: "Fully decentralized frontend with optional privacy routing",
      color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
    }
  ];

  const technicalHighlights = [
    { label: "Protocol", value: "Bitcoin Native", icon: <Bitcoin className="w-4 h-4" /> },
    { label: "Security", value: "2-of-3 Multisig", icon: <Lock className="w-4 h-4" /> },
    { label: "Network", value: "Decentralized", icon: <Network className="w-4 h-4" /> },
    { label: "Storage", value: "IPFS + Arweave", icon: <Database className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specifications.map((spec, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${spec.color}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${spec.color.split(' ')[0]} ${spec.color.split(' ')[1]}`}>
                    {spec.icon}
                  </div>
                  <CardTitle className="text-lg">{spec.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-base">
                  {spec.description}
                </CardDescription>
                <div className="text-sm text-muted-foreground italic">
                  {spec.details}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.7}>
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Technical Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technicalHighlights.map((highlight, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    {highlight.icon}
                    <Badge variant="secondary" className="text-xs">
                      {highlight.label}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium">{highlight.value}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-background/50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Key Technical Principles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>No centralized points of failure</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Cryptographic proof for all actions</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Permissionless participation</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Transparent and auditable</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}