import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X,  Gamepad2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gaming-dark bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Gamepad2 className="h-8 w-8 text-gaming-accent" />
            <span className="text-xl font-display font-bold tracking-wide">LION DUBAI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavItem label={t('header.home')} onClick={() => scrollToSection('home')} />
            <NavItem label={t('header.games')} onClick={() => scrollToSection('games')} />
            <NavItem label={t('header.redeem')} onClick={() => scrollToSection('redeem')} />
            <NavItem label={t('header.contact')} onClick={() => scrollToSection('contact')} />
            <LanguageSelector />
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-gaming-dark py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavItem label={t('header.home')} onClick={() => scrollToSection('home')} />
            <MobileNavItem label={t('header.games')} onClick={() => scrollToSection('games')} />
            <MobileNavItem label={t('header.redeem')} onClick={() => scrollToSection('redeem')} />
            <MobileNavItem label={t('header.contact')} onClick={() => scrollToSection('contact')} />
          </div>
        </motion.div>
      )}
    </header>
  );
};

interface NavItemProps {
  label: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white font-medium text-base hover:text-gaming-accent transition-colors duration-200"
    >
      {label}
    </button>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white font-medium text-lg py-2 hover:bg-gaming-card hover:pl-2 transition-all duration-200 text-left w-full"
    >
      {label}
    </button>
  );
};

export default Header;