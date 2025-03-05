import React from "react";
import Navbar from "../components/common/navbar";  // Import Navbar
import Home from "../components/core/homepage/main";
import AboutUs from "../components/core/homepage/aboutus";
import WhyUs from "../components/core/homepage/whyus";
import HowTo from "../components/core/homepage/howto";
import Stats from "../components/core/homepage/stats";
import Reviews from "../components/core/homepage/reviews";
import Footer from "../components/common/footer";

export default function HomePage() {
  return (
    <main className="w-screen ">
      {/* Navbar */}
      <Navbar />

      {/* Sections with corresponding ids */}
      <section id="home" className="mt-[170px]"> {/* Adjusted margin-top to account for the navbar height */}
        <Home />
      </section>

      <section id="about-us" className="mt-[50px]">
        <AboutUs />
      </section>

      <section id="why-us" className="mt-[50px]">
        <WhyUs />
      </section>

      <section id="how-to" className="mt-[100px]">
        <HowTo />
      </section>

      <section id="stats" className="mt-[200px]">
        <Stats />
      </section>

      <section id="reviews" className="mt-[200px]">
        <Reviews />
      </section>

      <Footer />
    </main>
  );
}
