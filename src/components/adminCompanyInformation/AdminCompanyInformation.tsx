import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import { getActionCompanyDetails } from "../compony/reducer/ActionComponyDetails";
import { getIdUserParams } from "../helper";
import { useParams } from "react-router-dom";
import { getActionCompany } from "../compony/reducer/ActionCompany";
import { getActionCompanyInformationAdmin } from "./reducer/ActionCompanyInformation";

export default function AdminCompanyInformation() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(true);
  const { details } = useAppSelector((state) => state.ReducerCompanyDetails);
  const [showModal, setShowModal] = React.useState(false);
  const [showModalConfigm, setShowModalConfigm] = React.useState(false);
  const [showModalTitle, setShowModalTitle] = React.useState("");

  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState<any>();
  const [changeData, setChangeData] = useState<any>({
    id: id,
    image: "",
    user: getIdUserParams(),
    name: "",
    activity: "",
    description: "",
    visit_website_url: "",
    address_url: "",
    is_main: false,
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

  const changeToServer = async (e: any) => {
    setShowModal(false);
    setShowModalConfigm(false);
    const img = dataURLtoFile(cropData, "newImage.png");

    const formData = new FormData();
    formData.append("user", changeData.user ? changeData.user : details.user);
    formData.append(
      "activity",
      changeData.activity ? changeData.activity : details.activity
    );
    formData.append(
      "description",
      changeData.description ? changeData.description : details.description
    );
    formData.append(
      "visit_website_url",
      changeData.visit_website_url
        ? changeData.visit_website_url
        : details.visit_website_url
    );
    formData.append(
      "address_url",
      changeData.address_url ? changeData.address_url : details.address_url
    );
    formData.append(
      "is_main",
      changeData.is_main ? changeData.is_main : details.is_main
    );

    img && formData.append("image", img);

    await API.patch(`company/${details.id}`, formData)
      .then(() => {
        alert("success");
        dispatch(getActionCompany());
        dispatch(getActionCompanyDetails(details.id));
      })
      .catch(() => {
        alert("Error");
      });
  };

  useEffect(() => {
    dispatch(getActionCompany());
    dispatch(getActionCompanyDetails(id));
    dispatch(getActionCompanyInformationAdmin(id));
  }, [id]);

  return (
    <div>
      <div className="max-w-[500px] mx-auto pt-[22px] mt-[38px] pb-[75px]">
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to product:
          </label>
          <input
            type="text"
            disabled={active}
            defaultValue={details.name}
            placeholder="Enter your text..."
            className="bg-transparent w-[100%] pl-[16px]"
            onChange={(e) => {
              setChangeData({ ...changeData, name: e.target.value });
            }}
          />
        </div>

        <div>
          <img
            onClick={() => {
              setShowModal(true);
              setShowModalTitle("Select image");
            }}
            src={details.image}
            alt="no img"
            className="w-full object-cover h-[222px] rounded-[16px] mb-[19px] object-cover"
          />
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to product:
          </label>
          <textarea
            disabled={active}
            defaultValue={details.description}
            placeholder="Enter your text..."
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) =>
              setChangeData({ ...changeData, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Website URL:
          </label>
          <input
            type="text"
            disabled={active}
            defaultValue={details.visit_website_url}
            placeholder="Enter your text..."
            className="bg-transparent w-[100%] pl-[16px]"
            onChange={(e) =>
              setChangeData({
                ...changeData,
                visit_website_url: e.target.value,
              })
            }
          />
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Address:
          </label>
          <input
            type="text"
            disabled={active}
            defaultValue={details.address_url}
            placeholder="Enter your text..."
            className="bg-transparent w-[100%] pl-[16px]"
            onChange={(e) =>
              setChangeData({
                ...changeData,
                address_url: e.target.value,
              })
            }
          />
        </div>
        <input
          type="checkbox"
          onClick={() =>
            setChangeData({
              ...changeData,
              is_main: true,
            })
          }
        />
        <div className="flex justify-end ">
          {active && (
            <button
              onClick={() => setActive(!active)}
              style={{ background: "rgba(208, 188, 255, 0.08)" }}
              className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
            >
              change
            </button>
          )}
          {!active && (
            <button
              onClick={(e) => {
                changeToServer(e);
                setActive(true);
              }}
              className="px-[20px] bg-white text-[14px] py-[10px] border-[1px] text-black font-[500] rounded-[50px]"
            >
              save
            </button>
          )}
        </div>
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
