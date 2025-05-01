import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n, t  } = useTranslation();
  const lang = i18n.language;
  const languages = [
    { code: 'en', name: t('language.en') },
    { code: 'ar', name: t('language.ar') },
    { code: 'de', name: t('language.de') },
    { code: 'ru', name: t('language.ru') },
    { code: 'fr', name: t('language.fr') },
    { code: 'zh', name: t('language.zh') },
    { code: 'vi', name: t('language.vi') }
  ];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    document.documentElement.dir = languageCode === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-2 text-white hover:text-gaming-accent transition-colors duration-200"
        aria-label={t('language.select')}
      >
        <Globe className="h-5 w-5" />
        <span className="hidden md:inline">{t('language.select')}</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`absolute ${lang == 'ar' ? "left-0" : "right-0"}  mt-0 w-48 py-2 bg-gaming-card rounded-lg shadow-xl hidden group-hover:block`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gaming-dark transition-colors duration-200 ${
              i18n.language === lang.code ? 'text-gaming-accent' : 'text-white'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default LanguageSelector;