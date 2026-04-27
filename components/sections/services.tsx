'use client';

import { Card } from '@/components/ui/card';
import { Palette, Globe, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Landing Page Development',
      description:
        'High-converting landing pages designed to turn visitors into customers. Optimized for speed, mobile devices, and lead generation.',
    },
    {
      icon: Zap,
      title: 'Business Website Development',
      description:
        'Professional business websites that help you attract customers, showcase services, and build a strong online presence.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design for Websites',
      description:
        'Modern and user-friendly website designs focused on improving user experience, engagement, and conversions.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Web Development Services
          </span>

          {/* H2 = SEO GOLD */}
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Website Development & Landing Page Services for Businesses
          </h2>

          {/* AEO-optimized paragraph */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I provide website development services that help businesses grow online. From high-converting landing pages to full business websites, each project is built to attract customers, improve user experience, and increase conversions.
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

                {/* H3 = keyword support */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>

                {/* AEO-friendly description */}
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
