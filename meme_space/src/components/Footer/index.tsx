import clsx from "clsx";
import { BasketIcon } from "../../assets/icons/Basket";
import { GiftsIcon } from "../../assets/icons/Gifts";
import { ProfileIcon } from "../../assets/icons/Profile";
import { ReferalsIcon } from "../../assets/icons/Referals";
import { TasksIcon } from "../../assets/icons/Tasks";
import { NavLink, useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={clsx(
        "xl:hidden flex items-center justify-between cursor-pointer px-[36px] py-[18px] fixed bottom-0 w-full z-50 bg-black",
        "before:w-full before:h-8 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:-top-7 before:left-0",
        "before:border-b before:border-b-white/20"
      )}
    >
      <NavLink to="/earn">
        <BasketIcon
          className={clsx(
            pathname === "/earn" && "fill-active-icon opacity-90",
            pathname !== "/earn" && "fill-static-icon opacity-80"
          )}
        />
      </NavLink>
      <NavLink to="/tasks">
        <TasksIcon
          className={clsx(
            pathname === "/tasks" && "fill-active-icon opacity-90",
            pathname !== "/tasks" && "fill-static-icon opacity-80"
          )}
        />
      </NavLink>
      <NavLink to="/referals">
        <ReferalsIcon
          className={clsx(
            pathname === "/referals" && "fill-active-icon opacity-90",
            pathname !== "/referals" && "fill-static-icon opacity-80"
          )}
        />
      </NavLink>
      <NavLink to="/products">
        <GiftsIcon
          className={clsx(
            pathname === "/products" && "fill-active-icon opacity-90",
            pathname !== "/products" && "fill-static-icon opacity-80"
          )}
        />
      </NavLink>
      <NavLink to="/profile">
        <ProfileIcon
          className={clsx(
            pathname === "/profile" && "fill-active-icon opacity-90",
            pathname !== "/profile" && "fill-static-icon opacity-80"
          )}
        />
      </NavLink>
    </div>
  );
};
