
import React, { useState } from 'react';
import MekoTorello from "../Assets/MekoTorello.png";
import TempletonPeck from "../Assets/TempletonPeck.png";
import MichaelKnight from "../Assets/MichaelKnight.png";
import Sarahchen from "../Assets/Sarahchen.jpg";
import AngelaBower from "../Assets/AngelaBower.png";
import  MayaPatel from "../Assets/MayaPatel.jpg";



const Speakers = () => {
  const [showAll, setShowAll] = useState(false);

  const speakers = [
    {
      name: "Meko Torello",
      role: "UX DESIGNER",
      image: MekoTorello,
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        dribbble: "#"
      }
    },
    { name: "Templeton Peck", role: "DEVELOPER", image: TempletonPeck, socials: {} },
    { name: "Michael Knight", role: "MARKETER", image: MichaelKnight, socials: {} },
    { name: "Angela Bower", role: "ENTREPRENEUR", image: AngelaBower, socials: {} },
    { name: "Sarah Chen", role: "DESIGNER", image: Sarahchen, socials: {} },
    { name: "David Rodriguez", role: "ENGINEER", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", socials: {} },
    // { name: "David Rodriguez", role: "ENGINEER", image: DavidRodriguez, socials: {} },
    { name: "Maya Patel", role: "STRATEGIST", image: MayaPatel, socials: {} },
    // { name: "James Wilson", role: "FOUNDER", image: JamesWilson, socials: {} },
    // { name: "Maya Patel", role: "STRATEGIST", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face", socials: {} },
    { name: "James Wilson", role: "FOUNDER", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", socials: {} },
  ];

  const visibleSpeakers = showAll ? speakers : speakers.slice(0, 4);

  return (
    <div className="bg-amber-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Meet the top
              <br />
              incredible <span className="relative inline-block">
                speakers
                <div className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-300 -z-10"></div>
              </span>
            </h2>
            
            {/* Decorative arrow */}
            <div className="absolute -top-4 right-0">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-purple-600">
                <path 
                  d="M10 30 Q20 10 35 25 M35 25 L30 20 M35 25 L30 30" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {showAll ? "Hide" : "View All Speakers"}
          </button>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {visibleSpeakers.map((speaker, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                {/* Speaker Image Container */}
                <div className="relative h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                  <img 
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-gray-700 tracking-wide">{speaker.role}</span>
                  </div>
                  
                  {/* Social Links - Show on hover */}
                  {Object.keys(speaker.socials).length > 0 && (
                    <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {speaker.socials.linkedin && (
                        <a href={speaker.socials.linkedin} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#0077B5">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {speaker.socials.twitter && (
                        <a href={speaker.socials.twitter} className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      )}
                      {speaker.socials.instagram && (
                        <a href={speaker.socials.instagram} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#E4405F">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      )}
                      {speaker.socials.dribbble && (
                        <a href={speaker.socials.dribbble} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#EA4C89">
                            <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Speaker Info */}
                <div className="p-6 bg-white relative">
                  {/* Decorative element */}
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-yellow-300 rounded-full shadow-md"></div>
                  
                  <div className="pt-2">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight group-hover:text-purple-600 transition-colors duration-300">
                      {speaker.name}
                    </h3>
                    
                    {/* Role with enhanced styling */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 font-medium tracking-wider">
                        {speaker.role}
                      </span>
                      
                      {/* Arrow icon */}
                      <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
              
              {/* Floating background element */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-200/20 via-blue-200/20 to-purple-200/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;