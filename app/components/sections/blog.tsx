
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Play, ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      category: "Healing",
      title: "Why Healing Isn't Linear (And That's Okay)",
      excerpt: "Stop expecting your healing journey to be a straight line. Here's why the messy, winding path is actually the most authentic way to transform.",
      date: "September 20, 2024",
      readTime: "5 min read",
      color: "jw-accent"
    },
    {
      category: "Relationships",
      title: "Breaking Generational Patterns in Your Family",
      excerpt: "The cycles that trapped your ancestors don't have to trap you. Learn how to identify and interrupt patterns that have been passed down for generations.",
      date: "September 15, 2024",
      readTime: "8 min read",
      color: "jw-accent2"
    },
    {
      category: "Growth",
      title: "From Victim to Victor: Reclaiming Your Power",
      excerpt: "Your past doesn't define your future. Discover the mindset shifts that transform victimhood into victory and pain into purpose.",
      date: "September 10, 2024",
      readTime: "6 min read",
      color: "jw-accent3"
    }
  ];

  const videos = [
    {
      title: "The Truth About Transformation",
      description: "Why most people fail at changing their lives and what to do instead.",
      duration: "12:45",
      views: "25K"
    },
    {
      title: "Healing Your Inner Child",
      description: "A gentle approach to addressing childhood wounds and trauma.",
      duration: "18:30",
      views: "42K"
    },
    {
      title: "Setting Boundaries with Love",
      description: "How to protect your energy without pushing people away.",
      duration: "15:20",
      views: "38K"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-jw-accent2/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Insights & Resources
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wisdom for Your{" "}
            <span className="bg-gradient-to-r from-jw-accent to-jw-accent3 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free resources, insights, and practical guidance to support you on your 
            transformation journey. Because healing shouldn't be a solo adventure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Blog Posts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Latest Articles</h3>
              <Button 
                onClick={() => window.open("https://journeylifecoaching.life/", "_blank")}
                variant="outline"
                size="sm"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
            
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className={`bg-${post.color}/10 text-${post.color}`}>
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-jw-accent transition-colors">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <div className="flex items-center text-jw-accent font-medium text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Video Insights</h3>
              <Button 
                onClick={() => window.open("https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw", "_blank")}
                variant="outline"
                size="sm"
              >
                <Play className="w-4 h-4 mr-2" />
                YouTube Channel
              </Button>
            </div>
            
            <div className="space-y-6">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-jw-accent to-jw-accent3 p-3 rounded-lg mr-4 group-hover:scale-105 transition-transform">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-jw-accent transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                          {video.description}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{video.duration}</span>
                          <span className="mx-2">•</span>
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-jw-accent4/5 to-jw-accent/5 border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Connected to Your Transformation
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get weekly insights, practical tools, and encouragement delivered straight to your inbox. 
              Plus, be the first to know about new resources and upcoming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("https://journeylifecoaching.life/", "_blank")}
                className="bg-jw-accent hover:bg-jw-accent/90"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Subscribe to Newsletter
              </Button>
              <Button 
                onClick={() => window.open("https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw", "_blank")}
                variant="outline"
                className="border-jw-accent3 text-jw-accent3 hover:bg-jw-accent3 hover:text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch on YouTube
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
