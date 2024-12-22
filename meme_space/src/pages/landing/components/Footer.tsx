import { Link } from "react-router-dom";
import { InstagramIcon } from "../../../assets/icons/Instagram";
import { LogoIcon } from "../../../assets/icons/LogoIcon";
import { TelegramIcon } from "../../../assets/icons/Telegram";
import { TwitterIcon } from "../../../assets/icons/Twitter";
import { Section } from "../../../components/Section";

export const LandingFooter = () => {
  return (
    <Section className="flex flex-col items-center justify-center mb-14 mt-32 z-10 bg-cosmos bg-center bg-contain bg-no-repeat">
      <div className="flex flex-col items-center justify-center">
        <LogoIcon className="w-44 h-28 mb-4" />
        <div className="text-[#FCAF54] text-5xl font-bold">MEME</div>
        <div className="text-[#FCAF54] text-[11px] tracking-[4px] uppercase">space</div>
      </div>
      <div className="flex items-center justify-center gap-3 my-12">
        <div className="px-14">
          <TelegramIcon />
        </div>
        <div className="px-14">
          <TwitterIcon />
        </div>
        <div className="px-14">
          <InstagramIcon />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t border-t-[#FCBB6316]">
        <div className="text-2xl text-[#FCAF54] w-2/3 text-center my-9">
          Join Meme Space and unlock new opportunities in the world of memes and crypto!
        </div>
        <div className="flex flex-col gap-4 text-[#FFE6E3] justify-center items-center">
          <Link to="/buy">Buy</Link>
          <Link to="/earn">Earn</Link>
          <Link to="/tokenomics">Tokenomics</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/faq">Faq App</Link>
          <Link to="/audit">Audit</Link>
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
