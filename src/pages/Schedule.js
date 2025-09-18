import React, { useState } from 'react';
import MekoTorello from "../Assets/MekoTorello.png";
import TempletonPeck from "../Assets/TempletonPeck.png";
import MichaelKnight from "../Assets/MichaelKnight.png";
import AngelaBower from "../Assets/AngelaBower.png";
import Sarahchen from "../Assets/Sarahchen.jpg";

const Schedule = () => {
  const [showAllSessions, setShowAllSessions] = useState(false);

  const sessions = [
    {
      id: 1,
      title: "The Future of Digital Innovation",
      speaker: "Mike Torreti",
      time: "10:00 AM - 11:00 AM",
      description: "The Future of Digital Innovation: Harnessing emerging technologies to revolutionize industries, enhance user experiences, and drive unprecedented growth in a rapidly evolving digital landscape.",
      avatar: MekoTorello,
      bgColor: "bg-orange-100"
    },
    {
      id: 2,
      title: "Trends AI and Machine Learning",
      speaker: "David Brook",
      time: "11:15 AM - 12:30 PM",
      description: "AI and Machine Learning are revolutionizing industries by enabling advanced data analysis, personalized experiences, and intelligent automation, paving the way for smarter and more efficient solutions across various sectors.",
      avatar: TempletonPeck,
      bgColor: "bg-purple-100"
    },
    {
      id: 3,
      title: "Web Development Best Practices",
      speaker: "Sarah Johnson",
      time: "12:45 PM - 1:30 PM",
      description: "Explore modern web development techniques, performance optimization, and security best practices for building scalable applications.",
      avatar: Sarahchen,
      bgColor: "bg-blue-100"
    },
    // Lunch Break here
    {
      id: 4,
      title: "Digital Marketing for a New Era",
      speaker: "Jenifer Moore",
      time: "2:00 PM - 3:00 PM",
      description: "Navigate the evolving landscape of digital marketing in a new era, maintaining innovative strategies and technologies to create competitive campaigns that resonate with audiences and drive business growth.",
      avatar: AngelaBower,
      bgColor: "bg-green-100"
    },
    {
      id: 5,
      title: "Introduction to Blockchain",
      speaker: "Emily Davis",
      time: "3:00 PM - 4:00 PM",
      description: "Blockchain Introduction: Decentralized ledger tech records secure, transparent, immutable transactions across networks, transforming finance and supply chain management.",
      avatar: MichaelKnight,
      bgColor: "bg-yellow-100"
    },
    {
      id: 6,
      title: "Cloud Computing Solutions",
      speaker: "Alex Chen",
      time: "4:15 PM - 5:15 PM",
      description: "Discover cloud computing fundamentals, deployment strategies, and how to leverage cloud services for modern business solutions.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bgColor: "bg-pink-100"
    }
  ];

  const beforeLunch = sessions.slice(0, 3);
  const afterLunch = sessions.slice(3);
  
  const visibleAfterLunch = showAllSessions ? afterLunch : afterLunch.slice(0, 1);

  const SessionCard = ({ session }) => (
    <div className={`flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 p-4 sm:p-5 lg:p-6 ${session.bgColor} rounded-2xl shadow-sm mb-4 border-0 mx-2 sm:mx-0`}>
      <img
        src={session.avatar}
        alt={session.speaker}
        className="w-16 h-16 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover flex-shrink-0 self-center sm:self-start"
      />
      <div className="flex-grow w-full sm:w-auto">
        <div className="flex flex-col sm:flex-row sm:items-start mb-3 space-y-2 sm:space-y-0 sm:gap-12">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black text-center sm:text-left leading-tight">{session.title}</h3>
          <span className="text-sm sm:text-sm lg:text-base font-bold text-black text-center sm:text-left whitespace-nowrap">
            {session.time}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 text-center sm:text-left font-normal">By {session.speaker}</p>
        <p className="text-sm sm:text-sm lg:text-base text-gray-700 leading-relaxed text-center sm:text-left font-normal">{session.description}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen font-sans">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center mb-3 sm:mb-4 px-4">
          <div className="text-purple-600 mr-2 flex-shrink-0">
            <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L19 7L17.74 13.26L23 15L16.74 16.74L15 23L13.26 16.74L7 19L8.26 12.74L2 11L8.26 9.91L7 3L12.74 4.26L12 2Z"/>
            </svg>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-black text-center tracking-tight">Browse all the schedule</h1>
          <div className="text-purple-600 ml-2 flex-shrink-0">
            <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L19 7L17.74 13.26L23 15L16.74 16.74L15 23L13.26 16.74L7 19L8.26 12.74L2 11L8.26 9.91L7 3L12.74 4.26L12 2Z"/>
            </svg>
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4 font-normal">
          Explore the complete event schedule to find sessions, speakers, and activities that match your interests and needs.
        </p>
      </div>

      {/* Day Header */}
      <div className="bg-black text-white p-4 sm:p-5 lg:p-6 rounded-2xl mb-4 sm:mb-6 mx-2 sm:mx-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <svg width="18" height="18" className="sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span className="font-extrabold">Day 1</span>
            <span className="hidden sm:inline font-medium">Sunday, December 2025</span>
            <span className="sm:hidden font-medium">Sun, Dec 2025</span>
          </div>
          <span className="bg-gray-800 px-3 py-1 rounded-lg text-xs sm:text-sm self-start sm:self-auto font-medium">Innovation & Technology</span>
        </div>
      </div>

      {/* Before Lunch Sessions */}
      <div className="mb-6">
        {beforeLunch.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>

      {/* Lunch Break */}
      <div className="bg-gray-100 p-4 sm:p-5 lg:p-6 rounded-2xl mb-4 sm:mb-6 text-center shadow-sm mx-2 sm:mx-0">
        <h3 className="font-bold text-black mb-1 text-sm sm:text-base lg:text-lg">Lunch Break & Networking</h3>
        <p className="text-gray-600 text-xs sm:text-sm font-medium">12:30 PM - 2:00 PM</p>
      </div>

      {/* After Lunch Sessions */}
      <div className="mb-6 sm:mb-8">
        {visibleAfterLunch.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>

      {/* See All Schedule / Hide Button */}
      <div className="text-center px-4">
        <button
          onClick={() => setShowAllSessions(!showAllSessions)}
          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-3 lg:py-4 rounded-2xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          {showAllSessions ? 'Hide Additional Sessions' : 'See All Schedule'}
        </button>
      </div>
    </div>
  );
};

export default Schedule;