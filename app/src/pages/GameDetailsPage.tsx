import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Cpu, MemoryStick as Memory, Gamepad2 } from 'lucide-react';
import Footer from '../components/Footer';
import RequirementItem from '../components/RequirementItem';
import useScrollToTop from '../hooks/useScrollToTop';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import { games } from '../data/games';
import { Game } from '../types';

type ValidLocale = "en" | "de" | "vi" | "fr" | "ru" | "zh" | "ar";


const GameDetailsPage: React.FC = () => {
  const { id } = useParams();
  const game: Game | undefined = games.find(g => g.id === Number(id));
  useScrollToTop();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const locale = (
    game?.translations[currentLocale as ValidLocale] ? currentLocale : "en"
  ) as ValidLocale;
  const navigate = useNavigate();
  const { t } = useTranslation();



  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('gameDetails.notFound')}</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-gaming-accent hover:text-gaming-accent/80"
          >
            {t('gameDetails.back')}

          </button>
        </div>
      </div>
    );
  }

  return (
    <>

      <main className="pb-14 px-4 md:px-8">
        <div className="container mx-auto">


          <header className="mb-16  py-8 bg-gaming-card px-8 rounded-full flex justify-between items-center">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => navigate(-1)}
              className="flex items-center text-gaming-accent hover:text-gaming-accent/80"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('gameDetails.back')}
            </motion.button>


            <motion.div
              className="flex items-center space-x-2 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Gamepad2 className="h-8 w-8 text-gaming-accent" />
              <span className="text-xl font-display font-bold tracking-wide">LION DUBAI</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LanguageSelector /></motion.div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
            >
              <img
                src={game.imageUrl}
                alt={game.translations[locale].title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {game.translations[locale].title}
              </h1>
              <p className="text-secondary-300 mb-6">
                {game.translations[locale].description}
              </p>

              <div className="bg-gaming-card rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">{t('gameDetails.requirements')}</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gaming-accent mb-2">{t('gameDetails.minimum')}</h3>
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
                    <h3 className="font-semibold text-gaming-accent mb-2">{t('gameDetails.recommended')}</h3>
                    <ul className="space-y-2">
                      <RequirementItem
                        icon={<Monitor className="h-5 w-5" />}
                        label={t('gameDetails.os')}

                        value={game.systemRequirements.recommended.os}
                      />
                      <RequirementItem
                        icon={<Cpu className="h-5 w-5" />}
                        label={t('gameDetails.processor')}

                        value={game.systemRequirements.recommended.processor}
                      />
                      <RequirementItem
                        icon={<Memory className="h-5 w-5" />}
                        label={t('gameDetails.memory')}

                        value={game.systemRequirements.recommended.memory}
                      />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gaming-card rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">{t('gameDetails.story')}</h2>
                <div
                  className="text-secondary-300 space-y-4"
                >
                  {game.translations[locale].story}
                </div>

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