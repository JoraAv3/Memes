import clsx from "clsx";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { Navbar } from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { GetStartedButton } from "./ui/GetStarted";
import { ConnectWalletButton } from "./ui/ConnectWallet";
import { Section } from "../Section";

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  const { pathname } = useLocation();

  return (
    <Section>
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

        {pathname === "/" && <GetStartedButton />}
        {pathname === "/auth" && <ConnectWalletButton />}
      </header>
    </Section>
  );
};
