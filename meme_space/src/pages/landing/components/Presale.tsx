import { Button } from "../../../components/primitives/Button";
import { Section } from "../../../components/Section";

export const Presale = () => {
  return (
    <Section className="flex flex-col items-center justify-center before:w-full before:h-44 relative">
      <div className="absolute bg-cosmo-view-2 bg-cosmo-view-l bg-cosmo-view-dog w-full max-h-[940px] z-0 h-[50sh] pt-12 pr-20 left-0 -top-24 bg-no-repeat before:h-full before:absolute before:w-[40%] before:top-0 before:bg-radial-ellipse before:to-black before:from-transparent">
        <div className="relative left-0 top-0 bg-stars bg-no-repeat bg-stars-lt bg-stars-dog py-9">
          <img src="/images/cosmodog.png" className="w-1/3" alt="" />
        </div>
      </div>
      <div className="w-[1174px] flex flex-col gap-4 items-center justify-center z-10">
        <div className="flex flex-col justify-center items-center text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
          <span>From Presale</span>
          <span>to the Moon</span>
        </div>
        <div className="flex gap-3 justify-between items-end bg-presale-bg bg-no-repeat w-[1024px] bg-center bg-contain">
          <div className="flex flex-col gap-4 justify-center items-center relative">
            <div className="text-[#FCAF54] text-3xl w-full">$0.00025</div>
            <img src="/images/presale_fog.png" alt="" className="z-10" />
            <div className=" absolute bottom-9 w-32 h-52 bg-gradient-to-t to-[#D9D9D900] from-[#6975FF99] z-0" />
            <div className="uppercase text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              PRESALE
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center relative">
            <div className="text-[#FCAF54] text-3xl w-full">$0.0025</div>
            <img src="/images/presale_fog2.png" alt="" className="z-10 mb-32" />
            <div className=" absolute bottom-9 w-32 h-72 bg-gradient-to-t to-[#D9D9D900] from-[#6975FF99] z-0" />
            <div className="uppercase text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              LAUNCH
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center relative">
            <div className="text-[#FCAF54] text-3xl w-full">$0.0025</div>
            <img src="/images/presale_dog.png" alt="" className="z-10 mb-36" />
            <div className=" absolute bottom-9 w-32 h-72 bg-gradient-to-t to-[#D9D9D900] from-[#6975FF99] z-0" />
            <div className="uppercase text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              6 MONTHS
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center relative">
            <div className="text-[#FCAF54] text-3xl w-full">$0.0025</div>
            <img src="/images/presale_fog3.png" alt="" className="z-10 mb-72" />
            <div className=" absolute bottom-9 w-32 h-[446px] bg-gradient-to-t to-[#D9D9D900] from-[#6975FF99] z-0" />
            <div className="uppercase text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
              1 YEAR
            </div>
          </div>
        </div>
        <Button className="my-14" onClick={() => console.log("Join Presales")}>
          Join Presales
        </Button>
      </div>
    </Section>
  );
};
