import { Layout } from "@/components/Layout";
import { Headphones, Users, Clock } from "lucide-react";

export default function Courses() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Comprehensive
            <br />
            Course Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a professional DJ, from beginner to advanced levels
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DJ Fundamentals",
                level: "Beginner",
                duration: "4 weeks",
                students: "1,200+",
                description:
                  "Learn the basics of DJing including equipment, beatmatching, and essential mixing techniques for beginners.",
              },
              {
                title: "Beatmatching Mastery",
                level: "Beginner",
                duration: "2 weeks",
                students: "980+",
                description:
                  "Master the art of beatmatching with practical exercises and real-world examples.",
              },
              {
                title: "Advanced Mixing",
                level: "Intermediate",
                duration: "6 weeks",
                students: "650+",
                description:
                  "Take your mixing skills to the next level with professional techniques and advanced sound design.",
              },
              {
                title: "Music Production",
                level: "Intermediate",
                duration: "8 weeks",
                students: "540+",
                description:
                  "Create your own tracks and remixes using professional production tools and workflows.",
              },
              {
                title: "Live Performance",
                level: "Advanced",
                duration: "8 weeks",
                students: "420+",
                description:
                  "Learn how to engage crowds, read the room, and deliver unforgettable sets.",
              },
              {
                title: "Professional Branding",
                level: "Advanced",
                duration: "4 weeks",
                students: "310+",
                description:
                  "Build your DJ brand, grow your audience, and monetize your passion for music.",
              },
            ].map((course, i) => (
              <div
                key={i}
                className="group p-6 bg-card border border-border rounded-xl hover:border-secondary transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20 flex flex-col"
              >
                <div className="mb-4 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center">
                  <Headphones className="w-16 h-16 text-secondary opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded">
                      {course.level}
                    </span>
                    <span className="text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                <button className="btn-secondary w-full mt-auto">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="section-container text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with any course today. Our comprehensive curriculum is designed to take you from beginner to professional DJ.
          </p>
          <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
            Get Started Free
          </a>
        </div>
      </section>
    </Layout>
  );
}
