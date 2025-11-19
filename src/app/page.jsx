"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Works />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
