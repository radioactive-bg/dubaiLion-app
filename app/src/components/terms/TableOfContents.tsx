import { Link } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type SectionProps = {
    number: number;
    title: string;
};

const TableOfContents = () => {
    const { t } = useTranslation();
    const sections: SectionProps[] = [
        { number: 1, title: t("terms.Introduction.title") },
        { number: 2, title: t("terms.Definitions.title") },
        { number: 3, title: t("terms.IssuanceSaleAndMerchantOfRecord.title") },
        { number: 4, title: t("terms.RedemptionProcess.title") },
        { number: 5, title: t("terms.ValidityExpirationAndCancellation.title") },
        { number: 6, title: t("terms.LiabilityWarranties.title") },
        { number: 7, title: t("terms.DataCollectionPrivacy.title") },
        { number: 8, title: t("terms.Support&ServiceLevels.title") },
        { number: 9, title: t("terms.GoverningLawJurisdiction.title") },
        { number: 10, title: t("terms.ChangesToTerms.title") },
        { number: 11, title: t("terms.ContactInformation.title") }
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
            className="bg-game-card shadow-lg border border-gaming-accent rounded-lg p-6 mb-6 sticky top-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-2 mb-4">
                <Link className="text-gaming-accent" size={18} />
                <h3 className="font-display font-medium text-gaming-accent">{t("terms.tableOfContents")}</h3>
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
                            className="text-sm hover:text-gaming-accent transition-colors flex gap-2 items-center"
                        >
                            <span className="text-gaming-accent font-medium">{section.number}.</span>
                            <span className="text-white">{section.title}</span>
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default TableOfContents;