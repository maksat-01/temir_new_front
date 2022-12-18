import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

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
  const [showModal, setShowModal] = React.useState(false);
  const [showModalConfigm, setShowModalConfigm] = React.useState(false);
  const [showModalTitle, setShowModalTitle] = React.useState("");

  const [imageFile, setImageFile] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState<any>();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [validateImage, setValidateImage] = useState({
    user: getIdUserParams(),
    title: false,
    image: false,
  });

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImageFile(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  function dataURLtoFile(dataurl: any, filename: any) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const uploadToServer = async (e: any) => {
    setShowModal(false);
    setShowModalConfigm(false);
    const img = dataURLtoFile(cropData, "newImage.png");
    const formData = new FormData();
    formData.append("user", dataImage.user);
    formData.append("title", dataImage.title);
    formData.append("image", img);

    if (!dataImage.title && !dataImage.image) {
      setValidateImage({
        ...validateImage,
        image: true,
        title: true,
      });
    } else if (!dataImage.title) {
      setValidateImage({ ...validateImage, title: true });
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
      } max-w-[500px] mx-auto flex flex-col bg-[#151515] p-[10px] z-[100]`}
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
          className={`py=[20px] bg-[#28282A] ${
            !cropData && "h-[222px]"
          } rounded-[16px] mb-[13px] flex flex-col w-full justify-center items-center `}
          onClick={() => {
            setShowModal(true);
            setShowModalTitle("Change image");
          }}
        >
          {cropData && (
            <img
              src={cropData}
              alt="no image"
              className="h-[222px] w-full rounded-[16px]"
            />
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            style={{ display: "none" }}
            ref={ref}
          />
          {!cropData && <AddPhotoSvg />}
          {!cropData && <p className="pt-[5px]">+ Upload file</p>}
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

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col max-w-[500px] w-full bg-[#262627] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{showModalTitle}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    type="file"
                    onChange={onChange}
                    className="w-[200px] py-2 px-2 bg-[#575757]"
                  />
                  {imageFile && (
                    <div className="mt-5">
                      <Cropper
                        style={{ height: 400, width: "100%" }}
                        zoomTo={0.5}
                        initialAspectRatio={1}
                        preview=".img-preview"
                        src={imageFile}
                        viewMode={1}
                        minCropBoxHeight={10}
                        minCropBoxWidth={10}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                        onInitialized={(instance) => {
                          setCropper(instance);
                        }}
                        guides={true}
                      />
                    </div>
                  )}
                </div>
                {/*footer*/}

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      getCropData();
                      setShowModalConfigm(true);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showModalConfigm ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col max-w-[500px] w-full bg-[#262627] outline-none focus:outline-none">
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <img src={cropData} alt="no image" className="w-full" />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalConfigm(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowModalConfigm(false);
                          setShowModal(false);
                        }}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
