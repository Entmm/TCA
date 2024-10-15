import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Courses from './components/Courses';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LearnTCA from './components/Learntca';
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LearnTCA />
      <Courses />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
