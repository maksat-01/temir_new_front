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

  const [numberWork, setNumberWork] = useState({
    title: "",
    user: getIdUserParams(),
    phone_number: "",
  });

  const [numberPersonal, setNumberPersonal] = useState({
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
    if (number.title.toLocaleLowerCase() === "work phone") {
      alert("work phone поля бар");
    } else if (number.title.toLocaleLowerCase() === "personal phone") {
      alert("personal phone поля бар");
    } else {
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
    }
  };

  const createPostSpecail = () => {
    if (numberWork.title.toLocaleLowerCase() === "work phone") {
      API.post("phone/", numberWork)
        .then(() => {
          dispatch(getActionPhoneNumbers());
          alert("Success work");
          setNumberWork({
            title: "",
            user: getIdUserParams(),
            phone_number: "",
          });
        })
        .catch((error) => {
          console.log(error);
          alert("error");
        });
    } else if (numberPersonal.title.toLocaleLowerCase() === "personal phone") {
      API.post("phone/", numberPersonal)
        .then(() => {
          dispatch(getActionPhoneNumbers());
          alert("Success personal");
          setNumberWork({
            title: "",
            user: getIdUserParams(),
            phone_number: "",
          });
        })
        .catch((error) => {
          console.log(error);
          alert("error");
        });
    } else {
      alert("Not found такое поля");
    }
  };

  const inputChange = (e: any) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getActionPhoneNumbers());
  }, []);

  const filterContentPhone = phone.filter(
    (el) =>
      el.title.toLocaleLowerCase() !== "work phone" &&
      el.title.toLocaleLowerCase() !== "personal phone"
  );

  const workPhone = phone.filter(
    (el) => el.title.toLocaleLowerCase() === "work phone"
  );

  const personalPhone = phone.filter(
    (el) => el.title.toLocaleLowerCase() === "personal phone"
  );

  return (
    <div className="container mx-auto pt-[38px] pb-[80px]">
      <div className="flex">
        <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Work phone:
          </label>
          <input
            type="text"
            disabled={workPhone.length === 1}
            value={
              workPhone[0]?.phone_number
                ? workPhone[0]?.phone_number
                : numberWork.phone_number
            }
            placeholder="Enter your work phone..."
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) =>
              setNumberWork({
                ...numberWork,
                phone_number: e.target.value,
                title: "Work phone",
              })
            }
          />
        </div>
        {workPhone.length === 0 && (
          <span
            className="bg-[#E7E0EC] text-black ml-[7px] rounded-[4px] max-h-[56px] w-[36px] flex justify-center items-center"
            onClick={createPostSpecail}
          >
            +
          </span>
        )}

        {workPhone.length > 0 && (
          <span
            className="bg-[#E7E0EC] ml-[7px] rounded-[4px] max-h-[56px] w-[36px] flex justify-center items-center"
            onClick={() => deletePost(workPhone[0]?.id)}
          >
            <DeleteSvgIcon />
          </span>
        )}
      </div>

      <div className="flex">
        <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Personal phone:
          </label>
          <input
            type="text"
            disabled={personalPhone.length === 1}
            value={
              personalPhone[0]?.phone_number
                ? personalPhone[0]?.phone_number
                : numberPersonal.phone_number
            }
            placeholder="Enter your personal phone..."
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) =>
              setNumberPersonal({
                ...numberPersonal,
                phone_number: e.target.value,
                title: "Personal phone",
              })
            }
          />
        </div>
        {personalPhone?.length === 0 && (
          <span
            className="bg-[#E7E0EC] text-black ml-[7px] rounded-[4px] max-h-[56px] w-[36px] flex justify-center items-center"
            onClick={createPostSpecail}
          >
            +
          </span>
        )}

        {personalPhone?.length > 0 && (
          <span
            className="bg-[#E7E0EC] ml-[7px] rounded-[4px] max-h-[56px] w-[36px] flex justify-center items-center"
            onClick={() => deletePost(personalPhone[0]?.id)}
          >
            <DeleteSvgIcon />
          </span>
        )}
      </div>

      <p className="text-center pb-[18px]">Add Additional phone</p>

      <form onSubmit={handleSubmit(createPost)}>
        <div className="text-black py-[8px] bg-[#E7E0EC] rounded-t-[4px] flex flex-col items-center">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Phone title:
          </label>
          <input
            type="text"
            value={number.title}
            placeholder="Enter your text..."
            {...register("title", { required: true })}
            name="title"
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto text-center outline-none`}
            onChange={(e) => inputChange(e)}
          />
          {errors?.title && (
            <p className="text-red-500 text-[12px] ">required fields</p>
          )}
        </div>

        <div className="text-black py-[8px] bg-[#E7E0EC] rounded-b-[4px] mb-[33px] flex flex-col items-center">
          <label className="text-[12px] text-[#6750A4] ">Phone:</label>
          <input
            type="text"
            value={number.phone_number}
            placeholder="Enter your number..."
            {...register("phone_number", { required: "This is required" })}
            name="phone_number"
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto text-center outline-none`}
            onChange={(e) => inputChange(e)}
          />
          {errors?.phone_number && (
            <p className="text-red-500 text-[12px]">required fields</p>
          )}

          <button
            className="text-white bg-[#6750A4] rounded-[60px] px-[24px] py-[9px] mt-[21px] mb-[15px]"
            // onClick={(e) =>
            //   number.title === "work phone" || number.title === "personal phone"
            //     ? alert("мындай полялар бар")
            //     : createPost(e)
            // }
            type="submit"
          >
            Add
          </button>
        </div>
      </form>

      <p className="text-center pb-[18px] pb-[11px]">Additional phones</p>

      {filterContentPhone.map((items, index) => (
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
