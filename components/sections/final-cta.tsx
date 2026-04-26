'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          
          <div className="relative px-8 py-16 md:px-12 md:py-24 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              Ready to start your next project?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Whether you need a landing page, business website, or custom web solution, 
              I&apos;m here to help bring your vision to life. Let&apos;s create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="#contact">
                  Start Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted"
              >
                <a href="#showcase">View Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
