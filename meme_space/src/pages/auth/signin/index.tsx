import { useCallback, useMemo, useState } from "react";
import { InputText } from "../../../components/Form";
import { Button } from "../../../components/primitives/Button";

export const SigninForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isValid = useMemo(() => {
    return email && password;
  }, [email, password]);

  const onSubmit = useCallback(() => {
    if (isValid) {
      console.log("signin form submit");
    }
  }, [isValid]);

  return (
    <div className="flex flex-col gap-4 text-black my-6">
      <InputText
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />
      <InputText
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
      />
      <Button className="uppercase text-center my-4" onClick={onSubmit}>
        Buy & Earn
      </Button>
    </div>
  );
};
