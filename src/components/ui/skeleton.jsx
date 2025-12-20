import { useInView } from "react-intersection-observer";

export default function Skeleton({ className = ""}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      // ref={ref}
      className={`bg-white/10 rounded ${inView ? "animate-pulse" : ""} ${className}`}
    />
  );
}
