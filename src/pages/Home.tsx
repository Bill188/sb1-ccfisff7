import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;