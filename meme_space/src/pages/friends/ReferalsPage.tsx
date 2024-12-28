import { useCallback, useState } from "react";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import { Title } from "../../components/primitives/Title";
import { PlayIcon } from "../../assets/icons/Play";
import { List } from "../../components/List";
import { ListItem } from "../../components/List/ListItem";
import clsx from "clsx";
import { CopyIcon } from "../../assets/icons/Copy";

const ReferalsPage = () => {
  const [currentView, setCurrentView] = useState<string>("registered");
  const onDailyClick = useCallback(() => {
    // TODO: add click handler functionality
    setCurrentView("registered");
    console.log("on registered click");
  }, []);

  const onPartnersClick = useCallback(() => {
    // TODO: add click handler functionality
    setCurrentView("buyers");
    console.log("on buyers click");
  }, []);

  const items = [
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/referal_icon.png" alt="" />,
      earn: 250,
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/referal_icon.png" alt="" />,
      earn: 250,
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/referal_icon.png" alt="" />,
      earn: 250,
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/referal_icon.png" alt="" />,
      earn: 400,
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/referal_icon.png" alt="" />,
      earn: 250,
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/referal_icon.png" alt="" />,
      earn: 120,
    },
  ];

  return (
    <div className="w-full xl:w-[1174px] xl:m-auto flex flex-col items-stretch px-5 justify-stretch">
      <Title text="Friends" className="w-full" />
      <div className="text-white text-center text-3xl">Invite link</div>
      <div className="flex items-center justify-between gap-3 my-3 xl:w-[445px] xl:m-auto xl:my-12">
        <div className="flex items-center justify-center grow bg-white rounded-lg px-2 shadow-inner text-black h-12 text-[15px] font-semibold">
          memespace.io?start=9201
        </div>
        <ButtonTransparent
          onClick={() => {}}
          containerClassName="!w-24 !h-12 !rounded-lg"
          className="rounded-lg"
          active
        >
          <CopyIcon className="fill-active-icon" />
        </ButtonTransparent>
      </div>
      <div className="flex gap-3 my-6 justify-between xl:w-[445px] xl:m-auto">
        <ButtonTransparent
          onClick={onDailyClick}
          active={currentView === "registered"}
          containerClassName="!w-full"
          className="uppercase text-[15px] font-bold"
        >
          Registered
        </ButtonTransparent>
        <ButtonTransparent
          onClick={onPartnersClick}
          active={currentView === "buyers"}
          containerClassName="!w-full"
          className="uppercase text-[15px] font-bold"
        >
          Buyers
        </ButtonTransparent>
      </div>

      <List className={clsx("grow pb-3 ")}>
        {items.map((item, index) => (
          <ListItem key={`earn-${index}`} {...item} />
        ))}
      </List>
    </div>
  );
};

export default ReferalsPage;
