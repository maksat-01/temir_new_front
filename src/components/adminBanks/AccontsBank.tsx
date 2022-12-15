import { useEffect, useState } from "react";
import APlusSvg from "../../assets/svg/AplusSvg";
import DeleteSvgIcon from "../../assets/svg/DeleteSvgIcon";
import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import { getActionBankCard } from "../contact/reducer/AcctionBankCard";
import { getActionBankAccount } from "../contact/reducer/ActionBankAccount";
import ModalBanks from "./ModalBanks";

export default function AccountsBank() {
  const dispatch = useAppDispatch();
  const { bankAcc } = useAppSelector((state) => state.ReducerContact);
  const [modal, setModal] = useState(false);

  const deletePost = (id: any) => {
    API.delete(`bank-account/${id}`)
      .then(() => {
        alert("Succcess");
        dispatch(getActionBankAccount());
      })
      .catch(() => {
        alert("Error");
      });
  };

  useEffect(() => {
    dispatch(getActionBankAccount());
    dispatch(getActionBankCard());
  }, []);

  return (
    <div className="relative min-h-[70vh] px-[30px]">
      {bankAcc.map((item) => (
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <div key={item.id} className="flex justify-between">
            <div>
              <label className="pl-[16px] text-[12px] text-[#6750A4]">
                Bank name:
              </label>
              <p className="bg-transparent w-[100%] pl-[16px] pb-[10px]">
                {item.title}
              </p>
              <label className="pl-[16px] text-[12px] text-[#6750A4]">
                Bank name:
              </label>
              <p className="bg-transparent w-[100%] pl-[16px] pb-[10px]">
                {item.back_account}
              </p>
            </div>
            <div
              className="w-[25px] pr-[30px] py-[9px]"
              onClick={() => deletePost(item.id)}
            >
              <DeleteSvgIcon />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => setModal(true)}
        className="bg-[#6750A4] p-[17px] rounded-[50%] absolute right-0 bottom-0 mb-[77px]"
      >
        <APlusSvg />
      </button>
      <ModalBanks modal={modal} setModal={setModal} />
    </div>
  );
}
