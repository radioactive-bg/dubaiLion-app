import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Game } from '../types';
import { Stamp as Steam, Presentation as Playstation, Inbox as Xbox } from 'lucide-react';
import { games } from '../data/games';
import { useTranslation } from 'react-i18next';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getPlatformIcon = (platform: string) => {
    if (platform.includes('PC')) return <Steam className="h-5 w-5" />;
    if (platform.includes('PlayStation')) return <Playstation className="h-5 w-5" />;
    if (platform.includes('Xbox')) return <Xbox className="h-5 w-5" />;
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-gaming-card rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] cursor-pointer"
      onClick={() => navigate(`/game/${game.id}`)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-display">{game.title}</h3>
        <p className="text-secondary-300 mb-4">{game.description}</p>
        <div className="flex items-center text-sm text-secondary-400">
          <div className="flex items-center mr-2">
            {getPlatformIcon(game.platform)}
          </div>
          <span>{game.platform}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GamesSection;