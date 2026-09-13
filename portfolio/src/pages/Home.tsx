import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import TechStack from "../components/sections/TechStack";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Certifications from "../components/sections/Certifications";
import Services from "../components/sections/Services";
import GithubSection from "../components/sections/GithubSection";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Services />
        <GithubSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
