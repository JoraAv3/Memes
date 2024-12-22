import { MarqueeComponent } from "../../../components/Marquee";
import { Section } from "../../../components/Section";

const items = [
  { name: "Zapper", logo: "/path/to/zapper-logo.png" },
  { name: "PancakeSwap", logo: "/path/to/pancakeswap-logo.png" },
  { name: "Rarible", logo: "/path/to/rarible-logo.png" },
  { name: "Uniswap", logo: "/path/to/uniswap-logo.png" },
  // Добавьте остальные элементы...
];

export const PoweredBy = () => {
  return (
    <Section className="flex flex-col gap-4 items-center w-full justify-center mb-14 mt-24  relative z-0">
      <div className="absolute bg-moon bg-contain w-full max-h-[940px] z-0 h-[500px] pt-12 pr-20 left-0 -top-96 bg-no-repeat before:h-10 before:absolute before:w-[40%] before:top-0 before:bg-gradient-to-t before:to-black before:from-transparent">
        <img src="/images/cosmofriends.png" className="h-full z-0 relative" alt="" />
      </div>
      <div className="z-10 flex flex-col justify-center items-center text-[55px] font-Bowlby bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent">
        <span>Powered By</span>
      </div>
      <div className="w-full">
        <MarqueeComponent direction="left" className="py-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 border border-white rounded-3xl mx-4 px-5 py-2"
            >
              <img src={item.logo} alt="" className="h-6" />
              <span className="text-2xl text-white">{item.name}</span>
            </div>
          ))}
        </MarqueeComponent>
        <MarqueeComponent direction="right" className="py-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 border border-white rounded-3xl mx-4 px-5 py-2"
            >
              <img src={item.logo} alt="" className="h-6" />
              <span className="text-2xl text-white">{item.name}</span>
            </div>
          ))}
        </MarqueeComponent>
      </div>
    </Section>
  );
};
