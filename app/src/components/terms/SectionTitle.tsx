import { motion } from 'framer-motion';

type SectionTitleProps = {
    number: number;
    title: string;
};

const SectionTitle = ({ number, title }: SectionTitleProps) => {
    return (
        <motion.h2
            id={`section-${number}`}
            className="text-xl font-semibold gap-1 text-gaming-accent mb-3 group flex scroll-mt-24"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span className="text-gaming-accent">{number}.</span>
            <span>{title}</span>
            <a href={`#section-${number}`} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground">
                #
            </a>
        </motion.h2>
    );
};

export default SectionTitle;