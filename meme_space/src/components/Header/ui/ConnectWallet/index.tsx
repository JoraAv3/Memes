import { useCallback } from "react";

export const ConnectWalletButton = () => {
  const onClick = useCallback(() => {
    console.log("Connect wallet");
  }, []);

  return (
    <button
      type="button"
      className="border-none bg-black w-full h-full flex items-center justify-center rounded-[4px]"
      onClick={onClick}
    >
      Connect Wallet
    </button>
  );
};
