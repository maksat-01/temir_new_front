import { useEffect, useState } from "react";

import APlusSvg from "../../assets/svg/AplusSvg";
import DeleteSvgIcon from "../../assets/svg/DeleteSvgIcon";
import PencilSvg from "../../assets/svg/PencilSvg";
import API from "../api/Api";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionFollows } from "./reducer/ActionFollows";
import ModalFollow from "./ModalFollow";
import ModalChangeFollow from "./ModalChangeFollow";
import "./style.scss";

export default function AdminFollows() {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const [modalChange, setModalChange] = useState(false);
  const [messengerId, setMessengerId] = useState("");
  const { folows } = useAppSelector((state) => state.ReducerFollows);

  useEffect(() => {
    dispatch(getActionFollows());
  }, []);

  const deletedPost = (id: any) => {
    API.delete(`messanger/${id}`)
      .then(() => {
        dispatch(getActionFollows());
      })
      .catch((error) => {
        alert("Errr");
      });
  };

  return (
    <div className="mt-[31px] relative max-w-[500px] mx-auto">
      {folows.map((items) => (
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

      <div className="flex justify-end">
        <button
          className="px-[20px] py-[19px] bg-[#6750A4] rounded-[50px]"
          onClick={() => setModal(true)}
        >
          <APlusSvg />
        </button>
      </div>
      <ModalFollow modal={modal} setModal={setModal} childern={""} />
      <ModalChangeFollow
        postId={messengerId}
        modal={modalChange}
        setModal={setModalChange}
        childern={""}
      />
    </div>
  );
}
