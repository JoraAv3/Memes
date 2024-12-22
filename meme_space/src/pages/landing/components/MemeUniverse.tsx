import { Section } from "../../../components/Section";

export const MemeUniverse = () => {
  return (
    <Section className="flex flex-col items-center justify-center before:w-full before:h-44 relative">
      <div className="absolute bg-stars bg-contain w-[30%] pt-32 pl-20 right-0 -top-14 bg-no-repeat">
        <img src="/images/cosmocat.png" alt="" />
      </div>
      <div className="w-[1174px] flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
          <span>Explore the Meme</span>
          <span>Universe</span>
        </div>
        <div className="flex items-center justify-start w-full">
          <img src="/images/universe_dog.png" alt="" />
          <div className="flex flex-col w-64">
            <div className="text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              Meme-cubator
            </div>
            <div className="">
              — a launchpad for new meme projects with holder voting and exclusive early
              participation opportunities.
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img className="absolute left-[232px] -top-[100px]" src="/images/dot.png" alt="" />
          <img
            className="absolute left-[200px] -top-[82px]"
            src="/images/universe_line1.png"
            alt=""
          />
          <img className="absolute right-[136px]" src="/images/dot.png" alt="" />
        </div>
        <div className="flex items-center justify-end w-full">
          <div className="flex flex-col w-64">
            <div className="text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              Meme Space App
            </div>
            <div className="">
              — an app to earn tokens through tasks, trading, and engaging in project activities.
            </div>
          </div>
          <img src="/images/universe_phone.png" alt="" />
        </div>
        <div className="relative w-full">
          <img className="absolute left-[146px] top-2" src="/images/dot.png" alt="" />
          <img
            className="absolute left-[200px] -top-[114px] scale-x-[1.08]"
            src="/images/universe_line2.png"
            alt=""
          />
          <img className="absolute right-[226px] -top-[120px]" src="/images/dot.png" alt="" />
        </div>
        <div className="flex items-center justify-start w-full">
          <img src="/images/universe_pig.png" alt="" />
          <div className="flex flex-col w-64">
            <div className="text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              Meme Fund
            </div>
            <div className="">
              — an investment fund that provides passive income from all projects within the
              ecosystem.
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img className="absolute left-[72px] -top-[20px]" src="/images/dot.png" alt="" />
          <img
            className="absolute left-[79px] -top-[30px] scale-x-[1.1] scale-y-[0.8] -rotate-[2deg]"
            src="/images/universe_line3.png"
            alt=""
          />
          <img className="absolute right-6 top-4" src="/images/dot.png" alt="" />
        </div>
        <div className="flex items-center justify-end w-full">
          <div className="flex flex-col w-64">
            <div className="text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              Meme Bot & Analyzer
            </div>
            <div className="">
              — an analytical bot to monitor market trends and stay on top of growth opportunities.
            </div>
          </div>
          <img src="/images/universe_bot.png" alt="" />
        </div>
      </div>
    </Section>
  );
};
