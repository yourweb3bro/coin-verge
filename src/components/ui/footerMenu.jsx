export default function FooterMenu({title, link, isHeading = false}) {

    return (
        <div className=" flex items-center justify-center w-fit h-fit">
            { isHeading ? (
                <p className="text-white">{title}</p>
            ) : ( 
            <a href={link} className="text-white/60 hover:text-white transition-colors font-extralight">{title}</a>
            )}
        </div>
    );
}