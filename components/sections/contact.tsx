'use client';

import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jayasurya007x@gmail.com',
      link: 'mailto:jayasurya007x@gmail.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '_surya.__.__',
      link: 'https://www.instagram.com/_surya.__.__?igsh=MXJwYW5kHZndXdIdA==',
    },
    // {
    //   icon: Linkedin,
    //   label: 'LinkedIn',
    //   value: 'Your Name',
    //   link: '#',
    // },
    // {
    //   icon: Github,
    //   label: 'GitHub',
    //   value: 'yourhandle',
    //   link: '#',
    // },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s connect and discuss how I can help bring your ideas to life.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <a
                key={idx}
                href={method.link}
                className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1">
                      {method.label}
                    </div>
                    <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {method.value}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Message */}
        <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-center text-muted-foreground">
            Prefer email? Send me a message at{' '}
            <a href="mailto:jayasurya007x@gmail.com" className="text-primary hover:underline font-semibold">
            jayasurya007x@gmail.com
            </a>
            {' '}and I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
