import React from 'react';
import imagelearn from '../assets/LEARN TCA.png'




const Learntca = () => {
  return (
    <section className="bg-black text-gray-100 w-full py-20">
      {/* Container for content */}
      <div className="container mx-auto px-4 md:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-1xl  text-gray-100 font-thin mb-4">The Cryptology Academy</h1>
          <h1 className="text-7xl font-bold mb-4 py-0 m-5">LEARN</h1>
          <p className="text-lg text-gray-400">
         yoy can also learn tca about.....
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-20 py-20">


          {/* Verse Finder Feature (1st Row) */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-2 md:space-y-0">
            {/* Text Block */}
            <div className="md:w-5/12 text-center md:text-left">
              <h2 className="text-7xl font-semibold mb-4 transition duration-200 hover:text-[#5be456]">
               LEARN
              </h2>
              <p className="text-gray-400 mb-6">
              Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum 
              Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  </p>
            </div>
            
            {/* Image Block */}
            <div className="md:w-5/12 max-w-sm">
              <img
                className="rounded-md border-none shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                src={imagelearn}
                alt="Verse Finder Image"
              />
            </div>
          </div>

          {/* Bible Trivia Feature (2nd Row) */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between space-y-8 md:space-y-0">
            {/* Text Block */}
            <div className="md:w-5/12 text-center md:text-right">
            <h2 className="text-7xl font-semibold mb-4 transition duration-200 hover:text-[#5be456]">
               LEARN
              </h2>
              <p className="text-gray-400 mb-6">
              Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum 
              Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  </p>
            </div>
            
            {/* Image Block */}
            <div className="md:w-5/12 max-w-sm">
              <img
                className="rounded-md border-none shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                src={imagelearn}
                alt="Bible Trivia Image"
              />
            </div>
          </div>
  {/* Verse Finder Feature (1st Row) */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-8 md:space-y-0">
            {/* Text Block */}
            <div className="md:w-5/12 text-center md:text-left">
            <h2 className="text-7xl font-semibold mb-4 transition duration-200 hover:text-[#5be456]">
               LEARN
              </h2>
              <p className="text-gray-400 mb-6">
                Easily search for verses from the Old and New Testaments by entering any topic, concept, or keyword. The Verse Finder helps you quickly locate relevant scriptures and provides insightful context to deepen your understanding of the Bible's teachings.
              </p>
            </div>
            
            {/* Image Block */}
            <div className="md:w-5/12 max-w-sm">
              <img
                className="rounded-md border-none shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                src={imagelearn}
                alt="Verse Finder Image"
              />
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Learntca;
