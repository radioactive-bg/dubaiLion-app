import { Link } from 'lucide-react';
import { motion } from 'framer-motion';

type SectionProps = {
    number: number;
    title: string;
};

const TableOfContents = () => {
    const sections: SectionProps[] = [
        { number: 1, title: "Introduction" },
        { number: 2, title: "Definitions" },
        { number: 3, title: "Issuance, Purchase & Payment" },
        { number: 4, title: "Redemption" },
        { number: 5, title: "Gift Card Validity & Expiration" },
        { number: 6, title: "Refunds & Exchanges" },
        { number: 7, title: "Data Protection & Privacy" },
        { number: 8, title: "Intellectual Property" },
        { number: 9, title: "Limitation of Liability" },
        { number: 10, title: "Compliance & Governing Law" },
        { number: 11, title: "Amendments" },
        { number: 12, title: "Contact Information" }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            className="bg-white shadow-lg border border-primary-100 rounded-lg p-6 mb-6 sticky top-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-2 mb-4">
                <Link className="text-gaming-accent" size={18} />
                <h3 className="font-display font-medium text-gaming-accent">Table of Contents</h3>
            </div>
            <motion.ul
                className="space-y-2"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {sections.map((section) => (
                    <motion.li key={section.number} variants={item}>
                        <a
                            href={`#section-${section.number}`}
                            className="text-sm hover:text-gaming-accent transition-colors flex items-center"
                        >
                            <span className="text-gaming-accent font-medium mr-2">{section.number}.</span>
                            <span className="text-secondary-700 hover:text-gaming-accent">{section.title}</span>
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default TableOfContents;