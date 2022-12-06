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
    position: "account",
  });

  const handleClick = () => {
    if (bank.position === "cart") {
      return API.post("bank-cart/", {
        title: bank.title,
        user: bank.user,
        back_cart: bank.back_cart,
      })
        .then(() => {
          alert("SUC CART");
          dispatch(getActionBankAccount());
          dispatch(getActionBankCard());
        })
        .catch(() => {
          alert("ERR CART");
        });
    } else {
      return API.post("bank-account/", {
        title: bank.title,
        user: bank.user,
        back_account: bank.back_account,
      })
        .then(() => {
          alert("SUC ACC");
          dispatch(getActionBankAccount());
          dispatch(getActionBankCard());
        })
        .catch(() => {
          alert("ERR ACC");
        });
    }
  };

  return (
    <div
      style={{ background: "rgba(115, 115, 115, 0.32)" }}
      className={`modal ${
        modal ? "active" : ""
      } max-w-[750px] mx-auto flex flex-col p-[10px]`}
    >
      <div className="bg-[#151515] mx-auto px-[24px] rounded-[8px]">
        <div className="flex justify-between items-center">
          <p className="text-[24px]">
            {bank.position === "account" ? `Bank account` : `Bank cart`}
          </p>
          <p className="font-[400]" onClick={() => setModal(false)}>
            Close
          </p>
        </div>
        <div className="flex py-[44px]">
          <input
            type="radio"
            className="w-[20px] bg-[#D0BCFF]"
            name="tabs"
            id="2"
            onClick={() => setBank({ ...bank, position: "account" })}
          />
          <p className="font-[500] pl-[14px]">Bank account</p>
        </div>
        <div className="flex pb-[44px]">
          <input
            type="radio"
            name="tabs"
            id="1"
            className="w-[20px]"
            onClick={() => setBank({ ...bank, position: "cart" })}
          />
          <p className="font-[500] pl-[14px]">Bank card</p>
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Bank name:
          </label>
          <input
            type="text"
            placeholder="Enter your nickname..."
            style={{ resize: "none" }}
            className={`bg-transparent overflow-x-auto w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) => setBank({ ...bank, title: e.target.value })}
          />
        </div>
        {bank.position === "cart" && (
          <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Enter your bank cart:
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
        {bank.position === "account" && (
          <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
            <label className="pl-[16px] text-[12px] text-[#6750A4]">
              Enter your bank account:
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
