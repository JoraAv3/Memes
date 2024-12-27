import clsx from "clsx";

export const CountDownBuy: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx("flex gap-4 items-center font-Anton text-[#FFFFD2]", className)}>
      <div className="flex items-center justify-center w-[62px] h-[62px] xl:w-[84px] xl:h-[82px] text-4xl xl:text-6xl">
        03
      </div>
      <span>:</span>
      <div className="flex items-center justify-center w-[62px] h-[62px] xl:w-[84px] xl:h-[82px] text-4xl xl:text-6xl">
        12
      </div>
      <span>:</span>
      <div className="flex items-center justify-center w-[62px] h-[62px] xl:w-[84px] xl:h-[82px] text-4xl xl:text-6xl">
        23
      </div>
      <span>:</span>
      <div className="flex items-center justify-center w-[62px] h-[62px] xl:w-[84px] xl:h-[82px] text-4xl xl:text-6xl">
        56
      </div>
    </div>
  );
};
