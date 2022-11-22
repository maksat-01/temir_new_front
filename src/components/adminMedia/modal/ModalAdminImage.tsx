import React, { useRef, useState } from "react";
import AddPhotoSvg from "../../../assets/svg/AddPhotoSvg";

import API from "../../api/Api";
import { getIdUserParams } from "../../helper/index";

import "../style.scss";

interface IModal {
  video?: boolean;
  image?: boolean;
  setModal: any;
  modal: any;
}

export default function ModalAdminImage({
  modal,
  setModal,
  image,
  video,
}: IModal) {
  const [imageFile, setImageFile]: any = useState("");
  const [title, setTitle] = useState("");
  const [dataVideo, setDataVideo] = useState({
    title: "",
    url: "",
    user: getIdUserParams(),
  });
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImageFile(i);
    }
  };

  const uploadToServer = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", getIdUserParams());
    formData.append("title", title);
    imageFile?.length === 0
      ? console.log("error")
      : formData.append("image", imageFile);

    console.log(Object.fromEntries(formData), "obj");

    await API.post("image/", formData)
      .then(() => {
        alert("success");
      })
      .catch(() => {
        alert("Error");
      });
  };

  const postVideo = () => {
    API.post("video/", dataVideo)
      .then((res) => {
        alert("Success");
        console.log(res, "RE");
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  return (
    <div
      className={`modal ${
        modal ? "active" : ""
      } max-w-[750px] mx-auto flex flex-col bg-[#151515] p-[10px]`}
    >
      <div className="w-[100%] flex justify-between items-center pb-[25px]">
        <p className="text-[24px]">
          Add {(video && "Video") || (image && "Photo")}
        </p>
        <p className="font-[400]" onClick={() => setModal(false)}>
          Close
        </p>
      </div>
      {image && (
        <div
          className="w-[100%] bg-[#28282A] rounded-[16px] flex justify-center items-center flex-col py-[82px]"
          onClick={() => ref.current?.click()}
        >
          <input
            id="file-upload"
            onChange={(e) => uploadToClient(e)}
            accept="image/png, image/gif, image/jpeg"
            type="file"
            style={{ display: "none" }}
            className="w-full h-auto rounded-[16px] mb-[19px] object-cover"
            ref={ref}
          />
          <AddPhotoSvg />
          <p className="font-[600]"> + Add photo</p>
        </div>
      )}
      {video && (
        <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            YouTube video link:
          </label>
          <input
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
        <button
          onClick={() => ref.current?.click()}
          style={{ background: "rgba(208, 188, 255, 0.08)" }}
          className="text-[#D0BCFF] border-2 border-[#D0BCFF] my-[10px] rounded-[50px] px-[35px] py-[10px]"
        >
          Upload
        </button>
      )}
      <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          {(video && "Theme to video:") || (image && "Theme to photo:")}:
        </label>
        <input
          type="text"
          className="bg-transparent w-[100%] pl-[16px] outline-none"
          placeholder="URL"
          onChange={(e) => {
            image && setTitle(e.target.value);
            video && setDataVideo({ ...dataVideo, title: e.target.value });
          }}
        />
      </div>
      {image && (
        <button
          onClick={uploadToServer}
          className="bg-white text-black rounded-[50px] px-[35px] py-[10px] mx-auto"
        >
          Add
        </button>
      )}
      {video && (
        <button
          onClick={postVideo}
          className="bg-white text-black rounded-[50px] px-[35px] py-[10px] mx-auto"
        >
          Add
        </button>
      )}
    </div>
  );
}
