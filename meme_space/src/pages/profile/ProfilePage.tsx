import { Title } from "../../components/primitives/Title";

const ProfilePage = () => {
  return (
    <div className="w-full xl:w-[380px] xl:m-auto flex flex-col items-stretch px-5 justify-stretch">
      <Title text="Profile" className="w-full" />
      <img src="/images/referal_icon.png" alt="" className="w-28 mx-auto" />
      <div className="flex flex-col items-center justify-center gap-0 text-3xl mt-4 xl:text-base">
        <span className="leading-5 xl:bg-gradient-to-br xl:from-[#DB00FF] xl:to-[#00E0FF] xl:bg-clip-text xl:text-transparent">
          Jack
        </span>
        <span className="text-[#FCAF54] xl:text-white">ID 3555</span>
      </div>

      <div className="flex flex-col gap-4 my-4 xl:mt-14">
        <span className="text-[15px] text-[#FFE6E3] leading-5 text-center">jack@gmail.com</span>
        <div className="flex items-center justify-between gap-3">
          <div className="bg-[#272727] rounded-md flex items-center justify-center grow p-2 gap-2">
            <span>Bought</span>
            <span className="text-[#FCAF54] font-medium">55.85M</span>
          </div>
          <div className="bg-[#272727] rounded-md flex items-center justify-center grow p-2 gap-2">
            <span>Earned</span>
            <span className="text-[#FCAF54] font-medium">3.25M</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="bg-[#272727] rounded-md flex items-center justify-center grow p-2 gap-2">
            <span>Friends</span>
            <span className="text-[#FCAF54] font-medium">27</span>
          </div>
          <div className="bg-[#272727] rounded-md flex items-center justify-center grow p-2 gap-2">
            <span>Buyers</span>
            <span className="text-[#FCAF54] font-medium">12</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#FCAF54] font-medium">Wallet</span>
          <div className="flex items-center justify-center grow bg-white rounded-lg px-2 shadow-inner text-black h-14 text-[15px] font-semibold w-full">
            0x7b501..Dcee7
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#FCAF54] font-medium">Telegram</span>
          <div className="flex items-center justify-center grow bg-white rounded-lg px-2 shadow-inner text-black h-14 text-[15px] font-semibold w-full">
            @nickname
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#FCAF54] font-medium">Invite Link</span>
          <div className="flex items-center justify-center grow bg-white rounded-lg px-2 shadow-inner text-black h-14 text-[15px] font-semibold w-full">
            memespace.io/?start=3555
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
