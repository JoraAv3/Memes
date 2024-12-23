import { NavLink } from "react-router-dom";
import { NavButtonIcon } from "../../../assets/icons/NavButton";

export const Navbar = () => {
  return (
    <>
      <div className="sm:hidden flex items-center justify-center h-10 w-10 rounded bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] order-3">
        <NavButtonIcon />
      </div>
      <nav className="flex flex-col sm:flex-row gap-8 uppercase text-[#FCAF54] absolute -top-60 sm:top-auto sm:relative w-full sm:w-auto">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/audit">Audit</NavLink>
        <NavLink to="/tokenomics">Tokenomics</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>
      </nav>
    </>
  );
};
