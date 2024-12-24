import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Section } from "../Section";

export const Layout = () => {
  return (
    <div className="font-Finlandica overflow-hidden overflow-y-auto">
      <main className="w-full min-h-screen text-[#FFE6E3] bg-black bg-stars bg-[-110px_-240px] bg-no-repeat bg-contain">
        <Section className="">
          <Header className="py-[40px] sm:py-[60px] w-full xl:w-[1174px] mx-auto" />
        </Section>
        <Outlet />
      </main>
    </div>
  );
};
