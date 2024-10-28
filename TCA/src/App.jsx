import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Courses from './components/Courses';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LearnTCA from './components/Learntca';
import Teamtca from './components/teamtca';
import BrandPartners from './components/TcaBrandpartners';
import TCAOrganization from './components/TCAOrganization';
import TCAMarket from './components/TCAlivemarket';
import Services from './components/TCAservice';
import TCAadvertise from './components/TCAadvertise';


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LearnTCA />
      <Courses />
      <Teamtca />

      <BrandPartners />
      <TCAOrganization />
      <TCAMarket />
      <Services />
      <TCAadvertise />
      <Footer />
    </div>
  );
};

export default App;
