import CoinRate from "./coinRate";
import Btc from "../../assets/tickerSymbol/btc.svg"
import Eth from "../../assets/tickerSymbol/eth.svg"
import Ltc from "../../assets/tickerSymbol/ltc.svg"
import Polkadot from "../../assets/tickerSymbol/polkadot.svg"

const currencies = [
    {
        icon: Btc,
        title: "Bitcoin",
    },
    {
        icon: Eth,
        title: "Ethereum",
    },
    {
        icon: Ltc,
        title: "Litecoin",
    },
    {
        icon: Polkadot,
        title: "Polkadot",
    },
]
export default function PortfolioRateCard() {
    return (
        <div className="flex flex-col p-8 gap-8 min-w-90 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                <p className="gap-1 text-lg font-extralight">Your portfolio is up <span className="text-primary">2.31%</span></p>

            <div className="flex flex-col gap-6">
                {currencies.map((currency) => (
                    <CoinRate
                        key={currency.title}
                        icon={currency.icon}
                        title={currency.title}
                    />
                ))}
            </div>
        </div>

    );
}