import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container flex-1">About</main>
      <Footer />
    </div>
  );
}

export default About;
