export default function NavCta({title, link}) {
    return (
        <button className={"rounded-full flex w-full items-center justify-center cursor-pointer px-6 py-3 bg-btn text-white font-bold text-base hover:bg-btn/80 transition-colors"} onClick={link}
        >
        {title}
        </button>
    );
}