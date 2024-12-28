import { useCallback, useState } from "react";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import { Title } from "../../components/primitives/Title";
import { PlayIcon } from "../../assets/icons/Play";
import { List } from "../../components/List";
import { ListItem } from "../../components/List/ListItem";
import clsx from "clsx";

const EarnPage = () => {
  const [currentView, setCurrentView] = useState<string>("daily");
  const onDailyClick = useCallback(() => {
    // TODO: add click handler functionality
    setCurrentView("daily");
    console.log("on daily click");
  }, []);

  const onPartnersClick = useCallback(() => {
    // TODO: add click handler functionality
    setCurrentView("partners");
    console.log("on partners click");
  }, []);

  const items = [
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/earn_item_icon.png" alt="" />,
      earn: 250,
      button: (
        <ButtonTransparent onClick={() => {}} containerClassName="!w-11 !h-11" active>
          <PlayIcon className="fill-active-icon ml-1" />
        </ButtonTransparent>
      ),
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/earn_item_icon.png" alt="" />,
      earn: 250,
      button: (
        <ButtonTransparent onClick={() => {}} containerClassName="!w-11 !h-11" active>
          <PlayIcon className="fill-active-icon ml-1" />
        </ButtonTransparent>
      ),
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/earn_item_icon.png" alt="" />,
      earn: 250,
      button: (
        <ButtonTransparent onClick={() => {}} containerClassName="!w-11 !h-11" active>
          <PlayIcon className="fill-active-icon ml-1" />
        </ButtonTransparent>
      ),
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/earn_item_icon.png" alt="" />,
      earn: 400,
      button: (
        <ButtonTransparent onClick={() => {}} containerClassName="!w-11 !h-11" active>
          <PlayIcon className="fill-active-icon ml-1" />
        </ButtonTransparent>
      ),
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/earn_item_icon.png" alt="" />,
      earn: 250,
      button: (
        <ButtonTransparent onClick={() => {}} containerClassName="!w-11 !h-11" active>
          <PlayIcon className="fill-active-icon ml-1" />
        </ButtonTransparent>
      ),
    },
    {
      title: "Confirm your Email",
      description: "Verify your email to secure",
      icon: <img src="/images/earn_item_icon.png" alt="" />,
      earn: 120,
      button: (
        <ButtonTransparent onClick={() => {}} containerClassName="!w-11 !h-11" active>
          <PlayIcon className="fill-active-icon ml-1" />
        </ButtonTransparent>
      ),
    },
  ];

  return (
    <div className="w-full xl:w-[1174px] xl:m-auto flex flex-col items-stretch px-5 justify-stretch">
      <Title text="Earn $MEMES" className="w-full" />
      <div className="flex gap-3 my-6 justify-between xl:w-[445px] xl:m-auto">
        <ButtonTransparent
          onClick={onDailyClick}
          active={currentView === "daily"}
          containerClassName="!w-full"
        >
          Daily
        </ButtonTransparent>
        <ButtonTransparent
          onClick={onPartnersClick}
          active={currentView === "partners"}
          containerClassName="!w-full"
        >
          Partners
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

export default EarnPage;
