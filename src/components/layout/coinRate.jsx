import upArrow from "../../assets/up-arrow.svg"

export default function CoinRate({icon="", title, tradingPair="BTC/USD", percent="1.05"}) {
    return (
        <div className="flex justify-between ">
            <div className="flex gap-3.5">
                    <img className="flex items-center justify-center rounded-full h-10" src={icon} alt="" />

                <div>
                    <p className="text-base ">{title}</p>
                    <p className="text-sm font-extralight text-white/60">{tradingPair}</p>
                </div>
            </div>

            <div className="flex items-center text-primary"> <p>{percent}%</p> <img src={upArrow} alt="" /></div>

        </div>
    );
}