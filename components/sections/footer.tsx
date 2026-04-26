'use client';

import Link from 'next/link';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:hello@yourportfolio.com', label: 'Email' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block group mb-4">
                <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Portfolio
                </div>
              </Link>
              <p className="text-sm text-muted-foreground">
                Building modern websites and digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Work', href: '#showcase' },
                  { label: 'Pricing', href: '#pricing' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  'Landing Pages',
                  'Business Websites',
                  'UI/UX Design',
                  'Custom Development',
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                Ready to start?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get in touch and let&apos;s discuss your project.
              </p>
              <Button
                asChild
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="#contact">Start Project</a>
              </Button>
            </div>
          </div>

          {/* Social Links & Bottom Info */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>© {currentYear} Your Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
