import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { useForm } from "react-hook-form";
import AddPhotoSvg from "../../assets/svg/AddPhotoSvg";
import { useAppDispatch } from "../../hooks";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionProduct } from "../products/reducer/ActionProduct";
import { getActionProductAdmin } from "./reducer/ActionProductAdmin";

interface IAdminProductAdded {
  productId: string;
}

// visit_website_url_name: string;
// visit_website_url_url: string;

export default function AdminProductAdded({ productId }: IAdminProductAdded) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [showModalConfigm, setShowModalConfigm] = React.useState(false);
  const [showModalTitle, setShowModalTitle] = React.useState("");

  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState<any>();
  const [postDataProduct, setPostDataProduct] = useState({
    user: getIdUserParams(),
    title: "",
    description: "",
    image: "",
    visit_website_url_name: "",
    visit_website_url_url: "",
  });
  const [validate, setValidate] = useState({
    title: false,
    description: false,
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

  const postToServer = async (e: any) => {
    setShowModal(false);
    setShowModalConfigm(false);
    const img = dataURLtoFile(cropData, "newImage.png");

    const formData = new FormData();
    formData.append("user", postDataProduct.user);
    formData.append("description", postDataProduct.description);
    formData.append("title", postDataProduct.title);
    formData.append("image", img);
    if (
      !postDataProduct.title &&
      !postDataProduct.description &&
      !postDataProduct.image
    ) {
      setValidate({ ...validate, description: true, image: true, title: true });
    } else if (!postDataProduct.title && !postDataProduct.description) {
      setValidate({ ...validate, description: true, title: true });
    } else if (!postDataProduct.title) {
      setValidate({ ...validate, title: true });
    } else if (!postDataProduct.description) {
      setValidate({ ...validate, description: true });
    } else {
      await API.post(`product/`, formData)
        .then(() => {
          alert("success");
          setPostDataProduct({
            ...postDataProduct,
            user: getIdUserParams(),
            title: "",
            description: "",
            image: "",
          });
          setCropData("");
          dispatch(getActionProduct());
          dispatch(getActionProductAdmin(productId));
        })
        .catch((e) => {
          alert("Error");
        });
    }

    setPostDataProduct({
      user: getIdUserParams(),
      title: "",
      description: "",
      image: "",
      visit_website_url_name: "",
      visit_website_url_url: "",
    });
  };

  const inputChange = (e: any) => {
    setPostDataProduct({ ...postDataProduct, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getActionProduct());
    dispatch(getActionProductAdmin(productId));
  }, []);

  return (
    <div>
      <div
        className={`py=[20px] bg-[#28282A] w-full h-[222px] rounded-[16px] mb-[13px] flex flex-col justify-center items-center ${
          validate.image && "border border-[#FF0000]"
        }`}
        onClick={() => {
          setShowModal(true);
          setShowModalTitle("Change image");
        }}
      >
        {cropData && (
          <img
            src={cropData}
            alt="no image"
            className="h-[222px] rounded-[16px] w-full object-cover"
          />
        )}
        <input
          id="file-upload"
          accept="image/png, image/gif, image/jpeg"
          type="file"
          style={{ display: "none" }}
        />
        {!cropData && <AddPhotoSvg />}
        {!cropData && <p className="font-[600]"> + Add photo</p>}
      </div>
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Theme to product:
        </label>
        <input
          type="text"
          placeholder="Enter your text..."
          {...register("title", { required: true })}
          value={postDataProduct.title}
          name="title"
          className="bg-transparent w-[100%] pl-[16px]"
          onChange={(e) => inputChange(e)}
        />
        {validate?.title && (
          <p className="text-red-500 text-[12px] pl-[16px]">required fields</p>
        )}
      </div>
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[28px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Product discription:
        </label>
        <textarea
          placeholder="Enter your text..."
          {...register("description", { required: true })}
          value={postDataProduct.description}
          name="description"
          className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
          onChange={(e) => inputChange(e)}
        ></textarea>
        {validate?.description && (
          <p className="text-red-500 text-[12px] pl-[16px]">required fields</p>
        )}
      </div>

      <p className="font-[600] text-center text-[21px]">
        Add additional button
      </p>
      <p className="text-center font-[600] text-[14px] mb-[13px]">(Optional)</p>
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Button name:
        </label>
        <input
          type="text"
          placeholder="Enter your text..."
          {...register("visit_website_url_name", { required: true })}
          value={postDataProduct.visit_website_url_name}
          name="title"
          className="bg-transparent w-[100%] pl-[16px]"
          onChange={(e) => inputChange(e)}
        />
        {validate?.title && (
          <p className="text-red-500 text-[12px] pl-[16px]">required fields</p>
        )}
      </div>
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[37px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Button link:
        </label>
        <input
          type="text"
          placeholder="Enter your text..."
          {...register("visit_website_url_url", { required: true })}
          value={postDataProduct.visit_website_url_url}
          name="title"
          className="bg-transparent w-[100%] pl-[16px]"
          onChange={(e) => inputChange(e)}
        />
        {validate?.title && (
          <p className="text-red-500 text-[12px] pl-[16px]">required fields</p>
        )}
      </div>
      <div className="flex justify-center mb-[74px]">
        <button
          onClick={(e: any) => {
            postToServer(e);
          }}
          className="px-[45px] text-[14px] py-[10px] bg-white text-black font-[500] rounded-[50px]"
        >
          Add product
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
