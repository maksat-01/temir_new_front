import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DeleteSvgIcon from "../../assets/svg/DeleteSvgIcon";
import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionEmail } from "./reducer/ActionAdminEmail";

export default function AdminEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.EmailReducer);
  const [number, setNumber] = useState({
    title: "",
    user: getIdUserParams(),
    email: "",
  });
  const [emailWork, setEmailWork] = useState({
    title: "",
    user: getIdUserParams(),
    email: "",
  });

  const [emailPersonal, setEmailPersonal] = useState({
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
    if (number.title.toLocaleLowerCase() === "work email") {
      alert("work email поля бар");
    } else if (number.title.toLocaleLowerCase() === "personal email") {
      alert("personal email поля бар");
    } else {
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
    }
  };

  const createPostSpecail = () => {
    if (emailWork.title.toLocaleLowerCase() === "work email") {
      if (emailWork.email.slice(-10) === "@gmail.com") {
        API.post("email/", emailWork)
          .then(() => {
            dispatch(getActionEmail());
            alert("Success work");
            setEmailWork({
              title: "",
              user: getIdUserParams(),
              email: "",
            });
          })
          .catch((error) => {
            console.log(error);
            alert("error");
          });
      } else {
        alert("Invalid work email");
      }
    } else if (emailPersonal.title.toLocaleLowerCase() === "personal email") {
      if (emailPersonal.email.slice(-10) === "@gmail.com") {
        API.post("email/", emailPersonal)
          .then(() => {
            dispatch(getActionEmail());
            alert("Success personal");
            setEmailPersonal({
              title: "",
              user: getIdUserParams(),
              email: "",
            });
          })
          .catch((error) => {
            console.log(error);
            alert("error");
          });
      } else {
        alert("Invalid personal email");
      }
    } else {
      alert("Not found такое поля");
    }
  };

  const inputChange = (e: any) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getActionEmail());
  }, []);

  const filterContentEmail = email.filter(
    (el) =>
      el.title.toLocaleLowerCase() !== "work email" &&
      el.title.toLocaleLowerCase() !== "personal email"
  );

  const workEmail = email.filter(
    (el) => el.title.toLocaleLowerCase() === "work email"
  );

  const personalEmail = email.filter(
    (el) => el.title.toLocaleLowerCase() === "personal email"
  );

  return (
    <div className="container mx-auto pt-[38px] pb-[80px]">
      <div className="flex">
        <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Work email:
          </label>
          <input
            type="text"
            disabled={workEmail.length === 1}
            value={workEmail[0]?.email ? workEmail[0]?.email : emailWork.email}
            placeholder="Enter your work phone..."
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) =>
              setEmailWork({
                ...emailWork,
                email: e.target.value,
                title: "Work email",
              })
            }
          />
        </div>
        {workEmail.length === 0 && (
          <span
            className="bg-[#E7E0EC] text-black ml-[7px] rounded-[4px] max-h-[56px] w-[36px] flex justify-center items-center"
            onClick={createPostSpecail}
          >
            +
          </span>
        )}

        {workEmail.length > 0 && (
          <span
            className="bg-[#E7E0EC] ml-[7px] rounded-[4px] max-h-[56px] w-[36px] flex justify-center items-center"
            onClick={() => deletePost(workEmail[0]?.id)}
          >
            <DeleteSvgIcon />
          </span>
        )}
      </div>
      <div className="flex">
        <div className="w-full text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[17px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Personal email:
          </label>
          <input
            type="text"
            disabled={personalEmail.length === 1}
            value={
              personalEmail[0]?.email
                ? personalEmail[0]?.email
                : emailPersonal.email
            }
            placeholder="Enter your work phone..."
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) =>
              setEmailPersonal({
                ...emailPersonal,
                email: e.target.value,
                title: "Personal email",
              })
            }
          />
        </div>
        {personalEmail.length === 0 && (
          <span
            className="bg-[#E7E0EC] text-black ml-[7px] rounded-[4px] max-h-[56px] w-[36px] flex justify-center items-center"
            onClick={createPostSpecail}
          >
            +
          </span>
        )}

        {personalEmail.length > 0 && (
          <span
            className="bg-[#E7E0EC] ml-[7px] rounded-[4px] max-h-[56px] w-[36px] flex justify-center items-center"
            onClick={() => deletePost(personalEmail[0]?.id)}
          >
            <DeleteSvgIcon />
          </span>
        )}
      </div>
      <p className="text-center pb-[18px]">Add Additional E-mail</p>
      <form onSubmit={handleSubmit(createPost)}>
        <div className="text-black py-[8px] bg-[#E7E0EC] rounded-t-[4px] flex flex-col items-center">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            E-mail title:
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
          <label className="text-[12px] text-[#6750A4] ">E-mail:</label>
          <input
            type="text"
            value={number.email}
            placeholder="Enter your number..."
            {...register("email", { required: true })}
            name="email"
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto text-center  outline-none`}
            onChange={(e) => inputChange(e)}
          />
          {errors?.email && (
            <p className="text-red-500 text-[12px] ">required fields</p>
          )}
          <button
            type="submit"
            className="text-white bg-[#6750A4] rounded-[60px] mt-[21px] px-[24px] py-[9px] mb-[15px]"
          >
            Add
          </button>
        </div>
      </form>

      <p className="text-center pb-[18px] pb-[11px]">Additional E-mails</p>

      {filterContentEmail.map((items) => (
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
