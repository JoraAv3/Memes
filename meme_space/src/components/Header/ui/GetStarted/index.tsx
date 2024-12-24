import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonTransparent } from "../../../ButtonTransparent";

export const GetStartedButton = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

  return <ButtonTransparent onClick={onClick}>Get Started</ButtonTransparent>;
};
