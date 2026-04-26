'use client';

import { Card } from '@/components/ui/card';
import { Palette, Globe, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Landing Page Design',
      description: 'Create compelling landing pages that convert visitors into customers with modern design and strategic copywriting.',
    },
    {
      icon: Zap,
      title: 'Business Website Development',
      description: 'Build professional websites that establish your online presence and showcase your business with clean, responsive design.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design intuitive and beautiful user interfaces focused on user experience and accessibility best practices.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            What I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="p-8 border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
