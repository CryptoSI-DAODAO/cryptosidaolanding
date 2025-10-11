"use client";

import { AnimatedFadeIn, AnimatedStagger } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Users, 
  DollarSign, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Image as ImageIcon,
  TrendingUp,
  HandHeart
} from "lucide-react";

const lifecycleSteps = [
  {
    step: "1",
    title: "Borrower Creates Loan Request",
    description: "Borrower defines custom loan terms and publishes to marketplace",
    icon: <Users className="w-6 h-6" />,
    details: [
      "Set loan amount (e.g., 10 ETH)",
      "Define APR (e.g., 12%)",
      "Choose repayment schedule",
      "Set funding window (default 1 month)",
      "Create Preferred Vouch Profile"
    ],
    participants: ["Borrower"],
    contractInteraction: "Kin Protocol creates loan template"
  },
  {
    step: "2",
    title: "Vouchers Submit Backing Offers",
    description: "Vouchers compete to back the loan with custom terms",
    icon: <HandHeart className="w-6 h-6" />,
    details: [
      "Voucher X: 4 ETH stake, 10% max slash, 1% upfront fee",
      "Voucher Y: 6 ETH stake, 100% max slash, no upfront fee",
      "Custom risk parameters and fee structures",
      "Reputation requirements assessment"
    ],
    participants: ["Vouchers", "Borrower"],
    contractInteraction: "Loan Contract tracks vouch offers"
  },
  {
    step: "3", 
    title: "Borrower Accepts Vouch Offers",
    description: "Borrower reviews and selects voucher offers to proceed with",
    icon: <CheckCircle className="w-6 h-6" />,
    details: [
      "Evaluate voucher reputation and terms",
      "Accept beneficial combinations",
      "Pay upfront fees if required",
      "Cannot exceed full principal coverage"
    ],
    participants: ["Borrower", "Vouchers"],
    contractInteraction: "Collateral Contract stakes voucher tokens"
  },
  {
    step: "4",
    title: "Loan Reaches Full Coverage",
    description: "Sufficient voucher backing achieved to attract lenders",
    icon: <Shield className="w-6 h-6" />,
    details: [
      "Total max slash equals loan amount",
      "Risk protection established",
      "Ready for lender participation",
      "No more vouch offers accepted"
    ],
    participants: ["Vouchers", "System"],
    contractInteraction: "Loan Contract coverage validation"
  },
  {
    step: "5",
    title: "Lenders Fund the Loan",
    description: "Lenders provide capital based on risk assessment",
    icon: <DollarSign className="w-6 h-6" />,
    details: [
      "Lenders review voucher backing",
      "Assess KRS and reputation scores",
      "Fund up to requested amount",
      "Receive proportional NFT shares"
    ],
    participants: ["Lenders"],
    contractInteraction: "Funds transferred to Borrower"
  },
  {
    step: "6",
    title: "Loan Funded & NFT Minted",
    description: "Loan becomes active and NFT contract is created",
    icon: <ImageIcon className="w-6 h-6" />,
    details: [
      "Borrower receives loan amount",
      "NFT minted with all terms encoded",
      "All participant identities recorded",
      "Secondary market trading enabled"
    ],
    participants: ["All Parties"],
    contractInteraction: "NFT Contractminted and distributed"
  },
  {
    step: "7",
    title: "Repayment Phase",
    description: "Borrower makes scheduled payments throughout the loan term",
    icon: <Clock className="w-6 h-6" />,
    details: [
      "Scheduled repayments monitored",
      "Credit_Bureau updated with payment history",
      "Late payments trigger slashing",
      "Vouchers earn reputation rewards"
    ],
    participants: ["Borrower", "Lenders", "Vouchers"],
    contractInteraction: "Automated payment processing"
  },
  {
    step: "8",
    title: "Loan Completion or Default",
    description: "Final outcome determines fund distribution and reputation updates",
    icon: <TrendingUp className="w-6 h-6" />,
    details: [
      "Successful: Reputation improved, collateral returned",
      "Default: Slashing executed, lenders repaid",
      "Credit_Bureau updated with final score",
      "NFT contract marked as completed"
    ],
    participants: ["All Parties"],
    contractInteraction: "Final settlement and distribution"
  }
];

const exampleFlow = {
  borrower: "Borrower A",
  loanAmount: "10 ETH",
  apr: "12%",
  vouchers: [
    {
      name: "Voucher X",
      stake: "4 ETH",
      maxSlash: "10%",
      upfrontFee: "1%",
      feeAmount: "0.04 ETH"
    },
    {
      name: "Voucher Y", 
      stake: "6 ETH",
      maxSlash: "100%",
      upfrontFee: "0%",
      feeAmount: "0 ETH"
    }
  ],
  coverage: "Partial (not full coverage)",
  outcomes: {
    successful: {
      lenders: "Receive full principal + 12% APR",
      vouchers: "Receive fees + reputation rewards",
      borrower: "Builds reputation for better future terms"
    },
    default: {
      lenders: "Repaid from voucher stakes up to limits",
      vouchers: "Slashed up to max amounts, reputation impacted",
      borrower: "Credit score significantly reduced"
    }
  }
};

export function KinProtocolLoanLifecycleSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Complete Loan Lifecycle
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            Follow the complete journey from loan creation to final settlement. The KIN Protocol 
            lifecycle ensures transparency, security, and fair outcomes for all participants through 
            automated smart contract execution.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block"></div>
        
        <div className="space-y-8">
          <AnimatedStagger staggerDelay={0.1} initialDelay={0.2}>
            {lifecycleSteps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                
                {/* Content */}
                <Card className="flex-1 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {step.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Key Actions</h4>
                      <ul className="space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                      <div className="flex items-center gap-1">
                        <Badge variant="outline" className="text-xs">
                          Participants: {step.participants.join(", ")}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Badge variant="secondary" className="text-xs">
                          {step.contractInteraction}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </AnimatedStagger>
        </div>
      </div>

      <AnimatedFadeIn delay={1.2}>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center border border-primary/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-background/80 rounded-full">
              <Badge variant="outline" className="mr-2 border-primary/20 text-primary">
                Example Flow
              </Badge>
              <span className="text-sm font-medium">Real-World Scenario</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Loan Example: {exampleFlow.borrower}
            </h3>
            <p className="text-lg text-muted-foreground">
              Let's walk through a complete loan example to see how all participants interact 
              and what outcomes look like in different scenarios.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-6">
              <div className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">{exampleFlow.loanAmount}</div>
                <p className="text-sm font-medium">Loan Amount</p>
              </div>
              <div className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">{exampleFlow.apr}</div>
                <p className="text-sm font-medium">Interest Rate</p>
              </div>
              <div className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">2</div>
                <p className="text-sm font-medium">Vouchers</p>
              </div>
              <div className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">{exampleFlow.coverage}</div>
                <p className="text-sm font-medium">Coverage Level</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 pt-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-600 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Successful Repayment Outcome
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• <strong>Lenders:</strong> {exampleFlow.outcomes.successful.lenders}</p>
                  <p>• <strong>Vouchers:</strong> {exampleFlow.outcomes.successful.vouchers}</p>
                  <p>• <strong>Borrower:</strong> {exampleFlow.outcomes.successful.borrower}</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-red-600 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Default Outcome
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• <strong>Lenders:</strong> {exampleFlow.outcomes.default.lenders}</p>
                  <p>• <strong>Vouchers:</strong> {exampleFlow.outcomes.default.vouchers}</p>
                  <p>• <strong>Borrower:</strong> {exampleFlow.outcomes.default.borrower}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.4}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Voucher Details</CardTitle>
            <CardDescription className="text-base">
              How the voucher backing works in this example
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {exampleFlow.vouchers.map((voucher, index) => (
                <div key={index} className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h4 className="font-semibold">{voucher.name}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Stake Amount:</span>
                      <span className="font-medium ml-2">{voucher.stake}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Max Slash:</span>
                      <span className="font-medium ml-2">{voucher.maxSlash}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Upfront Fee:</span>
                      <span className="font-medium ml-2">{voucher.upfrontFee}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Fee Amount:</span>
                      <span className="font-medium ml-2">{voucher.feeAmount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Total Coverage: 10 ETH | Total Upfront Fees: 0.04 ETH | Risk: Partial coverage 
                (lenders have some exposure but vouchers provide significant protection)
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}