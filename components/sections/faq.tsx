'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'How long does a project take?',
      answer:
        'Project timelines vary depending on scope and complexity. A simple landing page typically takes 2-4 weeks, while more complex websites may take 6-12 weeks. I provide detailed timelines after understanding your requirements.',
    },
    {
      question: 'What do you need to get started?',
      answer:
        'To kick off your project, I need your business information, target audience insights, reference websites you like, and your project goals. We&apos;ll have a discovery call to discuss everything in detail.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer:
        'Yes! All plans include ongoing support after launch. This includes bug fixes, maintenance, security updates, and technical assistance. Extended support packages are also available.',
    },
    {
      question: 'Can I request custom features?',
      answer:
        'Absolutely! I can integrate custom features based on your specific needs. This might include integrations with third-party tools, custom functionality, or advanced functionality tailored to your business.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'I specialize in modern web technologies including React, Next.js, TypeScript, Tailwind CSS, and various backend solutions. I choose the best tech stack based on your project requirements.',
    },
    {
      question: 'Do you offer hosting and domain services?',
      answer:
        'I can guide you on hosting providers and domain registration. While I focus on development, I work with reliable partners and can help with the entire setup process.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about my services and process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border/50">
              <AccordionTrigger className="hover:text-primary transition-colors py-4">
                <span className="text-left font-semibold text-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
