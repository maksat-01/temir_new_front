import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import API from "../api/Api";
import { getActionBankCard } from "../contact/reducer/AcctionBankCard";
import { getActionBankAccount } from "../contact/reducer/ActionBankAccount";
import { getIdUserParams } from "../helper";
import "./style.scss";

interface IModalApp {
  setModal: any;
  modal: any;
}

export default function ModalBanks({ modal, setModal }: IModalApp) {
  const dispatch = useAppDispatch();
  const [bank, setBank] = useState({
    title: "",
    user: getIdUserParams(),
    back_account: "",
    back_cart: "",
    position: "bank_details",
  });

  const handleClick = () => {
    if (bank.position === "crypto") {
      return API.post("bank-cart/", {
        title: bank.title,
        user: bank.user,
        back_cart: bank.back_cart,
      })
        .then(() => {
          alert("Success crypto");
          dispatch(getActionBankAccount());
          dispatch(getActionBankCard());
        })
        .catch(() => {
          alert("Error crypto");
        });
    } else {
      return API.post("bank-account/", {
        title: bank.title,
        user: bank.user,
        back_account: bank.back_account,
      })
        .then(() => {
          alert("Success bank details");
          dispatch(getActionBankAccount());
          dispatch(getActionBankCard());
        })
        .catch(() => {
          alert("Error bank details");
        });
    }
  };

  return (
    <div
      style={{ background: "rgba(115, 115, 115, 0.32)" }}
      className={`modal ${
        modal ? "active" : ""
      } max-w-[750px] mx-auto flex flex-col p-[10px] z-[100]`}
    >
      <div className="bg-[#151515] mx-auto px-[24px] rounded-[8px]">
        <div className="flex justify-between items-center pt-[13px]">
          <p className="text-[24px] ">
            {bank.position === "crypto" ? `Crypto information` : `Bank details`}
          </p>
          <button className="font-[400]" onClick={() => setModal(false)}>
            Close
          </button>
        </div>
        <div className="flex py-[44px]">
          <input
            type="radio"
            className="w-[20px] bg-[#D0BCFF]"
            name="tabs"
            id="2"
            onClick={() => setBank({ ...bank, position: "bank_details" })}
          />
          <p className="font-[500] pl-[14px]">Bank details</p>
        </div>
        <div className="flex pb-[44px]">
          <input
            type="radio"
            name="tabs"
            id="1"
            className="w-[20px]"
            onClick={() => setBank({ ...bank, position: "crypto" })}
          />
          <p className="font-[500] pl-[14px]">Crypto details</p>
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">Name:</label>
          <input
            type="text"
            placeholder="Enter your nickname..."
            style={{ resize: "none" }}
            className={`bg-transparent overflow-x-auto w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) => setBank({ ...bank, title: e.target.value })}
          />
        </div>
        {bank.position === "crypto" && (
          <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Account:
            </label>
            <input
              type="text"
              placeholder="Enter your nickname..."
              style={{ resize: "none" }}
              className={`bg-transparent overflow-x-auto w-[100%] pl-[16px] max-h-auto`}
              onChange={(e) => setBank({ ...bank, back_cart: e.target.value })}
            />
          </div>
        )}
        {bank.position === "bank_details" && (
          <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Account/IBAN number:
            </label>
            <input
              type="text"
              placeholder="Enter your nickname..."
              style={{ resize: "none" }}
              className={`bg-transparent overflow-x-auto w-[100%] pl-[16px] max-h-auto`}
              onChange={(e) =>
                setBank({ ...bank, back_account: e.target.value })
              }
            />
          </div>
        )}
        <div className="flex justify-center pb-[34px]">
          <button
            className="bg-[#F3F3F3] px-[25px] py-[10px] text-black rounded-[50px]"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
