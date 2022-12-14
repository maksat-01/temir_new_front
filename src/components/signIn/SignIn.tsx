import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { API_ADDRESS } from "../api/Api";
import { paramsUserId } from "..//helper/index";
import ModalSignIn from "./ModalSignIn";

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
  const [modal, setModal] = useState<boolean>(false);
  const [errorValidate, setErrorValidate] = useState<boolean>(false);
  const [auth, setAuth] = useState({ password: "", id: id });
  const sigIn = (e: any) => {
    e.preventDefault();

    axios
      .post(`${API_ADDRESS}login/`, auth)
      .then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        navigation("/addcompany");
      })
      .catch((error) => {
        console.log(error);
        setErrorValidate(true);
      });
  };

  paramsUserId(id);

  return (
    <div className="max-w-[419px] mx-auto px-[22px]">
      <form onSubmit={sigIn}>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
          name="password"
          onChange={(e) => setAuth({ ...auth, password: e.target.value })}
          className={`w-full py-[16px] text-black pl-[14px] mb-[10px] rounded-[5px] ${
            errorValidate && "border-2 border-rose-500"
          } `}
        />
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
      {modal && <ModalSignIn setModal={setModal} />}
    </div>
  );
}
