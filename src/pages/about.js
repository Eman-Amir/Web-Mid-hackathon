
import React from 'react';
import experience from "../Assets/experience.png"
import skillbuild from "../Assets/skillbuild.jpg"
import speaker from "../Assets/speaker.webp"
import Influencer from "./influencer"


const AboutEvent = () => {
  return (
    <div>
    <div className="min-h-screen bg-white py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M20 20L60 60M20 60L60 20" stroke="black" strokeWidth="2"/>
          <path d="M40 10L40 70M10 40L70 40" stroke="black" strokeWidth="2"/>
          <circle cx="40" cy="40" r="25" stroke="black" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      {/* Star decoration */}
      <div className="absolute top-32 left-16">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" 
                stroke="black" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            About the event
          </h1>
          <div className="max-w-2xl">
            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="font-semibold">Tech Event 2025</span> showcases groundbreaking innovations, featuring keynote talks, 
              interactive workshops, and networking sessions for tech enthusiasts and industry 
              leaders.
            </p>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Unforgettable Moments - with larger height */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-72 sm:h-80 lg:h-96">
              {/* Background Image */}
              <img 
                src={experience}
                alt="experience"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            
            {/* Card Content */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white z-10">
              <p className="text-sm uppercase tracking-wider font-medium mb-2 opacity-90">
                MEMORABLE EXPERIENCE
              </p>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-tight">
                Unforgettable Moments at Eventive 2025
              </h3>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
          </div>

          {/* Card 2 - Storytelling Festival - with larger height */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-72 sm:h-80 lg:h-96">
              {/* Background Image */}
              <img 
                src={skillbuild}
                alt="skillbuild"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            
            {/* Card Content */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white z-10">
              <p className="text-sm uppercase tracking-wider font-medium mb-2 opacity-90">
                SKILLBUILDING WEEK
              </p>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-tight">
                Storytelling Festival
              </h3>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
          </div>

          {/* Card 3 - Build Networking - with larger height */}
          <div className="relative group cursor-pointer sm:col-span-2 lg:col-span-1">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-72 sm:h-80 lg:h-96">
              {/* Background Image */}
              <img 
                src={speaker}
                alt="speaker"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Card Content */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white z-10">
              <p className="text-sm uppercase tracking-wider font-medium mb-2 opacity-90">
                COMMUNITY BUILD
              </p>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-tight">
                Build Networking
              </h3>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
     <Influencer/>
    </div>
    
  );
};

export default AboutEvent;