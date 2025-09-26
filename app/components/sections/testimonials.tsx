
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, Calendar, Users, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Joni didn't just help me heal from my past—she helped me create a future I never thought possible. Her approach is direct, compassionate, and transformative.",
      author: "Jennifer S.",
      role: "CEO, Tech Startup",
      transformation: "Overcame imposter syndrome",
      rating: 5
    },
    {
      quote: "After 3 months working with Joni, I finally understood how to break the toxic patterns I'd been repeating for 20 years. My relationships have completely transformed.",
      author: "Michael D.",
      role: "Father & Entrepreneur",
      transformation: "Healed family dynamics",
      rating: 5
    },
    {
      quote: "Joni's group sessions gave me a community I never knew I needed. Watching others heal gave me permission to heal too. This work is life-changing.",
      author: "Dr. Amanda R.",
      role: "Physician",
      transformation: "Found emotional balance",
      rating: 5
    },
    {
      quote: "I came to Joni burned out and defeated. Six months later, I'm running my own business and finally living authentically. She showed me my power.",
      author: "Carlos M.",
      role: "Former Corporate Executive",
      transformation: "Career & life pivot",
      rating: 5
    },
    {
      quote: "The conflict resolution skills Joni taught saved my marriage. We went from divorce papers to renewal vows. She doesn't just teach—she transforms lives.",
      author: "Lisa & David K.",
      role: "Married 15 Years",
      transformation: "Marriage restoration",
      rating: 5
    },
    {
      quote: "As a Fortune 500 company, we needed someone who could address culture change at scale. Joni delivered beyond our expectations. Our team dynamics are completely different.",
      author: "Robert H.",
      role: "VP Human Resources",
      transformation: "Organizational culture shift",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Lives Transformed"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate"
    },
    {
      icon: Heart,
      number: "25+",
      label: "Years Experience"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Client Rating"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real People, Real{" "}
            <span className="bg-gradient-to-r from-jw-accent to-jw-accent3 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These aren't just testimonials—they're transformation stories from people who 
            chose to face their pain and discover their power.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-jw-accent/10 to-jw-accent3/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-jw-accent2" />
              </div>
              <div className="text-3xl font-bold text-jw-accent mb-2 count-up">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-jw-accent2 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <footer>
                    <cite className="font-semibold text-gray-900 not-italic">
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                    <Badge variant="outline" className="text-jw-accent3 text-xs">
                      {testimonial.transformation}
                    </Badge>
                  </footer>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-jw-accent4/5 to-jw-accent/5 border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These transformations didn't happen overnight, but they did happen. 
              Your breakthrough is waiting for you. The question is: are you ready to claim it?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
                className="bg-jw-accent hover:bg-jw-accent/90"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Start Your Transformation
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
