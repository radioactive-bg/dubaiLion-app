import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Game } from '../types';
import { Stamp as Steam, Presentation as Playstation, Inbox as Xbox, Smartphone } from 'lucide-react';

interface GameCardProps {
  game: Game;
  index: number;
}

const MAX_DESCRIPTION_LENGTH = 85; // Length of the example text

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  const navigate = useNavigate();

  const getPlatformIcon = (platform: string) => {
    if (platform.includes('PC')) return <Steam className="h-5 w-5" />;
    if (platform.includes('PlayStation')) return <Playstation className="h-5 w-5" />;
    if (platform.includes('Xbox')) return <Xbox className="h-5 w-5" />;
    if (platform.includes('Mobile')) return <Smartphone className="h-5 w-5" />;
    return null;
  };

  const truncateDescription = (text: string) => {
    if (text.length <= MAX_DESCRIPTION_LENGTH) return text;
    return text.slice(0, MAX_DESCRIPTION_LENGTH).trim() + '...';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-gaming-card rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] cursor-pointer h-full flex flex-col"
      onClick={() => navigate(`/game/${game.id}`)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 font-display">{game.title}</h3>
        <p className="text-secondary-300 mb-4">{truncateDescription(game.description)}</p>
        <div className="mt-auto">
          <div className="flex items-center text-sm text-secondary-400">
            <div className="flex items-center mr-2">
              {getPlatformIcon(game.platform)}
            </div>
            <span>{game.platform}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard; 