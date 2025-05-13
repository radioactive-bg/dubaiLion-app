import { motion } from 'framer-motion';
import Logo from './Logo';
import { Book } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

const Header = () => {
    const { t } = useTranslation();
    return (
        <header className="border-b py-6">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Logo />
                        <div className="h-6 w-px bg-gray-300 mx-4"></div>
                        <motion.div
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Book className="text-primary mr-2" size={20} />
                            <h1 className="text-lg font-medium">{t('terms.title')}</h1>
                        </motion.div>
                    </div>
                    <motion.div
                        className="flex items-center gap-x-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-sm text-muted-foreground">{t('terms.lastUpdated')}</p>
                        <LanguageSelector />


                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Header;