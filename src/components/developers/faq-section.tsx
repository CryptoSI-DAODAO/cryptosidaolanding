"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection, AnimatedFadeIn } from "@/components/bitpact/shared/animated-section";
import { 
  ChevronDown, 
  ChevronUp, 
  DollarSign, 
  Clock,
  Users,
  Code,
  Shield,
  Scale,
  HelpCircle
} from "lucide-react";

export function DeveloperFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2]);
  
  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "How is revenue sharing calculated and distributed?",
      answer: "Revenue sharing is automatically calculated and distributed through smart contracts. For Treasury Share partnerships, developers receive 50% of the treasury portion (25% of total fees). For Standalone partnerships, developers receive 50% of total revenue. All distributions are transparent and visible on-chain.",
      icon: <DollarSign className="w-5 h-5" />,
      category: "Revenue"
    },
    {
      question: "What happens if a project doesn't generate expected revenue?",
      answer: "We understand that not all projects will meet initial revenue expectations. Partnerships are long-term, and we provide ongoing support to help optimize and improve the product. Revenue sharing only applies when actual revenue is generated - there are no penalties or requirements to repay any amounts.",
      icon: <Scale className="w-5 h-5" />,
      category: "Risk"
    },
    {
      question: "How long does the partnership agreement last?",
      answer: "Partnership agreements are designed to be long-term, typically lasting for the lifetime of the dApp. The smart contract-based agreement ensures continuous revenue sharing as long as the application generates revenue. There are provisions for mutual termination or modification through DAO governance.",
      icon: <Clock className="w-5 h-5" />,
      category: "Duration"
    },
    {
      question: "Can I work on multiple projects simultaneously?",
      answer: "Yes, you can apply for multiple partnerships. However, each proposal is evaluated independently based on your ability to dedicate sufficient time and resources to each project. We recommend focusing on one project at a time to ensure quality delivery.",
      icon: <Code className="w-5 h-5" />,
      category: "Work"
    },
    {
      question: "What level of support does the DAO provide during development?",
      answer: "The DAO provides comprehensive support including: technical mentorship from experienced developers, infrastructure resources (hosting, APIs, tools), marketing budget and community engagement, access to our user base for testing and feedback, and governance support for decision-making.",
      icon: <Users className="w-5 h-5" />,
      category: "Support"
    },
    {
      question: "How are disputes or disagreements resolved?",
      answer: "Disputes are resolved through the DAO's governance process. All partnership terms are encoded in smart contracts, providing a clear framework for conflict resolution. Community discussion and voting can be used to address disagreements, with the smart contract serving as the ultimate source of truth.",
      icon: <Shield className="w-5 h-5" />,
      category: "Legal"
    },
    {
      question: "What happens to the IP and code I develop?",
      answer: "IP ownership varies by partnership model. For Treasury Share partnerships, the code typically becomes part of the existing protocol's codebase. For Standalone partnerships, developers maintain IP ownership while granting the DAO usage rights. All terms are clearly defined in the partnership agreement.",
      icon: <Code className="w-5 h-5" />,
      category: "IP"
    },
    {
      question: "Can I propose a completely new project idea?",
      answer: "Absolutely! We welcome innovative new ideas. You can submit proposals for entirely new projects through our governance portal. New ideas are evaluated based on technical feasibility, market potential, alignment with DAO values, and innovation. Successful proposals may receive additional support for initial development.",
      icon: <HelpCircle className="w-5 h-5" />,
      category: "Ideas"
    },
    {
      question: "What are the minimum requirements to apply?",
      answer: "While we evaluate each proposal individually, we generally look for: demonstrated technical expertise in relevant technologies, a realistic development plan, clear understanding of the target market, and commitment to community engagement. Previous blockchain experience is helpful but not required - we evaluate based on the quality of your proposal and technical approach.",
      icon: <Users className="w-5 h-5" />,
      category: "Requirements"
    },
    {
      question: "How is the partnership governed after launch?",
      answer: "Post-launch governance varies by model. For Treasury Share partnerships, the project integrates into existing DAO governance structures. For Standalone partnerships, developers typically receive governance tokens and voting rights proportional to their stake. Major decisions require community votes, while day-to-day operations remain with the development team.",
      icon: <Scale className="w-5 h-5" />,
      category: "Governance"
    }
  ];

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Revenue": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Risk": return "bg-red-500/10 text-red-500 border-red-500/20";
      case "Duration": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Work": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Support": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Legal": return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
      case "IP": return "bg-indigo-500/10 text-indigo-500 border-indigo-500/20";
      case "Ideas": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Requirements": return "bg-pink-500/10 text-pink-500 border-pink-500/20";
      case "Governance": return "bg-teal-500/10 text-teal-500 border-teal-500/20";
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedFadeIn delay={0.1}>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
          </AnimatedFadeIn>
          <AnimatedFadeIn delay={0.2}>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Common questions about our developer partnership program
            </p>
          </AnimatedFadeIn>
        </div>
        
        {/* FAQ Categories */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category, index) => (
              <div key={category} className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                {category}
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <AnimatedFadeIn key={index} delay={0.4 + index * 0.05} direction="up">
              <Card className={`border-2 ${getCategoryColor(item.category)} hover:shadow-lg transition-all duration-300`}>
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${getCategoryColor(item.category).split(' ')[0]} ${getCategoryColor(item.category).split(' ')[1]} flex items-center justify-center flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{item.question}</CardTitle>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </div>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                {openItems.includes(index) && (
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {item.answer}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            </AnimatedFadeIn>
          ))}
        </div>
        
        {/* Additional Help */}
        <AnimatedSection delay={0.8}>
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 mt-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Still Have Questions?</CardTitle>
              <CardDescription className="text-lg">
                We're here to help you succeed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Join Our Discord</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with our community and get real-time answers from team members
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Technical Consultation</h4>
                  <p className="text-sm text-muted-foreground">
                    Schedule a 1-on-1 call with our technical team to discuss your proposal
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Proposal Review</h4>
                  <p className="text-sm text-muted-foreground">
                    Get feedback on your proposal before official submission
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Want to see current successful partnerships? Check out our active projects.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="px-3 py-1 bg-background/50 rounded-full text-xs">
                    Average response time: 24 hours
                  </div>
                  <div className="px-3 py-1 bg-background/50 rounded-full text-xs">
                    Success rate: 85%
                  </div>
                  <div className="px-3 py-1 bg-background/50 rounded-full text-xs">
                    Active partners: 12+
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}