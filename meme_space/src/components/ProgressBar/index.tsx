import clsx from "clsx";

export const ProgressBar: React.FC<{ label: string; progress: number; className?: string }> = ({
  label,
  progress,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center h-5 w-full bg-white overflow-hidden rounded-xl text-black",
        className
      )}
    >
      <div className={`absolute left-0 top-0 rounded-xl h-5 bg-[#FCAF54] w-[${progress}%]`} />
      {label}
    </div>
  );
};
