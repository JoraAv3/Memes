import clsx from "clsx";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { Navbar } from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { GetStartedButton } from "./ui/GetStarted";
import { ConnectWalletButton } from "./ui/ConnectWallet";

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  const { pathname } = useLocation();

  return (
    <header
      className={clsx(
        "flex items-center justify-end px-4 sm:px-0 sm:justify-between gap-4",
        className
      )}
    >
      <div className="grow sm:grow-0">
        <Link to="/">
          <LogoIcon className="w-[48px] xl:w-[68px]" />
        </Link>
      </div>
      <Navbar />
      <div className="w-32 sm:w-40 h-10 sm:h-14 bg-gradient-to-r from-[#FCAF54] to-[#FAFDB4] p-0.5 rounded-[4px] sm:order-3 order-2">
        {pathname === "/" && <GetStartedButton />}
        {pathname === "/auth" && <ConnectWalletButton />}
      </div>
    </header>
  );
};
