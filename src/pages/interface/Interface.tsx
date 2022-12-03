import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyIcon from "../../assets/svg/CompanyIcon";
import ContactsIcon from "../../assets/svg/ContactsIcon";
import MediaIcon from "../../assets/svg/MediaIcon";
import QrCodeIcon from "../../assets/svg/QrCodeIcon";
import SecondaryLogo from "../../assets/svg/SecondaryLogo";
import { useAppDispatch } from "../../hooks";
import { getUser } from "./getUser/redux/reducer";

const navs = [
  {
    title: "contacts",
    icon: <ContactsIcon />,
  },
  {
    title: "media",
    icon: <MediaIcon />,
  },
  {
    title: "media",
    icon: <MediaIcon />,
  },
  {
    title: "company",
    icon: <CompanyIcon />,
  },
  {
    title: "qr code",
    icon: <QrCodeIcon />,
  },
  {
    title: "temir",
    icon: <SecondaryLogo width={34} height={36} />,
  },
];

export default function Interface({ children }: any) {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getUser.actions.getUser);
    axios
      .get(`http://64.227.177.107:8000/usser/${id}`)
      .then(({ data }) => {
        console.log("user", data);
        setUser(data);
        dispatch(getUser.actions.getUserSucceseded(data));
      })
      .catch((error) => {
        dispatch(getUser.actions.getUserError(error));
      });
  }, []);

  return (
    <div className="flex justify-center relative ">
      <div className="max-w-lg w-full min-h-[100vh] bg-black">
        <div
          className="w-full h-[287px] relative flex justify-center items-center"
          style={{
            background: `url(https://3dnews.ru/assets/external/illustrations/2022/07/20/1070539/0.jpg) no-repeat center/cover`,
          }}
        >
          <div className="absolute top-11 right-8 cursor-pointer">
            <SecondaryLogo />
          </div>
          <div
            className="w-[145px] h-[145px] bg-black rounded-full flex justify-center items-center mt-20"
            style={{ border: "5px soild #FFFFFF" }}
          >
            <img
              src="https://pbs.twimg.com/profile_images/1222646977332174849/xWcD6t_Q_400x400.jpg"
              alt=""
              className="w-[120px] h-[120px] bg-white rounded-full"
            />
          </div>
        </div>
        <div
          className="p-5 bg-black mt-[-10px] absolute max-w-lg w-full"
          style={{
            borderRadius: "15px 15px 0 0",
            boxShadow: "0px -5px 5px 0px rgba(217, 217, 217, 0.4",
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-base text-[#D1D1D1] font-bold pb-2">
              JUSUOV ERLAN
            </h1>
            <h4
              className="text-base text-[#D1D1D1] font-[300] pb-2"
              style={{ letterSpacing: "0.05em" }}
            >
              Software engneer
            </h4>
            <div className="flex gap-2">
              {navs.map((el, index) => (
                <a href="">
                  <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center border-gray-400 cursor-pointer border-2 my-5">
                    {el.icon}
                  </div>
                </a>
              ))}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
