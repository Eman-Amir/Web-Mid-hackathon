import React from 'react';
import Sarah from "../Assets/Sarah.png";
import Christopher from "../Assets/Christopher.png";
const Influencer = () => {
  return (
    <div className="bg-gradient-to-r from-black via-rose-400 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Side - First Influencer */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={Sarah}
                  alt="Sarah"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name and Date for mobile */}
              <div className="text-center mt-4 lg:hidden">
                <h3 className="text-white font-semibold text-lg">Sarah Johnson</h3>
                <p className="text-gray-200 text-sm">December 15, 2025</p>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              The event boasts<br />
              our top creative<br />
              influencers
            </h1>
            
            <p className="text-gray-100 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              The event features renowned influencers and innovators 
              shaping trends and driving creativity across various 
              industries.
            </p>

            {/* Speaker Info for Desktop */}
            <div className="hidden lg:flex justify-between items-end max-w-md">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Sarah Johnson</h3>
                <p className="text-gray-200 text-sm">December 15, 2025</p>
              </div>
              <div className="text-right">
                <h3 className="text-white font-semibold text-lg mb-1">Christopher Wilson</h3>
                <p className="text-gray-200 text-sm">December 17, 2025</p>
              </div>
            </div>
          </div>

          {/* Right Side - Second Influencer */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Decorative star */}
              <div className="absolute -top-6 -right-2 z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" className="text-yellow-400">
                  <path 
                    d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>

              <div className="w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={Christopher}
                  alt="Christopher"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name and Date for mobile */}
              <div className="text-center mt-4 lg:hidden">
                <h3 className="text-white font-semibold text-lg">Christopher Wilson</h3>
                <p className="text-gray-200 text-sm">December 17, 2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Influencer;
