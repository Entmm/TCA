import React from 'react';

const courses = [
  {
    title: 'Web3 Community Management',
    description: 'Master Web3 community management!',
    image: '/path/to/course1.jpg',
  },
  {
    title: 'Intro to Web3 Marketing',
    description: 'Sharpen your Web2 digital marketing skills for Web3!',
    image: '/path/to/course2.jpg',
  },
  {
    title: 'Metaverse Foundations',
    description: 'Learn how to bring your brand to the Metaverse!',
    image: '/path/to/course3.jpg',
  },
];

const Courses = () => {
  return (
    <div className="featured-courses py-8">
      <h3 className="text-2xl font-semibold">Featured Courses</h3>
      <div className="course-grid grid grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="course-card p-4 bg-dark rounded-lg shadow-lg hover:shadow-xl">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <h4 className="text-xl font-bold mt-2">{course.title}</h4>
            <p>{course.description}</p>
            <button className="btn btn-primary mt-4">Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
