"use client";

import { AnimatedFadeIn, AnimatedStagger } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const goals = [
  {
    icon: "🌍",
    title: "Unlock Financial Access for the Underserved",
    description: "Enable individuals in developing regions to secure funding without traditional collateral, fostering entrepreneurship and local economic growth.",
    highlights: [
      "No banking requirements",
      "Community-based verification",
      "Micro-enterprise support"
    ]
  },
  {
    icon: "🤝",
    title: "Build Trust-Based Lending Networks",
    description: "Empower communities to self-regulate through reputation and vouching, creating decentralized ecosystems where relationships drive opportunity.",
    highlights: [
      "Community governance",
      "Reputation-based access",
      "Decentralized trust"
    ]
  },
  {
    icon: "💸",
    title: "Democratize Capital Allocation",
    description: "Give lenders full transparency and control over risk while enabling borrowers to set fair, customizable loan terms that suit their unique needs.",
    highlights: [
      "Transparent risk assessment",
      "Customizable terms",
      "Market-driven rates"
    ]
  },
  {
    icon: "⚡",
    title: "Create Income Streams for the Unemployed",
    description: "Allow jobless individuals to fund micro-businesses or side hustles, turning ambition into action with simple, accessible financing.",
    highlights: [
      "Micro-business funding",
      "Side hustle support",
      "Skill development loans"
    ]
  },
  {
    icon: "💖",
    title: "Strengthen Community Wealth",
    description: "Encourage community members to vouch for local talent, fostering collective success and circulating wealth within grassroots ecosystems.",
    highlights: [
      "Local wealth circulation",
      "Talent recognition",
      "Community prosperity"
    ]
  }
];

export function KinProtocolGoalsSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Building a More Inclusive Financial Future
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            KIN Protocol is built on five fundamental goals that address the core challenges in decentralized lending 
            and financial inclusion. Each goal represents our commitment to creating a more accessible, equitable, 
            and community-driven financial ecosystem.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {goals.map((goal, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{goal.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{goal.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {goal.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {goal.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
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
                Impact Focus
              </Badge>
              <span className="text-sm font-medium">Real World Change</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Beyond DeFi: Real-World Impact
            </h3>
            <p className="text-lg text-muted-foreground">
              KIN Protocol isn't just about decentralized finance—it's about creating tangible impact in communities 
              that need it most. By combining cutting-edge blockchain technology with human-centered design, we're 
              building bridges between the world of DeFi and the everyday financial needs of people worldwide.
            </p>
            <div className="grid gap-4 md:grid-cols-3 pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">1.7B</div>
                <div className="text-sm text-muted-foreground">Unbanked adults globally</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">$5T</div>
                <div className="text-sm text-muted-foreground">Global financing gap</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">70%</div>
                <div className="text-sm text-muted-foreground">MSMEs lack financing</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">🌱</span>
                </div>
                Sustainable Growth
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Our protocol is designed for long-term sustainability, creating virtuous cycles where success 
                breeds more success within communities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Reputation compounds over time
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Community wealth circulation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Scalable trust networks
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">🔄</span>
                </div>
                inclusive Design
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Every aspect of KIN Protocol is designed with inclusion in mind, ensuring accessibility 
                for users regardless of their technical or financial background.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Simple user experience
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Mobile-first approach
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Multi-language support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>
    </div>
  );
}