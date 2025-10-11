"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { 
  Code, 
  Layout, 
  Database, 
  Zap, 
  Shield, 
  Monitor,
  Braces,
  Cpu,
  Globe
} from "lucide-react";

export function MirrorVaultTechnicalStackSection() {
  const techStack = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Smart Contracts",
      description: "Secure, audited smart contracts built with industry standards",
      technologies: ["Solidity", "Foundry", "Hardhat", "OpenZeppelin"],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      details: "ERC-4626 compliant vaults with comprehensive security measures"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Frontend",
      description: "Modern, responsive web application with seamless UX",
      technologies: ["Next.js", "wagmi/viem", "RainbowKit", "TypeScript"],
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      details: "DeFi-native interface with real-time vault metrics and portfolio tracking"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Indexing & Analytics",
      description: "High-performance data indexing for comprehensive analytics",
      technologies: ["The Graph", "Subsquid", "PostgreSQL", "Redis"],
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      details: "Real-time vault performance tracking and Aegis score calculations"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation",
      description: "Reliable automation for protocol operations and maintenance",
      technologies: ["Chainlink Keepers", "Gelato Network", "Cron Jobs"],
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      details: "Weekly fee crystallization and stop-loss enforcement"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Monitoring",
      description: "Comprehensive monitoring and alerting system",
      technologies: ["Tenderly", "Sentry", "Grafana", "Prometheus"],
      color: "bg-red-500/10 text-red-500 border-red-500/20",
      details: "Live contract health monitoring and anomaly detection"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Testing",
      description: "Rigorous security practices and comprehensive testing",
      technologies: ["Slither", "Echidna", "Fuzzing", "Formal Verification"],
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
      details: "Multiple security audits and continuous vulnerability scanning"
    }
  ];

  const architectureHighlights = [
    {
      icon: <Braces className="w-5 h-5" />,
      title: "Modular Design",
      description: "Clean separation of concerns with upgradeable components"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Gas Optimized",
      description: "Efficient contract design to minimize transaction costs"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Cross-Chain Ready",
      description: "Unified architecture supporting multiple EVM chains"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security First",
      description: "Built-in security measures and best practices"
    }
  ];

  return (
    <div className="space-y-12">
      <AnimatedSection delay={0.1}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Technical Architecture</CardTitle>
            <CardDescription className="text-lg">
              Built with industry-leading tools and technologies for maximum security and performance
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              MirrorVault leverages cutting-edge DeFi infrastructure and battle-tested technologies 
              to deliver a secure, scalable, and user-friendly copy trading experience.
            </p>
          </CardContent>
        </Card>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((tech, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${tech.color}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${tech.color.split(' ')[0]} ${tech.color.split(' ')[1]}`}>
                    {tech.icon}
                  </div>
                  <CardTitle className="text-lg">{tech.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-sm">
                  {tech.description}
                </CardDescription>
                <div className="text-xs text-muted-foreground italic">
                  {tech.details}
                </div>
                <div className="flex flex-wrap gap-1 pt-2">
                  {tech.technologies.map((techName, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {techName}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedSection delay={0.8}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Architecture Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {architectureHighlights.map((highlight, index) => (
                <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {highlight.icon}
                      </div>
                      <CardTitle className="text-lg">{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection delay={1.0}>
        <Card className="bg-gradient-to-br from-muted/50 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Development Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Code className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="font-semibold">Development</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Test-driven development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Comprehensive unit tests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Integration testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Gas optimization analysis</span>
                    </li>
                  </ul>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-semibold">Security</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Static analysis (Slither)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Fuzz testing (Echidna)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Third-party audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Bug bounty program</span>
                    </li>
                  </ul>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-purple-500" />
                  </div>
                  <h4 className="font-semibold">Deployment</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Multi-stage deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Timelock controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Gradual parameter changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Emergency pause mechanisms</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-background/50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Technology Partners</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center space-y-2">
                  <Badge variant="outline" className="w-full justify-center py-2">
                    Chainlink
                  </Badge>
                  <div className="text-xs text-muted-foreground">Price Feeds</div>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="outline" className="w-full justify-center py-2">
                    The Graph
                  </Badge>
                  <div className="text-xs text-muted-foreground">Data Indexing</div>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="outline" className="w-full justify-center py-2">
                    Gelato
                  </Badge>
                  <div className="text-xs text-muted-foreground">Automation</div>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="outline" className="w-full justify-center py-2">
                    OpenZeppelin
                  </Badge>
                  <div className="text-xs text-muted-foreground">Security Library</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}