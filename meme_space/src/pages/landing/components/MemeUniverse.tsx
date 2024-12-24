import { Section } from "../../../components/Section";

export const MemeUniverse = () => {
  return (
    <Section className="flex flex-col items-center justify-center before:w-full before:h-24 xl:before:h-44 relative px-6 xl:px-0">
      <div className="absolute bg-stars bg-contain bg-right-t xl:bg-inherit w-full xl:w-[30%] h-[360px] xl:h-auto xl:pt-32 xl:pl-20 rotate-[130deg] xl:rotate-0 right-0 -top-[156px] xl:-top-14 bg-no-repeat">
        <img src="/images/cosmocat.png" alt="" className="hidden xl:block" />
      </div>
      <div className="w-full xl:w-[1174px] flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col justify-center items-center xl:w-3/5 text-center text-[32px] xl:text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
          <span>Explore the Meme Universe</span>
        </div>
        <div className="flex items-center justify-start w-full gap-2">
          <img src="/images/universe_dog.png" alt="" className="w-1/3 xl:w-auto" />
          <div className="flex flex-col w-64">
            <div className="text-xl xl:text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              Meme-cubator
            </div>
            <div className="text-[15px] leading-5 xl:text-base xl:leading-normal">
              — a launchpad for new meme projects with holder voting and exclusive early
              participation opportunities.
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img
            className="absolute hidden xl:block left-[232px] -top-[25px] xl:-top-[100px]"
            src="/images/dot.png"
            alt=""
          />
          <img
            className="hidden xl:block absolute left-[200px] -top-[82px]"
            src="/images/universe_line1.png"
            alt=""
          />
          <img
            className="xl:hidden m-auto"
            src="/images/universe_mobile/universe_line1.png"
            alt=""
          />
          <img
            className="absolute hidden xl:block right-[45px] -bottom-[20px] xl:right-[136px] xl:bottom-auto"
            src="/images/dot.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          <div className="flex flex-col w-64">
            <div className="text-xl xl:text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              Meme Space App
            </div>
            <div className="text-[15px] leading-5 xl:text-base xl:leading-normal">
              — an app to earn tokens through tasks, trading, and engaging in project activities.
            </div>
          </div>
          <img src="/images/universe_phone.png" alt="" className="w-1/3 xl:w-auto" />
        </div>
        <div className="relative w-full">
          <img
            className="absolute hidden xl:block left-[40px] xl:left-[146px] bottom-[-5px] xl:bottom-auto xl:top-2"
            src="/images/dot.png"
            alt=""
          />
          <img
            className="hidden xl:block absolute left-[200px] -top-[114px] scale-x-[1.08]"
            src="/images/universe_line2.png"
            alt=""
          />
          <img
            className="xl:hidden m-auto"
            src="/images/universe_mobile/universe_line2.png"
            alt=""
          />
          <img
            className="absolute hidden xl:block right-[48px] xl:right-[226px] top-[36px] xl:-top-[120px]"
            src="/images/dot.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-start w-full gap-2">
          <img src="/images/universe_pig.png" alt="" className="w-1/3 xl:w-auto" />
          <div className="flex flex-col w-64">
            <div className="text-xl xl:text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              Meme Fund
            </div>
            <div className="text-[15px] leading-5 xl:text-base xl:leading-normal">
              — an investment fund that provides passive income from all projects within the
              ecosystem.
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img
            className="absolute hidden xl:block left-[68px] xl:left-[72px] -top-[14px] xl:-top-[20px]"
            src="/images/dot.png"
            alt=""
          />
          <img
            className="hidden xl:block absolute left-[79px] -top-[30px] scale-x-[1.1] scale-y-[0.8] -rotate-[2deg]"
            src="/images/universe_line3.png"
            alt=""
          />
          <img
            className="xl:hidden m-auto"
            src="/images/universe_mobile/universe_line3.png"
            alt=""
          />
          <img
            className="absolute hidden xl:block right-[64px] xl:right-6 -bottom-[18px] xl:bottom-auto xl:top-4"
            src="/images/dot.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          <div className="flex flex-col w-64">
            <div className="text-xl xl:text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              Meme Bot & Analyzer
            </div>
            <div className="text-[15px] leading-5 xl:text-base xl:leading-normal">
              — an analytical bot to monitor market trends and stay on top of growth opportunities.
            </div>
          </div>
          <img src="/images/universe_bot.png" alt="" className="w-1/3 xl:w-auto" />
        </div>
      </div>
    </Section>
  );
};
