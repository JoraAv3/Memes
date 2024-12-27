import clsx from "clsx";

export const IconButton: React.FC<{ icon: React.ReactNode; value: string; active?: boolean }> = ({
  icon,
  value,
  active,
}) => {
  return (
    <div
      className={clsx(
        "flex p-2 gap-2 rounded-full items-center w-full xl:w-[168px] bg-gradient-to-r border border-[#403146] text-white",
        !active && "from-[#433821] to-[#19160E]",
        active && "from-[#FCAF54] to-[#fbfdb4cc]"
      )}
    >
      {icon}
      <div className="uppercase font-medium">{value}</div>
    </div>
  );
};
