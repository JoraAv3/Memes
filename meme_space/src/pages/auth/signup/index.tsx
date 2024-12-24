import { useCallback, useMemo, useState } from "react";
import { InputText } from "../../../components/Form";
import { Checkbox } from "../../../components/Form/Checkbox";
import { Button } from "../../../components/primitives/Button";

export const SignupForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAgry, setIsAgry] = useState<boolean>(false);

  const isValid = useMemo(() => {
    return email && password && name && isAgry;
  }, [email, password, name, isAgry]);

  const onSubmit = useCallback(() => {
    if (isValid) {
      console.log("signup form submit");
    }
  }, [isValid]);

  return (
    <div className="flex flex-col gap-4 text-black my-6">
      <InputText
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        required
      />
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
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
      />
      <Checkbox
        type="checkbox"
        checked={isAgry}
        onChange={(e) => setIsAgry(e.currentTarget.checked)}
        label="I agree to the Terms and Privacy Policy"
      />
      <Button className="uppercase text-center my-4" onClick={onSubmit}>
        Buy & Earn
      </Button>
    </div>
  );
};
