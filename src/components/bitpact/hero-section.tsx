"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, Play } from "lucide-react";
import { AnimatedFadeIn } from "./shared/animated-section";
import Link from "next/link";
import Image from "next/image";

export function BitpactHeroSection() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  
  return (
    <section className="relative w-full py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center min-h-[500px] sm:min-h-[600px]">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left">
            <AnimatedFadeIn delay={0.1}>
              <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary mb-3 sm:mb-4 mx-auto lg:mx-0">
                🪙 Decentralized P2P Bitcoin Protocol
              </div>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.2}>
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="/images/bitpactlogotrans.png"
                  alt="BitPact Logo"
                  width={60}
                  height={60}
                  className="h-12 sm:h-16 md:h-20 w-auto"
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline tracking-tighter lg:text-6xl xl:text-6xl/none text-primary">
                  BitPact
                </h1>
              </div>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.3}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-headline tracking-tight text-foreground">
                Where Trades Become Pacts
              </h2>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.4}>
              <p className="max-w-[100%] sm:max-w-[500px] md:max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mx-auto lg:mx-0">
                Enforced by multisig, protected by bonded arbiters, and immortalized through immutable reputation.
                BitPact brings honor, transparency, and cryptographic justice to peer-to-peer exchange.
              </p>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.5}>
              <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="w-full md:w-auto text-base sm:text-lg"
                  onClick={() => setShowComingSoon(true)}
                >
                  Try Interactive Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full md:w-auto text-base sm:text-lg">
                  <Link href="#overview">
                    Learn More
                  </Link>
                </Button>
              </div>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.6}>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-muted-foreground">Bitcoin Native</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-muted-foreground">Trustless by Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-muted-foreground">Immutable Reputation</span>
                </div>
              </div>
            </AnimatedFadeIn>
          </div>
          
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            <AnimatedFadeIn delay={0.3} direction="right">
              <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
                {/* YouTube Video */}
                <iframe
                  width="853"
                  height="480"
                  src="https://www.youtube.com/embed/JGZOwDFRQ-s"
                  title="BitPact Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                
                {/* Decorative elements */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full blur-xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-16 sm:w-24 h-16 sm:h-24 bg-secondary/10 rounded-full blur-xl opacity-50 pointer-events-none"></div>
                
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
              The interactive demo for BitPact is currently under development.
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