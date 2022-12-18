import { useEffect, useState } from "react";

import APlusSvg from "../../assets/svg/AplusSvg";
import DeleteSvgIcon from "../../assets/svg/DeleteSvgIcon";
import PencilSvg from "../../assets/svg/PencilSvg";
import API from "../api/Api";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionSocails } from "./reducer/ActionSocial";
import ModalSocial from "./ModalSocial";
import ModalChangeSocial from "./ModalChangeSocial";
import "./style.scss";

export default function AdminSocial() {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const [modalChange, setModalChange] = useState(false);
  const [messengerId, setMessengerId] = useState("");
  const { socials } = useAppSelector((state) => state.SocialsReducer);

  useEffect(() => {
    dispatch(getActionSocails());
  }, []);

  const deletedPost = (id: any) => {
    API.delete(`social/${id}`)
      .then(() => {
        dispatch(getActionSocails());
      })
      .catch((error) => {
        alert("Errr");
      });
  };

  return (
    <div className="mt-[31px] relative max-w-[500px] mx-auto px-[22px]">
      {socials.map((items) => (
        <div key={items.id} className="flex justify-between">
          <div className="text-black py-[8px] w-full bg-[#E7E0EC] mb-[22px] rounded-[4px] flex flex-col">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              {items.title}
            </label>
            <input
              disabled={true}
              type="text"
              value={items.url}
              placeholder="Enter your text..."
              style={{ resize: "none" }}
              className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            />
          </div>
          <div
            className="bg-[#E7E0EC] ml-[7px] rounded-[4px] max-h-[58px] w-[36px] flex justify-center items-center"
            onClick={() => {
              setModalChange(true);
              setMessengerId(items.id);
            }}
          >
            <PencilSvg />
          </div>
          <div
            className="bg-[#E7E0EC] ml-[7px] rounded-[4px] max-h-[58px] w-[36px] flex justify-center items-center"
            onClick={() => deletedPost(items.id)}
          >
            <DeleteSvgIcon />
          </div>
        </div>
      ))}

      <button
        className="px-[20px] py-[19px] bg-[#6750A4] rounded-[50px] fixed bottom-[90px] right-[34px]"
        onClick={() => setModal(true)}
      >
        <APlusSvg />
      </button>
      <ModalSocial modal={modal} setModal={setModal} childern={""} />
      <ModalChangeSocial
        postId={messengerId}
        modal={modalChange}
        setModal={setModalChange}
        childern={""}
      />
    </div>
  );
}
