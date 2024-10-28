import React from 'react';
import backgroundImage from '../assets/background-herosection.png'; // Update with your actual image path

const HeroSection = () => {
  return (
    <div
      className="bg-slate-900 relative flex items-center justify-center text-white h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent w-full h-full flex items-center justify-center">
        <div className="max-w-3xl px-4 text-center space-y-8">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 px-4 rounded-full shadow-md"
              href="#"
            >
              <p className="inline-block text-white text-sm mr-3">
                The Cryptology Academy
              </p>
              <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div>
            <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-200 mb-1">
              THE CRYPTOLOGY ACADEMY
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Take a course and quickly learn how to apply your work experience
              to Web3 From industry leaders.
            </p>
          </div>
          {/* End Title */}

          {/* Subtitle */}
          <p className="text-md text-white max-w-lg mx-auto font-thin">
            Kickstart your Web3 journey today in our community of next-generation professionals. Find support, share news, and start building your network!
          </p>
          {/* End Subtitle */}

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-[#21ca21] hover:bg-[#49da49] font-extrabold text-white px-6 py-3 rounded-lg transition"
            >
              Join Discord
            </a>
            <a
              href="#"
              className="bg-[#c43030] text-white hover:bg-[#792222] font-extrabold hover:text-white px-6 py-3 rounded-lg transition"
            >
              See Courses
            </a>
          </div>
          {/* End Buttons */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
