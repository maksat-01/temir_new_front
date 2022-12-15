import axios from "axios";
import { config } from "process";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface IMedia {
  children: JSX.Element;
}

enum MediaTypes {
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
}

export default function Media({ children }: IMedia) {
  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "11px",
    textDecorationThickness: "2px",
    color: "white",
    cursor: "pointer",
  };

  const [isActive, setActive] = useState(MediaTypes.PHOTO);

  const isPhoto = isActive === MediaTypes.PHOTO;
  const isVidoe = isActive === MediaTypes.VIDEO;

  return (
    <div className="max-w-[500px] mx-auto px-[22px]">
      <div className="w-full mt-[20px] flex justify-evenly text-[#BEBEBE] mb-[33px]">
        <h1
          style={isPhoto ? activeStyle : { cursor: "pointer" }}
          onClick={() => setActive(MediaTypes.PHOTO)}
        >
          Photos
        </h1>
        <h1
          style={isVidoe ? activeStyle : { cursor: "pointer" }}
          onClick={() => setActive(MediaTypes.VIDEO)}
        >
          Videos
        </h1>
      </div>
      {children}
    </div>
  );
}
