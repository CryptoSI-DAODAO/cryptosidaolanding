"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  User, 
  Bitcoin, 
  Shield,
  FileText,
  Users
} from "lucide-react";

interface DemoStep {
  id: number;
  title: string;
  description: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

interface DemoWizardProps {
  steps: DemoStep[];
  onComplete?: () => void;
}

export function DemoWizard({ steps, onComplete }: DemoWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      onComplete?.();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  if (isCompleted) {
    return (
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
        <CardHeader className="text-center px-4 sm:px-6">
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <CardTitle className="text-xl sm:text-2xl text-primary">Demo Complete!</CardTitle>
          <CardDescription className="text-base sm:text-lg">
            You've successfully walked through the BitPact trading process
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center px-4 sm:px-6">
          <Button onClick={() => {
            setIsCompleted(false);
            setCurrentStep(0);
          }} className="mt-3 sm:mt-4 w-full sm:w-auto">
            Restart Demo
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-1 sm:space-x-2 overflow-x-auto py-2">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => handleStepClick(index)}
            className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all flex-shrink-0 ${
              index === currentStep
                ? "border-primary bg-primary text-primary-foreground"
                : index < currentStep
                ? "border-green-500 bg-green-500 text-white"
                : "border-muted-foreground/30 bg-muted text-muted-foreground"
            }`}
          >
            {index < currentStep ? (
              <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5" />
            ) : (
              <span className="text-xs sm:text-sm font-medium">{step.id}</span>
            )}
          </button>
        ))}
      </div>

      {/* Current Step */}
      <Card className="border-primary/20">
        <CardHeader className="text-center px-4 sm:px-6">
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
            {currentStepData.icon}
          </div>
          <CardTitle className="text-lg sm:text-xl md:text-2xl text-primary">
            Step {currentStepData.id}: {currentStepData.title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-lg">
            {currentStepData.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          {currentStepData.content}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center gap-2 w-full sm:w-auto order-2 sm:order-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </Button>
        
        <div className="text-xs sm:text-sm text-muted-foreground order-1 sm:order-2">
          Step {currentStep + 1} of {steps.length}
        </div>
        
        <Button
          onClick={handleNext}
          className="flex items-center gap-2 w-full sm:w-auto order-3"
        >
          {currentStep === steps.length - 1 ? "Complete" : "Next"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}