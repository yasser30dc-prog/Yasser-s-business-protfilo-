import Header from './components/Header';
import MouseSpotlight from './components/MouseSpotlight';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Store from './components/Store';
import AIGallery from './components/AIGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-vibe-black selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <MouseSpotlight />
      <Header />

      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <CaseStudy />
        <Store />
        <AIGallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
