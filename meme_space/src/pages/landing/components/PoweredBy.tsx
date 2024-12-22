import { Section } from "../../../components/Section";

export const PoweredBy = () => {
  return (
    <Section className="flex flex-col gap-4 items-center justify-center mb-14">
      <div className="flex flex-col justify-center items-center text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
        <span>Powered By</span>
      </div>
      <div>Infinity scrollbar</div>
    </Section>
  );
};
