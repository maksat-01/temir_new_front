import React, { useEffect, useRef, useState } from "react";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [createImage, setCreateImage] = useState<any>();
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
  const [validate, setValidate] = useState({
    image: false,
    user: false,
    name: false,
    activity: false,
    description: false,
    visit_website_url: false,
    address_url: false,
    is_main: false,
  });

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setDataCompany({ ...postDataCompany, image: i });
    }
  };

  const changeToServer = async (e: any) => {
    const formData = new FormData();
    formData.append("user", postDataCompany.user);
    formData.append("name", postDataCompany.name);
    formData.append("activity", postDataCompany.activity);
    formData.append("description", postDataCompany.description);
    formData.append("visit_website_url", postDataCompany.visit_website_url);
    formData.append("address_url", postDataCompany.address_url);
    formData.append("is_main", postDataCompany.is_main);
    postDataCompany.image?.length === 0
      ? console.log("error")
      : formData.append("image", postDataCompany.image);

    if (
      !postDataCompany.name &&
      !postDataCompany.description &&
      !postDataCompany.image &&
      !postDataCompany.activity &&
      !postDataCompany.visit_website_url &&
      !postDataCompany.address_url &&
      !postDataCompany.is_main
    ) {
      setValidate({
        ...validate,
        image: true,
        user: true,
        name: true,
        activity: true,
        description: true,
        visit_website_url: true,
        address_url: true,
        is_main: true,
      });
    } else if (!postDataCompany.name) {
      setValidate({ ...validate, name: true });
    } else if (!postDataCompany.description) {
      setValidate({ ...validate, description: true });
    } else if (!postDataCompany.image) {
      setValidate({ ...validate, image: true });
    } else if (!postDataCompany.visit_website_url) {
      setValidate({ ...validate, visit_website_url: true });
    } else if (!postDataCompany.activity) {
      setValidate({ ...validate, activity: true });
    } else if (!postDataCompany.address_url) {
      setValidate({ ...validate, address_url: true });
    } else if (!postDataCompany.is_main) {
      setValidate({ ...validate, is_main: true });
    } else {
      await API.post(`company/`, formData)
        .then(() => {
          alert("success");
          dispatch(getActionCompany());
        })
        .catch(() => {
          alert("Error");
        });
    }
  };

  const blobToBase64 = (blob: any) =>
    new Promise((resolve, reject) => {
      const file = blob.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const inputChange = (e: any) => {
    setDataCompany({ ...postDataCompany, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getActionCompany());
  }, []);

  console.log(createImage, "Cr");

  return (
    <div className="container mx-auto pb-[80px]">
      <form onSubmit={handleSubmit(changeToServer)}>
        <div className="max-w-[500px] mx-auto px-[22px] mt-[38px]">
          <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Theme to product:
            </label>
            <input
              type="text"
              placeholder="Enter your text..."
              className="bg-transparent w-[100%] pl-[16px]"
              {...register("name", { required: true })}
              name="name"
              onChange={(e) => inputChange(e)}
            />
            {validate?.name && (
              <p className="text-red-500 text-[12px] pl-[16px]">
                required fields
              </p>
            )}
          </div>
          <div
            className={`py=[20px] bg-[#28282A] ${
              !createImage && "h-[222px]"
            } rounded-[16px] mb-[13px] flex flex-col justify-center items-center ${
              validate.image && "border border-[#FF0000]"
            }`}
            onClick={() => ref.current?.click()}
          >
            {createImage && (
              <img
                src={createImage}
                alt="no image"
                className="h-[222px] w-full rounded-[16px]"
              />
            )}
            <input
              id="file-upload"
              type="file"
              onChange={(e) => {
                uploadToClient(e);
                blobToBase64(e).then((data) => {
                  setCreateImage(data);
                });
              }}
              accept="image/png, image/gif, image/jpeg"
              style={{ display: "none" }}
              ref={ref}
            />
            {!createImage && <AddPhotoSvg />}
            {!createImage && <p className="pt-[5px]">+ Upload file</p>}
          </div>
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to product:
          </label>
          <textarea
            placeholder="Enter your text..."
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            {...register("description", { required: true })}
            name="description"
            onChange={(e) => inputChange(e)}
          ></textarea>
          {validate?.description && (
            <p className="text-red-500 text-[12px] pl-[16px]">
              required fields
            </p>
          )}
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Website URL:
          </label>
          <input
            type="text"
            placeholder="Enter your text..."
            className="bg-transparent w-[100%] pl-[16px]"
            {...register("visit_website_url", { required: true })}
            name="visit_website_url"
            onChange={(e) => inputChange(e)}
          />
          {validate?.visit_website_url && (
            <p className="text-red-500 text-[12px] pl-[16px]">
              required fields
            </p>
          )}
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Address:
          </label>
          <input
            type="text"
            placeholder="Enter your text..."
            className="bg-transparent w-[100%] pl-[16px]"
            {...register("address_url", { required: true })}
            name="address_url"
            onChange={(e) => inputChange(e)}
          />
          {validate?.address_url && (
            <p className="text-red-500 text-[12px] pl-[16px]">
              required fields
            </p>
          )}
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
            style={{ background: "rgba(208, 188, 255, 0.08)" }}
            className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
