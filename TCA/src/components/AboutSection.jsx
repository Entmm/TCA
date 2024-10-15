import React from 'react';
import portraitImage from '../assets/TCA_Solid-Full-Color_PNG.png'; // Adjust the path accordingly




export default function Component() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-purple-600 via-blue-600 to-green-500 opacity-50 blur-3xl"></div>
        <div className="relative z-10">
          <div className="mb-8 border-b border-gray-600 pb-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">WHAT IS TCA?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">THE CRYPTOLOGY ACADEMY</h3>
              <p className="text-gray-400 text-lg">
                We're a Web3 educational collective and career launchpad. Want to break into Web3? Our courses are designed to onboard the next generation of professionals. They're open to all, because in building a new iteration of the Web, we need everyone's input and experience to fix the mistakes of the past.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4 border border-gray-600 p-4">
                  <h3 className="text-3xl font-bold">MISSION</h3>
                  <p className="text-gray-400 text-justify">
                    We bring together the best projects and leaders in the space to create courses. We are also building a powerful community, with our members at the center, for collective learning. You have a voice in our direction, and we actively uplift and elevate our members and facilitate peer-to-peer teaching and learning.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Join Discord
                  </button>
                </div>
                <div className="space-y-4 border border-gray-600 p-4">
                  <h3 className="text-3xl font-bold">VISION</h3>
                  <p className="text-gray-400 text-justify">
                    In Web3, experience is your ticket to a career. Our courses are designed to help you get there – a launchpad to your career. We bake in opportunities to build your personal presence and create a polished, Web3-specific portfolio. Leave our courses with provable skills, on-chain certification, and a digital footprint in the space.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    See Courses
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={portraitImage} alt="Portrait" className="rounded-lg shadow-lg w-full max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
