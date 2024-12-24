import { Header } from "../../components/Header";
import { BuyAndEarn } from "./components/BuyAndEarn";
import { FAQ } from "./components/FAQ";
import { LandingFooter } from "./components/Footer";
import { HowToBuy } from "./components/HowToBuy";
import { JoinNow } from "./components/JoinNow";
import { MemeUniverse } from "./components/MemeUniverse";
import { PoweredBy } from "./components/PoweredBy";
import { Presale } from "./components/Presale";
import { SpaceMapSection } from "./components/SpaceMapSection";
import { SpaceNomicsSection } from "./components/SpaceNomicsSection";

const LandingPage = () => {
  return (
    <main className="w-full min-h-screen text-[#FFE6E3] bg-black bg-background-top bg-[center_top] bg-no-repeat">
      <Header className="py-[40px] sm:py-[60px] w-full xl:w-[1174px] mx-auto" />
      <BuyAndEarn />
      <JoinNow />
      <MemeUniverse />
      <Presale />
      <SpaceMapSection />
      <SpaceNomicsSection />
      <HowToBuy />
      <PoweredBy />
      <FAQ />
      <LandingFooter />
      <div className="flex gap-0 xl:hidden items-end bg-stars bg-[32%_20%] bg-no-repeat">
        <img src="/images/footer/footer_left.png" alt="" className="w-3/5 h-auto" />
        <img src="/images/footer/footer_right.png" alt="" className="w-2/5" />
      </div>
    </main>
  );
};

export default LandingPage;
