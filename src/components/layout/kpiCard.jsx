export default function KpiCard({title, description}) {
    return (
        <div className="flex items-center justify-center p-18 h-14 min-w-68 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex flex-col text-center">
                <p className="text-2xl text-primary">{title}</p>
                <p className="font-extralight text-sm text-white/60">{description}</p>
            </div>
        </div>

    );
}