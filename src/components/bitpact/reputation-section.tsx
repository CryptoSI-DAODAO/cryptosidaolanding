"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn, AnimatedStagger } from "./shared/animated-section";
import { 
  FileText, 
  Star, 
  Users, 
  Shield,
  Database,
  Key,
  Clock,
  CheckCircle
} from "lucide-react";

export function BitpactReputationSection() {
  const reputationFeatures = [
    {
      icon: <Key className="w-6 h-6" />,
      title: "Public Key Linked",
      description: "Every reputation entry is cryptographically linked to a public key or alias.",
      color: "text-blue-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Decentralized Storage",
      description: "Stored off-chain in decentralized storage and linked to public keys.",
      color: "text-green-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cryptographically Signed",
      description: "All reviews are signed by the reviewing party's private key.",
      color: "text-purple-500"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Verified Experience",
      description: "\"Verified Pact Level\" based on experience milestones.",
      color: "text-orange-500"
    }
  ];

  const reputationEntry = {
    "trade_id": "btc-trade-001234",
    "counterparty_pubkey": "bc1qabc...",
    "role": "buyer",
    "rating": 5,
    "comment": "Smooth trade, fast payment.",
    "timestamp": 1696148200,
    "dispute": false,
    "arbiter_pubkey": "arb1qxyz...",
    "report_hash": "arweave://XYZ123",
    "signature": "0xabc..."
  };

  const profileMetrics = [
    { label: "Total Trades", value: "156", icon: <Users className="w-4 h-4" /> },
    { label: "Dispute History", value: "2", icon: <CheckCircle className="w-4 h-4" /> },
    { label: "Average Rating", value: "4.9/5", icon: <Star className="w-4 h-4" /> },
    { label: "Pact Level", value: "Gold", icon: <Shield className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reputationFeatures.map((feature, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card className="h-full hover:shadow-lg transition-all duration-300">
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
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Reputation Data Structure</CardTitle>
            <CardDescription className="text-lg">
              Every reputation entry follows this standardized, verifiable format
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-background/80 rounded-lg p-6 font-mono text-sm">
              <pre className="text-muted-foreground overflow-x-auto">
{`{
  "trade_id": "${reputationEntry.trade_id}",
  "counterparty_pubkey": "${reputationEntry.counterparty_pubkey}",
  "role": "${reputationEntry.role}",
  "rating": ${reputationEntry.rating},
  "comment": "${reputationEntry.comment}",
  "timestamp": ${reputationEntry.timestamp},
  "dispute": ${reputationEntry.dispute},
  "arbiter_pubkey": "${reputationEntry.arbiter_pubkey}",
  "report_hash": "${reputationEntry.report_hash}",
  "signature": "${reputationEntry.signature}"
}`}
              </pre>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Key className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Signed by the reviewing party's private key</span>
              </div>
              <div className="flex items-start gap-2">
                <Database className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Hash-stamped into IPFS and optionally backed to Arweave</span>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Associated with their BitPact alias (or anonymous if privacy enabled)</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Immutable timestamp for chronological ordering</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      <AnimatedSection delay={0.7}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Public Reputation Profiles</CardTitle>
            <CardDescription>
              Every trader's complete history is publicly accessible and verifiable
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {profileMetrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Profile Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Total trades and success rate</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Complete dispute history and outcomes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Peer ratings and detailed reviews</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Links to all arbitration reports</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}