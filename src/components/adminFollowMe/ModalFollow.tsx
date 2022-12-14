import { Key, useEffect, useState } from "react";

import { useAppDispatch } from "../../hooks";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionFollows } from "./reducer/ActionFollows";
import "./style.scss";

interface IModalApp {
  childern: any;
  setModal: any;
  modal: any;
}

export default function ModalMessenger({ modal, setModal }: IModalApp) {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const [nameMessenger, setNameMessenger] = useState({ id: "", label: "" });
  const [messengers, setMessengers] = useState("");
  const [messangerCategory, setMessengerCategory] = useState([
    { name: "whatsapp" },
    { name: "telegram" },
  ]);
  const [descMessenger, setDescMessenger] = useState("");

  const showMessenger = (
    items: any,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (items.label) {
      case "whatsapp":
        return setMessengers(
          `https://www.whatsapp.com/${event?.target?.value}`
        );
      case "telegram":
        return setMessengers(`https://t.ma/${event?.target?.value}/`);
      default:
        return setMessengers(`${event?.target?.value}`);
    }
  };

  const postMessenger = () => {
    API.post("messanger/", {
      user: getIdUserParams(),
      title: descMessenger,
      url: messengers,
      social: nameMessenger.id,
    })
      .then((res) => {
        console.log(res);
        alert("success");
        setDescMessenger("");
        setMessengers("");
        setNameMessenger({ id: "", label: "" });
        dispatch(getActionFollows());
      })
      .catch((error) => {
        alert("Error");
        setDescMessenger("");
        setMessengers("");
        setNameMessenger({ id: "", label: "" });
      });
  };

  return (
    <div
      className={`modal ${
        modal ? "active" : ""
      } max-w-[750px] mx-auto flex flex-col bg-[#151515] p-[10px]`}
    >
      <div className="max-w-[500px] mx-auto relative">
        <div className="w-[100%] flex justify-between items-center pb-[25px]">
          <p className="text-[24px]">Add messenger</p>
          <p className="font-[400]" onClick={() => setModal(false)}>
            Close
          </p>
        </div>
        <div>
          <div className="font-medium text-black">
            <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
              <label className="pl-[16px] text-[12px] text-[#6750A4]">
                Messenger name:
              </label>
              <input
                type="text"
                value={nameMessenger.label}
                placeholder="Enter messenger name..."
                className={`bg-transparent w-[100%] pl-[16px] max-h-auto font-[400]`}
                onClick={() => setActive(active ? false : true)}
                style={
                  nameMessenger.label.length > 0
                    ? { color: "black" }
                    : { color: "rgba(125, 122, 133, 0.81)" }
                }
                onChange={(e) =>
                  setNameMessenger({ ...nameMessenger, label: e.target.value })
                }
              />
            </div>
            <ul
              style={{ display: active ? "block" : "none" }}
              className={`bg-white overflow-y-auto max-h-60 mt-[-17px] absolute w-[100%]`}
            >
              {messangerCategory?.map(
                (item: any, index: Key | null | undefined) => (
                  <li
                    onClick={() =>
                      setNameMessenger({
                        id: item.id,
                        label: item.name.toLowerCase(),
                      })
                    }
                    key={index}
                    className="p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer"
                  >
                    {item?.name}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Messenger title:
          </label>
          <input
            type="text"
            value={descMessenger}
            placeholder="Enter messenger name..."
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) => setDescMessenger(e.target.value)}
          />
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">URL: </label>
          <input
            type="text"
            defaultValue={messengers}
            placeholder="Enter your nickname..."
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) => showMessenger(nameMessenger, e)}
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={postMessenger}
            className="bg-white text-black rounded-[50px] px-[35px] py-[10px]"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
