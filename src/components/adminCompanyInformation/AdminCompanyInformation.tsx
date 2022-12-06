import React, { useEffect, useRef, useState } from "react";

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
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { isLoading, details } = useAppSelector(
    (state) => state.ReducerCompanyDetails
  );
  const [changeData, setChangeData] = useState<any>({
    id: id,
    image: `${details?.image}`,
    user: getIdUserParams(),
    name: `${details?.name}`,
    activity: `${details?.activity}`,
    description: `${details?.description}`,
    visit_website_url: `${details?.visit_website_url}`,
    address_url: `${details?.address_url}`,
    is_main: false,
  });

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setChangeData({ ...changeData, image: i });
    }
  };

  const changeToServer = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", changeData.user);
    formData.append("activity", changeData.activity);
    formData.append("description", changeData.description);
    formData.append("visit_website_url", changeData.visit_website_url);
    formData.append("address_url", changeData.address_url);
    formData.append("is_main", changeData.is_main);

    changeData.image?.length === 0
      ? console.log("error")
      : formData.append("image", changeData.image);

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
      <div className="max-w-[419px] mx-auto px-[22px] mt-[38px]">
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
          <input
            id="file-upload"
            onChange={(e) => uploadToClient(e)}
            accept="image/png, image/gif, image/jpeg"
            type="file"
            style={{ display: "none" }}
            ref={ref}
          />
          <img
            onClick={() => !active && ref?.current?.click()}
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
            value={details.visit_website_url}
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
            value={details.address_url}
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
        <div className="flex justify-end">
          <button
            onClick={() => setActive(!active)}
            style={{ background: "rgba(208, 188, 255, 0.08)" }}
            className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
          >
            change
          </button>
          <button
            onClick={changeToServer}
            style={{ background: "rgba(208, 188, 255, 0.08)" }}
            className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
