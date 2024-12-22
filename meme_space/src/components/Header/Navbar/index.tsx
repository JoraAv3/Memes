import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex gap-8 uppercase text-[#FCAF54]">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/audit">Audit</NavLink>
      <NavLink to="/tokenomics">Tokenomics</NavLink>
      <NavLink to="/features">Features</NavLink>
      <NavLink to="/faqs">FAQs</NavLink>
    </nav>
  );
};
