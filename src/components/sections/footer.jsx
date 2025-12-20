import FooterMenu from "../ui/footerMenu";
import PlayStore from "../../assets/play-store.svg";
import AppStore from "../../assets/app-store.svg";
import AppLogo from "../../assets/logo.svg";
import FbIcon from "../../assets/icon-fb.svg";
import IgIcon from "../../assets/icon-ig.svg";
import XIcon from "../../assets/icon-x.svg";

export default function Footer() {

  return (
    <div className="flex flex-col gap-8 pt-16 pb-2 px- items-center w-full overflow-hidden">
        <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col w-full gap-4">
                <img src={AppLogo} alt="" className="w-30" />
                <p className="text text-white/60 text-wrap">Transform your crypto business with CoinVerge Framer, a template for startups and blockchain services.</p>
                <div className="flex items-center justify-start gap-3">
                    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden bg-white/10 backdrop-blur-2xl"> <img src={FbIcon} alt=""/> </div>
                    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden bg-white/10 backdrop-blur-2xl"> <img src={IgIcon} alt=""/> </div>
                    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden bg-white/10 backdrop-blur-2xl"> <img src={XIcon} alt=""/> </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-center gap-5">
                <div className="flex flex-col gap-3">
                    <div className=""> <FooterMenu title={"Links"} isHeading /> </div>
                    <div className="flex flex-col gap-2">
                        <FooterMenu 
                            title={"Features"}
                            link={"#"}
                        />

                        <FooterMenu 
                            title={"Benefits"}
                            link={"#"}
                        />

                        <FooterMenu 
                            title={"Services"}
                            link={"#"}
                        />

                        <FooterMenu 
                            title={"Why CoinVerge"}
                            link={"#"}
                        />

                        <FooterMenu 
                            title={"FAQs"}
                            link={"#"}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className=""> <FooterMenu title={"Other Pages"} isHeading /> </div>
                    <div className="flex flex-col gap-2">
                        <FooterMenu 
                            title={"Terms"}
                            link={"#"}
                        />

                        <FooterMenu 
                            title={"Disclosures"}
                            link={"#"}
                        />

                        <FooterMenu 
                            title={"Latest News"}
                            link={"#"}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">              
                        <div className=""> <FooterMenu title={"Download app"} isHeading /> </div>
                        <div className="flex flex-col gap-3 max-w-40"> 
                            <img src={PlayStore} alt="" />
                            <img src={AppStore} alt="" />
                        </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center h-9 py-10 w-full border-t border-t-white/5">
            <p className="text-white/40 text-sm">Copyright ©2025 CoinVerge. All rights reserved</p>
        </div>
      </div>
  );
}
