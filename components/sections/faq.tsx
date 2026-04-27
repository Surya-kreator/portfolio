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
      question: 'How much does a website cost for a business?',
      answer:
        'The cost of a business website depends on features and complexity. Basic websites start from ₹499, while advanced websites with more features and optimization start from ₹999.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        'Most websites are completed within 3 to 7 days. More complex websites with custom features may take longer depending on requirements.',
    },
    {
      question: 'What does a website do for a business?',
      answer:
        'A website helps businesses attract customers, showcase services, build trust, and increase conversions by providing an online presence accessible anytime.',
    },
    {
      question: 'Do you build landing pages that convert?',
      answer:
        'Yes, I create high-converting landing pages designed to turn visitors into leads or customers using optimized design, structure, and user experience.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer:
        'Yes, every website is fully responsive and optimized for mobile devices, ensuring a smooth experience across phones, tablets, and desktops.',
    },
    {
      question: 'Do you provide SEO-friendly websites?',
      answer:
        'Yes, all websites are built with SEO best practices including fast loading speed, proper structure, and optimized content to help improve search visibility.',
    },
    {
      question: 'Can I update my website after it is built?',
      answer:
        'Yes, you can easily update your website. I can also integrate a CMS if you want full control over content updates.',
    },
    {
      question: 'Do you provide support after the website is launched?',
      answer:
        'Yes, all plans include post-launch support for maintenance, updates, and technical assistance to ensure your website runs smoothly.',
    },
  ];

  return (
    // <section className="py-20 md:py-32 bg-secondary/30">
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Website FAQs
          </span>

          {/* SEO-optimized H2 */}
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Frequently Asked Questions About Website Development
          </h2>

          {/* AEO-friendly intro */}
          <p className="text-lg text-muted-foreground">
            Here are answers to common questions about website development, pricing, timelines, and how websites help businesses grow.
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
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
