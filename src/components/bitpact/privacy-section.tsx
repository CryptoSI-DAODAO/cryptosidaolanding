"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "./shared/animated-section";
import { 
  Shield, 
  Eye, 
  Lock, 
  Globe,
  EyeOff,
  Key,
  Users,
  CheckCircle
} from "lucide-react";

export function BitpactPrivacySection() {
  const privacyFeatures = [
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: "Stealth Reviews",
      description: "Review hashes only, revealed on dispute.",
      details: "Privacy-preserving reputation system",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      status: "planned"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Tor Routing",
      description: "Full darknet access for complete privacy.",
      details: "Anonymous browsing and trading",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      status: "planned"
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "zkReputation",
      description: "Prove you've done 100+ trades without revealing the details.",
      details: "Zero-knowledge proof system",
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      status: "phase-2"
    }
  ];

  const privacyLevels = [
    {
      level: "Basic Privacy",
      description: "Current implementation",
      features: [
        "Pseudonymous trading with public keys",
        "On-chain transaction privacy",
        "Optional profile information"
      ],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      level: "Enhanced Privacy",
      description: "Near-term improvements",
      features: [
        "Stealth review system",
        "Tor network integration",
        "Encrypted communication channels"
      ],
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      level: "Advanced Privacy",
      description: "Phase 2 implementation",
      features: [
        "Zero-knowledge reputation proofs",
        "Private arbitration evidence",
        "Confidential trade amounts"
      ],
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    }
  ];

  const privacyPrinciples = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Privacy by Design",
      description: "Privacy features built into the core protocol, not added as an afterthought"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "User Control",
      description: "Users choose their privacy level and what information to share"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Cryptographic Security",
      description: "Advanced cryptography ensures data integrity and confidentiality"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Privacy Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {privacyFeatures.map((feature, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card className={`h-full border-2 ${feature.color} hover:shadow-lg transition-all duration-300`}>
              <CardHeader className="text-center">
                <div className={`mx-auto w-16 h-16 rounded-full ${feature.color.split(' ')[0]} ${feature.color.split(' ')[1]} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <div className="flex justify-center">
                  <Badge variant={feature.status === 'planned' ? 'secondary' : 'outline'}>
                    {feature.status === 'planned' ? 'Planned' : 'Phase 2'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
                <div className="text-sm text-muted-foreground italic">
                  {feature.details}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      {/* Privacy Levels */}
      <AnimatedSection delay={0.3}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Privacy Levels</CardTitle>
            <CardDescription className="text-lg">
              Progressive privacy enhancements for different user needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {privacyLevels.map((level, index) => (
                <Card key={index} className={`border-2 ${level.color}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{level.level}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {level.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      {/* Privacy Principles */}
      <AnimatedSection delay={0.5}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Privacy Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {privacyPrinciples.map((principle, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {principle.icon}
                  </div>
                  <h4 className="font-semibold">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Privacy vs Transparency Balance</h4>
              <p className="text-muted-foreground mb-4">
                BitPact strikes a careful balance between privacy and transparency. While trade details
                and reputation records are immutable for accountability, users can choose their privacy
                level and control what information is publicly visible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span>Transparent: Trade outcomes, arbitration decisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-green-500" />
                  <span>Private: Personal details, trade amounts (optional)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}