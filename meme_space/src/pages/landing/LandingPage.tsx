import { BuyAndEarn } from "./components/BuyAndEarn";
import { FAQ } from "./components/FAQ";
import { HowToBuy } from "./components/HowToBuy";
import { JoinNow } from "./components/JoinNow";
import { MemeUniverse } from "./components/MemeUniverse";
import { PoweredBy } from "./components/PoweredBy";
import { Presale } from "./components/Presale";
import { SpaceMapSection } from "./components/SpaceMapSection";
import { SpaceNomicsSection } from "./components/SpaceNomicsSection";

const LandingPage = () => {
  return (
    <>
      <BuyAndEarn />
      <JoinNow />
      <MemeUniverse />
      <Presale />
      <SpaceMapSection />
      <SpaceNomicsSection />
      <HowToBuy />
      <PoweredBy />
      <FAQ />
    </>
  );
};

export default LandingPage;
