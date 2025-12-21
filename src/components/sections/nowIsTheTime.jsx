import FloatCard from "../../assets/float-card.svg";
import PieIcon from "../../assets/pie-icon.svg";
import BtcShield from "../../assets/btc-shield.svg";
import PhoneIcon from "../../assets/phone-icon.svg";
import IconedText from "../ui/iconedText";

export default function NowIsTheTime({id}) {
    return (
        <div id={id} className="flex flex-col md:flex-row gap-0 md:gap-8 px-0 py-8 md:px-12 md:py-16 items-center justify-center">
            <div className="flex w-full">
                <img src={FloatCard} alt=""/>
            </div>
        
            <div className="flex flex-col gap-8 w-full items-center md:items-start">
                <div className="flex flex-col gap-3 text-center md:text-start">
                    <p className="">Coin<span className="text-primary">Verge</span></p>
                    <p className="text-2xl md:text-3xl">Now is the time to start your bitcoin portfolio.</p>
                    <p className="text-xs text-white/40">CoinVerge is the greatest spot to begin trading because of its many features.    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <IconedText 
                        icon={PieIcon}
                        title={"Control your portfolio."}
                    />

                    <div className="h-px w-full bg-white/5"></div>

                    <IconedText 
                        icon={BtcShield}
                        title={"Protection of a vault"}
                    />

                    <div className="h-px w-full bg-white/5"></div>

                    <IconedText 
                        icon={PhoneIcon}
                        title={"Mobile apps"}
                    />
                </div>
            </div>
        </div>
    );
}