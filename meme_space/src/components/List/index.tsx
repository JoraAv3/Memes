import clsx from "clsx";

export const List: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={clsx("flex flex-col gap-3", className)}>{children}</div>;
};
