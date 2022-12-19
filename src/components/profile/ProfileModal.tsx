import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import axios from "axios";
import { getUser } from "../../pages/interface/getUser/redux/reducer";
import { useDispatch } from "react-redux";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import "./style.scss";

interface IModal {
  setModal: any;
  modal: any;
}

export default function ProfileModal({ modal, setModal }: IModal) {
  const { user } = useAppSelector((state) => state.getUser);
  const dispatch = useDispatch();
  const id = JSON.parse(localStorage.getItem("paramsUserId") as any);
  const [nameAndPosition, SetNameAndPostion] = useState({
    username: "",
    position: "",
  });
  /// avatart///
  const [showModal, setShowModal] = React.useState(false);
  const [showModalConfigm, setShowModalConfigm] = React.useState(false);
  const [showModalTitle, setShowModalTitle] = React.useState("");

  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<any>();

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
      setImage(reader.result as any);
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

  /// bg ////

  const [showModalBg, setShowModalBg] = React.useState(false);
  const [showModalConfigmBg, setShowModalConfigmBg] = React.useState(false);
  const [showModalTitleBg, setShowModalTitleBg] = React.useState("");

  const [imageBg, setImageBg] = useState("");
  const [cropDataBg, setCropDataBg] = useState("#");
  const [cropperBg, setCropperBg] = useState<any>();

  const onChangeBg = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImageBg(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropDataBg = () => {
    if (typeof cropperBg !== "undefined") {
      setCropDataBg(cropperBg.getCroppedCanvas().toDataURL());
    }
  };

  function postData() {
    setShowModal(false);
    setShowModalConfigm(false);

    setShowModalBg(false);
    setShowModalConfigmBg(false);
    const img = dataURLtoFile(cropData, "newImage.png");
    const imgBg = dataURLtoFile(cropDataBg, "image.png");

    const data = new FormData();
    data.append("user", getIdUserParams());
    data.append("avatar", img ? img : user.avatar);
    data.append("background", imgBg ? imgBg : user.background);
    data.append(
      "username",
      nameAndPosition.username ? nameAndPosition.username : user.username
    );
    data.append(
      "position",
      nameAndPosition.position ? nameAndPosition.position : user.position
    );

    API.patch(`user/${getIdUserParams()}`, data)
      .then(({ data }) => {
        console.log(data);
        dispatch(getUser.actions.getUserSucceseded(data));
        alert("Success");
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  }

  function deleteAvatar() {
    setShowModal(false);
    setShowModalConfigm(false);

    setShowModalBg(false);
    setShowModalConfigmBg(false);

    const data = new FormData();
    data.append("avatar", "");

    API.patch(`user/${getIdUserParams()}`, data)
      .then(({ data }) => {
        console.log(data);
        alert("Success");
        dispatch(getUser.actions.getUserSucceseded(data));
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  }

  function deleteBg() {
    setShowModal(false);
    setShowModalConfigm(false);

    setShowModalBg(false);
    setShowModalConfigmBg(false);

    const data = new FormData();
    data.append("background", "");

    API.patch(`user/${getIdUserParams()}`, data)
      .then(({ data }) => {
        console.log(data);
        alert("Success");
        dispatch(getUser.actions.getUserSucceseded(data));
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  }

  useEffect(() => {
    // dispatch(getUser.actions.getUser);
    axios
      .get(`http://64.227.177.107:8000/user/` + id)
      .then(({ data }) => {
        dispatch(getUser.actions.getUserSucceseded(data));
      })
      .catch((error) => {
        dispatch(getUser.actions.getUserError(error));
      });
  }, []);

  // console.log(imageBg, "BG");
  console.log(user, "user");

  return (
    <div
      className={`modal ${
        modal ? "active" : ""
      } max-w-[500px] mx-auto px-[22px]`}
    >
      <div
        className="w-full h-[250px] bg-red-400 flex items-center justify-center"
        style={{
          background: `url(${user.background}) no-repeat center/cover`,
        }}
      >
        {user.avatar && (
          <img
            src={user.avatar}
            alt="no image"
            className="w-[100px] h-[100px] rounded-full object-cover mt-[40px]"
          />
        )}
      </div>
      <div className="flex flex-col items-center gap-3 pb-[120px] mt-[40px]">
        <button
          className="w-[300px] py-3 px-4 bg-black mb-[10px]"
          style={{
            border: "1px solid white",
            borderRadius: "100px",
          }}
          onClick={() => {
            setShowModal(true);
            setShowModalTitle("Change profile photo");
          }}
        >
          Change profile photo
        </button>
        <button
          className="w-[300px] py-3 px-4 mb-[25px] "
          style={{
            border: "1px solid white",
            borderRadius: "100px",
          }}
          onClick={() => {
            setShowModalBg(true);
            setShowModalTitleBg("Change background");
          }}
        >
          Change background
        </button>

        <div className="text-black pb-[8px] w-full bg-[#E7E0EC] rounded-[4px] mb-[10px] ">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Full name:
          </label>
          <input
            type="text"
            defaultValue={user.username}
            placeholder="Full name"
            className="bg-transparent w-[100%] pl-[16px]"
            onChange={(e) =>
              SetNameAndPostion({
                ...nameAndPosition,
                username: e.target.value,
              })
            }
          />
        </div>

        <div className="text-black w-full pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Position:
          </label>
          <input
            type="text"
            defaultValue={user.position}
            placeholder="position"
            className="bg-transparent w-[100%] pl-[16px]"
            onChange={(e) =>
              SetNameAndPostion({
                ...nameAndPosition,
                position: e.target.value,
              })
            }
          />
        </div>

        <button
          onClick={postData}
          className="bg-[#F3F3F3] text-black px-[30px] py-[10px] rounded-[100px] font-[500]"
        >
          Save
        </button>
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
                  {image && (
                    <div className="mt-5">
                      <Cropper
                        style={{ height: 400, width: "100%" }}
                        zoomTo={0.5}
                        initialAspectRatio={1}
                        preview=".img-preview"
                        src={image}
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
                    className="text-white px-6 py-3 rounded bg-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      deleteAvatar();
                    }}
                  >
                    Delete
                  </button>

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
                      <img src={cropData} alt="" className="w-full" />
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
                          setShowModal(false);
                          setShowModalConfigm(false);
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

      {showModalBg ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col max-w-[500px] w-full bg-[#262627] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{showModalTitleBg}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalBg(false)}
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
                    onChange={onChangeBg}
                    className="w-[200px] py-2 px-2 bg-[#575757]"
                  />
                  {imageBg && (
                    <div className="mt-5">
                      <Cropper
                        style={{ height: 400, width: "100%" }}
                        zoomTo={0.5}
                        initialAspectRatio={1}
                        preview=".img-preview"
                        src={imageBg}
                        viewMode={1}
                        minCropBoxHeight={10}
                        minCropBoxWidth={10}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                        onInitialized={(instance) => {
                          setCropperBg(instance);
                        }}
                        guides={true}
                      />
                    </div>
                  )}
                </div>
                {/*footer*/}

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    onClick={deleteBg}
                    type="button"
                    className="text-white px-6 py-3 rounded bg-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Delete
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalBg(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      getCropDataBg();
                      setShowModalConfigmBg(true);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showModalConfigmBg ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col max-w-[500px] w-full bg-[#262627] outline-none focus:outline-none">
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <img src={cropDataBg} alt="on image" className="w-full" />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalConfigmBg(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowModalBg(false);
                          setShowModalConfigmBg(false);
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
