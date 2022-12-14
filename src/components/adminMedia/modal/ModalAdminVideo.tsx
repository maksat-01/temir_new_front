import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import AddPhotoSvg from "../../../assets/svg/AddPhotoSvg";
import { useAppDispatch } from "../../../hooks";

import API from "../../api/Api";
import { getIdUserParams } from "../../helper/index";
import { getActionImage } from "../../media/reducer/ActionImage";

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
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [dataImage, setDataImage] = useState({
    user: getIdUserParams(),
    title: "",
    image: "",
  });
  const [dataVideo, setDataVideo] = useState({
    title: "",
    url: "",
    user: getIdUserParams(),
  });
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [validateImage, setValidateImage] = useState({
    user: getIdUserParams(),
    title: false,
    image: false,
  });

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setDataImage({ ...dataImage, image: i });
    }
  };

  const uploadToServer = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", dataImage.user);
    formData.append("title", dataImage.title);
    dataImage.image?.length === 0
      ? console.log("error")
      : formData.append("image", dataImage.image);

    if (!dataImage.title && !dataImage.image) {
      setValidateImage({
        ...validateImage,
        image: true,
        title: true,
      });
    } else if (!dataImage.title && !dataImage.image) {
      setValidateImage({ ...validateImage, image: true, title: true });
    } else if (!dataImage.title) {
      setValidateImage({ ...validateImage, title: true });
    } else if (!dataImage.image) {
      setValidateImage({ ...validateImage, image: true });
    } else {
      await API.post(`image/`, formData)
        .then(() => {
          alert("success");
          dispatch(getActionImage());
        })
        .catch((e) => {
          alert("Error");
        });
    }
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

  const inputChange = (e: any) => {
    setDataVideo({
      ...dataVideo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`modal ${
        modal ? "active" : ""
      } max-w-[500px] mx-auto flex flex-col bg-[#151515] p-[10px]`}
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
          className={`py=[20px] bg-[#28282A] w-full h-[222px] rounded-[16px] mb-[13px] flex flex-col justify-center items-center ${
            validateImage.image && "border border-[#FF0000]"
          }`}
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
      {image && (
        <button
          onClick={() => ref.current?.click()}
          style={{ background: "rgba(208, 188, 255, 0.08)" }}
          className="text-[#D0BCFF] border-2 border-[#D0BCFF] my-[10px] rounded-[50px] px-[35px] py-[10px]"
        >
          Upload
        </button>
      )}
      {image && (
        <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to photo:
          </label>
          <input
            type="text"
            className="bg-transparent w-[100%] pl-[16px] outline-none"
            placeholder="URL"
            onChange={(e) => {
              image && setDataImage({ ...dataImage, title: e.target.value });
            }}
          />
          {validateImage?.title && (
            <p className="text-red-500 text-[12px] pl-[16px]">
              required fields
            </p>
          )}
        </div>
      )}
      {image && (
        <button
          onClick={uploadToServer}
          className="bg-white text-black rounded-[50px] px-[35px] py-[10px] mx-auto"
        >
          Add
        </button>
      )}
      <form onSubmit={handleSubmit(postVideo)} className="w-full">
        {video && (
          <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Theme to photo:
            </label>
            <input
              type="text"
              placeholder="title"
              {...register("title", { required: true })}
              name="title"
              className="bg-transparent w-[100%] pl-[16px] outline-none"
              onChange={(e) => inputChange(e)}
            />
            {errors?.title && (
              <p className="text-red-500 text-[12px] pl-[16px]">
                required fields
              </p>
            )}
          </div>
        )}
        {video && (
          <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              YouTube video link:
            </label>
            <input
              type="text"
              className="bg-transparent w-[100%] pl-[16px] outline-none"
              placeholder="URL"
              {...register("url", { required: true })}
              name="url"
              onChange={(e) => {
                video && inputChange(e);
              }}
            />
            {errors?.url && (
              <p className="text-red-500 text-[12px] pl-[16px]">
                required fields
              </p>
            )}
          </div>
        )}

        {video && (
          <div className="flex justify-center">
            <button
              className="bg-white text-black rounded-[50px] px-[35px] py-[10px] mx-auto"
              type="submit"
            >
              Add
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
