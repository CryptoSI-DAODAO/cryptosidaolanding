"use client";

import { AnimatedFadeIn, AnimatedStagger } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Shield, 
  FileText, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  GitBranch
} from "lucide-react";

const contracts = [
  {
    number: "1",
    name: "Kin Protocol",
    icon: <Code className="w-6 h-6" />,
    description: "The main smart contract that orchestrates the entire lending ecosystem.",
    responsibilities: [
      "Creates loan contracts with borrower requirements",
      "Gathers borrower information from credit bureau",
      "Manages loan lifecycle coordination",
      "Enforces protocol rules and parameters"
    ],
    interactions: ["Credit_Bureau", "Loan Contracts", "Collateral Contract"],
    complexity: "High"
  },
  {
    number: "2",
    name: "Loan Contracts",
    icon: <FileText className="w-6 h-6" />,
    description: "Dynamic contracts created by Kin Protocol that progress through three distinct phases.",
    responsibilities: [
      "Phase 1: Voucher applications and lender funding",
      "Phase 2: Repayment monitoring and slashing execution",
      "Phase 3: Completion processing and collateral return",
      "NFT minting for loan representation"
    ],
    interactions: ["Kin Protocol", "Collateral Contract", "Credit_Bureau"],
    complexity: "Medium"
  },
  {
    number: "3",
    name: "Collateral Contract",
    icon: <Shield className="w-6 h-6" />,
    description: "Secure vault for voucher staked collateral with strict access controls.",
    responsibilities: [
      "Holds voucher staked collateral",
      "Only releases funds to loan contracts",
      "Enforces 1-month hold period for defaults",
      "Manages ETH staking and rewards"
    ],
    interactions: ["Loan Contracts", "Rep_Endowment"],
    complexity: "Medium"
  },
  {
    number: "4",
    name: "Credit_Bureau",
    icon: <Database className="w-6 h-6" />,
    description: "Maintains comprehensive credit reports and scoring for all participants.",
    responsibilities: [
      "Tracks payment history and repayment behavior",
      "Calculates KRS scores (F to A grading)",
      "Integrates third-party data (Galxe, Civic, Ontology)",
      "Updates scores based on loan performance"
    ],
    interactions: ["Kin Protocol", "Loan Contracts", "Credit_Bureau_Ledger"],
    complexity: "High"
  },
  {
    number: "5",
    name: "Rep_Endowment",
    icon: <Award className="w-6 h-6" />,
    description: "Permanent reputation vault representing a voucher's established trust.",
    responsibilities: [
      "Holds ETH in permanent staking contract",
      "Generates sustainable yields forever",
      "Maintains health score (51-100 range)",
      "Allows 50% utilization for new loans"
    ],
    interactions: ["Collateral Contract", "Rep_Endowment_Ledger", "Loan Contracts"],
    complexity: "Medium"
  },
  {
    number: "6",
    name: "Credit_Bureau_Ledger",
    icon: <GitBranch className="w-6 h-6" />,
    description: "Simple mapping contract linking addresses to their credit bureau contracts.",
    responsibilities: [
      "Maps borrower addresses to Credit_Bureau contracts",
      "Ensures one credit score per address",
      "Provides lookup functionality",
      "Maintains address-to-score relationship"
    ],
    interactions: ["Credit_Bureau"],
    complexity: "Low"
  },
  {
    number: "7",
    name: "Rep_Endowment_Ledger",
    icon: <Users className="w-6 h-6" />,
    description: "Mapping contract linking voucher addresses to their reputation endowments.",
    responsibilities: [
      "Maps voucher addresses to Rep_Endowment contracts",
      "Prevents duplicate endowment contracts",
      "Provides voucher lookup functionality",
      "Maintains voucher-to-endowment relationship"
    ],
    interactions: ["Rep_Endowment"],
    complexity: "Low"
  }
];

const contractInteractions = [
  {
    from: "Kin Protocol",
    to: "Credit_Bureau",
    description: "Fetches borrower credit data and KRS scores"
  },
  {
    from: "Kin Protocol", 
    to: "Loan Contracts",
    description: "Creates and manages individual loan instances"
  },
  {
    from: "Loan Contracts",
    to: "Collateral Contract",
    description: "Manages voucher collateral and slashing"
  },
  {
    from: "Loan Contracts",
    to: "Credit_Bureau",
    description: "Reports payment history and loan outcomes"
  },
  {
    from: "Vouchers",
    to: "Rep_Endowment",
    description: "Builds permanent reputation capital"
  },
  {
    from: "Rep_Endowment",
    to: "Loan Contracts",
    description: "Provides collateral backing (50% utilization)"
  }
];

export function KinProtocolSmartContractsSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            The Magnificent 7: Core Smart Contracts
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            KIN Protocol is powered by seven carefully designed smart contracts that work together 
            to create a secure, efficient, and transparent undercollateralized lending ecosystem. 
            Each contract has a specific role and optimized interactions with the others.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {contracts.map((contract, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className={`relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full ${contract.complexity === 'High' ? 'ring-2 ring-primary/20' : ''}`}>
              <div className="absolute top-3 right-3">
                <Badge variant={contract.complexity === 'High' ? 'default' : contract.complexity === 'Medium' ? 'secondary' : 'outline'} className="text-xs">
                  {contract.complexity}
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span className="font-bold text-sm">{contract.number}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-primary/10 rounded text-primary">
                      {contract.icon}
                    </div>
                    <CardTitle className="text-lg">{contract.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {contract.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Key Responsibilities</h4>
                  <ul className="space-y-1">
                    {contract.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Interacts With</h4>
                  <div className="flex flex-wrap gap-1">
                    {contract.interactions.map((interaction, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {interaction}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedFadeIn delay={0.8}>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center border border-primary/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-background/80 rounded-full">
              <Badge variant="outline" className="mr-2 border-primary/20 text-primary">
                Architecture
              </Badge>
              <span className="text-sm font-medium">Contract Interactions</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              How The Contracts Work Together
            </h3>
            <p className="text-lg text-muted-foreground">
              The seven contracts form an interconnected ecosystem where each component 
              communicates through standardized interfaces, ensuring security, efficiency, 
              and maintainability of the entire protocol.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-6">
              {contractInteractions.map((interaction, index) => (
                <div key={index} className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="font-medium text-primary">{interaction.from}</span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    <span className="font-medium text-primary">{interaction.to}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{interaction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Security Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    title: "Access Control",
                    description: "Strict role-based permissions prevent unauthorized actions"
                  },
                  {
                    title: "Fail-Safe Mechanisms",
                    description: "Emergency controls for trapped funds via DAO governance"
                  },
                  {
                    title: "Time-locked Operations",
                    description: "Critical actions require waiting periods for security"
                  },
                  {
                    title: "Audit Trail",
                    description: "All actions logged for transparency and accountability"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technical Specifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    title: "Gas Optimization",
                    description: "Efficient contract design minimizes transaction costs"
                  },
                  {
                    title: "Upgradeability",
                    description: "Proxy patterns allow for future improvements"
                  },
                  {
                    title: "Composability",
                    description: "Standard interfaces enable DeFi integration"
                  },
                  {
                    title: "Scalability",
                    description: "Designed for high throughput and growth"
                  }
                ].map((spec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">{spec.title}</h4>
                      <p className="text-xs text-muted-foreground">{spec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.2}>
        <Card className="border-primary/20 bg-muted/30">
          <CardHeader className="text-center">
            <CardTitle>Special Mechanisms</CardTitle>
            <CardDescription className="text-base">
              Unique features that ensure protocol safety and longevity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">6-Year Forfeit Rule</h4>
                <p className="text-sm text-muted-foreground">
                  Any remaining funds in a loan contract for 6 years are automatically forfeited 
                  and sent to the CryptoSI DAO treasury, preventing capital from being trapped indefinitely.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">DAO Intervention</h4>
                <p className="text-sm text-muted-foreground">
                  CryptoSI DAO has a mechanism to flush any loan contract as a failsafe through 
                  community voting, providing a safety net for exceptional circumstances.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}