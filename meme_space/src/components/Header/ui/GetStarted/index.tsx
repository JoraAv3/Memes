import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const GetStartedButton = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

  return (
    <button
      type="button"
      className="border-none bg-black w-full h-full flex items-center justify-center rounded-[4px]"
      onClick={onClick}
    >
      Get Started
    </button>
  );
};
