"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export function CollapsibleSection({ 
  title, 
  subtitle, 
  children, 
  defaultExpanded = false,
  className = "" 
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <section className={`w-full py-8 sm:py-10 md:py-12 lg:py-24 xl:py-32 ${className}`}>
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline tracking-tighter text-primary text-center">
              {title}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8 sm:h-10 sm:w-10 md:ml-4"
            >
              {isExpanded ? <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" /> : <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />}
              <span className="sr-only">{isExpanded ? 'Collapse section' : 'Expand section'}</span>
            </Button>
          </div>
          {subtitle && isExpanded && (
            <p className="max-w-[100%] sm:max-w-[600px] md:max-w-[800px] text-sm sm:text-base md:text-lg text-muted-foreground lg:text-xl/relaxed xl:text-xl/relaxed">
              {subtitle}
            </p>
          )}
        </div>
        
        {isExpanded && children}
      </div>
    </section>
  );
}