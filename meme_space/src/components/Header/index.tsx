import clsx from "clsx";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={clsx("flex items-center justify-between", className)}>
      <Link to="/">
        <LogoIcon />
      </Link>
      <Navbar />
      <div className="w-40 h-14 bg-gradient-to-r from-[#FCAF54] to-[#FAFDB4] p-0.5 rounded-[4px]">
        <button
          type="button"
          className="border-none bg-black w-full h-full flex items-center justify-center rounded-[4px]"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};
