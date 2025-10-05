
export default function HomePage() {
  return (
    <main>
      {/* Articles Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-xs font-semibold text-[#991111] uppercase tracking-wider mb-3">
                Personal Growth
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-serif">
                With all my love, weya J
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                A heartfelt exploration of vulnerability, healing, and the courage it takes to show up authentically in our relationships.
              </p>
              <div className="text-xs text-blue-600 mb-4">
                Vulnerability · Healing · Authenticity
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-[#991111] hover:text-[#CC3333] transition-colors">
                Read Full Article
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>

            {/* Article 2 */}
            <article className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-xs font-semibold text-[#991111] uppercase tracking-wider mb-3">
                Mindset
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-serif">
                Not Texts, Affirmations!
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Shifting perspective from waiting like a challenge to work to seeing daily affirmations of our worth in every moment.
              </p>
              <div className="text-xs text-blue-600 mb-4">
                Mindset · Growth · Resilience
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-[#991111] hover:text-[#CC3333] transition-colors">
                Read Full Article
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>

            {/* Article 3 */}
            <article className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-xs font-semibold text-[#991111] uppercase tracking-wider mb-3">
                Journey
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-serif">
                The North Star
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                A poetic journey about finding direction in life when everything feels uncertain and the path forward feels unclear.
              </p>
              <div className="text-xs text-blue-600 mb-4">
                Direction · Poetry · Life
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-[#991111] hover:text-[#CC3333] transition-colors">
                Read Full Article
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>

            {/* Article 4 */}
            <article className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-xs font-semibold text-[#991111] uppercase tracking-wider mb-3">
                Self-Compassion
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-serif">
                Show Yourself Grace
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Learning to extend the same kindness that we offer others; why self-compassion is crucial for growth.
              </p>
              <div className="text-xs text-blue-600 mb-4">
                Self-Compassion · Grace · Growth
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-[#991111] hover:text-[#CC3333] transition-colors">
                Read Full Article
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>

            {/* Article 5 */}
            <article className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-xs font-semibold text-[#991111] uppercase tracking-wider mb-3">
                Direction
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-serif">
                Finding Your Way
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Sometimes the most important journey is the one back to seeing yourself and your life purpose.
              </p>
              <div className="text-xs text-blue-600 mb-4">
                Purpose · Direction · Self-Discovery
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-[#991111] hover:text-[#CC3333] transition-colors">
                Read Full Article
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>

            {/* Article 6 */}
            <article className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-xs font-semibold text-[#991111] uppercase tracking-wider mb-3">
                Mindfulness
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-serif">
                Mindful Moments
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Finding peace and wisdom in life's everyday moments and learning to be present in each experience.
              </p>
              <div className="text-xs text-blue-600 mb-4">
                Mindfulness · Peace · Presence
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-[#991111] hover:text-[#CC3333] transition-colors">
                Read Full Article
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-6 text-center bg-white">
        <div className="flex gap-4 justify-center flex-wrap px-4">
          <a
            href="https://www.amazon.com/stores/Joni-Woods/author/B0D5FZH647"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold uppercase tracking-wide rounded-md transition-colors"
          >
            Visit Blog
          </a>
          <a
            href="https://www.youtube.com/@joniwoods7141"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#991111] hover:bg-[#CC3333] text-white text-sm font-bold uppercase tracking-wide rounded-md transition-colors"
          >
            YouTube
          </a>
        </div>
      </section>

      {/* Ready to Begin Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Whether you're navigating divorce, seeking healthier relationships, or building emotional intelligence in your organization, I'm here to help.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-[#991111] font-bold mr-3 mt-1">✓</span>
                  <span>100% Confidential Conversations</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-[#991111] font-bold mr-3 mt-1">✓</span>
                  <span>15+ Years of Experience</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-[#991111] font-bold mr-3 mt-1">✓</span>
                  <span>Transforming Pain Into Power</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/joniwoods/virtual-coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#991111] hover:bg-[#CC3333] text-white text-sm font-bold uppercase tracking-wide rounded-md transition-colors text-center"
                >
                  Book Discovery Call
                </a>
                <a
                  href="https://books2read.com/u/mq2K7v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold uppercase tracking-wide rounded-md transition-colors text-center"
                >
                  Get the Book
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="bg-white border border-gray-200 rounded-lg p-8 h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif">Connect With Me</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.amazon.com/stores/Joni-Woods/author/B0D5FZH647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#991111] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    Journey Life Coaching Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/joni.woods.77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#991111] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/joniwoods/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#991111] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@joniwoods"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#991111] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@joniwoods7141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#991111] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    YouTube Channel
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#991111] to-[#770000] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-4 font-serif">Joni Woods</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Cultural Strategist | Life Coach | Author of <em>Burned, Blocked, and Better Than Ever</em>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-4 font-serif">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.amazon.com/stores/Joni-Woods/author/B0D5FZH647" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-yellow-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://books2read.com/u/mq2K7v" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-yellow-400 transition-colors">
                    Book
                  </a>
                </li>
                <li>
                  <a href="https://calendly.com/joniwoods/virtual-coffee" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-yellow-400 transition-colors">
                    Coaching
                  </a>
                </li>
                <li>
                  <a href="mailto:joniwoods@gmail.com" className="text-sm text-white/90 hover:text-yellow-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-4 font-serif">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.youtube.com/@joniwoods7141" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-yellow-400 transition-colors">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.com/stores/Joni-Woods/author/B0D5FZH647" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-yellow-400 transition-colors">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="https://books2read.com/u/mq2K7v" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-yellow-400 transition-colors">
                    Book Preview
                  </a>
                </li>
                <li>
                  <a href="https://calendly.com/joniwoods/virtual-coffee" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-yellow-400 transition-colors">
                    Speaking
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-white/70">
              &copy; 2025 Joni Woods. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
