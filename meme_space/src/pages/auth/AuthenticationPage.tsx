import { useState } from "react";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import { SignupForm } from "./signup";
import { SigninForm } from "./signin";

type AuthMode = "signin" | "signup";

const AuthenticationPage = () => {
  const [mode, setMode] = useState<AuthMode>("signup");

  return (
    <div className="w-full flex flex-col items-center px-3 justify-center">
      <div className="text-[32px] font-medium">Buy, Earn, Win!</div>
      <div className="text-[36px] xl:text-[56px] w-3/4 xl:w-auto bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent text-center font-Bowlby">
        Get Access to $MEMES
      </div>
      <div className="flex gap-3 my-6">
        <ButtonTransparent onClick={() => setMode("signup")}>Create Account</ButtonTransparent>
        <ButtonTransparent onClick={() => setMode("signin")}>Log in</ButtonTransparent>
      </div>
      {mode === "signup" && <SignupForm />}
      {mode === "signin" && <SigninForm />}
    </div>
  );
};

export default AuthenticationPage;
