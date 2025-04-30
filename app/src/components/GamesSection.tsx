import React from 'react';
import { motion } from 'framer-motion';
import { games } from '../data/games';
import { useTranslation } from 'react-i18next';
import GameCard from './GameCard';

const GamesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="games" className="py-24 px-4 md:px-8 bg-gaming-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;