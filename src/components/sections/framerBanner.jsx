import Button from "../ui/button";
import FramerBannerBg from "../../assets/framer-banner-bg.svg";

export default function FramerBanner() {
    return (
        <div className="flex p-0 md:p-18">
            <div className="flex items-center overflow-hidden text-center md:text-start flex-col md:flex-row p-6 md:p-10 xl:p-18 gap-10 md:gap-18 min-w-70 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl">Framer-powered CoinVerge platform</p>
                        <p className="text-white/60">Our landing site gives framer developers access to more reliable, secure, and cost-free experiences.</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <Button 
                            title={"Get template"}
                            link={"#"}
                        />
                        <img src={FramerBannerBg} alt="" className="absolute right-0 top-0 h-full -z-10"/>
                    </div>
            </div>
        </div>
    );
}