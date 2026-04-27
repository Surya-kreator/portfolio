// 'use client';

// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { ExternalLink } from 'lucide-react';

// export default function Showcase() {
//   const showcaseProjects = [
//     {
//       title: 'E-commerce Platform',
//       description: 'A modern e-commerce platform built with React and Next.js, featuring seamless checkout and product management.',
//       image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80',
//       link: 'https://v0-ecommerce-website-ui-lyart.vercel.app',
//     },
//     {
//       title: 'Clean Cafe Page',
//       description: 'Premium website for cafe with menu, whatsapp ordering button and contacting details',
//       image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
//       link: 'https://booster-chaya.vercel.app',
//     },
    
//   ];

//   return (
//     <section id="showcase" className="py-20 md:py-32 bg-secondary/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
//             Recent Work
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A selection of my recent work showcasing design and development expertise.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           {showcaseProjects.map((project, idx) => (
//             <Card
//               key={idx}
//               className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50"
//             >
//               {/* Project Image */}
//               <div className="relative overflow-hidden h-64 bg-muted">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>

//               {/* Project Info */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2 text-foreground">
//                   {project.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-6 text-sm">
//                   {project.description}
//                 </p>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="sm"
//                   className="border-border hover:bg-muted w-full"
//                 >
//                   <a href={project.link}>
//                     View Website
//                     <ExternalLink className="w-4 h-4 ml-2" />
//                   </a>
//                 </Button>
//               </div>
//             </Card>
//           ))}
//         </div>

//         {/* View More */}
//         <div className="text-center">
//           <Button
//             asChild
//             size="lg"
//             variant="outline"
//             className="border-border hover:bg-muted"
//           >
//             <a href="#contact">See All Projects</a>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function Showcase() {
  const showcaseProjects = [
    {
      title: 'E-commerce Website for Online Store',
      description:
        'A fast and modern e-commerce website built with Next.js. Designed to improve product visibility, simplify checkout, and increase conversions for online businesses.',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80',
      link: 'https://v0-ecommerce-website-ui-lyart.vercel.app',
    },
    {
      title: 'Cafe Website with Online Menu & Ordering',
      description:
        'A clean and responsive cafe website with menu display, WhatsApp ordering, and contact features. Built to help cafes attract customers and increase orders.',
      image:
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
      link: 'https://booster-chaya.vercel.app',
    },
  ];

  return (
    <section id="showcase" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Website Projects
          </span>

          {/* SEO-optimized H2 */}
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Website Design & Development Projects for Businesses
          </h2>

          {/* AEO-friendly intro */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some website projects I have built for businesses. Each project focuses on improving user experience, attracting customers, and increasing conversions through modern design and performance optimization.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {showcaseProjects.map((project, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 bg-muted">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* H3 = keyword support */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>

                {/* AEO-style description */}
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-border hover:bg-muted w-full"
                >
                  <a href={project.link} target="_blank">
                    View Live Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* AEO Boost Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold mb-3">
            What makes a website effective?
          </h3>
          <p className="text-muted-foreground text-sm">
            An effective website is fast, mobile-friendly, easy to navigate, and designed to convert visitors into customers. These projects are built with that focus in mind.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="#contact">Get a Website Like This</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
