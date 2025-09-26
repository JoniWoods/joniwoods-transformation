
"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-jw-accent/5 via-white to-jw-accent3/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-jw-accent2/10 text-jw-accent2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4 mr-2" />
              Transformation Coach & Culture Specialist
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-jw-accent">Healing</span> is messy.
            <br />
            But so is becoming{" "}
            <span className="bg-gradient-to-r from-jw-accent3 to-jw-accent4 bg-clip-text text-transparent">
              whole
            </span>.
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="font-semibold text-jw-accent2">Burned, Blocked & Better Than Ever</span>
            <br />
            Transform your pain into power. Break generational patterns. Create the future you deserve.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
              size="lg"
              className="bg-jw-accent hover:bg-jw-accent/90 text-white px-8 py-4 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Virtual Coffee
            </Button>
            
            <Button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="border-jw-accent3 text-jw-accent3 hover:bg-jw-accent3 hover:text-white px-8 py-4 text-lg"
            >
              Learn My Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-jw-accent mb-2 count-up">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-jw-accent2 mb-2 count-up">10,000+</div>
              <div className="text-gray-600">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-jw-accent3 mb-2 count-up">500+</div>
              <div className="text-gray-600">Fortune 500 Talks</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
