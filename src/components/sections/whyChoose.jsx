import iconLink from "../../assets/icon-link.svg";
import iconBolt from "../../assets/icon-bolt.svg";
import iconSetting from "../../assets/icon-setting.svg";
import IconedText from "../ui/iconedText";
import PortfolioRateCard from "../layout/porfolioRateCard";
import BehindPortfolioCard from "../../assets/behind-portfolio-card.svg";
import AtomicLogo from "../../assets/atomic-logo.svg";
import { motion } from "framer-motion";

const reasons = [
    {
        icon: iconLink,
        text: "Made specifically for cryptocurrency trading platforms"
    },
    {
        icon: iconBolt,
        text: "Launch your cryptocurrency website now."
    },
    {
        icon: iconSetting,
        text: "Start your blockchain platform right now."
    },
]

export default function WhyChoose({id}) {
    return (
        <div id={id} className="flex flex-col md:flex-row md:gap-8 px-0 py-8 md:px-12 md:py-16 gap-14 justify-center">
            
            <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-2.5 text-center md:text-left">                
                    <p className="gap-1"> Why choose <span className="text-primary ">CoinVerge</span> </p>
                    <p className="text-2xl md:text-4xl"> The crypto framer mobile application's features </p>
                </div>

                <div className="flex flex-col gap-7 items-center md:items-start">
                    {reasons.map((reason) => (
                        <motion.div
                        key={reason.text}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        >
                        <IconedText
                        key={reason.text}
                        icon={reason.icon}
                        title={reason.text}
                        iconLeft={true}
                        />
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className="w-full flex justify-center">
                <PortfolioRateCard />
                <img src={BehindPortfolioCard} alt="" className="absolute -z-10 self-center pointer-events-none"/>
                <img src={AtomicLogo} alt="" className="absolute -z-10 transform -translate-x-20 -translate-y-28 md:-translate-y-96 pointer-events-none"/>
            </div>
        </div>
    );
}