import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { games } from '../data/games';
import { useTranslation } from 'react-i18next';
import GameCard from './GameCard';

const STORAGE_KEY = 'visible_games_count';
const INITIAL_VISIBLE_GAMES = 10;

const GamesSection: React.FC = () => {
  const { t } = useTranslation();
  const [visibleGames, setVisibleGames] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      return stored ? parseInt(stored, 10) : INITIAL_VISIBLE_GAMES;
    }
    return INITIAL_VISIBLE_GAMES;
  });

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, visibleGames.toString());
  }, [visibleGames]);

  const handleShowMore = () => {
    setVisibleGames(visibleGames + 10);
  };

  const handleShowLess = () => {
    const newCount = Math.max(INITIAL_VISIBLE_GAMES, visibleGames - 10);
    setVisibleGames(newCount);
    // Add a small delay before scrolling to allow cards to animate
    setTimeout(() => {
      const gamesSection = document.getElementById('games');
      if (gamesSection) {
        gamesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // 200ms delay to match the animation duration
  };

  const displayedGames = games.slice(0, visibleGames);
  const hasMoreGames = visibleGames < games.length;
  const hasShownMore = visibleGames > INITIAL_VISIBLE_GAMES;

  return (
    <section id="games" className="py-24 px-4 md:px-8 bg-gaming-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('games.title')}
          </h2>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            {t('games.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayedGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        <div className="text-center mt-16 space-x-4">
          {hasMoreGames && (
            <button
              onClick={handleShowMore}
              className="px-8 py-3 rounded-full bg-gaming-accent hover:bg-opacity-90 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
              Show more
            </button>
          )}
          {hasShownMore && (
            <button
              onClick={handleShowLess}
              className="px-8 py-3 rounded-full bg-transparent border-2 border-gaming-accent hover:bg-gaming-accent hover:bg-opacity-10 text-white font-bold text-lg transition-all duration-300"
              >
              Show less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;