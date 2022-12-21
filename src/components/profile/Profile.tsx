import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUser } from "../../pages/interface/getUser/redux/reducer";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import ProfileModal from "./ProfileModal";

export default function Profile() {
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();
  const id = getIdUserParams();
  const { user } = useAppSelector((state) => state.getUser);
  const [count, setCount] = useState<any>([]);

  useEffect(() => {
    API.get(`user-update/` + id)
      .then(({ data }) => {
        dispatch(getUser.actions.getUserSucceseded(data));
      })
      .catch((error) => {
        dispatch(getUser.actions.getUserError(error));
      });
  }, []);

  const userCount = count?.filter(
    (items: any) => items.id === getIdUserParams()
  );

  useEffect(() => {
    API.get(`save-contact/counts/`)
      .then((res) => {
        setCount(res.data.results);
      })
      .catch((e) => {
        console.log(e, "c");
      });
  }, []);

  return (
    <div className="bg-[#151515] max-w-[500px] mx-auto px-[22px]">
      <div
        className="w-full h-[250px] flex items-center justify-center"
        style={{
          background: `url(${user.background}) no-repeat center/cover`,
        }}
      >
        {user.avatar && (
          <img
            src={user.avatar}
            alt="no_image"
            className="w-[100px] h-[100px] rounded-full object-cover mt-[40px] "
          />
        )}
      </div>

      <h1 className="text-center text-[#D1D1D1] font-[700] text-[16px] mt-[25px]">
        {user.username}
      </h1>
      <p className="text-center text-[#D1D1D1] font-[300] mb-[18px]">
        {user.position}
      </p>

      <div className="flex justify-center items-center flex-col">
        <button
          onClick={() => setModal(true)}
          style={{ background: "rgba(208, 188, 255, 0.08)" }}
          className="text-[#D0BCFF] border-2 border-[#D0BCFF] px-[30px] py-[10px] mx-auto rounded-[100px] mb-[92px]"
        >
          Edit profile
        </button>

        <div className="bg-[#C2C2C2] px-[38px] py-[38px] rounded-[50%] mb-[19px]">
          <div style={{ borderRadius: "50%" }} className="bg-[#262626] ">
            <div className="px-[30px] py-[30px] flex flex-col items-center justify-center">
              <p className="font-[500] text-[29px]">
                {userCount[0]?.total_count || 0}
              </p>
              <p className="font-[300] text-[18px] mx-auto">
                People saved <br />
              </p>
              <p className="font-[300] text-[18px] mx-auto">
                you
                <br />
              </p>
            </div>
          </div>
        </div>
        <p className="mb-[91px] text-[#C2C2C2] font-[400] text-[21px]">Total</p>
      </div>
      {<ProfileModal modal={modal} setModal={setModal} />}
    </div>
  );
}
