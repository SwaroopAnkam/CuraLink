// HomePage.jsx
import React from "react";
import Home from "../components/core/homepage/main";
import AboutUs from "../components/core/homepage/aboutus";
import WhyUs from "../components/core/homepage/whyus";
import HowTo from "../components/core/homepage/howto";
import Stats from "../components/core/homepage/stats";
import Reviews from "../components/core/homepage/reviews";
import Footer from "../components/common/footer";

export default function HomePage() {
  return (
    <main className="w-screen">    
      <Home />
      <AboutUs />
      <WhyUs />
      <HowTo />
      <Stats />
      <Reviews />
      {/* <Team /> */}
      <Footer />
    </main>
  );
}
