import React from 'react';
import backgroundImage from '../assets/background-herosection.png'; // Update with your actual image path

const HeroSection = () => {
  return (
    <div 
      className="relative flex items-center justify-start text-white" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: '15rem',
        paddingBottom: '15rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-lg" style={{ marginLeft: '6rem' }}>
        <h1 className="text-5xl font-extrabold mb-1">THE CRYPTOLOGY</h1>
        <h1 className="text-9xl font-extrabold mb-4">ACADEMY</h1>
        <p className="text-lg  font-thin mb-6">Take a course and quickly learn how to apply your work experience to Web3. From industry leaders.</p>
        <p className="text-md  font-thin mb-8">Kickstart your Web3 journey today in our community of next-generation professionals. Find support, share news, and start building your network!</p>
        <div className="flex space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 font-extrabold text-white px-6 py-3 rounded-lg transition">Join Discord</button>
          <button className="border border-white text-white hover:bg-white font-extrabold hover:text-black px-6 py-3 rounded-lg transition">See Courses</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
