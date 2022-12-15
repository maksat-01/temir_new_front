import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CompanyIcon from "../../assets/svg/CompanyIcon";
import ContactsIcon from "../../assets/svg/ContactsIcon";
import MediaIcon from "../../assets/svg/MediaIcon";
import QrCodeIcon from "../../assets/svg/QrCodeIcon";
import SecondaryLogo from "../../assets/svg/SecondaryLogo";
import ShareIcon from "../../assets/svg/ShareIcon";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUser } from "./getUser/redux/reducer";

const navs = [
  {
    title: "contacts",
    icon: <ContactsIcon />,
    link: "",
  },
  {
    title: "company",
    icon: <CompanyIcon />,
    link: "company",
  },
  {
    title: "INVENTARY",
    icon: <MediaIcon />,
    link: "GALLERY",
  },
  {
    title: "GALLERY",
    icon: <QrCodeIcon />,
    link: "gallery",
  },
  {
    title: "SHARE",
    icon: <ShareIcon />,
    link: "share",
  },
];

export default function Interface({ children }: any) {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.getUser);
  const navigate = useNavigate();
  const [url, setUrl] = useState("");

  useEffect(() => {
    // dispatch(getUser.actions.getUser);
    axios
      .get(`http://64.227.177.107:8000/usser/${id}`)
      .then(({ data }) => {
        dispatch(getUser.actions.getUserSucceseded(data));
      })
      .catch((error) => {
        dispatch(getUser.actions.getUserError(error));
      });
  }, []);

  useEffect(() => {
    setUrl(window.location.pathname);
  }, [window.location.pathname]);

  const [isActive, setActive] = useState(false);
  const [isTabs, setTabs] = useState(navs);
  const [selectedTabs, setSelectedTabs] = useState({
    index: 2,
    tab: isTabs[2],
    edit: false,
  });

  useEffect(() => {
    setSelectedTabs({
      index: 2,
      tab: isTabs[2],
      edit: false,
    });
  }, [isTabs]);

  return (
    <div className="flex justify-center relative ">
      <div className="max-w-lg w-full min-h-[100vh] bg-black">
        <div
          className="w-full h-[287px] relative flex justify-center items-center"
          style={{
            background: `url(${user.background}) no-repeat center/cover`,
          }}
        >
          <Link to={`/user/${id}/signin`}>
            <div className="absolute top-11 right-8 cursor-pointer">
              <SecondaryLogo />
            </div>
          </Link>

          <div
            className="w-[145px] h-[145px] bg-black rounded-full flex justify-center items-center mt-20"
            style={{ border: "5px soild #FFFFFF" }}
          >
            <img
              src={user.avatar}
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
              {user.full_name}
            </h1>
            <h4
              className="text-base text-[#D1D1D1] font-[300] pb-2"
              style={{ letterSpacing: "0.05em" }}
            >
              {user.position}
            </h4>
            {!(url.slice(url.length - 6, url.length) === "signin") && (
              <div
                className=" items-center justify-center  mx-auto relative pt-[50px]"
                style={{
                  display: isActive ? "flex" : "flex",
                }}
              >
                {!(url.slice(url.length - 6, url.length) === "signin") &&
                  isTabs.map((el, index) => (
                    <div
                      className="w-[70px] h-[70px] rounded-full flex justify-center items-center border-gray-400 bg-black border-2 my-5  "
                      style={{
                        width:
                          index < 1 && index >= 0
                            ? `${"70px"}`
                            : index > 0 && index < 2
                            ? `${isActive ? "75px" : "90px"}`
                            : index === 2
                            ? `${isActive ? "80px" : "110px"}`
                            : index > 2 && index < 4
                            ? `${isActive ? "75px" : "90px"}`
                            : index > 3 && index <= 4
                            ? `${"70px"}`
                            : "",
                        height:
                          index < 1 && index >= 0
                            ? `${"70px"}`
                            : index > 0 && index < 2
                            ? `${isActive ? "75px" : "90px"}`
                            : index === 2
                            ? `${isActive ? "80px" : "110px"}`
                            : index > 2 && index < 4
                            ? `${isActive ? "75px" : "90px"}`
                            : index > 3 && index <= 4
                            ? `${"70px"}`
                            : "",
                        zIndex:
                          index < 1 && index >= 0
                            ? `${index === selectedTabs.index ? "999" : "555"}`
                            : index > 0 && index < 2
                            ? `${
                                index === selectedTabs.index && selectedTabs
                                  ? "777"
                                  : "777"
                              }`
                            : index === 2
                            ? `999`
                            : index > 2 && index < 4
                            ? `777`
                            : index > 3 && index < 4
                            ? `555`
                            : "",

                        margin:
                          index < 1 && index >= 0
                            ? `0 0 0 ${isActive ? `${"-320px"}` : "-130px"}`
                            : index > 0 && index < 2
                            ? `0 0 0 ${isActive ? `${"-165px"}` : "-70px"}`
                            : index === 2
                            ? `${"0"}`
                            : index > 2 && index < 4
                            ? `0 ${isActive ? `${"-165px"}` : "-70px"} 0 0`
                            : index > 3 && index < 5
                            ? `0 ${isActive ? `${"-320px"}` : "-130px"} 0 0`
                            : "",
                        position: "absolute",
                        transition:
                          isActive && selectedTabs.edit ? "0.4s" : "0.4s  ",
                      }}
                      onClick={() => {
                        !isActive && setActive(true);
                        if (index === 0 && isActive) {
                          const arr = isTabs.slice(0, 3);
                          const arr2 = isTabs.slice(3, 5);
                          console.log(arr);
                          console.log(arr2);

                          setTimeout(() => {
                            setActive(false);

                            setTabs([...arr2, ...arr]);

                            setSelectedTabs({
                              index: 2,
                              tab: el,
                              edit: false,
                            });
                          }, 600);
                          console.log();
                          navigate(`/user/${id}/${el.link}`);
                        }
                        if (index === 1 && isActive) {
                          const arr = isTabs.slice(0, 4);
                          const arr2 = isTabs.slice(4, 5);
                          setTabs([...arr2, ...arr]);
                          setActive(false);
                          navigate(`/user/${id}/${el.link}`);
                        }
                        if (index === 2 && isActive) {
                          setActive(false);
                        }
                        if (index === 3 && isActive) {
                          const arr = isTabs.slice(1, 5);
                          const arr2 = isTabs.slice(0, 1);
                          setTabs([...arr, ...arr2]);
                          setActive(false);
                          navigate(`/user/${id}/${el.link}`);
                        }
                        if (index === 4 && isActive) {
                          const arr = isTabs.slice(2, 5);
                          const arr2 = isTabs.slice(0, 2);
                          setTabs([...arr, ...arr2]);
                          setActive(false);
                          navigate(`/user/${id}/${el.link}`);
                        }
                      }}
                    >
                      {el.icon}
                      <span
                        className="absolute"
                        style={{
                          opacity: isActive ? "1" : "0",
                          transition: ".3s",
                          textTransform: "uppercase",
                          marginTop: "110px",
                          fontSize: "11px",
                        }}
                      >
                        {el.title}
                      </span>
                    </div>
                  ))}
              </div>
            )}

            <div className="pt-[80px] w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
