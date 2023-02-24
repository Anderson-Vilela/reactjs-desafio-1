import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">about</main>
      <Footer />
    </div>
  );
}

export default About;
