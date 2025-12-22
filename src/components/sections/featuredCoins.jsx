  import { useEffect, useState, useCallback } from "react";
  import FeaturedCard from "../layout/featuredCard";
  import CoinsRowSkeleton from "../sections/featuredCoinsSkeleton";
  import Btc from "../../assets/tickerSymbol/btc.svg";
  import Eth from "../../assets/tickerSymbol/eth.svg";
  import Sol from "../../assets/tickerSymbol/sol.svg";


    const fallback = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      image: Btc,
      current_price: 0,
      total_volume: 0,
      price_change_percentage_24h: 0,
      market_cap_rank: 1,
    },
    {
      id: "ethereum",
      name: "Ethereum",
      image: Eth,
      current_price: 0,
      total_volume: 0,
      price_change_percentage_24h: 0,
      market_cap_rank: 2,
    },
    {
      id: "solana",
      name: "Solana",
      image: Sol,
      current_price: 0,
      total_volume: 0,
      price_change_percentage_24h: 0,
      market_cap_rank: 10,
    },
  ];


  export default function FeaturedCoins({id}) {

    const [coins, setCoins] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFallback, setIsFallback] = useState(false);


      const fetchData = useCallback(async () => {
        setLoading(true);

        try {
          // 1️⃣ Market data
          const marketRes = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&order=market_cap_desc&sparkline=false"
          );
          const marketData = await marketRes.json();

          // 2️⃣ Trending coins
          const trendingRes = await fetch(
            "https://api.coingecko.com/api/v3/search/trending"
          );
          const trendingData = await trendingRes.json();

          setCoins(marketData);
          setTrending(trendingData.coins.map((c) => c.item));
          setIsFallback(false);
        } catch (err) {
          console.error("Failed to fetch crypto data", err);

          setCoins(fallback);
          setTrending([]);
          setIsFallback(true);
        } finally {
          setLoading(false);
        }
      }, []);

  //   if (loading) {
  //     return <p className="text-white/60">Loading crypto data…</p>;
  //   }

    // ---------- DERIVED SECTIONS ----------

    const safeCoins = coins.length ? coins : fallback;

    // Highest Volume
    const highestVolume = [...safeCoins]
      .sort((a, b) => b.total_volume - a.total_volume)
      .slice(0, 3);

    // Top Gainer (single)
    const topGainer = [...safeCoins]
      .filter((c) => c.price_change_percentage_24h > 0)
      .sort(
        (a, b) =>
          b.price_change_percentage_24h -
          a.price_change_percentage_24h
      )
      .slice(0, 3);

    // Emerging Coins (approximation)
    const emergingCoins = [...safeCoins]
      .filter((c) => c.market_cap_rank > 200)
      .slice(0, 3);

    // Trending (merge with market data for price)
    const trendingWithPrice =
      trending.length && coins.length
        ? trending
            .map((t) => coins.find((c) => c.id === t.id))
            .filter(Boolean)
            .slice(0, 3)
        : fallback.slice(0, 3);

    useEffect(() => {
    fetchData();
    }, [fetchData]);

    useEffect(() => {
      const interval = setInterval(fetchData, 120000);
      return () => clearInterval(interval);
    }, [fetchData]);


    // ---------- RENDER ----------

    const sections = [
      { title: "Highest Volume", data: highestVolume },
      { title: "Top Gainer", data: topGainer },
      { title: "Trending", data: trendingWithPrice },
      { title: "Emerging Coins", data: emergingCoins },
    ];


    return (
      <div id={id} className="flex flex-col gap-8 py-16 items-center w-full overflow-hidden">
        <div className="flex flex-col gap-2.5 items-center">
          <p className="text-center">
            Featured <span className="text-primary">crypto coins</span>
          </p>
          <p className="text-2xl md:text-4xl text-center">Top crypto coins updates</p>
        </div>

        <div className="w-full flex items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
              {loading ? (               
                  <CoinsRowSkeleton count={10} gap="gap-6" />
              ) : (
              
              <div className="flex gap-6 w-max px-6">
                  
                  {sections.map((section) =>
                    section.data.map((coin) => (
                    
                    <FeaturedCard
                        key={coin.id}
                        title={section.title}
                        isFallback={isFallback}
                        logo={coin.image}
                        alt={`${coin.name} logo`}
                        coinName={coin.name}
                        price={coin.current_price}
                        />
                  )))}
              </div>
              )}
          </div>
        </div>
    );
  }
