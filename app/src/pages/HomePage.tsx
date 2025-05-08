import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import GamesSection from "../components/GamesSection";
import RedeemSection from "../components/RedeemSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
// import useScrollToTop from "../hooks/useScrollToTop";

const HomePage: React.FC = () => {
  // useScrollToTop();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <GamesSection />
        <RedeemSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
