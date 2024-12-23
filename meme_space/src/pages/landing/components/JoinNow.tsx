import { Button } from "../../../components/primitives/Button";
import { Section } from "../../../components/Section";

export const JoinNow = () => {
  return (
    <Section className="flex flex-col items-center justify-center before:w-full before:h-44 before:bg-gradient-to-t from-black to-transparent px-6 xl:px-0">
      <div className="xl:w-[920px] flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-[32px] xl:text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
          <span>What is Meme</span>
          <span>Space?</span>
        </div>
        <div className="flex items-center justify-between gap-1.5 xl:gap-14 text-[13px] xl:text-[18px] my-6 xl:my-8 w-full">
          <div className="bg-gradient-to-r from-[#FCAF54] to-[#FAFDB4] p-0.5 rounded-[4px] text-white">
            <button
              type="button"
              className="px-4 xl:px-16 py-1 xl:py-2.5 font-bold border-none bg-black w-full h-full flex items-center justify-center rounded-[4px] uppercase"
            >
              Utility
            </button>
          </div>
          <div className="bg-[#757171] p-0.5 rounded-[4px] text-[#757171]">
            <button
              type="button"
              className="px-4 xl:px-16 py-1 xl:py-2.5 font-bold border-none bg-black w-full h-full flex items-center justify-center rounded-[4px] uppercase"
            >
              Deflationary
            </button>
          </div>
          <div className="bg-[#757171] p-0.5 rounded-[4px] text-[#757171]">
            <button
              type="button"
              className="px-4 xl:px-16 py-1 xl:py-2.5 font-bold border-none bg-black w-full h-full flex items-center justify-center rounded-[4px] uppercase"
            >
              Community
            </button>
          </div>
        </div>
        <div className="text-sm xl:text-2xl">
          Meme Space is a community-powered ecosystem for meme coins on BNB, ETH, and SOL, bringing
          legendary growth potential, passive income, and exclusive perks to investors. Join the
          meme revolution and catch the wave of limitless profit and next-level growth!
        </div>
        <Button className="my-14 z-10" onClick={() => console.log("Join now")}>
          Join now
        </Button>
      </div>
    </Section>
  );
};
