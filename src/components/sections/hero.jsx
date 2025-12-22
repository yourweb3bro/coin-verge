import { useState } from "react";
import Button from "../ui/button";
import HeroBg from "../../assets/hero-bg.svg";
import HireDialog from "../layout/hireDialog";

export default function HeroSection({id}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id={id} className="h-screen flex flex-col items-center justify-center text-center text-wrap gap-6 md:max-w-3xl
        ">
            <img src={HeroBg} alt="hero bg" className="absolute -z-10 bottom-0 md:h-4/12 2xl:h-5/12 w-full fade-in-bottom" style={{ animationDelay: "1.6s" }}/>
            <p className="bg-primary/10 text-primary text-sm rounded-full border border-primary/20 w-fit py-1 px-3 md:py-1.5 md:px-5"> Future of crypto trading </p>

            <h1 className="text-4xl md:text-7xl font-medium -mb-2 fade-in-top"> Instant and Secure Crypto Trading </h1>
            <h5 className="text-base"> With our state-of-the-art platform, you may trade cryptocurrencies with convenience, security, and sophisticated features. </h5>

            <div className="flex items-center justify-center gap-4 flex-wrap"> 
                <Button title={"Contact us"} onClick={() => setIsOpen(true)} variant={"primary"}/>
                <Button title={"Get Started"} onClick={() => setIsOpen(true)} variant={"secondary"}/>
            </div>

            <HireDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
}