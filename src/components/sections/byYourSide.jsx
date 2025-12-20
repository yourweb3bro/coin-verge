import HorizontalSlopeBg from "../../assets/horizontal-slope.svg";
import InfoIcon from "../layout/infoIcon";
import SupportIcon from "../../assets/support-icon.svg";
import CommunityIcon from "../../assets/community-icon.svg";
import AcademyIcon from "../../assets/academy-icon.svg";


const infos = [
    {
        icon: SupportIcon,
        title: "24/7 Support",
        description: "Have a problem? Get your requests solved quickly via support team."
    },
    {
        icon: CommunityIcon,
        title: "Community",
        description: "Participate in the discussions on our global OKEx communities."
    },
    {
        icon: AcademyIcon,
        title: "Academy",
        description: "Learn cryptocurrency and blockchain for free."
    },
]

export default function ByYourSide() {

  return (
    <div className="flex flex-col gap-8 py-16 items-center w-full overflow-hidden">
        <div className="flex flex-col gap-2.5 items-center text-center">
            <p className="">By your side always</p>
            <p className="text-2xl md:text-4xl">Take advantage of our CoinVerge first!</p>
            <p className="text-xs text-white/40">Get cloud object storage without a central point of failure that is quicker, safer, and less expensive.</p>
        </div>


        <div className="flex p-0 md:px-12 w-full">
            <div className="flex items-center justify-center w-full text-center p-6 md:p-10 xl:p-18 gap-10 md:gap-18 min-w-70 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                
                <div className="flex gap-12 md:gap-20 flex-col lg:flex-row">
                    {infos.map((info) => (
                    <InfoIcon 
                        icon={info.icon}
                        title={info.title}
                        description={info.description}
                    />
                    ))}
                </div>

                <img src={HorizontalSlopeBg} alt="" className="absolute w-full left-0 bottom-0"/>        
            </div>
                    
        </div>
      </div>
  );
}
