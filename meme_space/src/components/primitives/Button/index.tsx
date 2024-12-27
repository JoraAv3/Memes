import clsx from "clsx";

export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ className, children, onClick }) => {
  return (
    <div
      className={clsx(
        "bg-[#ffd38e] shadow-white shadow-button-inner rounded-xl text-black font-bold text-2xl",
        className
      )}
    >
      <button type="button" className="uppercase  px-10 py-4 outline-none" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
