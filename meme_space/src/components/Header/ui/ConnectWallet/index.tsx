import { useCallback } from "react";
import { ButtonTransparent } from "../../../ButtonTransparent";

export const ConnectWalletButton = () => {
  const onClick = useCallback(() => {
    console.log("Connect wallet");
  }, []);

  return <ButtonTransparent onClick={onClick}>Connect Wallet</ButtonTransparent>;
};
