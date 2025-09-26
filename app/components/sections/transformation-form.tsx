
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Send, CheckCircle, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function TransformationForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    challenge: "",
    goal: "",
    timeframe: "",
    experience: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate AI response generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate personalized response based on form data
    const responses = {
      healing: `${formData.name}, your healing journey takes courage. The fact that you're here means you're ready to transform your pain into power. Based on your challenge with ${formData.challenge.toLowerCase()}, I recommend starting with individual coaching sessions where we can address the root patterns holding you back.`,
      
      relationships: `${formData.name}, relationships are our greatest teachers and sometimes our deepest wounds. Your desire to heal ${formData.challenge.toLowerCase()} shows you're ready to break generational patterns. Group dynamics sessions might be perfect for you - there's incredible power in healing with others.`,
      
      career: `${formData.name}, when our work doesn't align with our soul, we feel it everywhere. Your goal to ${formData.goal.toLowerCase()} requires both inner work and strategic action. Let's explore how leadership coaching can help you step into your authentic power.`,
      
      default: `${formData.name}, thank you for your vulnerability in sharing your story. Your goal to ${formData.goal.toLowerCase()} is absolutely achievable. Based on your responses, I believe you would benefit most from a combination of individual coaching and our transformation workshops. Let's schedule a virtual coffee to create your personalized path forward.`
    };

    let responseType = "default";
    if (formData.challenge.toLowerCase().includes("relationship") || formData.challenge.toLowerCase().includes("family")) {
      responseType = "relationships";
    } else if (formData.challenge.toLowerCase().includes("career") || formData.challenge.toLowerCase().includes("work")) {
      responseType = "career";
    } else if (formData.challenge.toLowerCase().includes("trauma") || formData.challenge.toLowerCase().includes("heal")) {
      responseType = "healing";
    }

    setAiResponse(responses[responseType as keyof typeof responses]);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="transform" className="py-20 bg-gradient-to-br from-jw-accent/5 via-white to-jw-accent3/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 text-center shadow-xl bg-gradient-to-br from-white to-jw-accent/5">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Transformation Journey Begins Now
              </h2>
              
              <div className="bg-gradient-to-r from-jw-accent4/5 to-jw-accent3/5 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-jw-accent2 mr-2" />
                  Your Personalized Insight
                </h3>
                <p className="text-gray-700 leading-relaxed italic">{aiResponse}</p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => window.open("https://calendly.com/joniwoods/virtual-coffee", "_blank")}
                  size="lg"
                  className="bg-jw-accent hover:bg-jw-accent/90 w-full sm:w-auto"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Schedule Your Virtual Coffee
                </Button>
                
                <p className="text-gray-600 text-sm">
                  I'll personally review your responses and come prepared with specific 
                  recommendations for your unique situation.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="transform" className="py-20 bg-gradient-to-br from-jw-accent/5 via-white to-jw-accent3/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            Start Your Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="text-jw-accent">Transformation</span> Assessment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your story with me, and I'll provide personalized insights and recommendations 
            for your unique journey. This is your first step toward breakthrough.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="What should I call you?"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="challenge">What's your biggest challenge right now? *</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => handleInputChange("challenge", e.target.value)}
                  placeholder="Share what's been weighing on your heart... (e.g., relationship patterns, career stagnation, family dynamics, personal healing)"
                  required
                  className="mt-1 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="goal">What would transformation look like for you? *</Label>
                <Textarea
                  id="goal"
                  value={formData.goal}
                  onChange={(e) => handleInputChange("goal", e.target.value)}
                  placeholder="Paint me a picture of your ideal future... (e.g., healthy relationships, authentic career, healed family patterns)"
                  required
                  className="mt-1 min-h-[100px]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>When do you want to see change? *</Label>
                  <Select onValueChange={(value) => handleInputChange("timeframe", value)} required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">I'm ready now - as soon as possible</SelectItem>
                      <SelectItem value="3months">Within 3 months</SelectItem>
                      <SelectItem value="6months">Within 6 months</SelectItem>
                      <SelectItem value="1year">This year</SelectItem>
                      <SelectItem value="exploring">Just exploring options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Your experience with personal development:</Label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New to this journey</SelectItem>
                      <SelectItem value="some">Some therapy/coaching experience</SelectItem>
                      <SelectItem value="experienced">Experienced with personal work</SelectItem>
                      <SelectItem value="advanced">Advanced - ready for deep work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Is there anything else you want me to know?</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Any additional context, questions, or specific areas you'd like to focus on..."
                  className="mt-1"
                />
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.challenge || !formData.goal || !formData.timeframe}
                  size="lg"
                  className="bg-jw-accent hover:bg-jw-accent/90 px-8"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                      Creating Your Assessment...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Get My Personalized Insights
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-gray-600 mt-4">
                  Your information is kept completely confidential. I personally review every submission.
                </p>
              </div>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <Card className="p-6 text-center bg-gradient-to-br from-jw-accent/5 to-white">
            <Target className="w-8 h-8 text-jw-accent mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Personalized</h3>
            <p className="text-sm text-gray-600">Every response is customized to your unique situation and goals</p>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-jw-accent2/5 to-white">
            <Heart className="w-8 h-8 text-jw-accent2 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Confidential</h3>
            <p className="text-sm text-gray-600">Your story is safe with me - complete privacy guaranteed</p>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-jw-accent3/5 to-white">
            <Sparkles className="w-8 h-8 text-jw-accent3 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Actionable</h3>
            <p className="text-sm text-gray-600">Get specific next steps and recommendations you can act on today</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
