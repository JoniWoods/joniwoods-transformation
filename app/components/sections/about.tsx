
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Mic, Target, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const credentials = [
    "Human Connection & Culture Specialist",
    "Certified Transformation Coach",
    "Fortune 500 Speaker",
    "Published Author",
    "Conflict Resolution Expert",
    "Group Dynamics Facilitator"
  ];

  const achievements = [
    {
      icon: Heart,
      title: "Personal Transformation",
      description: "Overcame childhood trauma and generational patterns to become a beacon of healing"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Helped thousands break free from limiting beliefs and toxic cycles"
    },
    {
      icon: Mic,
      title: "Thought Leadership",
      description: "Keynote speaker at major conferences and Fortune 500 companies"
    },
    {
      icon: Target,
      title: "Proven Results",
      description: "25+ years of measurable success in human development and organizational change"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-jw-accent3/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            About Joni Woods
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From <span className="text-jw-accent">Broken</span> to{" "}
            <span className="text-jw-accent3">Breakthrough</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey from pain to purpose has equipped me with the tools, wisdom, and heart 
            to guide others through their own transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  I wasn't born into a life of ease. Like many of you, I experienced trauma, 
                  betrayal, and moments where I felt completely lost. But here's what I learned: 
                  <strong className="text-jw-accent"> healing isn't about perfection—it's about progress</strong>.
                </p>
                <p>
                  For over 25 years, I've dedicated my life to understanding the complexities of 
                  human connection, culture, and transformation. I've worked with individuals from 
                  all walks of life, from C-suite executives to single parents, helping them break 
                  generational patterns and create lasting change.
                </p>
                <p>
                  My approach is real, raw, and results-driven. I don't sugarcoat the process 
                  because transformation requires courage, commitment, and community. But I promise you this: 
                  <strong className="text-jw-accent3"> on the other side of your pain is your power</strong>.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Credentials & Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {credentials.map((credential, index) => (
                  <Badge key={index} variant="outline" className="text-jw-accent4">
                    {credential}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <achievement.icon className="w-8 h-8 text-jw-accent2 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-jw-accent/5 to-jw-accent3/5 border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every journey begins with a single step. Let's take that step together 
              and discover what's possible when you choose healing over hiding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("https://journeylifecoaching.life/", "_blank")}
                className="bg-jw-accent hover:bg-jw-accent/90"
              >
                Visit My Main Website
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="border-jw-accent3 text-jw-accent3 hover:bg-jw-accent3 hover:text-white"
              >
                Explore Services
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
