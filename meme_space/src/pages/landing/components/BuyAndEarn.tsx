import { CountDown } from "../../../components/CountDown";
import { Button } from "../../../components/primitives/Button";
import { Section } from "../../../components/Section";

export const BuyAndEarn = () => {
  return (
    <Section className="flex flex-col gap-[200px] xl:gap-[408px] items-center justify-between relative bg-meme-space bg-90% xl:bg-auto bg-no-repeat bg-center-t xl:bg-center mb-14 xl:mb-14 px-4 xl:px-0">
      <img
        src="/images/stars.png"
        alt=""
        className="absolute z-0 -top-[175px] -left-[18%] w-[80%] xl:hidden "
      />
      <img
        src="/images/stars.png"
        alt=""
        className="absolute z-0 -bottom-[18px] -right-[30%] w-[80%] xl:hidden "
      />
      <div className="flex flex-col items-center gap-4">
        {/* <img src="/images/meme_space.png" alt="Meme Space" /> */}
        <div className="text-[78px] text-center text-transparent text-shadow-light bg-clip-text bg-[#FAFDB4] leading-[76px] font-normal font-Bowlby">
          Meme Space
        </div>
        <div className="xl:absolute xl:top-24">
          <h1 className="text-[33px] text-center leading-10 xl:leading-normal uppercase font-bold sm:font-semibold text-white">
            Buy, Earn, Win on Meme SyperCycle
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl text-[#FFFFD2] font-bold">Next Price</div>
        <CountDown />
        <Button onClick={() => console.log("Buy & Earn")}>Buy & Earn</Button>
      </div>
    </Section>
  );
};
