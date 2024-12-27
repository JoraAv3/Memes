import clsx from "clsx";

export const ButtonTransparent: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, children, className }) => {
  return (
    <div className="w-32 sm:w-40 h-10 sm:h-14 bg-gradient-to-r from-[#FCAF54] to-[#FAFDB4] p-0.5 rounded-[4px] sm:order-3 order-2">
      <button
        type="button"
        className={clsx(
          "border-none bg-black w-full h-full flex items-center justify-center rounded-[4px]",
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
