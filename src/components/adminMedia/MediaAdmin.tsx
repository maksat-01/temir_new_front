import { NavLink } from "react-router-dom";

interface IMediaAdmin {
  children: JSX.Element;
}

export default function Media({ children }: IMediaAdmin) {
  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "11px",
    textDecorationThickness: "2px",
    color: "white",
  };

  return (
    <div className="max-w-[419px] mx-auto bg-[#151515] relative">
      <div className="bg-[#262627]">
        <p className="text-center pt-[50px] font-[600]">Follow me</p>
        <div className="w-full mt-[20px] flex justify-evenly text-[#BEBEBE] mb-[33px] pb-[10px]">
          <NavLink
            to="/admin/image"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Photos
          </NavLink>
          <NavLink
            to="/admin/video"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Videos
          </NavLink>
        </div>
      </div>
      {children}
    </div>
  );
}
