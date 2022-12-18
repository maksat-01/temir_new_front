import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { API_ADDRESS } from "../api/Api";
import { getIdUserParams, paramsUserId } from "../helper";

interface ISignIn {
  id?: any;
  password?: string;
}

export default function ResetPassword() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const url = window.location.href;
  const link = url.split("/").filter((i) => i !== "");
  const token = link[link.length - 1].slice(6);
  const [password, setPassword] = useState({ password: "", token: token });

  const passwordCheck = () => {
    if (password.password === confirmPassword) {
      console.log(password);
      axios
        .post(`${API_ADDRESS}password_reset/confirm/`, password)
        .then((res) => {
          alert("Success");
          console.log(res);
        })
        .catch((e) => {
          alert("Error");
          console.log(e);
        });
    }
  };

  return (
    <div className="max-w-[419px] mx-auto ">
      <input
        type="password"
        className="input text-black"
        style={{ marginBottom: "20px" }}
        onChange={(e) => setPassword({ ...password, password: e.target.value })}
      />
      <input
        type="password"
        className="input text-black"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="flex justify-center">
        <button
          onClick={passwordCheck}
          type="submit"
          className="bg-white text-[21.0484px] text-black rounded-[11px] py-[8px] px-[65px] "
        >
          Next
        </button>
      </div>
    </div>
  );
}
