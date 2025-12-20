import IconedText from "../ui/iconedText";
import PhoneModel from "../../assets/phone-model.svg";
import HashIcon from "../../assets/hash-icon.svg";
import CubeIcon from "../../assets/cube-icon.svg";
import BtcFilterIcon from "../../assets/btc-filter-icon.svg";
import RocketIcon from "../../assets/rocket-icon.svg";
import LooperBg from "../../assets/looper-bg.svg";

export default function WeProvide() {

  return (
    <div className="flex flex-col gap-10 px-12 py-16 items-center">
        <div className="flex flex-col gap-2.5 items-center">
            <p className="text-center">
            We provide the <span className="text-primary">greatest solution.</span>
            </p>
            <p className="text-2xl md:text-4xl text-center max-w-3xl">Multiple possibilities in a single application that gives you the ability to purchase and sell</p>
        </div>

        <div className="flex flex-col gap-7">
            <IconedText 
                icon={BtcFilterIcon}
                title="Improvement"
                showDescription={true}
                description="Make your crypto landing page better."
                iconLeft={true}
                iconRight={false}
                align="left"
                className="max-w-60 relative md:absolute trasnform translate-x-0 trnaslate-y-0 md:translate-x-144 md:translate-y-40"
            />
            <IconedText 
                icon={RocketIcon}
                title="Scale and Assistance"
                showDescription={true}
                description="Launch the product and guarantee professional assistance."
                iconLeft={true}
                iconRight={false}
                align="left"
                className="max-w-80 relative md:absolute trasnform translate-x-0 trnaslate-y-0 md:translate-x-150 md:translate-y-110"
            />
            
            
            <IconedText 
                icon={HashIcon}
                title="Planning"
                showDescription={true}
                description="Use the framer template to map the scope of the crypto project."
                iconLeft={false}
                iconRight={true}
                align="right"
                className="max-w-68 relative md:absolute trasnform translate-x-0 trnaslate-y-0 md:-translate-x-40 md:translate-y-40"
            />
            <IconedText 
                icon={CubeIcon}
                title="Prototype"
                showDescription={true}
                description="Create a cryptocurrency website to test your offering."
                iconLeft={false}
                iconRight={true}
                align="right"
                className="max-w-60 relative md:absolute trasnform translate-x-0 trnaslate-y-0 md:-translate-x-38 md:translate-y-110"
            />
            <img src={PhoneModel} alt="" className="hidden md:flex"/>

            <img src={LooperBg} alt="" className="absolute left-0 transform  md:translate-y-80 translate-y-40 2xl:translate-x-240" />
        </div>
    </div>
  );
}
