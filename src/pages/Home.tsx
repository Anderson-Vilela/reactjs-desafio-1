import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container flex-1">home</main>
      <Footer />
    </div>
  );
}

export default Home;
