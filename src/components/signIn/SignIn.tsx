import React, { useState } from "react";
import ModalSignIn from "./ModalSignIn";

export default function SignIn() {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="max-w-[419px] mx-auto px-[22px]">
      <input
        type="password"
        placeholder="Enter password"
        className="w-full py-[16px] pl-[14px] mb-[10px] rounded-[5px]"
      />
      <p
        className="text-[#00F0FF] text-[15px] mb-[46px] cursor-pointer"
        onClick={() => setModal(true)}
      >
        Forgot password ?
      </p>
      <div className="flex justify-center">
        <button className="bg-white text-[21.0484px] text-black rounded-[11px] py-[8px] px-[65px] ">
          Next
        </button>
      </div>
      {modal && <ModalSignIn setModal={setModal} />}
    </div>
  );
}
