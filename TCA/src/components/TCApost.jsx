// pages/index.js
import React from 'react';


const TCApost = () => {
  // Sample blog post data
  const blogPosts = [
    {
      title: 'Understanding Web3 Technology',
      excerpt: 'Explore the fundamentals of Web3 and its potential impact.',
      image: 'https://via.placeholder.com/400x180', // Replace with actual images
    },
    {
      title: 'The Rise of Decentralized Finance',
      excerpt: 'How DeFi is reshaping financial services worldwide.',
      image: 'https://via.placeholder.com/400x180',
    },
    {
      title: 'Blockchain Beyond Cryptocurrency',
      excerpt: 'Discover how blockchain technology is applied outside of crypto.',
      image: 'https://via.placeholder.com/400x180',
    },
  ];

  return (
    <div>
      <SocialPost
        title="Latest in Technology"
        introText="Catch up with the latest blogs on emerging tech topics."
        blogPosts={blogPosts}
      />
    </div>
  );
};

export default TCApost;
