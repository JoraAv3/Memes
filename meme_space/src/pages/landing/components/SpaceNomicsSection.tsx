import { Section } from "../../../components/Section";
import { SpaceNomics } from "../../../components/SpaceNomics";

export const SpaceNomicsSection = () => {
  return (
    <Section className="flex flex-col items-center justify-center before:w-full before:h-44 relative">
      <div className="absolute bg-cosmo-view bg-cosmo-view-l bg-cosmo-view-dog w-full max-h-[940px] z-0 h-[50sh] pt-12 pr-20 left-0 -top-24 bg-no-repeat before:h-full before:absolute before:w-[40%] before:top-0 before:bg-radial-ellipse before:to-black before:from-transparent">
        <div className="relative left-0 top-0 bg-stars bg-no-repeat bg-stars-lt py-9">
          <img src="/images/cosmofrog.png" className="w-1/5" alt="" />
        </div>
      </div>
      <div className="w-[1174px] flex flex-col gap-4 items-center justify-center z-10">
        <div className="flex flex-col justify-center items-center text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
          <span>Spacenomics</span>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center my-8">
          <div className="text-xl text-[#FCAF54]">Total Suply</div>
          <div className="bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent text-4xl font-semibold">
            1.000.000.000.000
          </div>
        </div>
        <div className="flex gap-3 justify-between items-end bg-chart-bg bg-no-repeat w-[1024px] bg-center bg-contain">
          <SpaceNomics />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center my-8">
          <div className="bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent text-4xl font-semibold">
            Presale — 30%
          </div>
          <div className="flex flex-col items-center text-[15px]">
            <span>Allocated for the presale to incentivize early adopters</span>
            <span>and provide initial liquidity.</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
