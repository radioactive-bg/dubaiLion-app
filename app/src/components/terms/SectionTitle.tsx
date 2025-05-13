import { motion } from 'framer-motion';

type SectionTitleProps = {
    number: number;
    title: string;
};

const SectionTitle = ({ number, title }: SectionTitleProps) => {
    return (
        <motion.h2
            id={`section-${number}`}
            className="text-xl font-semibold text-gaming-accent mb-3 group flex items-start scroll-mt-24"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span className="text-gaming-accent">{number}.</span>
            <span className="ml-2">{title}</span>
            <a href={`#section-${number}`} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground">
                #
            </a>
        </motion.h2>
    );
};

export default SectionTitle;