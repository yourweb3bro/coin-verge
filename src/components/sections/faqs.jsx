import SingleFaqs from "../layout/singleFaqs";
import { motion } from "framer-motion";

const faqs = [
  {
    title: "What is CoinVerge?",
    description:
      "CoinVerge is a modern cryptocurrency platform designed to help users manage, trade, and explore digital assets through a fast and intuitive interface."
  },
  {
    title: " Is CoinVerge available worldwide?",
    description:
      "Yes, CoinVerge is accessible in most countries around the world, allowing users to interact with the platform regardless of location, subject to local regulations."
  },
  {
    title: "Which cryptocurrencies are supported on CoinVerge?",
    description:
      "CoinVerge supports a wide range of popular cryptocurrencies, including major assets like Bitcoin and Ethereum, as well as emerging blockchain-based tokens."
  },
  {
    title: "Is my personal information secure with CoinVerge?",
    description:
      "User security is a top priority. CoinVerge uses industry-standard encryption and security practices to protect personal data and prevent unauthorized access."
  },
  {
    title: "Are there any deposit or withdrawal fees?",
    description:
      "Fees may vary depending on the transaction type and network conditions. CoinVerge aims to keep costs transparent and competitive for all users."
  },
  {
    title: "Does CoinVerge offer advanced trading tools?",
    description:
      "Yes, CoinVerge provides advanced trading features such as real-time charts, market insights, and tools designed to support both beginners and experienced traders."
  },
];

export default function Faqs({id}) {

  return (
    <div id={id} className="flex flex-col gap-8 py-16 items-center w-full overflow-hidden">
        <div className="flex flex-col gap-2.5 items-center text-center">
            <p className="">Frequent <span className="text-primary">questions</span></p>
            <p className="text-2xl md:text-4xl">Find out more about CoinVerge.</p>
            <p className="text-xs text-white/40">We accept 100+ cryptocurrencies around the world</p>
        </div>


        <div className="flex flex-col gap-4 min-w-60 md:w-4/5">              
                    {faqs.map((faq) => (
                    <motion.div
                        key={faq.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                    <SingleFaqs
                        title={faq.title}
                        description={faq.description}
                    />
                    </motion.div>
                    ))}
        </div>
      </div>
  );
}
