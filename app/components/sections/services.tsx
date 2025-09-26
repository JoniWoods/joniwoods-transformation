
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Users, Mic2, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: User,
      title: "Individual Coaching",
      subtitle: "1-on-1 Transformation",
      description: "Personalized coaching sessions designed to break through your specific blocks and create lasting change. We'll work together to identify patterns, heal wounds, and build the life you truly want.",
      features: [
        "Deep pattern recognition",
        "Trauma-informed healing",
        "Goal achievement strategies",
        "Weekly accountability",
        "Custom transformation plan"
      ],
      color: "jw-accent",
      bgColor: "jw-accent/5"
    },
    {
      icon: Users,
      title: "Group Dynamics",
      subtitle: "Collective Healing",
      description: "Experience the power of community healing through carefully facilitated group sessions. Connect with others on similar journeys while receiving expert guidance.",
      features: [
        "Peer support network",
        "Shared vulnerability",
        "Group accountability",
        "Collective wisdom",
        "Cost-effective option"
      ],
      color: "jw-accent2",
      bgColor: "jw-accent2/5"
    },
    {
      icon: Mic2,
      title: "Workshops & Speaking",
      subtitle: "Corporate & Events",
      description: "Powerful presentations that transform workplace culture and individual mindsets. From Fortune 500 companies to intimate workshops, I deliver actionable insights.",
      features: [
        "Keynote presentations",
        "Workshop facilitation",
        "Team building sessions",
        "Culture transformation",
        "Custom content creation"
      ],
      color: "jw-accent3",
      bgColor: "jw-accent3/5"
    },
    {
      icon: MessageSquare,
      title: "Conflict Resolution",
      subtitle: "Relationship Healing",
      description: "Navigate difficult relationships and resolve conflicts with compassion and clarity. Learn communication skills that build bridges instead of walls.",
      features: [
        "Mediation services",
        "Communication training",
        "Boundary setting",
        "Family dynamics",
        "Workplace conflicts"
      ],
      color: "jw-accent4",
      bgColor: "jw-accent4/5"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Services & Offerings
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Path to{" "}
            <span className="bg-gradient-to-r from-jw-accent to-jw-accent3 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're ready for individual work, group support, or organizational change, 
            I meet you where you are and guide you where you want to go.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
            >
              <Card className={`p-8 h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-${service.bgColor} to-white group`}>
                <div className="flex items-start mb-6">
                  <div className={`p-3 bg-${service.color}/10 rounded-lg mr-4 group-hover:bg-${service.color}/20 transition-colors`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className={`text-${service.color} font-medium`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className={`w-4 h-4 text-${service.color} mr-2 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
                  className={`w-full bg-${service.color} hover:bg-${service.color}/90 text-white`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
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
              Not Sure Which Service is Right for You?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book a complimentary virtual coffee session and let's explore your needs together. 
              No pressure, just conversation and clarity.
            </p>
            <Button 
              onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
              size="lg"
              className="bg-jw-accent hover:bg-jw-accent/90"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Free Consultation
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
