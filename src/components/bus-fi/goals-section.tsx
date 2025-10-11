"use client";

import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Globe, Shield } from "lucide-react";

const goals = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Empower Communities",
    description: "Enable equitable access to decentralized financial tools and democratize investment opportunities through blockchain. This project aims to make finance more open and fair for everyone in Africa by providing a decentralized funding mechanism for bus owners.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Build Impactful dApps",
    description: "To build an impactful decentralized application (dApp) on the Hedera network that solves real-world problems related to access to capital for essential services. Focus on creating sustainable solutions that drive meaningful change.",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Drive Web3 Adoption",
    description: "To drive real-world adoption of Web3 technologies by connecting blockchain to the actual operations of buses and incentivizing reliable performance. Bridge the gap between digital assets and physical infrastructure.",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Create Sustainable Trust",
    description: "To create a sustainable financing model where bus owners and on-the-ground financiers are incentivized to make repayments through a reputation system, which will seriously help them to raise more funds in the future. Address the need for trust and reliable off-chain integration.",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  }
];

export function BusFiGoalsSection() {
  return (
    <div className="space-y-8">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Transforming Transportation Finance
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            Bus-Fi is built on four fundamental goals that address the core challenges in transportation infrastructure 
            and financial inclusion across Africa. Each goal represents a commitment to creating sustainable, 
            community-driven solutions that bridge the gap between traditional finance and Web3 innovation.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {goals.map((goal, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className="relative overflow-hidden border-l-4 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${goal.bgColor} ${goal.color}`}>
                    {goal.icon}
                  </div>
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {goal.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedFadeIn delay={0.8}>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 text-center border border-yellow-200">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-sm font-medium" style={{ color: "#FFD600" }}>Core Mission</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              "Financing the Future of African Transportation"
            </h3>
            <p className="text-lg text-muted-foreground">
              The "Decentralized Bus Funding with Reputation System" project aims to democratize investment opportunities 
              and foster financial inclusion for communities in Africa by leveraging the Hedera distributed ledger technology. 
              By tokenizing real-world assets like buses, we enable a broader range of investors to participate in funding 
              essential transportation infrastructure.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <div className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">
                Financial Inclusion
              </div>
              <div className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">
                Asset Tokenization
              </div>
              <div className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">
                Community Trust
              </div>
              <div className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">
                Sustainable Impact
              </div>
            </div>
          </div>
        </div>
      </AnimatedFadeIn>
    </div>
  );
}