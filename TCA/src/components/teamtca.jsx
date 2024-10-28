// src/components/LeadershipTeam.js

import React from 'react';
import { FaFacebook, FaTwitter, FaTelegram, FaMedium, FaLinkedin } from 'react-icons/fa';
import teamicon from '../assets/TCA_Solid-Full-Color_PNG.png';

const Teamtca = () => {
  const leaders = [
    {
      name: 'Hentoni Doe',
      title: 'CEO-Founder',
      imgSrc: teamicon, // Use teamicon directly without curly braces
      alt: 'Hentoni Doe',
      socialLinks: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        telegram: 'https://telegram.org',
        medium: 'https://medium.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Jonathan Doe',
      title: 'Chief Technical Officer',
      imgSrc: teamicon, // Use teamicon directly without curly braces
      alt: 'Jonathan Doe',
      socialLinks: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        telegram: 'https://telegram.org',
        medium: 'https://medium.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Anabelle Doe',
      title: 'Chief Operations Officer',
      imgSrc: teamicon, // Use teamicon directly without curly braces
      alt: 'Anabelle Doe',
      socialLinks: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        telegram: 'https://telegram.org',
        medium: 'https://medium.com',
        linkedin: 'https://linkedin.com',
      },
    },
  ];

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-6xl text-white font-bold md:text-6xl">TCA TEAM</h2>
          <p className="text-white lg:w-8/12 lg:mx-auto">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          {leaders.map((leader) => (
            <div key={leader.name} className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={leader.imgSrc} // This will now work correctly
                alt={leader.alt}
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl text-white font-bold">{leader.name}</h4>
                <span className="block text-sm text-white">{leader.title}</span>
                <div className="flex justify-center mt-2 space-x-4">
                  <a href={leader.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4ff35d]">
                    <FaFacebook size={20} />
                  </a>
                  <a href={leader.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4ff35d]">
                    <FaTwitter size={20} />
                  </a>
                  <a href={leader.socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4ff35d]">
                    <FaTelegram size={20} />
                  </a>
                  <a href={leader.socialLinks.medium} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4ff35d]">
                    <FaMedium size={20} />
                  </a>
                  <a href={leader.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4ff35d]">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teamtca;
