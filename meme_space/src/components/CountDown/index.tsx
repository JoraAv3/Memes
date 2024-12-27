import clsx from "clsx";

export const CountDown: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx("flex gap-4 items-center font-Anton text-[#FFFFD2]", className)}>
      <div className="flex items-center justify-center border border-[#FFF8F8] backdrop-blur-sm w-[62px] h-[62px] sm:w-[84px] sm:h-[82px] text-4xl sm:text-6xl rounded-xl bg-[#ffffff26]">
        03
      </div>
      <div className="flex items-center justify-center border border-[#FFF8F8] backdrop-blur-sm w-[62px] h-[62px] sm:w-[84px] sm:h-[82px] text-4xl sm:text-6xl rounded-xl bg-[#ffffff26]">
        12
      </div>
      <div className="flex items-center justify-center border border-[#FFF8F8] backdrop-blur-sm w-[62px] h-[62px] sm:w-[84px] sm:h-[82px] text-4xl sm:text-6xl rounded-xl bg-[#ffffff26]">
        23
      </div>
      <div className="flex items-center justify-center border border-[#FFF8F8] backdrop-blur-sm w-[62px] h-[62px] sm:w-[84px] sm:h-[82px] text-4xl sm:text-6xl rounded-xl bg-[#ffffff26]">
        56
      </div>
    </div>
  );
};
