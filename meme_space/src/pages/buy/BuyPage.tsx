import { useCallback, useState } from "react";
import { CountDownBuy } from "../../components/CountDown/CountDownBuy";
import { Button } from "../../components/primitives/Button";
import { IconButton } from "../../components/primitives/IconButton";
import { IconInput } from "../../components/primitives/IconInput";
import { ProgressBar } from "../../components/ProgressBar";
import { Title } from "../../components/primitives/Title";
import { BoostCardSwiper } from "../../components/BoostCardSwiper";

import "../../custom_swiper.css";
import { CustomSlider } from "../../components/CustomSlider";
import { clsx } from "clsx";
import { HowToBuy } from "../landing/components/HowToBuy";

const BuyPage = () => {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");

  const onBuyHandler = useCallback(() => {
    console.log("Buy memes");
  }, []);

  const onBuyEarnHandler = useCallback(() => {
    console.log("Buy & Earn");
  }, []);

  return (
    <>
      <div className="w-full relative">
        <img
          src="/images/buying/fox.png"
          alt=""
          className="absolute hidden xl:block left-0 w-[30%] -top-20"
        />
        <img
          src="/images/buying/briliants.png"
          alt=""
          className="absolute hidden xl:block right-0 w-2/12 -top-12"
        />
        <div className="w-full xl:w-[1024px] xl:m-auto flex flex-col items-center px-4 justify-stretch">
          <div className="text-[36px] xl:text-[56px] w-3/4 xl:w-auto bg-gradient-to-tr from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent text-center font-Bowlby">
            Buy $MEMES on Presale
          </div>
          <div className="flex items-center gap-2 my-6">
            <img src="/images/svg/meme_coin.svg" alt="" />
            <div className="text-2xl xl:text-2xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent font-semibold">
              = $0.000025
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-[#FFFFD2]">
            <span>Next Price in</span>
            <CountDownBuy className="gap-6 w-full xl:w-[624px] justify-between text-2xl xl:text-4xl font-medium mt-3" />
            <span className="text-white">150,200,250,300 / 200,000,000,000</span>
          </div>
          <ProgressBar label="UNTIL PRICE RISE" progress={30} className="my-3 mb-4  xl:w-[778px]" />
          <div className="flex w-full items-center justify-between xl:justify-center gap-4">
            <IconButton icon={<img src="/images/svg/meme_coin.svg" alt="" />} value="Eth" active />
            <IconButton icon={<img src="/images/svg/meme_coin.svg" alt="" />} value="Usdt" />
            <IconButton icon={<img src="/images/svg/meme_coin.svg" alt="" />} value="Meme" />
          </div>
          <div className="flex flex-col xl:flex-row gap-5 mt-5 mb-6">
            <IconInput
              icon={<img src="/images/svg/meme_coin.svg" alt="" />}
              value={fromValue}
              label="Eth"
              onChange={(e) => setFromValue(e.currentTarget.value)}
            />
            <IconInput
              icon={<img src="/images/svg/meme_coin.svg" alt="" />}
              value={toValue}
              label="Usdt"
              onChange={(e) => setToValue(e.currentTarget.value)}
            />
          </div>
          <Button
            className="uppercase text-center mb-10 !mt-0 w-2/3 xl:w-auto m-auto"
            onClick={onBuyHandler}
          >
            BUY $MEMES
          </Button>

          <Title text="Limited Bonus Packs" className="w-[85%]" />
          <div className="text-white text-xl my-2 font-bold">Choose Bonus Package</div>
          <div className="text-[#FCAF54] text-xl text-center w-2/3 font-bold mb-4">
            Boost Investment with Limited Bonuses
          </div>
          <BoostCardSwiper cards={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]} id={1} />

          <Title text="Special Offers" className="w-[85%] mt-12" />
          <div className="text-white text-xl my-2 font-bold">Choose NFT's with Discounts</div>
          <div className="text-[#FCAF54] text-xl text-center w-2/3 font-bold mb-4">
            Boost Investment with Limited Bonuses
          </div>
          <BoostCardSwiper cards={[{ id: 1 }, { id: 2 }, { id: 3 }]} id={2} />
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center px-4 justify-stretch bg-stars bg-[-375px_-118px] xl:bg-[-225px_-118px] bg-no-repeat">
        <img
          src="/images/buying/rocket.png"
          alt=""
          className="absolute left-0 z-0 w-[30%] xl:w-2/12 top-12"
        />
        <img src="/images/stars.png" alt="" className="absolute -right-56 z-0 -top-20 xl:-top-32" />
        <img
          src="/images/buying/sun.png"
          alt=""
          className="absolute right-0 z-0 w-[30%] xl:w-2/12 top-0"
        />
        <div className="w-full xl:w-[1024px] xl:m-auto flex flex-col items-center justify-stretch z-10">
          <Title text="Calculate YourProfit" className="w-[85%] mt-12 z-10" />
          <div className="text-white text-xl text-center my-2 font-bold max-w-72 z-10">
            Drag the slider to see your profit in near future!
          </div>
          <div className="w-full max-w-[420px] flex gap-2 items-center justify-center bg-white rounded-lg px-2 shadow-inner text-black py-4 text-2xl font-semibold mt-4">
            $1000
          </div>
          <div className="w-full flex items-center justify-center text-white mt-4">
            POTENTIAL PROFIT
          </div>
          <div className="text-2xl xl:text-5xl bg-gradient-to-br from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent font-semibold my-4 xl:my-8">
            $ 4,603,330
          </div>
          <div className="w-full xl:w-[974px] flex items-start justify-between mb-3 text-white">
            <div className="flex flex-col gap-0 items-start justify-end xl:text-3xl font-medium">
              <span className="">LAUNCH</span>
              <span className="text-[#FFC988]">$0.000025</span>
            </div>
            <div
              className={clsx(
                "flex flex-col gap-0 items-center justify-end relative xl:text-3xl font-medium",
                "before:w-1.5 before:border before:border-[#FFC988] before:border-r-0 before:rounded-s-md before:h-full before:-left-4 before:absolute xl:before:hidden",
                "after:w-1.5 after:border after:border-[#FFC988] after:border-l-0 after:rounded-e-md after:h-full after:-right-4 after:absolute xl:after:hidden"
              )}
            >
              <span className="">PREDICTED PRICE</span>
              <span className="text-[#FFC988]">$0.005</span>
            </div>
            <div className="flex flex-col gap-0 items-end justify-end xl:text-3xl font-medium">
              <span className="">MOON</span>
              <span className="text-[#FFC988]">$1.00</span>
            </div>
          </div>
          <CustomSlider />
          <Button
            className="uppercase text-center my-10  w-2/3 xl:w-auto m-auto"
            onClick={onBuyEarnHandler}
          >
            BUY & EARN
          </Button>
        </div>
      </div>
      <HowToBuy rightImageHidden />
    </>
  );
};

export default BuyPage;
