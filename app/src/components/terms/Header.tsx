import { motion } from 'framer-motion';
import Logo from './Logo';
import { Book } from 'lucide-react';

const Header = () => {
    return (
        <header className="border-b py-6">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Logo />
                        <div className="h-6 w-px bg-gray-300 mx-4"></div>
                        <motion.div
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Book className="text-primary mr-2" size={20} />
                            <h1 className="text-lg font-medium">Terms and Conditions</h1>
                        </motion.div>
                    </div>
                    <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-sm text-muted-foreground">Last updated: May 12, 2025</p>

                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Header;