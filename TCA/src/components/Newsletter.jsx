import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter bg-gradient-to-r from-purple-600 to-blue-400 text-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold">Be the first to know</h3>
      <p>Stay updated on new courses and educational content.</p>
      <form className="mt-4">
        <input type="email" className="p-2 rounded-md w-full" placeholder="Enter your email" />
        <button className="btn btn-primary mt-4">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
