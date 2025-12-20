export default function InfoIcon({icon, title, description}) {

    return(
        <div className="flex flex-col items-center justify-center max-w-60">
            <div className="w-12 h-12 p-3 flex items-center justify-center rounded-full mb-4 overflow-hidden bg-white/10 backdrop-blur-2xl"> <img src={icon} alt=""/> </div>
            <p className="">{title}</p>
            <p className="text-sm text-white/60">{description}</p>
        </div>
    );
}