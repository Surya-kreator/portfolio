// 'use client';

// export default function CustomProject() {
//   return (
//     <section className="py-20 md:py-32">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
//             Have a custom project?
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Share your project details below. I&apos;ll review your submission and get back to you 
//             within 2-3 business days with feedback and next steps.
//           </p>
//         </div>

//         {/* Form Container */}
//         <div className="bg-card border border-border/50 rounded-lg p-8 md:p-12">
//           <form className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Praveen"
//                   className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="you@example.com"
//                   className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
//                 Company / Business Name
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 placeholder="Your Company"
//                 className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             </div>

//             <div>
//               <label htmlFor="project" className="block text-sm font-semibold text-foreground mb-2">
//                 Project Description
//               </label>
//               <textarea
//                 id="project"
//                 placeholder="Tell me about your project, goals, and requirements..."
//                 rows={5}
//                 className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
//                 required
//               />
//             </div>
// {/* 
//             <div>
//               <label htmlFor="budget" className="block text-sm font-semibold text-foreground mb-2">
//                 Budget Range (Optional)
//               </label>
//               <select
//                 id="budget"
//                 className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//               >
//                 <option value="">Select a budget range</option>
//                 <option value="under-5k">Under $5,000</option>
//                 <option value="5k-10k">$5,000 - $10,000</option>
//                 <option value="10k-25k">$10,000 - $25,000</option>
//                 <option value="25k+">$25,000+</option>
//               </select>
//             </div> */}

//             <button
//               type="submit"
//               className="w-full px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
//             >
//               Submit Project Details
//             </button>
//           </form>
//         </div>

//         {/* Form Note */}
//         <p className="text-center text-sm text-muted-foreground mt-6">
//           This form is a demonstration. In production, integrate with your email service or backend.
//         </p>
//       </div>
//     </section>
//   );
// }
'use client';

import { useState } from 'react';

export default function CustomProject() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Website Project Inquiry from ${form.name}`;

    const body = `
Hi,

My name is ${form.name}, and I’m interested in building a website for my business.

Here are my details:

Name: ${form.name}
Email: ${form.email}
Company: ${form.company || 'Not specified'}

Project Description:
${form.project}

Looking forward to your response.

Best regards,  
${form.name}
`;

    const mailtoLink = `mailto:jayasurya007x@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Contact
          </span>

          {/* SEO-optimized H2 */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get a Website for Your Business
          </h2>

          {/* AEO-friendly description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for a website or landing page for your business? Share your project details below and get a fast, modern, and conversion-focused website built to attract customers and grow your business.
          </p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border/50 rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Business Name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Your business name"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Project */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Website / Project Details
              </label>
              <textarea
                id="project"
                placeholder="Describe your website, landing page, or business requirements..."
                rows={5}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition"
            >
              Get My Website
            </button>

          </form>
        </div>

        {/* AEO Boost */}
        <div className="text-center mt-10 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-3">
            How do I start a website project?
          </h3>
          <p className="text-muted-foreground text-sm">
            To start a website project, simply share your business details, goals, and requirements. Once submitted, you will receive a response with next steps, timeline, and recommendations.
          </p>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          This will open your email app with pre-filled project details.
        </p>

      </div>
    </section>
  );
}
