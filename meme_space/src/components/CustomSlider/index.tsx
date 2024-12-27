import { ChangeEventHandler, useState } from "react";

export const CustomSlider = () => {
  const [value, setValue] = useState<string>("50"); // Начальное значение ползунка

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className="flex items-center justify-center w-full  xl:w-[974px] bg-black">
      <div className="relative w-96 xl:w-full">
        <div className="absolute top-3/4 left-0 right-0 h-2 z-0 -translate-y-1/2 bg-gradient-to-r from-[#ffe2a8] to-[#ffc107] rounded-full"></div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full appearance-none bg-transparent z-10 focus:outline-none accent-transparent"
        />
      </div>
    </div>
  );
};
