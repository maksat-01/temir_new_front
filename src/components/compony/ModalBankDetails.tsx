import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionBankCard } from "../contact/reducer/AcctionBankCard";
import { getActionBankAccount } from "../contact/reducer/ActionBankAccount";
import "./style.scss";

interface IModalProps {
  modal: any;
  setModal: any;
}

export default function ModalBankDetails({ modal, setModal }: IModalProps) {
  const dispatch = useAppDispatch();

  // your function to copy here

  const copyToClipBoard = async (copyMe: any) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      alert(`Success copy ${copyMe}`);
    } catch (err) {
      alert(`Failed to copy! ${copyMe}`);
    }
  };
  const { bankAcc } = useAppSelector((state) => state.ReducerContact);
  const { bankCart } = useAppSelector((state) => state.ReducerContact);

  useEffect(() => {
    dispatch(getActionBankAccount());
    dispatch(getActionBankCard());
  }, []);

  return (
    <div>
      <div
        style={{ background: "#000000" }}
        className={`modal ${
          modal ? "active" : ""
        } max-w-[600px] mx-auto flex flex-col p-[10px] z-[100]`}
      >
        <div className="w-full flex justify-between pb-[90px]">
          <p>Bank details/Crypto</p>
          <button onClick={() => setModal(false)}>Close</button>
        </div>
        <p className="text-center font-[700] text-[21px]">Bank details</p>
        {bankAcc.map((el) => (
          <div key={el.id} className="w-full mb-[20px]">
            <p className="text-[#5C5C5C] pb-[10px]">{el.title}</p>
            <div className="flex justify-between items-center px-[8px] py-[12px] rounded-[5px] bg-[#131313]">
              <p className="font-[300]">AC#</p>
              <div className="font-[300]">{el.back_account}</div>
              <button
                onClick={() => copyToClipBoard(el.back_account)}
                className="font-[300] bg-[#D9D9D9] text-black py-[3px] px-[16px] rounded-[3px]"
              >
                Copy
              </button>
            </div>
          </div>
        ))}

        <p className="text-center font-[700] text-[21px]">Crypto details</p>

        {bankCart.map((el) => (
          <div key={el.id} className="w-full mb-[20px]">
            <p className="text-[#5C5C5C] pb-[10px]">{el.title}</p>
            <div className="flex justify-between items-center px-[8px] py-[12px] rounded-[5px] bg-[#131313]">
              <p className="font-[300]">AC#</p>
              <p className="font-[300]">{el.back_cart}</p>
              <button
                onClick={() => copyToClipBoard(el.back_cart)}
                className="font-[300] bg-[#D9D9D9] text-black py-[3px] px-[16px] rounded-[3px]"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
