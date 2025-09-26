
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Quote, ExternalLink, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Book() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Joni's vulnerability and strength shine through every page. This book changed my perspective on healing.",
      author: "Sarah M.",
      role: "Marketing Executive"
    },
    {
      quote: "Finally, someone who speaks the truth about transformation. It's messy, it's hard, and it's worth it.",
      author: "Marcus L.",
      role: "Entrepreneur"
    },
    {
      quote: "This isn't another self-help book. It's a roadmap written by someone who's walked the path.",
      author: "Dr. Patricia K.",
      role: "Therapist"
    }
  ];

  const keyThemes = [
    {
      icon: Heart,
      title: "Breaking Generational Patterns",
      description: "Learn how to identify and interrupt the cycles that have held your family back for generations."
    },
    {
      icon: Star,
      title: "Transforming Pain into Power",
      description: "Discover the alchemy of turning your deepest wounds into your greatest strengths."
    },
    {
      icon: BookOpen,
      title: "Practical Tools for Healing",
      description: "Get actionable strategies, exercises, and frameworks you can implement immediately."
    }
  ];

  return (
    <section id="book" className="py-20 bg-gradient-to-br from-jw-accent2/5 via-white to-jw-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            New Release
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-jw-accent">Burned, Blocked</span> &{" "}
            <span className="text-jw-accent3">Better Than Ever</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A raw, honest memoir about transformation, resilience, and the messy journey 
            from victim to victor. This isn't just my story—it's a blueprint for your breakthrough.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Card className="p-8 shadow-2xl bg-gradient-to-br from-white to-jw-accent/5">
              <div className="text-center mb-8">
                <div className="w-48 h-64 mx-auto mb-6 bg-gradient-to-br from-jw-accent to-jw-accent4 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <BookOpen className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">BURNED, BLOCKED</h3>
                    <p className="text-sm mb-2">&</p>
                    <h3 className="font-bold text-lg mb-4">BETTER THAN EVER</h3>
                    <p className="text-xs opacity-90">by JONI WOODS</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">(4.9/5 from early readers)</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">About This Book</h4>
                  <p className="text-gray-600 leading-relaxed">
                    This memoir chronicles my journey from childhood trauma to transformation leadership. 
                    It's a story of resilience, redemption, and the courage to choose healing over hiding. 
                    But more than that, it's a practical guide for anyone ready to break free from their past 
                    and create an extraordinary future.
                  </p>
                </div>

                <div className="space-y-4">
                  {keyThemes.map((theme, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-start"
                    >
                      <theme.icon className="w-6 h-6 text-jw-accent2 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">{theme.title}</h5>
                        <p className="text-sm text-gray-600">{theme.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <Button 
                    onClick={() => window.open("https://journeylifecoaching.life/", "_blank")}
                    className="w-full bg-jw-accent hover:bg-jw-accent/90 text-lg py-3"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Get Your Copy Now
                  </Button>
                  <Button 
                    onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
                    variant="outline"
                    className="w-full border-jw-accent3 text-jw-accent3 hover:bg-jw-accent3 hover:text-white"
                  >
                    Book Signing & Discussion
                  </Button>
                </div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Early Readers Are Saying</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <Quote className="w-8 h-8 text-jw-accent2 mb-3" />
                      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <footer>
                        <cite className="font-semibold text-gray-900">
                          {testimonial.author}
                        </cite>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </footer>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-r from-jw-accent4/5 to-jw-accent3/5 border-0">
              <h4 className="font-bold text-gray-900 mb-3">Perfect for:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Anyone feeling stuck in repetitive patterns</li>
                <li>• People seeking authentic stories of transformation</li>
                <li>• Individuals ready to break generational cycles</li>
                <li>• Those who want practical tools for healing</li>
                <li>• Anyone who believes healing is possible</li>
              </ul>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-jw-accent/5 to-jw-accent2/5 border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Own Transformation Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              This book is more than a memoir—it's an invitation. An invitation to stop hiding, 
              start healing, and discover the powerful person you were always meant to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("https://journeylifecoaching.life/", "_blank")}
                className="bg-jw-accent hover:bg-jw-accent/90"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Order Now
              </Button>
              <Button 
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="border-jw-accent3 text-jw-accent3 hover:bg-jw-accent3 hover:text-white"
              >
                Read Success Stories
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
