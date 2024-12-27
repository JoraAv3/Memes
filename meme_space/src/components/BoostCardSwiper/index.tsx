import { ButtonTransparent } from "../ButtonTransparent";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Card = { id: number };

export const BoostCardSwiper: React.FC<{ cards: Card[]; id: number }> = ({ cards, id }) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings} key={id} className="w-full xl:w-[1124px] mb-12">
      {cards.map((card) => (
        <div className="w-full">
          <div
            key={card.id}
            className="flex flex-col px-5 pb-4 gap-2 w-40 xl:w-64 bg-[#272727] rounded-3xl text-white overflow-hidden mx-1 text-center"
          >
            <div className="bg-[#DD3333] text-sm font-bold rounded-b-2xl text-center w-9/12 m-auto px-6">
              8 Left
            </div>
            <div className="bg-gradient-to-r from-[#FCAF54] to-[#FAFDB4] bg-clip-text text-transparent text-4xl font-Bowlby m-auto">
              +0.5%
            </div>
            <div className="bg-gradient-to-r from-[#DB00FF] to-[#00E0FF] bg-clip-text text-transparent text-xl m-auto mb-3 font-semibold">
              Extra Tokens
            </div>
            <div className="w-[200px] h-[120px] pt-10 m-auto relative flex items-center justify-center -left-10 xl:left-0">
              <img src="/images/boost_ellipse.png" alt="" className="absolute top-0 z-0" />
              <img src="/images/boost_icon.png" alt="" className="z-10" />
            </div>
            <div className="m-auto text-2xl font-semibold">$300</div>
            <div className="my-2 mx-auto">
              <ButtonTransparent
                onClick={() => {}}
                className="!bg-[#272727] text-[#FCAF54] uppercase font-bold"
              >
                Claim Now
              </ButtonTransparent>
            </div>
            <div className="m-auto">Earn up to $6K</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
