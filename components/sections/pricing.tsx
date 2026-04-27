'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Professional Plan',
      description: 'Best for small businesses that need a modern website to get started online',
      price: '₹999',
      features: [
        'Business website design',
        'Fully responsive (mobile-friendly)',
        'Fast loading website',
        'SEO-friendly structure',
        'Contact form integration',
        '2 rounds of revisions',
        '3 months support',
      ],
      recommended: false,
    },
    {
      name: 'Growth Plan',
      description: 'Perfect for growing businesses that want more features and better performance',
      price: '₹2499',
      features: [
        'Advanced website design',
        'Landing page optimization',
        'High performance optimization',
        'Analytics setup',
        'CMS integration',
        'Unlimited revisions',
        '6 months support',
        'Monthly optimization suggestions',
      ],
      recommended: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Website Pricing Plans
          </span>

          {/* SEO-optimized H2 */}
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Affordable Website Development Pricing for Businesses
          </h2>

          {/* AEO-friendly description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a website development plan that fits your business needs. These pricing options are designed to help businesses launch fast, attract customers, and grow online with modern, high-performing websites.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative p-8 border transition-all duration-300 ${
                plan.recommended
                  ? 'md:scale-105 border-primary shadow-2xl'
                  : 'border-border/50'
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 right-8 inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    starting price
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full ${
                  plan.recommended
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'border border-border hover:bg-muted'
                }`}
              >
                <a href="#contact">Get Started</a>
              </Button>
            </Card>
          ))}
        </div>

        {/* AEO Boost Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            How much does a website cost?
          </h3>
          <p className="text-muted-foreground mb-6">
            Website pricing depends on features, design complexity, and business needs. Basic business websites start from ₹999, while advanced websites with optimization and integrations start from ₹2499.
          </p>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-muted"
          >
            <a href="#contact">Request Custom Website</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
