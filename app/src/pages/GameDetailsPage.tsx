import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Cpu, MemoryStick as Memory } from 'lucide-react';
import { games } from '../data/games';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GameDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find(g => g.id === Number(id));

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Game not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gaming-accent hover:text-gaming-accent/80"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20 pb-12 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center text-gaming-accent hover:text-gaming-accent/80 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Games
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
                        value="Windows 10 64-bit"
                      />
                      <RequirementItem
                        icon={<Cpu className="h-5 w-5" />}
                        label="Processor"
                        value="Intel Core i5-4460 or AMD FX-6300"
                      />
                      <RequirementItem
                        icon={<Memory className="h-5 w-5" />}
                        label="Memory"
                        value="8 GB RAM"
                      />
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gaming-accent mb-2">Recommended</h3>
                    <ul className="space-y-2">
                      <RequirementItem
                        icon={<Monitor className="h-5 w-5" />}
                        label="OS"
                        value="Windows 10/11 64-bit"
                      />
                      <RequirementItem
                        icon={<Cpu className="h-5 w-5" />}
                        label="Processor"
                        value="Intel Core i7-8700K or AMD Ryzen 5 3600X"
                      />
                      <RequirementItem
                        icon={<Memory className="h-5 w-5" />}
                        label="Memory"
                        value="16 GB RAM"
                      />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gaming-card rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Game Story</h2>
                <p className="text-secondary-300">
                  {game.story || "Embark on an epic journey in this thrilling adventure. Face challenging obstacles, meet intriguing characters, and uncover the mysteries that await you in this immersive gaming experience."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

interface RequirementItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const RequirementItem: React.FC<RequirementItemProps> = ({ icon, label, value }) => (
  <li className="flex items-center text-secondary-300">
    <span className="text-gaming-accent mr-2">{icon}</span>
    <span className="font-medium mr-2">{label}:</span>
    <span>{value}</span>
  </li>
);

export default GameDetailsPage;