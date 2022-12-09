import axios from "axios";
import { config } from "process";
import { NavLink } from "react-router-dom";

interface IMedia {
  children: JSX.Element;
}

export default function Media({ children }: IMedia) {
  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "11px",
    textDecorationThickness: "2px",
    color: "white",
  };

  return (
    <div className="max-w-[500px] mx-auto px-[22px]">
      <div className="w-full mt-[20px] flex justify-evenly text-[#BEBEBE] mb-[33px]">
        <NavLink
          to="/image"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Photos
        </NavLink>
        <NavLink
          to="/video"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Videos
        </NavLink>
      </div>
      {children}
    </div>
  );
}
