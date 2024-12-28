import clsx from "clsx";

export const ButtonTransparent: React.FC<{
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}> = ({ active, onClick, children, className, containerClassName }) => {
  return (
    <div
      className={clsx(
        "w-32 sm:w-40 h-10 sm:h-14 p-0.5 rounded-[4px] sm:order-3 order-2",
        active && "bg-gradient-to-r from-[#FCAF54] to-[#FAFDB4]",
        !active && "bg-[#757171]",
        containerClassName
      )}
    >
      <button
        type="button"
        className={clsx(
          "border-none bg-black w-full h-full flex items-center justify-center rounded-[4px]",
          active && "text-[#FCAF54]",
          !active && "text-[#757171]",
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
