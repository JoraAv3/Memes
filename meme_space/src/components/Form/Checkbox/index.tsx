import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type CheckboxPropsType = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Checkbox: React.FC<CheckboxPropsType> = ({
  type,
  checked,
  onChange,
  label,
  ...checkboxProps
}) => {
  return (
    <label className="text-primary flex gap-2 items-center text-sm">
      <input
        className={clsx("m-0 w-4 h-4 bg-white rounded-sm")}
        type={type}
        checked={checked}
        onChange={onChange}
        {...checkboxProps}
      />
      <span>{label}</span>
    </label>
  );
};
