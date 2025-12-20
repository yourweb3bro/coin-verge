import Skeleton from "../ui/skeleton";

export default function FeaturedCardSkeleton() {
  return (
    <div className="flex flex-col min-w-44 gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
      {/* title */}
      <Skeleton className="h-3 w-20" />

      {/* logo */}
      <Skeleton className="h-8 w-8 rounded-full" />

      {/* coin info */}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  );
}
