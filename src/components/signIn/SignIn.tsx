import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import API, { API_ADDRESS } from "../api/Api";
import { paramsUserId } from "..//helper/index";
import ModalSignIn from "./ModalSignIn";
import EyePasswordHide from "../../assets/svg/EyePasswordHide";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUser } from "../../pages/interface/getUser/redux/reducer";

interface ISignIn {
  id?: any;
  password?: string;
}

export default function SignIn() {
  const {
    register,
    formState: { errors },
  } = useForm<ISignIn>();
  const { id } = useParams();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.getUser);
  const [eye, setEye] = useState(false);
  const [modal, setModal] = useState<boolean>(false);
  const [errorValidate, setErrorValidate] = useState<boolean>(false);
  const [auth, setAuth] = useState({ password: "", id: id });

  localStorage.setItem("userId", JSON.stringify(id));

  const sigIn = (e: any) => {
    e.preventDefault();
    axios
      .post(`${API_ADDRESS}login/`, auth)
      .then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        navigation("/welcome-to-admin");
      })
      .catch((error) => {
        console.log(error);
        {
          error.response.data.code === "WRONG_PASSWORD" &&
            alert("Wrong password");
        }
        setErrorValidate(true);
      });
  };

  paramsUserId(id);

  function eyePasswordHideFn(e: any) {
    e.preventDefault();
    setEye(!eye);
  }

  console.log(id);

  useEffect(() => {
    API.get(`user-update/` + id)
      .then(({ data }) => {
        dispatch(getUser.actions.getUserSucceseded(data));
      })
      .catch((error) => {
        dispatch(getUser.actions.getUserError(error));
      });
  }, []);

  return (
    <div className="max-w-[500px] mx-auto ">
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

      <div
        className="p-5 bg-black mt-[-10px] pb-[50px] max-w-lg w-full"
        style={{
          borderRadius: "15px 15px 0 0",
          boxShadow: "0px -5px 5px 0px rgba(217, 217, 217, 0.4",
        }}
      >
        <h1 className="text-center text-[#D1D1D1] font-[700] text-[16px] rounded-t-[20px]">
          {user.username}
        </h1>
        <p className="text-center text-[#D1D1D1] font-[300] mb-[18px]">
          {user.position}
        </p>
        <form onSubmit={sigIn}>
          <div
            className={`flex items-center text-black bg-white rounded-[4px] mb-[10px] ${
              errorValidate && "border-2 border-rose-500"
            }`}
          >
            <input
              type={eye ? `text` : `password`}
              placeholder="Enter password"
              {...register("password", { required: true })}
              name="password"
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
              className={`w-full py-[16px] text-black pl-[14px] outline-none rounded-[4px]`}
            />
            <button onClick={eyePasswordHideFn} className="h-[20px] pr-[16px]">
              <EyePasswordHide />
            </button>
          </div>
          <p
            className="text-[#00F0FF] text-[15px] mb-[46px] cursor-pointer"
            onClick={() => setModal(true)}
          >
            Forgot password ?
          </p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white text-[21.0484px] text-black rounded-[11px] py-[8px] px-[65px] "
            >
              Next
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-5">
          <button
            className="bg-white text-[21.0484px] text-black rounded-[11px] py-[8px] px-[45px]"
            onClick={() =>
              navigation("/user/dc18f3e4-72db-4983-b0f4-674660c1452e")
            }
          >
            Back
          </button>
        </div>
      </div>
      {modal && <ModalSignIn setModal={setModal} />}
    </div>
  );
}
