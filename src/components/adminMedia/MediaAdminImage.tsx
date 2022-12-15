import React, { useEffect, useState } from "react";

import APlusSvg from "../../assets/svg/AplusSvg";
import { getActionImage } from "../media/reducer/ActionImage";
import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import ModalAdminImage from "./modal/ModalAdminVideo";
import ModalUpdateImage from "./modal/ModalUpdateImage";

export default function MediaAdminImage() {
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [imageId, setImageId] = useState("");
  const { photos } = useAppSelector((state) => state.ReducerImage);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getActionImage());
  }, []);

  const deletePost = (post: any) => {
    API.delete(`image/${post.id}`)
      .then(() => {
        dispatch(getActionImage());
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  return (
    <div className="max-w-[500px] mx-auto pb-[77px]">
      <div
        className={`flex justify-center items-end relative ${
          photos.length > 0 && "min-h-[70vh]"
        }`}
      >
        <div className="max-w-[500px]">
          {photos.map((items, index) => (
            <div key={index} className="mb-[33px] px-[20px]">
              <img
                src={items.image}
                alt="no img"
                className="w-full h-[222px] object-cover rounded-[16px] mb-[19px] object-cover"
              />
              <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
                <label className="pl-[16px] text-[12px] text-[#6750A4]">
                  Theme to photo:
                </label>
                <input
                  disabled
                  defaultValue={items.title}
                  type="text"
                  placeholder="text"
                  className="bg-transparent w-[100%] pl-[16px]"
                />
              </div>
              <div className="flex justify-end pt-[30px] pb-[50px]">
                <button
                  onClick={() => deletePost(items)}
                  className="px-[20px] mr-[15px] text-[14px] py-[10px] border-[1.5px] border-[#FF0000] text-[#FF0000] font-[500] rounded-[50px]"
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    setUpdate(true);
                    setImageId(items.id);
                  }}
                  style={{ background: "rgba(208, 188, 255, 0.08)" }}
                  className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
                >
                  change
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setModal(true)}
          className="mx-[23px] px-[10px] py-[10px] bg-[#6750A4] font-[500] right-0 rounded-[50px] absolute bottom-0 "
        >
          <APlusSvg />
        </button>
        <ModalUpdateImage
          image
          modal={update}
          setModal={setUpdate}
          imageId={imageId}
        />
        <ModalAdminImage modal={modal} setModal={setModal} image />
      </div>
    </div>
  );
}
