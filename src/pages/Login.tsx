import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Login() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container flex-1">Login</main>
      <Footer />
    </div>
  );
}

export default Login;
