import React, { useEffect, useRef, useState } from "react";

import { useAppDispatch } from "../../hooks";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionCompany } from "../compony/reducer/ActionCompany";
import AddPhotoSvg from "../../assets/svg/AddPhotoSvg";

export default function AddedAdminCompany() {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(true);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [postDataCompany, setDataCompany] = useState<any>({
    image: "",
    user: getIdUserParams(),
    name: "",
    activity: "lorem",
    description: "",
    visit_website_url: "",
    address_url: "",
    is_main: false,
  });

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setDataCompany({ ...postDataCompany, image: i });
    }
  };

  const changeToServer = async (e: any) => {
    e.preventDefault();
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

    await API.post(`company/`, formData)
      .then(() => {
        alert("success");
        dispatch(getActionCompany());
      })
      .catch(() => {
        alert("Error");
      });
  };

  useEffect(() => {
    dispatch(getActionCompany());
  }, []);

  return (
    <div>
      <div className="max-w-[419px] mx-auto px-[22px] mt-[38px]">
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to product:
          </label>
          <input
            type="text"
            placeholder="Enter your text..."
            className="bg-transparent w-[100%] pl-[16px]"
            onChange={(e) => {
              setDataCompany({ ...postDataCompany, name: e.target.value });
            }}
          />
        </div>

        <div
          className="py=[20px] bg-[#28282A] h-[222px] rounded-[16px] mb-[13px] flex flex-col justify-center items-center"
          onClick={() => ref.current?.click()}
        >
          <input
            id="file-upload"
            onChange={(e) => uploadToClient(e)}
            accept="image/png, image/gif, image/jpeg"
            type="file"
            style={{ display: "none" }}
            ref={ref}
          />
          <AddPhotoSvg />
          <p className="pt-[5px]">+ Upload file</p>
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
          onChange={(e) =>
            setDataCompany({ ...postDataCompany, description: e.target.value })
          }
        ></textarea>
      </div>
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Website URL:
        </label>
        <input
          type="text"
          placeholder="Enter your text..."
          className="bg-transparent w-[100%] pl-[16px]"
          onChange={(e) =>
            setDataCompany({
              ...postDataCompany,
              visit_website_url: e.target.value,
            })
          }
        />
      </div>
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">Address:</label>
        <input
          type="text"
          placeholder="Enter your text..."
          className="bg-transparent w-[100%] pl-[16px]"
          onChange={(e) =>
            setDataCompany({
              ...postDataCompany,
              address_url: e.target.value,
            })
          }
        />
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
          onClick={changeToServer}
          style={{ background: "rgba(208, 188, 255, 0.08)" }}
          className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
        >
          Add
        </button>
      </div>
    </div>
  );
}
