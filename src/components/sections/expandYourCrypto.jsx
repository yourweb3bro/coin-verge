import TrendCard from "../../assets/trend-cards.svg";
import IconedText from "../ui/iconedText";
import SmooshIcon from "../../assets/smoosh-icon.svg"


export default function ExpandYourCrypto() {
    return (
        <div className="flex flex-col md:flex-row gap-0 md:gap-8 px-0 py-8 md:px-12 md:py-16 items-center justify-center">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-3 text-center md:text-start">
                    <p className="">CoinVerge<span className="text-primary">upgrade</span></p>
                    <p className="text-2xl md:text-3xl">Expand your crypto business</p>
                    <p className="text-xs text-white/40">Get cloud object storage without a central point of failure that is quicker, safer, and less expensive.</p>
                </div>

                <div className="grid grid-rows-2 md:grid-cols-2 gap-4 text-white/80">
                    <IconedText 
                        icon={SmooshIcon}
                        title={"100% secure"}
                        iconBg={"bg-none min-w-6"}
                        className={"w-full"}
                    />
                    <IconedText 
                        icon={SmooshIcon}
                        title={"More durable"}
                        iconBg={"bg-none min-w-6"}
                        className={"w-full"}
                    />

                    <IconedText 
                        icon={SmooshIcon}
                        title={"A fraction of the cost"}
                        iconBg={"bg-none min-w-6"}
                        className={"w-full"}
                    />
                    <IconedText 
                        icon={SmooshIcon}
                        title={"Easier to use"}
                        iconBg={"bg-none min-w-6"}
                        className={"w-full"}
                    />
                </div>
            </div>
        
            <div className="flex flex-col gap-8 w-full items-center md:items-start">
                <div className="flex flex-col gap-4">
                    <img src={TrendCard} alt="" />
                </div>
            </div>
        </div>
    );
}