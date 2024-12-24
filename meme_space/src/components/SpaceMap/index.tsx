export const SpaceMap = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between -inset-6">
      <div className="flex flex-row items-center gap-4">
        <CircleWithRays number="01" />
        <div className="flex flex-col xl:hidden">
          <div className="text-[#FCAF54]">Presale Launch</div>
          <div className="text-[#FFE6E3]">
            Kick off the journey with the $MEMES presale, bringing early supporters into
            theecosystem.
          </div>
        </div>
      </div>
      <div className="grow relative hidden xl:block">
        <img className="relative w-full scale-[1.8]" src="/images/spacemap_lines.png" alt="" />
      </div>
      <div className="flex flex-row items-center gap-4">
        <CircleWithRays number="02" />
        <div className="flex flex-col xl:hidden">
          <div className="text-[#FCAF54]">Community Growth</div>
          <div className="text-[#FFE6E3]">
            Build a strong and active community through social media, events, and engagement
            incentives.
          </div>
        </div>
      </div>
      <div className="grow relative hidden xl:block">
        <img className="relative w-full scale-[1.8]" src="/images/spacemap_lines.png" alt="" />
      </div>
      <div className="flex flex-row items-center gap-4">
        <CircleWithRays number="03" />
        <div className="flex flex-col xl:hidden">
          <div className="text-[#FCAF54]">Launch Meme Space APP</div>
          <div className="text-[#FFE6E3]">
            Introduce the Meme Space APP, where users can start earning $MEMES tokens by completing
            fun tasks.
          </div>
        </div>
      </div>
    </div>
  );
};

const CircleWithRays = ({ number }: { number: string }) => {
  return (
    <div className="flex items-center justify-center w-56 h-32 xl:h-40 bg-sunshine bg-no-repeat">
      <div className="w-14 h-14 rounded-full bg-[#FDFDC9] p-1">
        <div className="flex items-center justify-center text-2xl text-black font-bold w-12 h-12 rounded-full border-4 border-black">
          {number}
        </div>
      </div>
    </div>
  );
};
