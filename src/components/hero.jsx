
import React from 'react';
import { Link } from 'react-router-dom';
import  event1 from "../Assets/event1.png"
import  event2 from "../Assets/event2.png"


const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white min-h-screen flex items-center px-8 md:px-16 overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute top-20 left-20 text-yellow-400 text-2xl">✦</div>
      <div className="absolute top-32 right-32 text-purple-400 text-xl">✦</div>
      <div className="absolute bottom-40 left-32 text-orange-400 text-lg">✦</div>
      <div className="absolute top-1/3 right-1/4 text-blue-400 text-sm">✦</div>
      <div className="absolute bottom-1/3 right-16 text-yellow-400 text-xl animate-pulse">⚡</div>
      <div className="absolute top-1/4 left-1/3 text-purple-400 text-lg animate-pulse">⚡</div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-300 text-sm tracking-wide">15-17 December • National IT Hall</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Tech Innovation<br />
            Event 2025
          </h1>
          <p className="text-gray-400 max-w-md text-lg">
            Tech Innovation Event 2025: Unveiling breakthrough technologies and networking opportunities for industry pioneers.
          </p>
          <div className="pt-4">
            <Link
              to="/eventspage"
              className="bg-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 hover:scale-105 inline-block"
            >
              View Events
            </Link>
          </div>
        </div>

        {/* Right Content - Image Composition */}
        <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0 relative scale-75 sm:scale-90 md:scale-100">
          {/* Main large image - Speaker */}
          <div className="relative group">
            <div className="w-64 sm:w-72 md:w-80 h-80 sm:h-88 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 p-1 shadow-2xl transform transition duration-500 group-hover:scale-105 group-hover:shadow-purple-500/40">
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <img
                
                src={event2}
                  alt="event2"
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Small circular image - Top left */}
            <div className="absolute -top-6 sm:-top-8 -left-8 sm:-left-12 w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl bg-blue-500 transform transition duration-500 hover:scale-110 hover:rotate-6">
              <img
                
                src={event1}
                alt="event1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Crowd image - Bottom left */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-12 sm:-left-16 w-28 sm:w-32 h-20 sm:h-24 rounded-2xl overflow-hidden border-4 border-cyan-400 shadow-xl transform transition duration-500 hover:scale-105 hover:-rotate-3">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop"
                alt="Event Crowd"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating geometric shapes */}
          <div className="absolute -top-4 right-8 sm:right-12 w-4 sm:w-6 h-4 sm:h-6 border-2 border-yellow-400 rotate-45"></div>
          <div className="absolute bottom-12 sm:bottom-16 right-2 sm:right-4 w-3 sm:w-4 h-3 sm:h-4 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 -right-4 sm:-right-8 w-6 sm:w-8 h-6 sm:h-8 border-2 border-orange-400 rounded-full"></div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero;
