'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Professional Plan',
      description: 'Perfect for small businesses starting their online presence',
      price: 'Custom',
      features: [
        'Basic website design',
        'Fully responsive design',
        'Mobile-optimized',
        'SEO-friendly structure',
        'Contact form integration',
        '2 rounds of revisions',
        ' 3 months of support',
      ],
      recommended: false,
    },
    {
      name: 'Growth Plan',
      description: 'Ideal for growing businesses with advanced needs',
      price: 'Custom',
      features: [
        'Advanced website design',
        'E-commerce integration',
        'High performance optimization',
        'Analytics implementation',
        'CMS integration',
        'Unlimited revisions',
        '6 months of support',
        'Monthly optimization reports',
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
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include professional support.
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
                  Recommended
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
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">inquire</span>
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
                <a href="#contact">Choose Plan</a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let&apos;s discuss your specific requirements.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-muted"
          >
            <a href="#contact">Get Custom Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
