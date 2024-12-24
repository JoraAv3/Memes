import { NavLink } from "react-router-dom";
import { NavButtonIcon } from "../../../assets/icons/NavButton";
import clsx from "clsx";
import { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div
        className="sm:hidden flex items-center justify-center h-10 w-10 rounded bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] order-3"
        onClick={() => setShowMenu(true)}
      >
        <NavButtonIcon />
      </div>
      <div
        className={clsx(
          "xl:hidden w-full h-full bg-black left-0 z-40",
          "transform opacity-0 transition ease-out duration-500",
          !showMenu && "-top-[1000px] absolute",
          showMenu && "top-0 opacity-50 fixed"
        )}
      />
      <nav
        className={clsx(
          "flex flex-col gap-4 w-[90%] uppercase text-[#FCAF54] bg-black rounded items-center justify-start",
          "z-50 h-[94dvh] mx-[5%] my-[3dvh] left-0 right-0 p-4 shadow-xl transform transition-all duration-300 ease-linear",
          "xl:flex-row xl:top-auto xl:gap-8 xl:relative xl:w-auto xl:bg-transparent xl:rounded-none xl:h-auto xl:mx-0 xl:my-0 xl:shadow-none",
          !showMenu && "-top-[1000px] absolute",
          showMenu && "top-0 fixed"
        )}
      >
        <div className="xl:hidden flex items-center justify-end w-full">
          <span
            className="transform rotate-[45deg] text-xl font-bold"
            onClick={() => setShowMenu(false)}
          >
            +
          </span>
        </div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/audit">Audit</NavLink>
        <NavLink to="/tokenomics">Tokenomics</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>
      </nav>
    </>
  );
};
