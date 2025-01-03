import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This loads the necessary JS for Bootstrap components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componants/Navbar/Navbar';
import Hero from './Componants/Hero/Hero';
import Title from './Componants/Title/Title';
import About from './Componants/About/About';
import VideoBackground from './Componants/VideoBackground/VideoBackground';
import Announcement from './Componants/Announcements/Announcements';
import ClubsTeams from './Componants/ClubsTeams/ClubsTeams';
import Footer from './Componants/Footer/Footer';

const App = () => {
  return (
    
    <div>
      {/* Navbar */}
      <Navbar />
      {/*<Hero/>*/}

      {/* Home Section */}
      <section id="home-section">
        <VideoBackground />
      </section> 
      
      {/* Program Section */}
      <section id="program-section" className="container py-5">
        <Title subTitle="Our PROGRAM" title="ANNOUNCEMENTS & EVENTS" />
        <Announcement />
      </section>

      {/* About Us Section */}
      <section id="about-us-section" className="container py-5">
        <Title subTitle="ABOUT US" title="WHY BDE ?" />
        <About />
      </section>

      {/* Clubs & Teams Section */}
      <section id="clubs-teams-section" className="container py-5">
        <Title subTitle="Clubs & Teams" title="Explore Opportunities" />
        <ClubsTeams />
      </section>

      {/* Campus Section */}
      <section id="campus-section" className="container py-5">
        <Title subTitle="Our Campus" title="CAMPUS LIFE" />
        {/* Add campus content here */}
      </section>

      {/* Testimonials Section */}
      <section id="ContactUs-section" className="container py-5">
        <Title subTitle="What People Say" title="TESTIMONIALS" />
        {/* Add testimonials content here */}
        <Footer/>
      </section>


    </div>
  );
};

export default App;
