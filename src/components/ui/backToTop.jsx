import RightArrow from "../../assets/right-arrow.svg";

export default function BackToTopBtn() {

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    };

    return (
        <button className="fixed bottom-10 right-10 bg-btn hover:bg-btn/80 border-black/10 backdrop-blur-xs cursor-pointer flex items-center text-nowrap justify-between rounded-full p-1.5 gap-4 border font-normal text-base text-white transition-colors" onClick={scrollToTop} aria-label="Back to top"
        >
        <div className=" rounded-full p-3 w-10 h-10 items-center justify-center bg-white/8 -rotate-90 transition-all animate-pulse">
            <img src={RightArrow} alt="scroll back to top button icon"/>
        </div>
        </button>
    );
}