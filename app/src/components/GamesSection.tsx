import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { games } from '../data/games';
import { useTranslation } from 'react-i18next';
import GameCard from './GameCard';

const GamesSection: React.FC = () => {
  const { t } = useTranslation();
  const [visibleGames, setVisibleGames] = useState(10);

  const handleShowMore = () => {
    setVisibleGames(prev => prev + 10);
  };

  const displayedGames = games.slice(0, visibleGames);
  const hasMoreGames = visibleGames < games.length;

  return (
    <section id="games" className="py-24 px-4 md:px-8 bg-gaming-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
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

        {hasMoreGames && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
            >
Show more            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesSection;