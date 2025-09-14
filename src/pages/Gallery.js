
import React, { useState } from "react";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop",
      alt: "Concert crowd with blue lighting",
      size: "tall",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=300&fit=crop",
      alt: "Business professionals in discussion",
      size: "medium",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=500&fit=crop",
      alt: "Large conference venue with crowd",
      size: "tall",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop",
      alt: "Team collaboration meeting",
      size: "medium",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=350&fit=crop",
      alt: "Speaker presenting to audience",
      size: "medium",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      alt: "VR technology demonstration",
      size: "medium",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=500&fit=crop",
      alt: "Business networking event",
      size: "tall",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
      alt: "Professional group photo",
      size: "square",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=350&fit=crop",
      alt: "Conference networking session",
      size: "medium",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop",
      alt: "Speaker at podium",
      size: "medium",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=350&fit=crop",
      alt: "Business presentation",
      size: "medium",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
      alt: "Executive speaking",
      size: "medium",
    },
  ];

  const getSizeClass = (size) => {
    switch (size) {
      case "tall":
        return "row-span-2";
      case "square":
        return "row-span-1";
      default:
        return "row-span-1";
    }
  };

  // show first 6 or all
  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Check our latest gallery
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Opportunities that help they need to showcase at your event planning
            activities and the high-tech new global growth
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[240px] mb-8 sm:mb-12">
          {visibleImages.map((image) => (
            <div
              key={image.id}
              className={`relative group overflow-hidden rounded-xl sm:rounded-2xl bg-gray-200 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${getSizeClass(
                image.size
              )}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Decorative Elements + Button */}
        <div className="relative flex justify-center">
          {/* Decorative lines */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
            <svg
              width="60"
              height="40"
              viewBox="0 0 60 40"
              className="text-gray-300"
            >
              <path
                d="M10 20 L25 10 M25 10 L40 20 M40 20 L50 15"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 30 L20 25 M20 25 L35 30 M35 30 L50 25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* View All / Hide Button */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-600/25"
          >
            {showAll ? "Hide Gallery" : "View All Gallery"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
