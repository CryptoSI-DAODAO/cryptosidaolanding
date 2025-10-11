"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Vote, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function WhatWeDoSection() {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="w-full py-10 sm:py-12 md:py-16 lg:py-24 xl:py-32">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline tracking-tighter">Welcome to CryptoSI DAO</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)} className="h-8 w-8 sm:h-10 sm:w-10">
                    {isExpanded ? <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" /> : <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />}
                    <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
                </Button>
            </div>
            {isExpanded && (
                <p className="max-w-[100%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] text-sm sm:text-base md:text-lg text-muted-foreground lg:text-xl/relaxed xl:text-xl/relaxed">
                The CryptoSI DAO is at the forefront of decentralized governance and funding, empowering the community to steer the future of CryptoSI-backed projects. By leveraging a liquid governance model, we ensure that every member has a voice and can influence the direction of our ecosystem.
                </p>
            )}
        </div>
        {isExpanded && (
            <>
                <div className="mx-auto max-w-5xl pt-8 sm:pt-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">What We Do</h3>
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                        <Card className="text-center transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                            <CardHeader className="pb-4 sm:pb-6">
                                <div className="mx-auto bg-primary/10 text-primary p-3 sm:p-4 rounded-full">
                                    <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <CardTitle className="font-body mt-3 sm:mt-4 text-base sm:text-lg">Innovative Projects</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-xs sm:text-sm text-muted-foreground">We support and fund pioneering projects within the CryptoSI ecosystem.</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                            <CardHeader className="pb-4 sm:pb-6">
                                <div className="mx-auto bg-primary/10 text-primary p-3 sm:p-4 rounded-full">
                                    <Vote className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <CardTitle className="font-body mt-3 sm:mt-4 text-base sm:text-lg">Community Governance</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-xs sm:text-sm text-muted-foreground">Our members vote on proposals and decide on the allocation of funds.</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-2xl hover:shadow-primary/40">
                            <CardHeader className="pb-4 sm:pb-6">
                                <div className="mx-auto bg-primary/10 text-primary p-3 sm:p-4 rounded-full">
                                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <CardTitle className="font-body mt-3 sm:mt-4 text-base sm:text-lg">Engagement and Progression</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-xs sm:text-sm text-muted-foreground">Participate in decision-making processes and contribute to the growth of our ecosystem.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="text-center mt-8 sm:mt-12 px-4">
                    <p className="text-base sm:text-lg text-muted-foreground">
                        Join us in revolutionizing decentralized finance and be a part of the future today.
                    </p>
                </div>
            </>
        )}
      </div>
    </section>
  );
}
