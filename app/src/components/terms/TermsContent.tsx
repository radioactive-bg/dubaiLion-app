import { useTranslation } from "react-i18next";
import SectionTitle from "./SectionTitle";
import { MailIcon } from "lucide-react";

const TermsContent = () => {
    const { t } = useTranslation();

    const definitions = t("terms.Definitions.content", { returnObjects: true });
    const issuance = t("terms.IssuanceSaleAndMerchantOfRecord.content", { returnObjects: true });
    const redemption = t("terms.RedemptionProcess.content", { returnObjects: true });
    const validity = t("terms.ValidityExpirationAndCancellation.content", { returnObjects: true });
    const liability = t("terms.LiabilityWarranties.content", { returnObjects: true });
    const privacy = t("terms.DataCollectionPrivacy.content", { returnObjects: true });
    const support = t("terms.Support&ServiceLevels.content", { returnObjects: true });
    const governing = t("terms.GoverningLawJurisdiction.content.header");
    const changes = t("terms.ChangesToTerms.content.header");

    return (
        <div className="space-y-8 text-white">
            <section>
                <SectionTitle number={1} title={t("terms.Introduction.title")} />
                <p>{t("terms.Introduction.content")}</p>
            </section>

            <section>
                <SectionTitle number={2} title={t("terms.Definitions.title")} />
                <ul className="list-none space-y-3">
                    {Object.entries(definitions).map(([key, val]) => (
                        <li key={key}>
                            {val}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <SectionTitle number={3} title={t("terms.IssuanceSaleAndMerchantOfRecord.title")} />
                <div className="space-y-3">
                    {Object.values(issuance).map((text, idx) => (
                        <p key={idx}>{text}</p>
                    ))}
                </div>
            </section>

            <section>
                <SectionTitle number={4} title={t("terms.RedemptionProcess.title")} />
                <div className="space-y-3">
                    {Object.values(redemption).map((text, idx) => (
                        <p key={idx}>{text}</p>
                    ))}
                </div>
            </section>

            <section>
                <SectionTitle number={5} title={t("terms.ValidityExpirationAndCancellation.title")} />
                <div className="space-y-3">
                    {Object.values(validity).map((text, idx) => (
                        <p key={idx}>{text}</p>
                    ))}
                </div>
            </section>

            <section>
                <SectionTitle number={6} title={t("terms.LiabilityWarranties.title")} />
                <div className="space-y-3">
                    {Object.values(liability).map((text, idx) => (
                        <p key={idx}>{text}</p>
                    ))}
                </div>
            </section>

            <section>
                <SectionTitle number={7} title={t("terms.DataCollectionPrivacy.title")} />
                <div className="space-y-3">
                    {Object.values(privacy).map((text, idx) => (
                        <p key={idx}>{text}</p>
                    ))}
                </div>
            </section>

            <section>
                <SectionTitle number={8} title={t("terms.Support&ServiceLevels.title")} />
                <div className="space-y-3">
                    {Object.values(support).map((text, idx) => (
                        <p key={idx}>{text}</p>
                    ))}
                </div>
            </section>

            <section>
                <SectionTitle number={9} title={t("terms.GoverningLawJurisdiction.title")} />
                <p>{governing}</p>
            </section>

            <section>
                <SectionTitle number={10} title={t("terms.ChangesToTerms.title")} />
                <p>{changes}</p>
            </section>

            <section>
                <SectionTitle number={11} title={t("terms.ContactInformation.title")} />
                <div className="space-y-6">
                    <p className="text-white/80">{t("terms.ContactInformation.content.header")}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* HKS (Ar‑pay) Support Card */}
                        <div className="bg-white/5 p-4 rounded-2xl shadow flex items-start gap-4">
                            <MailIcon className="text-white mt-1" size={24} />
                            <div>
                                <h4 className="text-white font-semibold">HKS (Ar‑pay) Support</h4>
                                <p className="text-white/90">
                                    {t("terms.ContactInformation.content.HKS (Ar‑pay) Support")}
                                </p>
                            </div>
                        </div>

                        {/* Lion Dubai Support Card */}
                        <div className="bg-white/5 p-4 rounded-2xl shadow flex items-start gap-4">
                            <MailIcon className="text-white mt-1" size={24} />
                            <div>
                                <h4 className="text-white font-semibold">Lion Dubai Support</h4>
                                <p className="text-white/90">
                                    {t("terms.ContactInformation.content.Lion Dubai Support")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-white/80">{t("terms.ContactInformation.content.thankYou")}</p>
                </div>
            </section>


        </div>
    );
};

export default TermsContent;
