"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, TrendingUp, Zap } from "lucide-react";
import { AnimatedFadeIn } from "@/components/bitpact/shared/animated-section";
import Link from "next/link";

export function DeveloperHeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center min-h-[600px]">
          <div className="flex flex-col justify-center space-y-6">
            <AnimatedFadeIn delay={0.1}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <Code className="w-4 h-4 mr-2" />
                Developer Partnerships
              </div>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.2}>
              <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Build With CryptoSI
              </h1>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-headline tracking-tight text-foreground">
                Earn Up to 50% of dApp Revenues
              </h2>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.4}>
              <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
                Partner with us to transform innovative ideas into production-ready dApps. 
                Receive ongoing revenue share, DAO support, and access to our ecosystem.
              </p>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.5}>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="group"
                  asChild
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link href="#opportunities">
                    Explore Opportunities
                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#how-it-works">
                    How It Works
                  </Link>
                </Button>
              </div>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.6}>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">50% Revenue Share</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">DAO Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Long-term Partnership</span>
                </div>
              </div>
            </AnimatedFadeIn>
          </div>
          
          <div className="relative flex items-center justify-center lg:justify-end">
            <AnimatedFadeIn delay={0.3} direction="right">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-80 sm:h-96 md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 shadow-2xl p-4 sm:p-6 md:p-8">
                {/* Revenue Share Visualization */}
                <div className="flex flex-col items-center justify-center h-full space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">50%</div>
                    <div className="text-sm sm:text-base md:text-lg text-muted-foreground">Revenue Share</div>
                  </div>
                  
                  <div className="w-full max-w-[180px] sm:max-w-[200px] md:max-w-xs">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Developer</span>
                      <span>DAO Treasury</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-8 overflow-hidden">
                      <div className="h-full flex">
                        <div className="bg-primary" style={{ width: '50%' }}></div>
                        <div className="bg-secondary" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                    <div className="space-y-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                        <Code className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      </div>
                      <div className="text-xs text-muted-foreground">Build</div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                      </div>
                      <div className="text-xs text-muted-foreground">Partner</div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                      </div>
                      <div className="text-xs text-muted-foreground">Earn</div>
                    </div>
                  </div>
                </div>
                
                {/* Animated elements */}
                <motion.div
                  className="absolute top-4 left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl opacity-50 pointer-events-none"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl opacity-50 pointer-events-none"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
            </AnimatedFadeIn>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}