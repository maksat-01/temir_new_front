import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useNavigate } from "react-router-dom";
import APlusSvg from "../../assets/svg/AplusSvg";

import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import { getActionVideo } from "../media/reducer/ActionVideo";
import ModalAdminImage from "./modal/ModalAdminVideo";
import ModalUpdateImage from "./modal/ModalUpdateImage";
import { getActionMediaVideo } from "./reducer/ActionMediaVideo";

export default function MediaAdminVideo() {
  const dispatch = useAppDispatch();
  const { video } = useAppSelector((state) => state.ReducerVideo);
  const [update, setUpdate] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [modal, setModal] = useState(false);

  const deleteVideo = (post: any) => {
    API.delete(`video/${post.id}`)
      .then(() => {
        dispatch(getActionVideo());
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  useEffect(() => {
    dispatch(getActionVideo());
  }, []);

  return (
    <div className="mx-auto pb-[77px] ">
      <div
        className={`flex justify-center items-end relative  ${
          video.length <= 1 && "min-h-[70vh]"
        }`}
      >
        {video.map((items, index) => (
          <div key={index} className="mb-[33px] w-full px-[22px]">
            <ReactPlayer
              muted={false}
              width={"100%"}
              height="222px"
              url={items?.url}
            />
            <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mt-[17px] mb-[10px]">
              <label className="pl-[16px] text-[12px] text-[#6750A4]">
                Theme to Video:
              </label>
              <input
                disabled
                value={items.title}
                type="text"
                placeholder="text"
                className="bg-transparent w-[100%] pl-[16px]"
              />
            </div>
            <div className="flex justify-end pt-[30px] pb-[50px]">
              <button
                onClick={() => deleteVideo(items)}
                className="px-[20px] mr-[15px] text-[14px] py-[10px] border-[1.5px] border-[#FF0000] text-[#FF0000] font-[500] rounded-[50px]"
              >
                delete
              </button>
              <button
                onClick={() => {
                  setUpdate(true);
                  setVideoId(items.id);
                }}
                style={{ background: "rgba(208, 188, 255, 0.08)" }}
                className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
              >
                change
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={() => setModal(true)}
          className="px-[20px] py-[19px] bg-[#6750A4] font-[500] right-0 rounded-[50px] fixed bottom-[90px] right-[34px]"
        >
          <APlusSvg />
        </button>
      </div>
      <ModalUpdateImage
        modal={update}
        setModal={setUpdate}
        video
        videoId={videoId}
      />
      <ModalAdminImage modal={modal} setModal={setModal} video />
    </div>
  );
}
