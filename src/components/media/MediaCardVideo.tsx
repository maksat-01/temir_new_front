import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionVideo } from "./reducer/ActionVideo";

export default function MediaCardVideos() {
  const dispatch = useAppDispatch();
  const { video } = useAppSelector((state) => state.ReducerVideo);
  useEffect(() => {
    dispatch(getActionVideo());
  }, []);

  return (
    <div className="max-w-[400px]">
      {video.map((items, index) => (
        <div key={index} className="mb-[33px]">
          <ReactPlayer
            muted={false}
            width={"100%"}
            height="auto"
            url={items?.url}
          />
          <p className="text-center mt-[11px] px-[20px] text-[22px]">
            Warm memories in the cold Viedos.
          </p>
        </div>
      ))}
    </div>
  );
}
