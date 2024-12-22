export const SpaceMap = () => {
  return (
    <div className="flex items-center justify-between -inset-6">
      <CircleWithRays number="01" />
      <div className="grow relative ">
        <img className="absolute -left-[46px] top-[62%]" src="/images/dot.png" alt="" />
        <img
          className="relative w-full scale-x-[1.25]"
          src="/images/svg/spacemap_lines.svg"
          alt=""
        />
        <img className="absolute -right-[46px] top-[26%]" src="/images/dot.png" alt="" />
      </div>
      <CircleWithRays number="02" />
      <div className="grow relative ">
        <img className="absolute -left-[46px] top-[62%]" src="/images/dot.png" alt="" />
        <img
          className="relative w-full scale-x-[1.25]"
          src="/images/svg/spacemap_lines.svg"
          alt=""
        />
        <img className="absolute -right-[46px] top-[26%]" src="/images/dot.png" alt="" />
      </div>
      <CircleWithRays number="03" />
    </div>
  );
};

const CircleWithRays = ({ number }: { number: string }) => {
  return (
    <div className="flex items-center justify-center w-56 h-40 bg-sunshine bg-no-repeat">
      <div className="w-14 h-14 rounded-full bg-[#FDFDC9] p-1">
        <div className="flex items-center justify-center text-2xl text-black font-bold w-12 h-12 rounded-full bg-[] border-4 border-black">
          {number}
        </div>
      </div>
    </div>
  );
};
