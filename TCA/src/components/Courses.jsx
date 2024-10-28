import React from 'react';

const courses = [
  {
    title: 'Course Title',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    image: '/path/to/course1.jpg',
  },
  {
    title: 'Course Title',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    image: '/path/to/course1.jpg',
  },
  {
    title: 'Course Title',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    image: '/path/to/course1.jpg',
  },
];

const Courses = () => {
  return (
    <div className="featured-courses py-12 bg-black text-white">
      <p className='text-center font-thin text-sm'> The Cryptology Academy</p>
      <h3 className="text-5xl font-extrabold text-center  text-green-400 mb-8">
      OFFERED COURSES
      </h3>
      <div className="container mx-auto px-6">
        <div className="course-grid grid grid-cols-1 md:grid-cols-3 gap-9">
          {courses.map((course, index) => (
            <div
              key={index}
              className="course-card p-5 bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-60  text-center object-cover rounded-lg"
              />
              <h4 className="text-2xl  text-center font- mt-4 text-white">{course.title}</h4>
              <p className="mt-2 text-center text-gray-300">{course.description}</p>
              <button className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-400 transition duration-200">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Courses;
