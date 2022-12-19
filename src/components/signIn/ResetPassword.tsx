import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ExitSvg from "../../assets/svg/ExitSvg";
import { API_ADDRESS } from "../api/Api";
import { getIdUserParams, paramsUserId } from "../helper";

interface ISignIn {
  id?: any;
  password?: string;
}

export default function ResetPassword() {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const url = window.location.href;
  const link = url.split("/").filter((i) => i !== "");
  const token = link[link.length - 1].slice(7);
  const [password, setPassword] = useState({ password: "", token: token });
  console.log(getIdUserParams());

  const passwordCheck = () => {
    if (password.password === confirmPassword) {
      console.log(password);
      axios
        .post(`${API_ADDRESS}password_reset/confirm/`, password)
        .then((res) => {
          alert("Success");
          console.log(res);
          navigate(`/user/${getIdUserParams()}/signin`);
        })
        .catch((e) => {
          alert("Error");
          console.log(e);
        });
    }
  };

  return (
    <div className="max-w-[419px] mx-auto ">
      <div className="flex flex-col justify-center pt-[50%] h-auto">
        <NavLink to={`/user/${getIdUserParams()}/signin`}>
          <ExitSvg className="mb-[40px] cursor-pointer" />
        </NavLink>

        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[37px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Confirm password:
          </label>
          <input
            type="text"
            placeholder="Enter your text..."
            value={password.password}
            name="password"
            className="bg-transparent w-[100%] pl-[16px]"
            onChange={(e) =>
              setPassword({ ...password, password: e.target.value })
            }
          />
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[37px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Confirm password:
          </label>
          <input
            type="text"
            placeholder="Enter your text..."
            value={confirmPassword}
            name="password"
            className="bg-transparent w-[100%] pl-[16px]"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
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
    </div>
  );
}
