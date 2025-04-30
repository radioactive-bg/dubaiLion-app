import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToGames = () => {
    const gamesSection = document.getElementById("games");
    if (gamesSection) {
      gamesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 17, 35, 0.85), rgba(15, 17, 35, 0.95)), url(https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-600 bg-opacity-20 blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white leading-tight">
            <span className="text-gaming-accent">Redeem</span> Your Gaming{" "}
            <span className="text-gaming-accent">Cards</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-300 max-w-3xl mx-auto">
            Unlock exclusive games and content with our premium gift cards
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={scrollToGames}
            className="px-8 py-3 rounded-full bg-gaming-accent hover:bg-opacity-90 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Games
          </button>
          <button
            onClick={() => {
              document
                .getElementById("redeem")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full bg-transparent border-2 border-gaming-accent hover:bg-gaming-accent hover:bg-opacity-10 text-white font-bold text-lg transition-all duration-300"
          >
            Redeem Card
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 cursor-pointer"
        onClick={scrollToGames}
      >
        <ChevronDown className="h-8 w-8 text-white/70" />
      </motion.div>
    </section>
  );
};

export default Hero;
