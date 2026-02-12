import { Layout } from "@/components/Layout";
import { Award, Users, Globe, Zap } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-primary/20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Beat Studio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of DJs through professional education and mentorship
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Beat Studio, we believe that everyone has the potential to become a great DJ. Our mission is to provide world-class education, mentorship, and resources to help aspiring DJs unlock their potential and build successful careers in music.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2020, we've trained over 5,000 students from more than 50 countries. Our courses are designed by industry professionals who are actively working in clubs, festivals, and studios around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We're committed to the highest standards of education and content quality.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "We foster a supportive community where students help each other grow.",
              },
              {
                icon: Globe,
                title: "Accessibility",
                description:
                  "Quality DJ education should be accessible to everyone, regardless of background.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "We stay at the cutting edge of DJ technology and music production trends.",
              },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="p-6 bg-background border border-border rounded-xl text-center">
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "DJ Alex Johnson",
                role: "Lead Instructor",
                bio: "15+ years of experience performing at major festivals worldwide",
              },
              {
                name: "Music Producer Sam Chen",
                role: "Production Instructor",
                bio: "Grammy-nominated producer and sound engineer",
              },
              {
                name: "DJ Luna Rodriguez",
                role: "Live Performance Coach",
                bio: "Resident DJ at prestigious clubs across 3 continents",
              },
            ].map((instructor, i) => (
              <div
                key={i}
                className="text-center p-6 bg-card border border-border rounded-xl hover:border-secondary transition-all"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">{instructor.name}</h3>
                <p className="text-secondary font-semibold mb-2">{instructor.role}</p>
                <p className="text-muted-foreground text-sm">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="section-container text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Learn from the best and become part of a global community of passionate DJs.
          </p>
          <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Journey Today
          </a>
        </div>
      </section>
    </Layout>
  );
}
