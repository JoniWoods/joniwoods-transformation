
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Youtube, ExternalLink, MapPin, Phone, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Calendar,
      title: "Book a Virtual Coffee",
      description: "Schedule a complimentary 30-minute conversation to explore how we can work together.",
      action: "Schedule Now",
      link: "https://calendly.com/joniwoods/virtual-coffee",
      color: "jw-accent"
    },
    {
      icon: ExternalLink,
      title: "Main Website",
      description: "Explore my full range of services, resources, and coaching programs.",
      action: "Visit Site",
      link: "https://journeylifecoaching.life/",
      color: "jw-accent2"
    },
    {
      icon: Youtube,
      title: "YouTube Channel",
      description: "Free transformation content, healing insights, and practical guidance.",
      action: "Watch Videos",
      link: "https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw",
      color: "jw-accent3"
    }
  ];

  const quickLinks = [
    { label: "About Joni", id: "about" },
    { label: "Services", id: "services" },
    { label: "Book", id: "book" },
    { label: "Testimonials", id: "testimonials" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-jw-accent4/5 via-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Begin Your{" "}
            <span className="bg-gradient-to-r from-jw-accent to-jw-accent3 bg-clip-text text-transparent">
              Transformation?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your healing journey doesn't have to be walked alone. Let's connect and explore 
            how we can work together to create the breakthrough you've been seeking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
            >
              <Card className={`p-8 h-full text-center hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-${method.color}/5 to-white`}>
                <div className={`p-4 bg-${method.color}/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-${method.color}/20 transition-colors`}>
                  <method.icon className={`w-8 h-8 text-${method.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {method.description}
                </p>
                
                <Button
                  onClick={() => window.open(method.link, "_blank")}
                  className={`w-full bg-${method.color} hover:bg-${method.color}/90 text-white`}
                >
                  {method.action}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-16"
        >
          <Card className="p-8 bg-gradient-to-r from-jw-accent/5 to-jw-accent3/5 border-0">
            <Heart className="w-12 h-12 text-jw-accent2 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Every Journey Begins with a Single Step
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              I believe in the power of human connection and authentic conversation. 
              Your virtual coffee session is completely complimentary—no sales pitch, 
              just real talk about your goals and how I might support your journey.
            </p>
            <Button 
              onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
              size="lg"
              className="bg-jw-accent hover:bg-jw-accent/90 px-8 py-4 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Free Virtual Coffee
            </Button>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="border-t pt-12"
        >
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-jw-accent mb-4">Joni Woods</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Human Connection & Culture Specialist dedicated to helping individuals 
                transform their pain into power and break generational patterns.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Healing is messy. But so is becoming whole.</strong>
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-600 hover:text-jw-accent transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
              <div className="space-y-3">
                <Button
                  onClick={() => window.open("https://journeylifecoaching.life/", "_blank")}
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto text-gray-600 hover:text-jw-accent"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Main Website
                </Button>
                <Button
                  onClick={() => window.open("https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw", "_blank")}
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto text-gray-600 hover:text-jw-accent"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
                <Button
                  onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto text-gray-600 hover:text-jw-accent"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center">
            <p className="text-gray-600">
              © 2024 Joni Woods. All rights reserved. | 
              <span className="text-jw-accent font-medium"> Burned, Blocked & Better Than Ever</span>
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
