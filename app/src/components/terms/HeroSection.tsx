import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            // className="bg-gradient-to-r from-primary-50 to-accent-50 py-10 mb-8 relative overflow-hidden"
            className="bg-white/5 py-20 mb-14 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    className="max-w-3xl"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h1 className="text-3xl text-gaming-accent md:text-4xl font-display font-bold  mb-4">
                        {t("terms.termsTitle")}
                    </h1>
                    {/* <p className="text-secondary-700 text-lg"> */}
                    <p className="text-white text-lg">
                        {t("terms.subtitle")}

                    </p>
                </motion.div>
            </div>

            {/* Animated background elements */}
            <motion.div
                className="absolute top-10 right-10 w-24 h-24 bg-primary-200 rounded-full opacity-30"
                animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-5 right-1/4 w-16 h-16 bg-accent-200 rounded-full opacity-40"
                animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </motion.div>
    );
};

export default HeroSection;
