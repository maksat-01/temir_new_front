import React from "react";

// import "./style.scss";

interface IModalSignIn {
  setModal: any;
}

export default function ModalSignIn({ setModal }: IModalSignIn) {
  const closeModal = (e: any) => {
    e.stopPropagation();
    setModal(false);
  };

  const openModal = (e: any) => {
    e.stopPropagation();
    setModal(true);
  };

  return (
    <div
      style={{ background: "rgba(115, 115, 115, 0.32)" }}
      className=" absolute top-0 left-0 w-full min-h-[100vh] flex  items-center rounded-[4px]  pt-[1rem] pb-[2rem] m-0 cursor-pointer"
      onClick={closeModal}
    >
      <div className="w-full mx-auto px-[10px]">
        <div
          className="max-w-[390px] bg-[#151515] px-[22px] pb-[44px] rounded-[8px] mx-auto my-auto"
          onClick={openModal}
        >
          <p
            className="text-[#00F0FF] text-right pt-[15px] mb-[53px] max-w-[40px] ml-auto"
            onClick={closeModal}
          >
            Close
          </p>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full py-[16px] pl-[14px] mb-[10px] rounded-[5px]"
          />
          <p className="text-[#00F0FF] text-[15px] mb-[46px]">
            Forgot password ?
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-[21.0484px] text-black rounded-[11px] py-[8px] px-[65px] ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
