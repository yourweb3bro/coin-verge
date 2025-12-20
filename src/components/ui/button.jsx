import RightArrow from "../../assets/right-arrow.svg";

export default function Button({title, link, variant="primary"}) {
    const variants = {
        primary: "bg-btn hover:bg-btn/80 border-black/10",
        secondary: "bg-white/10 border-black/5"
    };

    const variantClass = variants[variant] || variants.primary;


    return (
        <button className={`backdrop-blur-xs cursor-pointer flex items-center text-nowrap justify-between rounded-full p-1.5 pl-6 gap-4 border font-normal text-base text-white transition-colors ${variantClass}`} href={link}
        >
        {title}

        <div className=" rounded-full p-4 w-12 h-12 items-center justify-center bg-white/8 hover:-rotate-12 transition-all">
            <img src={RightArrow} alt="right arrow button icon" />
        </div>
        </button>
    );
}