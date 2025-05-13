import SectionTitle from "./SectionTitle";


const TermsContent = () => {
    return (
        <div className="space-y-8">
            <section>
                <SectionTitle number={1} title="Introduction" />
                <p className="text-white">
                    Welcome to LionDubai Limited. These Terms and Conditions ("Terms") govern your purchase and use of digital gift cards
                    ("Gift Cards") issued by HKS (Ar-pay) on behalf of LionDubai Limited ("LionDubai," "we," "us," or "our").
                    By purchasing, redeeming or otherwise using a Gift Card, you agree to be bound by these Terms.
                </p>
            </section>

            <section>
                <SectionTitle number={2} title="Definitions" />
                <ul className="list-none space-y-3 text-white">
                    <li>
                        <span className="font-medium">"Gift Card"</span> means a digital voucher with a unique code issued via the Ar-pay e-commerce
                        portal, entitling the holder to access games provided by LionDubai.
                    </li>
                    <li>
                        <span className="font-medium">"Platform"</span> means the website liondubai.net, hosted and operated by HKS (Ar-pay),
                        used solely for Gift Card redemption.
                    </li>
                    <li>
                        <span className="font-medium">"Client," "you" or "your"</span> means any individual or entity purchasing or
                        redeeming a Gift Card.
                    </li>
                </ul>
            </section>

            <section>
                <SectionTitle number={3} title="Issuance, Purchase & Payment" />
                <div className="space-y-3 text-white">
                    <p><span className="font-medium">3.1 Issuance.</span> Gift Cards are created and issued by HKS (Ar-pay) on LionDubai's behalf via the Ar-pay portal.</p>
                    <p><span className="font-medium">3.2 Purchase.</span> Gift Cards may be purchased by Clients through the Ar-pay e-commerce portal using payment methods accepted by Ar-pay. All sales are final.</p>
                    <p><span className="font-medium">3.3 Payment Processing.</span> Ar-pay processes payments; LionDubai has no responsibility for payment authorization, processing errors, or system downtime during purchase.</p>
                </div>
            </section>

            <section>
                <SectionTitle number={4} title="Redemption" />
                <div className="space-y-3 text-white">
                    <p><span className="font-medium">4.1 How to Redeem.</span> To redeem a Gift Card, enter the unique code at liondubai.net. Redemption is subject to manual approval by LionDubai via Zoho Forms.</p>
                    <p><span className="font-medium">4.2 Approval.</span> LionDubai reserves the right, in its sole discretion, to approve or reject redemption requests. Reasons for rejection may include suspected fraud or breach of these Terms.</p>
                    <p><span className="font-medium">4.3 Settlement.</span> Upon approval, transaction details are recorded in DueGate for settlement and record-keeping.</p>
                </div>
            </section>

            <section>
                <SectionTitle number={5} title="Gift Card Validity & Expiration" />
                <div className="space-y-3 text-white">
                    <p><span className="font-medium">5.1 Validity Period.</span> Each Gift Card is valid for [X] months from date of purchase, unless otherwise specified at time of sale.</p>
                    <p><span className="font-medium">5.2 Expiration.</span> Expired Gift Cards cannot be redeemed, refunded, or extended.</p>
                </div>
            </section>

            <section>
                <SectionTitle number={6} title="Refunds & Exchanges" />
                <div className="space-y-3 text-white">
                    <p><span className="font-medium">6.1 No Refunds.</span> Gift Card purchases are non-refundable and non-exchangeable, except as required by applicable law.</p>
                    <p><span className="font-medium">6.2 Cancellation.</span> We may cancel or rescind a Gift Card if we suspect unauthorized use or fraud; in such case, we will notify the Client and, where legally required, provide a refund for the unused balance.</p>
                </div>
            </section>

            <section>
                <SectionTitle number={7} title="Data Protection & Privacy" />
                <div className="space-y-3 text-white">
                    <p><span className="font-medium">7.1 Collection & Use.</span> We and our service providers (Ar-pay, Zoho Forms, DueGate) collect personal data necessary to process Gift Card purchases and redemptions.</p>
                    <p><span className="font-medium">7.2 Compliance.</span> All parties adhere to GDPR and applicable cross-border data transfer regulations. For details, see our Privacy Policy [link].</p>
                    <p><span className="font-medium">7.3 Data Sharing.</span> Personal and transaction data may be shared between Ar-pay, LionDubai, Zoho Forms, and DueGate solely for the purposes of purchase, redemption, approval, settlement, and legal compliance.</p>
                </div>
            </section>

            <section>
                <SectionTitle number={8} title="Intellectual Property" />
                <p className="text-white">
                    All content on liondubai.net, including game assets provided by LionDubai, Gift Card designs, trademarks,
                    and logos, is the property of LionDubai or its licensors and protected by law. No rights are granted to
                    Clients except for redemption of Gift Cards as permitted herein.
                </p>
            </section>

            <section>
                <SectionTitle number={9} title="Limitation of Liability" />
                <div className="space-y-3 text-white">
                    <p><span className="font-medium">9.1 No Warranty.</span> Gift Cards and redemption services are provided "as is" and "as available." LionDubai and its service providers disclaim all warranties, express or implied, including merchantability or fitness for a particular purpose.</p>
                    <p><span className="font-medium">9.2 Liability Cap.</span> To the maximum extent permitted by law, LionDubai's total liability under these Terms shall not exceed the purchase price of the Gift Card in question.</p>
                </div>
            </section>

            <section>
                <SectionTitle number={10} title="Compliance & Governing Law" />
                <div className="space-y-3 text-white">
                    <p><span className="font-medium">10.1 Regulatory Compliance.</span> These Terms and the Platform comply with applicable electronic commerce laws and consumer protection statutes.</p>
                    <p><span className="font-medium">10.2 Governing Law.</span> These Terms are governed by and construed in accordance with the laws of the United Arab Emirates, without regard to conflict-of-law principles. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai.</p>
                </div>
            </section>

            <section>
                <SectionTitle number={11} title="Amendments" />
                <p className="text-white">
                    We may modify these Terms at any time by posting updated Terms at liondubai.net. Changes take effect on the
                    "Last updated" date. Continued use of Gift Cards after such changes constitutes acceptance.
                </p>
            </section>

            <section>
                <SectionTitle number={12} title="Contact Information" />
                <div className="text-white border-l-4 border-primary pl-4 py-2">
                    <p className="font-medium mb-1">If you have questions about these Terms, please contact us at:</p>
                    <p>LionDubai Limited</p>
                    <p>Address: Dubai , UAE</p>
                    <p>Email: support@liondubai.net</p>
                    <p>Phone: +971 4 XXXX XXX</p>
                </div>
            </section>
        </div>
    );
};

export default TermsContent;