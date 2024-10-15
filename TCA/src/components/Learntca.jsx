import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WEB3 from '../assets/LEARN TCA.png'; // Ensure the correct image path







const courses = [
  {
    title: "Web3 Community Management",
    description: "Master Web3 community management! Learn engagement, leadership, data...",
    duration: "5 WEEKS",
    tags: ["WEB3", "COMMUNITY MANAGEMENT"],
    image: WEB3
  },
  {
    title: "Web3 Community Management",
    description: "Master Web3 community management! Learn engagement, leadership, data...",
    duration: "5 WEEKS",
    tags: ["WEB3", "COMMUNITY MANAGEMENT"],
    image: WEB3
  },
  {
    title: "Web3 Community Management",
    description: "Master Web3 community management! Learn engagement, leadership, data...",
    duration: "5 WEEKS",
    tags: ["WEB3", "COMMUNITY MANAGEMENT"],
    image: WEB3
  },
  {
    title: "Intro to Web3 Marketing",
    description: "Sharpen your Web2 digital marketing skills for Web3!",
    duration: "6 WEEKS",
    tags: ["MARKETING"],
    image: WEB3
  },
  {
    title: "Metaverse Foundations",
    description: "Get ready to bring your brand to the Metaverse!",
    duration: "8 WEEKS",
    tags: ["METAVERSE"],
    image: WEB3
  },
  {
    title: "Blockchain Basics",
    description: "Understand the fundamentals of blockchain technology.",
    duration: "4 WEEKS",
    tags: ["BLOCKCHAIN"],
    image: WEB3
  },
  {
    title: "Crypto Trading 101",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["CRYPTO", "TRADING"],
    image: WEB3
  },
  {
    title: "Crypto Trading 101",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["CRYPTO", "TRADING"],
    image: WEB3
  },
  {
    title: "Crypto Trading 101",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["CRYPTO", "TRADING"],
 image: WEB3
  },
  {
    title: "TEST TRADE CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["TRADE"],
 image: WEB3
  },
  {
    title: "TEST TRADE CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["TRADE"],
 image: WEB3
  },
  {
    title: "TEST TRADE CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["TRADE"],
 image: WEB3
  },
  {
    title: "TEST BITCOIN CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["BITCOIN"],
 image: WEB3
  },
  {
    title: "TEST BITCOIN CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["BITCOIN"],
 image: WEB3
  },
  {
    title: "TEST BITCOIN CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["BITCOIN"],
 image: WEB3
  },
  {
    title: "TEST BITCOIN CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["ALTCOINS"],
 image: WEB3
  },
  {
    title: "TEST BITCOIN CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["ALTCOINS"],
 image: WEB3
  },
  
  {
    title: "TEST BITCOIN CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["ALTCOINS"],
 image: WEB3
  },
  {
    title: "TEST BITCOIN CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["BLOCKCHAIN"],
 image: WEB3
  },
  {
    title: "TEST BITCOIN CONTNENT",
    description: "Learn the basics of crypto trading and investment strategies.",
    duration: "5 WEEKS",
    tags: ["BLOCKCHAIN"],
 image: WEB3
  },
  
  
  
  
];



const topics = ["Crypto", "Trade", "Bitcoin", "Altcoins", "Blockchain"];

export default function FeaturedCourses() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  const filteredCourses = courses.filter(course =>
    course.tags.includes(selectedTopic.toUpperCase())
  );

  const handleFilterChange = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold mb-8">LEARN TCA</h2>

        {/* Filter buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {topics.map((topic) => (
            <motion.button
              key={topic}
              onClick={() => handleFilterChange(topic)}
              className={`px-4 py-2 rounded ${selectedTopic === topic ? 'bg-blue-600' : 'bg-gray-700'}`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }} // Adds hover animation
              whileTap={{ scale: 0.95 }}  // Adds click animation
              animate={{ opacity: selectedTopic === topic ? 1 : 0.8 }} // Animates opacity on selection
            >
              {topic}
            </motion.button>
          ))}
        </div>

        {/* Displaying Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCourses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-black-900 border border-black-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                  <span className="bg-red-500 text-xs font-semibold px-2 py-1 rounded">
                    {course.duration}
                  </span>
                  <div className="mt-2">
                    {course.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-900 text-xs font-semibold px-2 py-1 rounded mr-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}