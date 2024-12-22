import { CountDown } from "../../../components/CountDown";
import { Button } from "../../../components/primitives/Button";
import { Section } from "../../../components/Section";

export const BuyAndEarn = () => {
  return (
    <Section className="flex flex-col gap-4 items-center justify-center relative bg-meme-space bg-no-repeat bg-center mb-14">
      <img src="/images/meme_space.png" alt="Meme Space" />
      <div className="absolute top-24">
        <h1 className="text-[33px] uppercase font-semibold text-white">
          Buy, Earn, Win on Meme SyperCycle
        </h1>
      </div>
      <div className="text-4xl text-[#FFFFD2] font-bold">Next Price</div>
      <CountDown />
      <Button onClick={() => console.log("Buy & Earn")}>Buy & Earn</Button>
    </Section>
  );
};
