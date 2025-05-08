import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Cpu, MemoryStick as Memory } from 'lucide-react';
import { games } from '../data/games';
import Footer from '../components/Footer';
import RequirementItem from '../components/RequirementItem';
import useScrollToTop from '../hooks/useScrollToTop';

const GameDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find(g => g.id === Number(id));
  useScrollToTop();

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Game not found</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-gaming-accent hover:text-gaming-accent/80"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="pt-20 pb-12 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center text-gaming-accent hover:text-gaming-accent/80 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
            >
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {game.title}
              </h1>
              <p className="text-secondary-300 mb-6">
                {game.description}
              </p>

              <div className="bg-gaming-card rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">System Requirements</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gaming-accent mb-2">Minimum</h3>
                    <ul className="space-y-2">
                      <RequirementItem
                        icon={<Monitor className="h-5 w-5" />}
                        label="OS"
                        value={game.systemRequirements.minimum.os}
                      />
                      <RequirementItem
                        icon={<Cpu className="h-5 w-5" />}
                        label="Processor"
                        value={game.systemRequirements.minimum.processor}
                      />
                      <RequirementItem
                        icon={<Memory className="h-5 w-5" />}
                        label="Memory"
                        value={game.systemRequirements.minimum.memory}
                      />
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gaming-accent mb-2">Recommended</h3>
                    <ul className="space-y-2">
                      <RequirementItem
                        icon={<Monitor className="h-5 w-5" />}
                        label="OS"
                        value={game.systemRequirements.recommended.os}
                      />
                      <RequirementItem
                        icon={<Cpu className="h-5 w-5" />}
                        label="Processor"
                        value={game.systemRequirements.recommended.processor}
                      />
                      <RequirementItem
                        icon={<Memory className="h-5 w-5" />}
                        label="Memory"
                        value={game.systemRequirements.recommended.memory}
                      />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gaming-card rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Game Story</h2>
                <div 
                  className="text-secondary-300 space-y-4"
                  dangerouslySetInnerHTML={{ __html: game.story }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GameDetailsPage;