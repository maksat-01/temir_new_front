import axios from "axios";
import { config } from "process";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import MediaCardImage from "./MediaCardImage";
import MediaCardVideos from "./MediaCardVideo";
import { getActionImage } from "./reducer/ActionImage";
import { getActionVideo } from "./reducer/ActionVideo";

enum MediaTypes {
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
}

export default function Media() {
  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "11px",
    textDecorationThickness: "2px",
    color: "white",
    cursor: "pointer",
  };

  const { id } = useParams();

  const [isActive, setActive] = useState(MediaTypes.PHOTO);

  const isPhoto = isActive === MediaTypes.PHOTO;
  const isVidoe = isActive === MediaTypes.VIDEO;

  const dispatch = useAppDispatch();
  const { photos } = useAppSelector((state) => state.ReducerImage);
  const { video } = useAppSelector((state) => state.ReducerVideo);

  useEffect(() => {
    dispatch(getActionImage());
    dispatch(getActionVideo());
  }, []);

  const yourPhotos = photos.filter((el) => el.user === id);
  const yourVideos = video.filter((el) => el.user === id);

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
      {isPhoto ? (
        <MediaCardImage photos={yourPhotos} />
      ) : (
        <MediaCardVideos video={yourVideos} />
      )}
    </div>
  );
}
