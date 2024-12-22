import { Button } from "../../../components/primitives/Button";
import { Section } from "../../../components/Section";

export const HowToBuy = () => {
  return (
    <Section className="flex flex-col items-center justify-center before:w-full before:h-44 relative">
      <div className="absolute bg-stars bg-contain w-[30%] pt-32 pl-20 right-0 -top-14 bg-no-repeat">
        <img src="/images/cosmocat.png" alt="" />
      </div>
      <div className="w-[1174px] flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
          <span>How to Buy</span>
        </div>
        <div className="w-[1174px] flex flex-col bg-howtobuy-bg bg-no-repeat bg-center">
          <div className="flex items-center justify-start w-full">
            <img src="/images/howtobuy/create_account.png" alt="" />
            <div className="flex flex-col w-64 mb-14">
              <div className="text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
                Create Account
              </div>
              <div className="">Sign up to start your Meme Space journey.</div>
            </div>
          </div>

          <div className="flex items-center justify-end w-full">
            <div className="flex flex-col w-64">
              <div className="text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
                Connect Wallet
              </div>
              <div className="">Securely link your crypto wallet to the platform.</div>
            </div>
            <img src="/images/howtobuy/wallet.png" alt="" />
          </div>

          <div className="flex items-center justify-start w-full">
            <img src="/images/howtobuy/select_amount.png" alt="" />
            <div className="flex flex-col w-64">
              <div className="text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
                Select Amount
                <br />
                or Bonus Package
              </div>
              <div className="">Enter the amount of $MEMES you want or choose a bonus package.</div>
            </div>
          </div>

          <div className="flex items-center justify-end w-full">
            <div className="flex flex-col w-64">
              <div className="text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent">
                Make Payment
              </div>
              <div className="">Pay with BNB, ETH, or USDT and confirm your purchase.</div>
            </div>
            <img src="/images/howtobuy/make_payment.png" alt="" />
          </div>
        </div>
        <Button className="my-14" onClick={() => console.log("Create Acount")}>
          Create Acount
        </Button>
      </div>
    </Section>
  );
};
