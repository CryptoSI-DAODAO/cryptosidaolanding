"use client";

import { useState } from "react";
import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { DemoWizard } from "../bitpact/shared/demo-wizard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bus, 
  Users, 
  DollarSign, 
  Star, 
  TrendingUp,
  Shield,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const demoSteps = [
  {
    id: 1,
    title: "Project Discovery",
    description: "Discover and evaluate bus funding opportunities",
    icon: <Bus className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-2">Browse Available Projects</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Explore a curated list of bus operators seeking funding, complete with detailed profiles, 
            reputation scores, and financial projections.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Operator reputation and track record</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Route analysis and market potential</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Financial projections and ROI estimates</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-yellow-600" />
            <span className="font-medium text-sm">Demo Project: Nairobi Route 47 Express</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Operator: Joseph Mwangi | Reputation: Gold (76/100) | Funding Goal: $25,000
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Investment & NFT Minting",
    description: "Fund your chosen project and receive NFT certificates",
    icon: <DollarSign className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-2">Choose Your Investment</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Select your investment amount and mint your Bus-Fi NFT, which represents your fractional 
            ownership and entitlement to future dividends.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded border">
              <div className="text-lg font-bold text-green-600">$500</div>
              <div className="text-xs text-muted-foreground">2% Share</div>
            </div>
            <div className="p-3 bg-white rounded border">
              <div className="text-lg font-bold text-green-600">$1,000</div>
              <div className="text-xs text-muted-foreground">4% Share</div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            NFT Benefits
          </h4>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-xs">Proof of ownership on Hedera blockchain</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-xs">20-30% dividend during repayment phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-xs">10-15% perpetual dividend after repayment</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Track Performance",
    description: "Monitor your investment and bus operations in real-time",
    icon: <TrendingUp className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-2">Real-Time Dashboard</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Track your investment performance, bus operations, and dividend payments through 
            an intuitive dashboard with live data updates.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded border">
              <div className="text-sm font-medium">Daily Revenue</div>
              <div className="text-xl font-bold text-green-600">$450</div>
            </div>
            <div className="p-3 bg-white rounded border">
              <div className="text-sm font-medium">Monthly Profit</div>
              <div className="text-xl font-bold text-green-600">$12,000</div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            Performance Metrics
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs">Current ROI</span>
              <span className="text-xs font-bold text-green-600">+18.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Dividend Received</span>
              <span className="text-xs font-bold text-green-600">$850</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Repayment Progress</span>
              <span className="text-xs font-bold text-green-600">42%</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Receive Dividends",
    description: "Automated dividend distribution to your wallet",
    icon: <Users className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-2">Automated Payouts</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Dividends are automatically calculated and distributed to NFT holders based on 
            their ownership percentage and the current dividend phase.
          </p>
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-yellow-600" />
              <span className="font-medium text-sm">Next Dividend Payment</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Estimated: $125 | Date: October 15, 2025 | Phase: Pre-Repayment (25%)
            </div>
          </div>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-600" />
            Smart Contract Verification
          </h4>
          <div className="text-xs text-muted-foreground">
            All dividend calculations and distributions are handled by transparent, 
            audited smart contracts on the Hedera blockchain, ensuring fair and 
            timely payments to all NFT holders.
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Trade or Hold",
    description: "Sell your NFT on secondary markets or hold for long-term income",
    icon: <ArrowRight className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-2">Liquidity Options</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Choose to hold your NFT for ongoing dividend income or sell it on secondary 
            markets to realize your gains or reallocate your investment.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-green-50 rounded border border-green-200">
              <div className="font-medium text-sm mb-1">Hold Strategy</div>
              <div className="text-xs text-muted-foreground">
                Long-term passive income from bus operations
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded border border-blue-200">
              <div className="font-medium text-sm mb-1">Trade Strategy</div>
              <div className="text-xs text-muted-foreground">
                Capitalize on reputation and performance gains
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-orange-600" />
            <span className="font-medium text-sm">Marketplace Integration</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Integrated with leading NFT marketplaces for seamless trading with 
            transparent pricing and reputation-based valuations.
          </div>
        </div>
      </div>
    )
  }
];

export function BusFiDemoSection() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="space-y-8">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Experience Bus-Fi in Action
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            Take a step-by-step journey through the Bus-Fi investment process. 
            Discover how easy it is to fund real-world transportation infrastructure 
            while earning sustainable returns through blockchain technology.
          </p>
        </div>
      </AnimatedFadeIn>

      {!showDemo ? (
        <AnimatedFadeIn delay={0.2}>
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Bus className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl" style={{ color: "#FFD600" }}>Interactive Demo</CardTitle>
                <CardDescription className="text-lg">
                  Walk through the complete Bus-Fi investment experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {demoSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                        <div className="text-yellow-600">{step.icon}</div>
                      </div>
                      <div className="text-xs font-medium">{step.title}</div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="bg-white">Real Project Data</Badge>
                    <Badge variant="outline" className="bg-white">Live Calculations</Badge>
                    <Badge variant="outline" className="bg-white">NFT Minting</Badge>
                    <Badge variant="outline" className="bg-white">Revenue Tracking</Badge>
                  </div>
                  
                  <Button
                    size="lg"
                    onClick={() => setShowDemo(true)}
                    className="w-full md:w-auto"
                    style={{ backgroundColor: "#FFD600", color: "#212121" }}
                  >
                    Start Interactive Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedFadeIn>
      ) : (
        <AnimatedFadeIn>
          <DemoWizard 
            steps={demoSteps}
            onComplete={() => setShowDemo(false)}
          />
        </AnimatedFadeIn>
      )}

      <AnimatedFadeIn delay={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Risk-Free Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Explore the platform with simulated data and real scenarios without any financial commitment.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Real Calculations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Experience actual dividend calculations, ROI projections, and performance tracking.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Blockchain Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                See how smart contracts and blockchain technology ensure transparency and security.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>
    </div>
  );
}