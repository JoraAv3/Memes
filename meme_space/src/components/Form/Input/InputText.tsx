import clsx from "clsx";
import { type InputHTMLAttributes } from "react";

export const InputText: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  ...inputProps
}) => {
  return (
    <input
      className={clsx(
        "border-none bg-white shadow-inner text-center p-4 rounded-md text-xl",
        className
      )}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...inputProps}
    />
  );
};
