import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
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
  const { photos } = useAppSelector((state) => state.ReducerMediaImage);
  const { video: videoUpdate } = useAppSelector(
    (state) => state.ReducerMediaVideo
  );
  const [changeDataImage, setChangeDataImage] = useState({
    title: ``,
    image: ``,
    user: getIdUserParams(),
  });
  const [dataVideo, setDataVideo] = useState({
    title: "",
    url: "",
    user: getIdUserParams(),
  });
  const [createImage, setCreateImage] = useState<any>();
  const [showModal, setShowModal] = React.useState(false);
  const [showModalConfigm, setShowModalConfigm] = React.useState(false);
  const [showModalTitle, setShowModalTitle] = React.useState("");

  const [imageFile, setImageFile] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState<any>();

  const deletePost = (post: any) => {
    API.delete(`image/${post.id}`)
      .then((res) => {
        dispatch(getActionImage());
      })
      .catch((error) => {
        alert("Error");
      });
  };

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
    formData.append("user", getIdUserParams());
    formData.append(
      "title",
      changeDataImage.title.length > 0 ? changeDataImage.title : photos.title
    );
    img && formData.append("image", img);

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
    API.patch(`video/${videoId}`, {
      user: dataVideo.user,
      title: dataVideo.title.length > 0 ? dataVideo.title : videoUpdate.title,
      url: dataVideo.url.length > 0 ? dataVideo.url : videoUpdate.url,
    })
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
          accept="image/png, image/gif, image/jpeg"
          type="file"
          style={{ display: "none" }}
        />
      )}
      {image && (
        <img
          onClick={() => {
            setShowModal(true);
            setShowModalTitle("Select image");
          }}
          src={createImage || photos?.image}
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
            onChange={(e) =>
              setChangeDataImage({ ...changeDataImage, title: e.target.value })
            }
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
