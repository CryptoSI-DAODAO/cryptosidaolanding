"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../bitpact/shared/animated-section";
import { DemoWizard } from "../bitpact/shared/demo-wizard";
import { 
  User, 
  TrendingUp, 
  Shield, 
  DollarSign,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Eye
} from "lucide-react";

export function MirrorVaultDemoSection() {
  const demoSteps = [
    {
      id: 1,
      title: "Discover Managers",
      description: "Browse and analyze verified trading managers with their Aegis Scores",
      icon: <User className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Manager Discovery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div className="p-3 bg-background rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">JD</span>
                      </div>
                      <div>
                        <div className="font-semibold">John Doe</div>
                        <div className="text-xs text-muted-foreground">Elite Manager</div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-400 to-pink-400">
                      Aegis: 850
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-green-500 font-semibold">+24.5%</div>
                      <div className="text-muted-foreground">30d Return</div>
                    </div>
                    <div>
                      <div className="text-blue-500 font-semibold">$2.5M</div>
                      <div className="text-muted-foreground">TVL</div>
                    </div>
                    <div>
                      <div className="text-purple-500 font-semibold">1.2x</div>
                      <div className="text-muted-foreground">Avg Leverage</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-background rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">AS</span>
                      </div>
                      <div>
                        <div className="font-semibold">Alice Smith</div>
                        <div className="text-xs text-muted-foreground">Expert Manager</div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-400 to-cyan-400">
                      Aegis: 750
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-green-500 font-semibold">+18.2%</div>
                      <div className="text-muted-foreground">30d Return</div>
                    </div>
                    <div>
                      <div className="text-blue-500 font-semibold">$1.8M</div>
                      <div className="text-muted-foreground">TVL</div>
                    </div>
                    <div>
                      <div className="text-purple-500 font-semibold">2.1x</div>
                      <div className="text-muted-foreground">Avg Leverage</div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full">View All Managers</Button>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            Filter managers by Aegis Score, performance metrics, risk profile, and trading strategy.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Deposit to Vault",
      description: "Deposit ETH or USDC into your chosen manager's vault",
      icon: <DollarSign className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Deposit to Vault</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-background rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Selected Manager</span>
                  <Badge>John Doe - Elite</Badge>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Asset</label>
                    <div className="flex gap-2 mt-1">
                      <Button variant="outline" size="sm" className="flex-1">ETH</Button>
                      <Button variant="outline" size="sm" className="flex-1">USDC</Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Amount</label>
                    <div className="p-2 bg-background border rounded mt-1">
                      1.0 ETH
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-800">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Performance Fee: 20%</span>
                    </div>
                  </div>
                  <Button className="w-full">Approve & Deposit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            Your funds are securely held in an ERC-4626 vault with full transparency.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Auto-Mirror Trades",
      description: "Manager's trades are automatically mirrored in your portfolio",
      icon: <TrendingUp className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Live Trade Mirroring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div className="p-3 bg-background rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">Long ETH/USD</span>
                    <Badge variant="secondary">2 minutes ago</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Size: </span>
                      <span className="font-medium">10 ETH</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Leverage: </span>
                      <span className="font-medium">3x</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Entry: </span>
                      <span className="font-medium">$2,450</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Status: </span>
                      <span className="text-green-500 font-medium">Active</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-2 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Trade mirrored successfully in your portfolio</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-background rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Your Position</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Your Share: </span>
                    <span className="font-medium">0.05 ETH</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">P&L: </span>
                    <span className="text-green-500 font-medium">+$12.50</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            All trades are executed automatically with the same proportional allocation.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Track Performance",
      description: "Monitor your portfolio performance and manager's Aegis Score",
      icon: <BarChart3 className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Performance Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-background rounded-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">+15.8%</div>
                    <div className="text-xs text-muted-foreground">Your Return</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">850</div>
                    <div className="text-xs text-muted-foreground">Aegis Score</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total Value Locked</span>
                    <span className="font-medium">1.158 ETH</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Manager Performance</span>
                    <span className="font-medium text-green-500">+18.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Time in Vault</span>
                    <span className="font-medium">14 days</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 text-blue-800">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Next fee crystallization in 16 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            Track real-time performance metrics and historical data.
          </p>
        </div>
      )
    },
    {
      id: 5,
      title: "Withdraw Anytime",
      description: "Withdraw your funds at any time with instant settlement",
      icon: <Shield className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Withdraw Funds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-background rounded-lg">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Available Balance</span>
                    <span className="font-semibold">1.158 ETH</span>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Withdraw Amount</label>
                    <div className="p-2 bg-background border rounded mt-1">
                      1.158 ETH
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs p-3 bg-muted rounded">
                    <div>
                      <span className="text-muted-foreground">Principal: </span>
                      <span className="font-medium">1.000 ETH</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Earnings: </span>
                      <span className="font-medium text-green-500">0.158 ETH</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">Withdraw All</Button>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">No withdrawal fees or lock periods</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            Maintain full control of your funds with instant withdrawals.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-12">
      <AnimatedSection delay={0.1}>
        <div className="max-w-4xl mx-auto">
          <DemoWizard steps={demoSteps} />
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Demo Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold">Transparent Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  See exactly how your funds are being traded in real-time
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold">Non-custodial</h4>
                <p className="text-sm text-muted-foreground">
                  Your funds never leave the smart contract vault
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="font-semibold">Performance Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive metrics and Aegis Score tracking
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      <AnimatedSection delay={0.3}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Zero Trust Required</h4>
                    <p className="text-sm text-muted-foreground">
                      Everything is verifiable on-chain with smart contracts
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Instant Withdrawals</h4>
                    <p className="text-sm text-muted-foreground">
                      No lock periods or withdrawal restrictions
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Performance-Based Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      Managers only earn when they generate profits
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Community Protection</h4>
                    <p className="text-sm text-muted-foreground">
                      Cool-Off period with community veto power
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}