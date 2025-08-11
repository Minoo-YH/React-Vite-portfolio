import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Hobby from "./pages/Hobby";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Projects />
    <Contact />
    
  </>
);

export default function App() {
  return (
    <div className="relative z-10 bg-black min-h-screen text-white">
      <Navbar />
      <ScrollToTop />
      
      {/* رندر کردن کامپوننت‌های صفحه اصلی */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

      </Routes>
      <Footer />
    </div>
  );
}






