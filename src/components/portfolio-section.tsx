"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const projects = [
  {
    name: "Bidify",
    description: "Decentralized Auction Platform.",
    imageUrl: "/images/Bidify-Icon-Orange.png",
    hint: "auction gavel",
    link: "https://bidify.me",
  },
  {
    name: "DAO Watch",
    description: "Analytics and insights for DAOs.",
    imageUrl: "/images/dw.jpg",
    hint: "data analytics",
    link: "https://daowatch.blog",
  },
  {
    name: "Crypto Waffle",
    description: "Sweet deals on crypto assets.",
    imageUrl: "/images/cw.webp",
    hint: "crypto waffle",
    link: "https://cryptowaffle.fun",
  },
  {
    name: "Soonak",
    description: "A revolutionary DeFi protocol.",
    imageUrl: "/images/soonak.jpeg",
    hint: "DeFi protocol",
    link: "#",
  },
];

export function PortfolioSection() {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="portfolio" className="w-full py-10 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-card">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline tracking-tighter">Our Projects</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)} className="h-8 w-8 sm:h-10 sm:w-10">
              {isExpanded ? <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" /> : <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />}
              <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
            </Button>
          </div>
          {isExpanded && (
            <p className="max-w-[100%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] text-sm sm:text-base md:text-lg text-muted-foreground lg:text-xl/relaxed xl:text-xl/relaxed">
              CryptoSI DAO has successfully completed several projects, thanks to our dedicated community. Here's a showcase of what we've achieved:
            </p>
          )}
        </div>
        {isExpanded && (
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 pt-8 sm:pt-12">
            {projects.map((project) => (
                <Link href={project.link} target="_blank" rel="noopener noreferrer" key={project.name} className="group">
                <Card className="overflow-hidden transform transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 h-full flex flex-col">
                    <CardHeader className="p-0">
                    <Image
                        src={project.imageUrl}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="w-full h-32 sm:h-40 md:h-48 object-cover"
                        data-ai-hint={project.hint}
                    />
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                    <CardTitle className="text-lg sm:text-xl font-bold font-body flex items-center justify-between">
                        {project.name}
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm sm:text-base">{project.description}</CardDescription>
                    </CardContent>
                </Card>
                </Link>
            ))}
            </div>
        )}
        
        {/* Tracker Link - Always visible */}
        <div className="flex justify-center mt-8">
          <Link
            href="https://tracker.cryptosidao.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
          >
            Track our projects as they're being developed here!
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
