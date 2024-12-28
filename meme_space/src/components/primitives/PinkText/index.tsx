import clsx from "clsx";

export const PinkText: React.FC<{ className?: string; text: string }> = ({ text, className }) => {
  return (
    <div
      className={clsx(
        "bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </div>
  );
};
