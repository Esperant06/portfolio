import { Routes, Route } from 'react-router-dom';
import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { AllProjects } from "./pages/AllProjects";
import { useScrollToHash } from './hooks/useScrollToHash';

function App() {
  // Hook pour scroller vers les ancres
  useScrollToHash();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          {/* Home page */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Experience />
              {/* <Testimonials /> */}
              <Contact />
            </>
          } />
          
          {/* All Projects page */}
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;