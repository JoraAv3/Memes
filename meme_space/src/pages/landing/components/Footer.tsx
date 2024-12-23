import { Link } from "react-router-dom";
import { InstagramIcon } from "../../../assets/icons/Instagram";
import { LogoIcon } from "../../../assets/icons/LogoIcon";
import { TelegramIcon } from "../../../assets/icons/Telegram";
import { TwitterIcon } from "../../../assets/icons/Twitter";
import { Section } from "../../../components/Section";

export const LandingFooter = () => {
  return (
    <Section className="flex flex-col items-center justify-center mb-14 mt-16 xl:mt-32 z-10 bg-cosmos bg-center bg-cover xl:bg-contain bg-no-repeat px-6 xl:px-0">
      <div className="flex flex-col items-center justify-center">
        <LogoIcon className="w-36 xl:w-44 xl:h-28 xl:mb-4" />
        <div className="text-[#FCAF54] text-2xl xl:text-5xl font-bold">MEME</div>
        <div className="text-[#FCAF54] text-[11px] tracking-[4px] uppercase">space</div>
      </div>
      <div className="flex items-center justify-center gap-3 my-6 xl:my-12">
        <div className="px-3 xl:px-14">
          <TelegramIcon className="w-8 xl:w-auto" />
        </div>
        <div className="px-3 xl:px-14">
          <TwitterIcon className="w-8 xl:w-auto" />
        </div>
        <div className="px-3 xl:px-14">
          <InstagramIcon className="w-8 xl:w-auto" />
        </div>
      </div>
      <div className="flex flex-col items-center border-t border-t-[#FCBB6316]">
        <div className="text-[15px] xl:text-2xl text-[#FCAF54] w-full xl:w-2/3 text-center my-6 xl:my-9">
          Join Meme Space and unlock new opportunities in the world of memes and crypto!
        </div>
        <div className="flex xl:flex-col gap-8 xl:gap-4 text-[#FFE6E3] justify-center items-center">
          <div className="flex flex-col gap-4 justify-center xl:items-center">
            <Link to="/buy">Buy</Link>
            <Link to="/earn">Earn</Link>
            <Link to="/tokenomics">Tokenomics</Link>
          </div>
          <div className="flex flex-col gap-4 justify-center xl:items-center">
            <Link to="/roadmap">Roadmap</Link>
            <Link to="/faq">Faq App</Link>
            <Link to="/audit">Audit</Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-9 text-[#FFE6E3] opacity-60">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms">Terms of Use</Link>
          <span>|</span>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
        <div className="text-center mt-12 opacity-60">
          Crypto investments are volatile.
          <br />
          Please invest wisely.
        </div>
      </div>
    </Section>
  );
};
