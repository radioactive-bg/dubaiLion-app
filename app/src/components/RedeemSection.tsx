import { motion } from "framer-motion";

const RedeemSection: React.FC = () => {
  return (
    <section id="redeem" className="py-44 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gaming-accent">Redeem</span> Your Card
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            aria-label="Enter your card details below to redeem your gaming gift card"
            style={{
              height: "600px",
              width: "448px",
              borderRadius: "35px",
              padding: "20px",
              margin: "0px auto",
            }}
            src="https://forms.zohopublic.com/arpayhks/form/LionDubaitestform/formperma/NMUsXosjNcb_HilAO9GxScn-Aj2NqPQS4CNUPKdnSEI"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default RedeemSection;
