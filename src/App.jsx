import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      <main>
        <Hero />
        <OriginStory />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
