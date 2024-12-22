import { Section } from "../../../components/Section";
import { SpaceMap } from "../../../components/SpaceMap";

export const SpaceMapSection = () => {
  return (
    <Section className="flex flex-col items-center justify-center before:w-full before:h-44 relative z-10">
      <div className="absolute bg-rocket bg-contain w-[30%] pt-0 pl-20 right-0 -top-20 bg-no-repeat">
        <img src="/images/cosmo_dog_frog.png" alt="" />
      </div>
      <div className="w-[970px] flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
          <span>Spacemap</span>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center my-8">
          <div className="text-xl text-[#FCAF54]">Phase 1:</div>
          <div className="bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent text-4xl font-semibold">
            Launch Cores
          </div>
        </div>
        <SpaceMap />
      </div>
      <div className="w-[1174px] flex items-center justify-between text-center gap-4 my-8">
        <div className="flex flex-col items-center  justify-center">
          <div className="text-[#FCAF54] text-2xl">Presale Launch</div>
          <div className="text-base">
            Kick off the journey with the $MEMES presale, bringing early supporters into
            theecosystem.
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[#FCAF54] text-2xl">Community Growth</div>
          <div className="text-base">
            Build a strong and active community through social media, events, and engagement
            incentives.
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[#FCAF54] text-2xl">Launch Meme Space APP</div>
          <div className="text-base">
            Introduce the Meme Space APP, where users can start earning $MEMES tokens by completing
            fun tasks.
          </div>
        </div>
      </div>
    </Section>
  );
};
