import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link to="/" className="flex items-center gap-2">
                    <Gamepad2 className="h-8 w-8 text-gaming-accent" />
                    <span className="text-xl font-display font-bold tracking-wide">LION DUBAI</span>
                </Link>
            </motion.div>
        </div>
    );
};

export default Logo;