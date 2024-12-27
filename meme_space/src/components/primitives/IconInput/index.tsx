import { type ChangeEventHandler } from "react";
import { InputText } from "../../Form";

export const IconInput: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}> = ({ icon, label, value, onChange }) => {
  return (
    <div className="w-full flex gap-2 items-center justify-between bg-white rounded-lg px-2 shadow-inner">
      <InputText
        className="bg-transparent shadow-none !text-left text-[#FCAF54] placeholder:text-[#FCAF54] outline-none w-2/3"
        type="number"
        placeholder="0"
        value={value}
        onChange={onChange}
      />
      <div className="flex items-center w-1/3 justify-start gap-2 text-black">
        {icon}
        <span className="uppercase font-medium">{label}</span>
      </div>
    </div>
  );
};
