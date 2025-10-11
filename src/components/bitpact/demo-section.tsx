"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./shared/animated-section";
import { DemoWizard } from "./shared/demo-wizard";
import { 
  User, 
  Bitcoin, 
  Shield, 
  FileText,
  Users,
  DollarSign,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export function BitpactDemoSection() {
  const demoSteps = [
    {
      id: 1,
      title: "Create Offer",
      description: "Seller creates a trade offer with specific terms",
      icon: <User className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">New Trade Offer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <label className="font-medium">Amount</label>
                  <div className="p-2 bg-background rounded">1 BTC</div>
                </div>
                <div>
                  <label className="font-medium">Price</label>
                  <div className="p-2 bg-background rounded">$27,000</div>
                </div>
                <div>
                  <label className="font-medium">Payment Method</label>
                  <div className="p-2 bg-background rounded">Bank Transfer</div>
                </div>
                <div>
                  <label className="font-medium">Arbiter</label>
                  <div className="p-2 bg-background rounded">Arbiter #001</div>
                </div>
              </div>
              <Button className="w-full">Create Offer</Button>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            The seller specifies the trade amount, price, payment method, and selects a trusted arbiter.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Accept Trade",
      description: "Buyer accepts the offer and locks Bitcoin in multisig",
      icon: <Bitcoin className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Accept Trade Offer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-background rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">2-of-3 Multisig</Badge>
                </div>
                <div className="text-sm space-y-1">
                  <div>✓ Buyer Key: bc1q...</div>
                  <div>✓ Seller Key: bc1q...</div>
                  <div>✓ Arbiter Key: arb1q...</div>
                </div>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-800">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">1 BTC locked in escrow</span>
                </div>
              </div>
              <Button className="w-full">Confirm Acceptance</Button>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            The buyer accepts the terms and the Bitcoin is locked in a 2-of-3 multisig wallet.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Fiat Payment",
      description: "Buyer sends fiat payment to seller",
      icon: <DollarSign className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Payment Confirmation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-background rounded-lg">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Bank Transfer:</span>
                    <span>Chase ****1234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span>$27,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <Badge variant="secondary">Sent</Badge>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 text-blue-800">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Payment sent successfully</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            The buyer sends the fiat payment using the agreed method and provides proof of payment.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Release Bitcoin",
      description: "Seller confirms payment and releases Bitcoin",
      icon: <Shield className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Release Confirmation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-background rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Payment received in bank account</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Transaction ID: TXN_2024_123456
                  </div>
                </div>
              </div>
              <Button className="w-full">Release Bitcoin to Buyer</Button>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">1 BTC released to buyer</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            The seller confirms receipt of payment and signs the transaction to release the Bitcoin.
          </p>
        </div>
      )
    },
    {
      id: 5,
      title: "Reputation Update",
      description: "Both parties leave reviews and update reputation",
      icon: <FileText className="w-8 h-8" />,
      content: (
        <div className="space-y-4">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Leave Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Rating</label>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-6 h-6 bg-yellow-400 rounded-sm"></div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Comment</label>
                  <div className="p-2 bg-background rounded text-sm">
                    Smooth trade, fast payment. Would trade again!
                  </div>
                </div>
                <Button className="w-full">Submit Review</Button>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">+5</div>
                <div className="text-xs text-muted-foreground">Buyer Rating</div>
              </div>
            </Card>
            <Card className="p-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">+5</div>
                <div className="text-xs text-muted-foreground">Seller Rating</div>
              </div>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground">
            Both parties rate each other, creating a permanent reputation record stored on IPFS.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-12">
      <AnimatedSection delay={0.1}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <DemoWizard steps={demoSteps} />
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <Card className="border-primary/20 mx-4 sm:mx-6">
          <CardHeader className="text-center px-4 sm:px-6">
            <CardTitle className="text-lg sm:text-xl text-primary">Demo Features</CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
                </div>
                <h4 className="font-semibold text-base sm:text-lg">Multisig Security</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  See how 2-of-3 multisig protects both parties
                </p>
              </div>
              
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
                </div>
                <h4 className="font-semibold text-base sm:text-lg">Arbiter Protection</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Understand the role of bonded arbiters
                </p>
              </div>
              
              <div className="text-center space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
                <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-purple-500" />
                </div>
                <h4 className="font-semibold text-base sm:text-lg">Reputation System</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Learn how reputation builds trust over time
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}