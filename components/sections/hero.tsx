
// 'use client';

// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative py-20 md:py-32 overflow-hidden">
      
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1600&q=80')",
//         }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-8 text-white">
          
//           {/* Overline */}
//           <div className="inline-block">
//             <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider">
//               Website Developer for Businesses
//             </span>
//           </div>

//           {/* Heading (H1 = KEY SEO AREA) */}
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             High-Converting Websites & Landing Pages for{' '}
//             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Growing Businesses
//             </span>
//           </h1>

//           {/* Description (AEO-focused) */}
//           <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
//             I design and develop fast, responsive websites that help businesses attract customers, showcase services, and increase conversions. Perfect for startups, local businesses, and brands looking to grow online.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
//             <Button
//               asChild
//               size="lg"
//               className="bg-primary hover:bg-primary/90 text-primary-foreground"
//             >
//               <a href="#showcase">
//                 View My Work
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </a>
//             </Button>

//             <Button
//               asChild
//               size="lg"
//               variant="outline"
//               className="border-white/40 text-black hover:bg-white/10"
//             >
//               <a href="#contact">Get Your Website</a>
//             </Button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1600&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 text-white">

          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src="/Surya.jpg" // place your image in /public
              alt="Your Name"
              width={160}
              height={160}
              className="rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
          </div>

          {/* Overline */}
          <div className="inline-block">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider">
              Website Developer for Businesses
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            High-Converting Websites & Landing Pages for{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            I design and develop fast, responsive websites that help businesses attract customers, showcase services, and increase conversions. Perfect for startups, local businesses, and brands looking to grow online.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="#showcase">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-black hover:bg-white/10"
            >
              <a href="#contact">Get Your Website</a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
