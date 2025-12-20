export default function NavCta({title, link}) {
    return (
        <a className="rounded-full flex items-center justify-center px-6 py-3 bg-btn text-white font-bold text-base hover:bg-btn/80 transition-colors" href={link}
        >
        {title}
        </a>
    );
}