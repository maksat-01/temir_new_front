import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DeleteSvgIcon from "../../assets/svg/DeleteSvgIcon";
import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionPhoneNumbers } from "./reducer/ActionPhoneNumbersAdmin";

export default function PhoneNumbersAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const { phone } = useAppSelector((state) => state.PhoneNumbersReducer);
  const [number, setNumber] = useState({
    title: "",
    user: getIdUserParams(),
    phone_number: "",
  });
  const deletePost = (id: string) => {
    API.delete(`phone/${id}`)
      .then((res) => {
        dispatch(getActionPhoneNumbers());
        console.log(res);
        alert("Success");
      })
      .catch((error) => {
        console.log(error);
        alert("Error");
      });
  };

  const createPost = () => {
    API.post("phone/", number)
      .then(() => {
        dispatch(getActionPhoneNumbers());
        alert("Success");
        setNumber({ title: "", user: getIdUserParams(), phone_number: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  };

  const inputChange = (e: any) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getActionPhoneNumbers());
  }, []);

  return (
    <div className="mt-[38px]">
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Work phone:
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
          Personal phone:
        </label>
        <input
          type="text"
          placeholder="Enter your text..."
          style={{ resize: "none" }}
          className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <p className="text-center pb-[18px]">Add Additional phone</p>

      <div className="text-black py-[8px] bg-[#E7E0EC] rounded-t-[4px] flex flex-col items-center">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Phone title:
        </label>
        <input
          type="text"
          value={number.title}
          placeholder="Enter your text..."
          style={{ resize: "none" }}
          {...register("title", { required: "This is required" })}
          className={`bg-transparent w-[100%] pl-[16px] max-h-auto text-center`}
          onChange={(e) => inputChange(e)}
        />
      </div>
      <div className="text-black py-[8px] bg-[#E7E0EC] rounded-b-[4px] mb-[33px] flex flex-col items-center">
        <label className="text-[12px] text-[#6750A4] ">Phone:</label>
        <input
          type="text"
          value={number.phone_number}
          placeholder="Enter your number..."
          {...register("phone_number", { required: "This is required" })}
          style={{ resize: "none" }}
          className={`bg-transparent w-[100%] pl-[16px] max-h-auto text-center pb-[21px]`}
          onChange={(e) => inputChange(e)}
        />
        <button
          className="text-white bg-[#6750A4] rounded-[60px] px-[24px] py-[9px] mb-[15px]"
          onClick={createPost}
        >
          Add
        </button>
      </div>

      <p className="text-center pb-[18px] pb-[11px]">Additional phones</p>

      {phone.map((items) => (
        <div
          key={items.id}
          className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]"
        >
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            {items.title}
          </label>
          <div className="flex justify-between items-center">
            <p className={`bg-transparent max-w-[100%] pl-[16px] max-h-auto`}>
              {items.phone_number}
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
