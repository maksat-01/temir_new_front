import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";

import { useAppDispatch, useAppSelector } from "../../hooks";
import Loading from "../loading/Loading";
import { getActionVideo } from "./reducer/ActionVideo";

export default function MediaCardVideos({ video }: any) {
  return (
    <div className="max-w-[500px]">
      {video.length <= 0 ? (
        <Loading />
      ) : (
        video.map((items: any, index: number) => (
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
        ))
      )}
    </div>
  );
}
