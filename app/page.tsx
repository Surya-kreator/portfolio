'use client';

import { useState } from 'react';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import Showcase from '@/components/sections/showcase';
import Services from '@/components/sections/services';
import Pricing from '@/components/sections/pricing';
import About from '@/components/sections/about';
import FAQ from '@/components/sections/faq';
import CustomProject from '@/components/sections/custom-project';
import Contact from '@/components/sections/contact';
import FinalCTA from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Showcase />
      <Services />
      {/* <Pricing /> */}
      <About />
      <FAQ />
      <CustomProject />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
