'use client';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            My Vision
          </h2>
        </div>

        {/* About Content */}
        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am Jayasurya, a 17yo boy from Tamil Nadu. I&apos;m passionate about building quality websites that help businesses grow online. 
            With a focus on clean design, responsive development, and user-centric approach, I create 
            digital experiences that engage visitors and drive results.
          </p>

          <p>
            My commitment is to deliver websites that not only look great but also perform exceptionally well. 
            Every project is an opportunity to solve problems and create meaningful digital solutions that 
            contribute to your business success.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2"></div>
              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2"></div>
              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2"></div>
              <p className="text-sm text-muted-foreground"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
