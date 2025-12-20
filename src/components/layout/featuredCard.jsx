export default function FeaturedCard({
    title="Title here", 
    logo="./src/assets/tickersymbol/btc.svg", 
    alt="crypto logo", 
    coinName="Bitcoin", 
    price="93575.5", 
    currency="USD"
}) {
    return (
        <div className="flex flex-col h-fit min-w-44 gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xs cursor-pointer hover:shadow-[0_0px_20px_rgba(108,140,225,0.2)] transition-all " >
            <h5 className="text-white/60 font-light text-sm">{title}</h5>
            <img src={logo} alt={alt} className="h-8 w-8 rounded-full"/>

            <div className="flex flex-col gap-1">
                <p className="font-medium">{coinName}</p>
                <p className="flex gap-1 text-sm">${price.toLocaleString()} <span className="text-white/60">{currency}</span></p>
            </div>
        </div>
    );
}