"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Globe } from "@/components/globe";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <Image
        src="/images/daohero.png"
        alt="DAO Hero background"
        fill
        className="object-cover object-center"
        data-ai-hint="abstract background"
        priority
      />
      <div className="absolute inset-0 z-0 bg-background/80" />
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline tracking-tighter lg:text-6xl xl:text-7xl/none text-primary">
                CryptoSI DAO Hub
              </h1>
              <p className="max-w-[100%] sm:max-w-[500px] md:max-w-[600px] text-base sm:text-lg md:text-xl text-foreground mx-auto lg:mx-0">
                The future of decentralized collaboration. Invest, govern, and build with the CryptoSI community.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:gap-2 justify-center lg:justify-start">
              <Button asChild size="lg" className="w-full md:w-auto text-base sm:text-lg">
                <Link href="https://app.aragon.org/dao/arbitrum-mainnet/0xA736319152057f9c3beb556EeE76Ea56598FFa13/proposals?proposals=tokenvoting" target="_blank" rel="noopener noreferrer">
                  Submit a Proposal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full md:w-auto text-base sm:text-lg">
                <Link href="https://discord.gg/VSPUucsyvn" target="_blank" rel="noopener noreferrer">
                  Join Discussion
                </Link>
              </Button>
            </div>
          </div>
           <div className="relative hidden md:flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
