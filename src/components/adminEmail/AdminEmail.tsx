import { useEffect, useState } from "react";
import DeleteSvgIcon from "../../assets/svg/DeleteSvgIcon";
import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionEmail } from "./reducer/ActionAdminEmail";

export default function AdminEmail() {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.EmailReducer);
  const [number, setNumber] = useState({
    title: "",
    user: getIdUserParams(),
    email: "",
  });
  const deletePost = (id: string) => {
    API.delete(`email/${id}`)
      .then((res) => {
        dispatch(getActionEmail());
        console.log(res);
        alert("Success");
      })
      .catch((error) => {
        console.log(error);
        alert("Error");
      });
  };

  const createPost = () => {
    API.post("email/", number)
      .then(() => {
        dispatch(getActionEmail());
        alert("Success");
        setNumber({ title: "", user: getIdUserParams(), email: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  };

  useEffect(() => {
    dispatch(getActionEmail());
  }, []);

  return (
    <div className="mt-[38px]">
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Work E-mail:
        </label>
        <input
          type="text"
          placeholder="Enter your text..."
          style={{ resize: "none" }}
          className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[33px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Personal E-mail:
        </label>
        <input
          type="text"
          placeholder="Enter your text..."
          style={{ resize: "none" }}
          className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <p className="text-center pb-[18px]">Add Additional E-mail</p>
      <div className="text-black py-[8px] bg-[#E7E0EC] rounded-t-[4px] flex flex-col items-center">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          E-mail title:
        </label>
        <input
          type="text"
          value={number.title}
          placeholder="Enter your text..."
          style={{ resize: "none" }}
          className={`bg-transparent w-[100%] pl-[16px] max-h-auto text-center`}
          onChange={(e) => setNumber({ ...number, title: e.target.value })}
        />
      </div>
      <div className="text-black py-[8px] bg-[#E7E0EC] rounded-b-[4px] mb-[33px] flex flex-col items-center">
        <label className="text-[12px] text-[#6750A4] ">E-mail:</label>
        <input
          type="text"
          value={number.email}
          placeholder="Enter your number..."
          style={{ resize: "none" }}
          className={`bg-transparent w-[100%] pl-[16px] max-h-auto text-center pb-[21px]`}
          onChange={(e) => setNumber({ ...number, email: e.target.value })}
        />
        <button
          className="text-white bg-[#6750A4] rounded-[60px] px-[24px] py-[9px] mb-[15px]"
          onClick={createPost}
        >
          Add
        </button>
      </div>

      <p className="text-center pb-[18px] pb-[11px]">Additional E-mails</p>

      {email.map((items) => (
        <div
          key={items.id}
          className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]"
        >
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            {items.title}
          </label>
          <div className="flex justify-between items-center">
            <p className={`bg-transparent max-w-[100%] pl-[16px] max-h-auto`}>
              {items.email}
            </p>
            <span
              className="pr-[9px] mt-[-12px]"
              onClick={() => deletePost(items.id)}
            >
              <DeleteSvgIcon />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
