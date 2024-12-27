import clsx from "clsx";

export const Title: React.FC<{ className?: string; text: string }> = ({ text, className }) => {
  return (
    <div
      className={clsx(
        "text-[36px] xl:text-[56px] w-3/4 xl:w-auto bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent text-center font-Bowlby",
        className
      )}
    >
      {text}
    </div>
  );
};
