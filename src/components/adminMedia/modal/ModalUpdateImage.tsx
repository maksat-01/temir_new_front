import React, { useEffect, useRef, useState } from "react";
import AddPhotoSvg from "../../../assets/svg/AddPhotoSvg";
import { useAppDispatch, useAppSelector } from "../../../hooks";

import API from "../../api/Api";
import { getIdUserParams } from "../../helper/index";
import { getActionImage } from "../../media/reducer/ActionImage";
import { getActionVideo } from "../../media/reducer/ActionVideo";
import { getActionMediaImage } from "../reducer/ActionMediaImage";
import { getActionMediaVideo } from "../reducer/ActionMediaVideo";

import "../style.scss";

interface IModal {
  video?: boolean;
  videoId?: string;
  image?: boolean;
  setModal: any;
  modal: any;
  imageId?: string;
}

export default function ModalUpdateImage({
  modal,
  setModal,
  imageId,
  video,
  videoId,
  image,
}: IModal) {
  const dispatch = useAppDispatch();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { photos } = useAppSelector((state) => state.ReducerMediaImage);
  const { video: videoUpdate } = useAppSelector(
    (state) => state.ReducerMediaVideo
  );
  const [titleUpdate, setTitleUpdate] = useState("");
  const [updateImage, setUpdateImage] = useState("");
  const [dataVideo, setDataVideo] = useState({
    title: "",
    url: "",
    user: getIdUserParams(),
  });

  const deletePost = (post: any) => {
    API.delete(`image/${post.id}`)
      .then((res) => {
        dispatch(getActionImage());
      })
      .catch((error) => {
        alert("Error");
      });
  };

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setUpdateImage(i);
    }
  };

  const uploadToServer = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", getIdUserParams());
    formData.append("title", titleUpdate);
    updateImage?.length === 0
      ? console.log("error")
      : formData.append("image", updateImage);

    await API.patch(`image/${imageId}`, formData)
      .then(() => {
        alert("success");
        dispatch(getActionImage());
        dispatch(getActionMediaImage(imageId));
      })
      .catch(() => {
        alert("Error");
      });
  };

  const updateVideo = () => {
    API.patch(`video/${videoId}`, dataVideo)
      .then(() => {
        alert("Success");
        dispatch(getActionVideo());
        dispatch(getActionMediaVideo(videoId));
      })
      .catch(() => {
        alert("Err");
      });
  };

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
    dispatch(getActionMediaImage(imageId));
    dispatch(getActionMediaVideo(videoId));
  }, [imageId, videoId]);

  return (
    <div
      className={`update ${
        modal ? "active" : ""
      } max-w-[500px] mx-auto flex flex-col bg-[#151515] p-[10px]`}
    >
      <div className="w-[100%] flex justify-between items-center pb-[25px]">
        <p className="text-[24px]">
          Update {(image && "photo") || (video && "video")}
        </p>
        <p className="font-[400]" onClick={() => setModal(false)}>
          Close
        </p>
      </div>
      {image && (
        <input
          id="file-upload"
          onChange={(e) => uploadToClient(e)}
          accept="image/png, image/gif, image/jpeg"
          type="file"
          style={{ display: "none" }}
          ref={ref}
        />
      )}
      {image && (
        <img
          onClick={() => ref?.current?.click()}
          src={photos?.image}
          alt="no img"
          className="w-full h-[222px] object-cover rounded-[16px] mb-[19px] object-cover"
        />
      )}

      {video && (
        <input
          defaultValue={videoUpdate.url}
          type="text"
          className=" w-[100%] text-black pl-[16px] py-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]"
          placeholder="URL"
          onChange={(e) => {
            setDataVideo({ ...dataVideo, url: e.target.value });
          }}
        />
      )}

      {video && (
        <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            YouTube video link:
          </label>
          <input
            defaultValue={videoUpdate?.title}
            type="text"
            placeholder="URL"
            className="bg-transparent w-[100%] pl-[16px] outline-none"
            onChange={(e) =>
              setDataVideo({ ...dataVideo, title: e.target.value })
            }
          />
        </div>
      )}

      {image && (
        <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to photo:
          </label>
          <input
            defaultValue={photos?.title}
            type="text"
            placeholder="text"
            className="bg-transparent w-[100%] pl-[16px] outline-none"
            onChange={(e) => setTitleUpdate(e.target.value)}
          />
        </div>
      )}
      <div className="w-full flex justify-end">
        {image && (
          <button
            onClick={() => deletePost(imageId)}
            style={{ background: "rgba(208, 188, 255, 0.08)" }}
            className="text-[#D0BCFF] border-2 border-[#D0BCFF] rounded-[50px] px-[35px] py-[10px] mr-[14px]"
          >
            delete
          </button>
        )}
        {image && (
          <button
            onClick={uploadToServer}
            className="bg-white text-black rounded-[50px] px-[35px] py-[10px]"
          >
            save change
          </button>
        )}

        {video && (
          <button
            onClick={() => deleteVideo(videoId)}
            className="border-2 border-[#FF0000] text-[#FF0000] rounded-[50px] px-[35px] py-[10px] mr-[14px]"
          >
            delete
          </button>
        )}

        {video && (
          <button
            onClick={updateVideo}
            className="bg-white text-black rounded-[50px] px-[35px] py-[10px]"
          >
            save change
          </button>
        )}
      </div>
    </div>
  );
}
