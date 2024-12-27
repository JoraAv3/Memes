import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Section } from "../Section";

export const Layout = () => {
  return (
    <div className="font-Finlandica overflow-hidden overflow-y-auto">
      <main className="w-full min-h-screen h-fit text-[#FFE6E3] bg-black bg-stars bg-[-110px_-240px] xl:bg-[-210px_-100px] bg-no-repeat bg-contain xl:bg-auto">
        <Section className="">
          <Header className="py-[40px] sm:py-[60px] w-full xl:w-[1174px] mx-auto" />
        </Section>
        <Outlet />
      </main>
    </div>
  );
};
