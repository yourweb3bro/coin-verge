import FeaturedCardSkeleton from "../layout/featuredCardSkeleton";

export default function CoinsRowSkeleton({ count = 4, gap = "gap-6" }) {

  return (
    <div className={`flex w-max px-6 ${gap}`}>
      {Array.from({ length: count }).map((_, i) => (
        <FeaturedCardSkeleton key={i} />
      ))}
    </div>
  );
}