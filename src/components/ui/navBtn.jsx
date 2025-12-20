export default function NavBtn({title, link}) {
    return (
        <a className=" flex items-center justify-center text-white hover:text-gray-300 text-base font-light transition-colors h-fit" href={link}
        > 
        {title} 
        </a>
    );
}