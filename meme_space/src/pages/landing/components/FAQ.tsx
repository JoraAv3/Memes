import { Accordion } from "../../../components/Accordion";
import { Section } from "../../../components/Section";

export const FAQ = () => {
  return (
    <Section className="flex flex-col gap-4 items-center justify-center mb-14">
      <div className="w-[1174px] flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
          <span>Meme</span>
          <span>FAQ</span>
        </div>
        <Accordion />
      </div>
    </Section>
  );
};
