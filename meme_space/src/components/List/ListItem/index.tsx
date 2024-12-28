import { PinkText } from "../../primitives/PinkText";

interface ListItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  earn: number;
  button?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ title, description, icon, earn, button }) => {
  return (
    <div className="flex items-center justify-start gap-3 w-full">
      {icon}
      <div className="flex flex-col xl:flex-row gap-0 xl:gap-3 grow">
        <PinkText text={title} />
        <div className="">{description}</div>
        <div className="flex gap-3">
          <img src="/images/svg/star_icon.svg" alt="" />
          <span className="text-[#FCAF54]">{earn}</span>
        </div>
      </div>
      {button}
    </div>
  );
};
