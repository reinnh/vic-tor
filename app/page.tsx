 "use client" 
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Contacts from "@/Components/Contacts";
import Navbar from "@/Components/navbars";
import Experience from "@/Components/Experience";
import Skills from "@/Components/Skills";
import Footer from "@/Components/Footer";
import { StarsCanvas } from "@/Components/canvas";
import Education from "@/Components/Education";


const Mainpage = () => {
  return (
    <section>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <div className="relative z-0">
          <Contacts />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Mainpage;
