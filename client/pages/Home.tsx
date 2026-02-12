import { Layout } from "@/components/Layout";
import { Headphones, Radio, Zap, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be submitted to Formspree via the form action
    // Just show a success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-20 px-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
            <Radio className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium">Join 5000+ students learning to DJ</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Turn Your Passion
            </span>
            <br />
            <span className="text-foreground">into Professional Skills</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn from industry experts. Master music production, mixing, and live performance. Start your DJ journey today with comprehensive courses designed for all levels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/courses" className="btn-outline inline-flex items-center justify-center gap-2">
              Explore Courses
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Users, label: "Active Students", value: "5000+" },
              { icon: Headphones, label: "Hours of Content", value: "200+" },
              { icon: Zap, label: "Expert Instructors", value: "15+" },
              { icon: Radio, label: "Success Rate", value: "98%" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-4 bg-card/50 border border-border rounded-lg backdrop-blur-sm"
                >
                  <Icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with any of our popular courses and progress at your own pace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "DJ Fundamentals",
                description:
                  "Master the basics of DJing including equipment, beatmatching, and mixing techniques.",
                level: "Beginner",
                duration: "4 weeks",
              },
              {
                title: "Advanced Mixing",
                description:
                  "Take your mixing skills to the next level with professional techniques and sound design.",
                level: "Intermediate",
                duration: "6 weeks",
              },
              {
                title: "Live Performance",
                description:
                  "Learn how to engage crowds, read the room, and deliver unforgettable sets.",
                level: "Advanced",
                duration: "8 weeks",
              },
            ].map((course, i) => (
              <div
                key={i}
                className="group p-6 bg-background border border-border rounded-xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
              >
                <div className="mb-4 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center">
                  <Headphones className="w-12 h-12 text-secondary opacity-50" />
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {course.description}
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {course.level}
                  </span>
                  <span>{course.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/courses" className="btn-secondary inline-flex items-center gap-2">
              View All Courses
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Photo Description Section */}
      <section className="py-20 px-4">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-30 rounded-2xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 aspect-square rounded-2xl border border-border overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <Headphones className="w-32 h-32 text-secondary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg font-medium">
                      Professional DJ Studio Environment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professional DJ Training from Industry Leaders
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Learn from DJs who have performed at world-renowned clubs and festivals. Our instructors bring real-world experience and cutting-edge techniques to every lesson.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Live performance techniques",
                  "Music production & sound design",
                  "Crowd management & reading",
                  "Equipment setup & troubleshooting",
                  "Building your DJ brand",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-secondary-foreground">✓</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Start Learning Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-primary/20 to-secondary/20 border-y border-border"
      >
        <div className="section-container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Master DJing?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get instant access to our free intro course. No credit card required.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Welcome aboard!</h3>
                <p className="text-muted-foreground">
                  Check your email for your first course. Get ready to make some beats!
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    What interests you most? (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="e.g., Live mixing, production, equipment setup"
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Get Free Access
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Students Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "These courses completely transformed my DJing skills. I went from bedroom DJ to club resident in 3 months!",
                author: "Alex M.",
                role: "Club DJ",
              },
              {
                quote:
                  "The production course taught me more in 6 weeks than I learned on my own in 2 years. Highly recommend!",
                author: "Jordan K.",
                role: "Producer",
              },
              {
                quote:
                  "Best investment I've made. The live performance techniques are game-changing. Already landed my first paid gigs!",
                author: "Taylor P.",
                role: "Aspiring DJ",
              },
            ].map((testimonial, i) => (
              <div key={i} className="p-6 bg-background border border-border rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-secondary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
