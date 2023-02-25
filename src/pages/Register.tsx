import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Register() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="base-input container flex-1">
        <h1 className="header">Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form action="">
          <label htmlFor="displayName">
            <span>Nome:</span>
            <input
              type="text"
              name="displayName"
              required
              placeholder="Nome do usuário"
            />
          </label>
          <label htmlFor="email">
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail do usuário"
            />
          </label>
          <label htmlFor="password">
            <span>Password:</span>
            <input
              type="password"
              name="password"
              required
              placeholder="Insira sua senha"
            />
          </label>
          <label htmlFor="confirmPassword">
            <span>Password:</span>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirme sua senha"
            />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Register;
