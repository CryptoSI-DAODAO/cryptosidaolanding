"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, Play, Users, Shield, HandHeart } from "lucide-react";
import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import Link from "next/link";
import Image from "next/image";

export function KinProtocolHeroSection() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center min-h-[600px]">
          <div className="flex flex-col justify-center space-y-6">
            <AnimatedFadeIn delay={0.1}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                💖 Decentralized Undercollateralized Borrowing
              </div>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.2}>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/kinlogotrans.png"
                  alt="KIN Protocol Logo"
                  width={80}
                  height={80}
                  className="h-20 w-auto"
                />
                <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  KIN Protocol
                </h1>
              </div>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-headline tracking-tight text-foreground">
                Where Reputation is Collateral
              </h2>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.4}>
              <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
                A decentralized, undercollateralized lending platform built on a tri-party model—Borrowers, Lenders, and Vouchers. 
                KIN leverages vouch staking, slashing penalties, and NFT-backed loan contracts to unlock trust-based lending in DeFi.
              </p>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.5}>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="group"
                  onClick={() => setShowComingSoon(true)}
                >
                  Try Interactive Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#overview">
                    Learn More
                  </Link>
                </Button>
              </div>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.6}>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Undercollateralized Loans</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Trust-Based Lending</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">NFT-Backed Contracts</span>
                </div>
              </div>
            </AnimatedFadeIn>
          </div>
          
          <div className="relative flex items-center justify-center">
            <AnimatedFadeIn delay={0.3} direction="right">
              <div className="relative w-full max-w-none aspect-video rounded-xl overflow-hidden bg-black shadow-2xl transform scale-200 md:scale-175">
                {/* YouTube Video */}
                <iframe
                  width="1680"
                  height="945"
                  src="https://www.youtube.com/embed/LxmXhV88SdY"
                  title="KIN Protocol Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl opacity-50 pointer-events-none"></div>
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-primary/20 pointer-events-none"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </AnimatedFadeIn>
          </div>
        </div>
      </div>
      
      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl text-primary">Coming Soon</DialogTitle>
            <DialogDescription className="text-base">
              The interactive demo for KIN Protocol is currently under development.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <p className="text-muted-foreground">
              Sign up for our newsletter to be notified when it launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button
                className="w-full sm:w-auto"
                onClick={() => setShowComingSoon(false)}
              >
                Got it
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                View on GitHub
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}