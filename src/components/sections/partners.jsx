import Partner1 from "../../assets/partner1.svg";
import Partner2 from "../../assets/partner2.svg";
import Partner3 from "../../assets/partner3.svg";
import Partner4 from "../../assets/partner4.svg";
import Partner5 from "../../assets/partner5.svg";


const partners = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
];


export default function Partners() {
    return (
        <div className="flex flex-col gap-6 py-16 items-center w-full overflow-hidden shadow-[inset_60px_0px_40px_0px_rgb(0,5,16),inset_-60px_0px_40px_0px_rgb(0,5,16)] ">
            <p className="text-center gap-1 "> Trusted by top <span className="text-primary ">crypto platforms</span> </p>

            
                <div className="flex w-max gap-24 -z-10 animate-[scroll_25s_linear_infinite] ">
                    {partners.map((partner, i) => (
                        <img key={`a-${i}`} src={partner} className="shrink-0" />
                    ))}

                    {partners.map((partner, i) => (
                        <img key={`b-${i}`} src={partner} className="shrink-0" />
                    ))}
                
            </div>


            <style>
                {`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                `}
            </style>
        </div>
    );
}