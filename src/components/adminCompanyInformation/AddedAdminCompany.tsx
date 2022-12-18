import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { useAppDispatch } from "../../hooks";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionCompany } from "../compony/reducer/ActionCompany";
import AddPhotoSvg from "../../assets/svg/AddPhotoSvg";
import { useForm } from "react-hook-form";

interface ICompanyAdd {
  image: string;
  user: any;
  name: string;
  activity: string;
  description: string;
  visit_website_url: string;
  address_url: string;
  is_main?: boolean | any;
}

export default function AddedAdminCompany() {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [showModal, setShowModal] = React.useState(false);
  const [showModalConfigm, setShowModalConfigm] = React.useState(false);
  const [showModalTitle, setShowModalTitle] = React.useState("");

  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState<any>();

  const [postDataCompany, setDataCompany] = useState<ICompanyAdd>({
    image: "",
    user: getIdUserParams(),
    name: "",
    activity: "lorem",
    description: "",
    visit_website_url: "",
    address_url: "",
    is_main: false,
  });

  const inputChange = (e: any) => {
    setDataCompany({ ...postDataCompany, [e.target.name]: e.target.value });
  };

  //// CROP IMAGE /////

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

  function postData() {
    setShowModal(false);
    setShowModalConfigm(false);
    const img = dataURLtoFile(cropData, "newImage.png");

    const data = new FormData();
    data.append("user", postDataCompany.user);
    data.append("image", img);
    data.append("name", postDataCompany.name);
    data.append("activity", postDataCompany.activity);
    data.append("description", postDataCompany.description);
    data.append("visit_website_url", postDataCompany.visit_website_url);
    data.append("address_url", postDataCompany.address_url);
    data.append("is_main", postDataCompany.is_main);

    API.post("company/", data)
      .then(({ data }) => {
        dispatch(getActionCompany());
        console.log(data, "RES");
        alert("Success");
        setCropData("");
        setDataCompany({
          ...postDataCompany,
          image: "",
          user: getIdUserParams(),
          name: "",
          activity: "lorem",
          description: "",
          visit_website_url: "",
          address_url: "",
          is_main: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    dispatch(getActionCompany());
  }, []);

  return (
    <div className="max-w-[500px] mx-auto pb-[80px] px-[22px]">
      <form onSubmit={handleSubmit(postData)} style={{ paddingTop: "28px" }}>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px] ">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to product:
          </label>
          <input
            type="text"
            value={postDataCompany.name}
            placeholder="Enter your text..."
            className="bg-transparent w-[100%] pl-[16px]"
            {...register("name", { required: true })}
            name="name"
            onChange={(e) => inputChange(e)}
          />
          {/* {validate?.name && (
            <p className="text-red-500 text-[12px] pl-[16px]">
              required fields
            </p>
          )} */}
        </div>
        <div
          className={`py=[20px] bg-[#28282A] ${
            !cropData && "h-[222px]"
          } rounded-[16px] mb-[13px] flex flex-col justify-center items-center `}
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
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to product:
          </label>
          <textarea
            placeholder="Enter your text..."
            value={postDataCompany.description}
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            {...register("description", { required: true })}
            name="description"
            onChange={(e) => inputChange(e)}
          ></textarea>
          {/* {validate?.description && (
            <p className="text-red-500 text-[12px] pl-[16px]">
              required fields
            </p>
          )} */}
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Website URL:
          </label>
          <input
            type="text"
            value={postDataCompany?.visit_website_url}
            placeholder="Enter your text..."
            className="bg-transparent w-[100%] pl-[16px]"
            {...register("visit_website_url", { required: true })}
            name="visit_website_url"
            onChange={(e) => inputChange(e)}
          />
          {/* {validate?.visit_website_url && (
            <p className="text-red-500 text-[12px] pl-[16px]">
              required fields
            </p>
          )} */}
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Address:
          </label>
          <input
            type="text"
            value={postDataCompany?.address_url}
            placeholder="Enter your text..."
            className="bg-transparent w-[100%] pl-[16px]"
            {...register("address_url", { required: true })}
            name="address_url"
            onChange={(e) => inputChange(e)}
          />
          {/* {validate?.address_url && (
            <p className="text-red-500 text-[12px] pl-[16px]">
              required fields
            </p>
          )} */}
        </div>
        <input
          type="checkbox"
          onClick={() =>
            setDataCompany({
              ...postDataCompany,
              is_main: true,
            })
          }
        />
        <div className="flex justify-end">
          <button
            type="submit"
            // onClick={() => getCropData()}
            style={{ background: "rgba(208, 188, 255, 0.08)" }}
            className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
          >
            Add
          </button>
        </div>
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
