

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-jw-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Footer Content */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-myriad-semibold text-jw-yellow mb-2">
              Joni Woods
            </h3>
            <p className="text-jw-yellow-light italic mb-4 font-myriad-light">
              "Creating the future You want!"
            </p>
            <div className="space-y-2 text-jw-gray">
              <p>Journey Coaching - Human Connection & Culture Specialist</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-myriad-semibold text-jw-yellow mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#about" 
                  className="text-jw-gray hover:text-jw-yellow-light transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#book" 
                  className="text-jw-gray hover:text-jw-yellow-light transition-colors"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-jw-gray hover:text-jw-yellow-light transition-colors"
                >
                  Coaching
                </Link>
              </li>
              <li>
                <Link 
                  href="#transformation-form" 
                  className="text-jw-gray hover:text-jw-yellow-light transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Connect */}
          <div>
            <h4 className="text-lg font-myriad-semibold text-jw-yellow mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link 
                  href="https://journeylifecoaching.life" 
                  target="_blank"
                  className="text-jw-gray hover:text-jw-yellow-light transition-colors"
                >
                  Journey Coaching
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-jw-gray hover:text-jw-yellow-light transition-colors"
                >
                  Free Resources
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-jw-gray hover:text-jw-yellow-light transition-colors"
                >
                  Book Club Guide
                </Link>
              </li>
            </ul>
            
            <h4 className="text-lg font-myriad-semibold text-jw-yellow mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/joniwoods" 
                target="_blank"
                className="text-jw-gray hover:text-jw-yellow-light transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/joniwoods" 
                target="_blank"
                className="text-jw-gray hover:text-jw-yellow-light transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.facebook.com/joni.woods.9" 
                target="_blank"
                className="text-jw-gray hover:text-jw-yellow-light transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw" 
                target="_blank"
                className="text-jw-gray hover:text-jw-yellow-light transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-jw-gray/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-jw-gray text-sm">
              © 2024 Joni Woods. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="#" 
                className="text-jw-gray hover:text-jw-yellow-light text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#" 
                className="text-jw-gray hover:text-jw-yellow-light text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="#" 
                className="text-jw-gray hover:text-jw-yellow-light text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

