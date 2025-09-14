import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-5">
      <div className="w-full max-w-6xl bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl px-10 py-16 relative overflow-hidden">
        {/* Decorative star element */}
        <div className="absolute top-10 right-20">
          <svg width="32" height="32" viewBox="0 0 24 24" className="text-yellow-400">
            <path 
              d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </div>
        
        {/* Decorative spiral element */}
        <div className="absolute top-16 left-16">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-purple-500">
            <path 
              d="M20 5 Q30 10 25 20 Q20 30 10 25 Q5 20 10 15 Q15 10 20 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Never miss a single news
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Stay informed with all the latest updates and news about our events. Never miss a moment of our 
            exciting and innovative gatherings in the world of technology and beyond.
          </p>
          
          <div className="flex max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 text-gray-900 bg-white rounded-l-xl text-base border-none outline-none placeholder-gray-500"
            />
            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-r-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-10 mb-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-8 lg:mb-0">
            <div className="text-2xl font-bold text-white">
              Eventive
            </div>
            <nav className="flex flex-wrap justify-center lg:justify-start gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Tickets</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Speakers</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Gallery</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
            </nav>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-200"
            >
              <span className="font-bold text-sm">f</span>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-8 text-center lg:text-left">
          <div className="text-gray-500 text-sm mb-4 lg:mb-0">
            Copyright © Designworks All Rights Reserved
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;