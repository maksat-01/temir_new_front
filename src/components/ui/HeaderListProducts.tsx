import { Link, NavLink, useNavigate } from "react-router-dom";
import MediaAdminIcon from "../../assets/svg/MediaAdminIcon";
import AdminCompanyIcon from "../../assets/svg/AdminCompanyIcon";
import ProductAdminIcon from "../../assets/svg/ProductAdminIcon";
import AdminContactIcon from "../../assets/svg/AdminContactIcon";
import DropDownCompany from "./DropDowmCompany";
import "./style.scss";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import { getIdUserParams } from "../helper";

interface IHeaderAdmin {
  children?: JSX.Element;
  title: string;
  listActive?: boolean;
}

export default function HeaderLisProducts({
  children,
  title,
  listActive,
}: IHeaderAdmin) {
  let activeStyle = {
    color: "white",
  };

  const menuList = [
    {
      svg: (
        <AdminContactIcon
          fill={
            window.location.pathname === "/contact-phone" ? "red" : "#575757"
          }
        />
      ),
      list: "Contacts",
      link: "/contact-phone",
    },
    {
      svg: (
        <MediaAdminIcon
          fill={
            window.location.pathname === "/admin-media" ? "white" : "#575757"
          }
        />
      ),
      list: "Media",
      link: "/admin-media",
    },
    {
      svg: (
        <ProductAdminIcon
          fill={
            window.location.pathname === "/admin-product" ? "white" : "#575757"
          }
        />
      ),
      list: "Produts",
      link: "/admin-product",
    },
    {
      svg: (
        <AdminCompanyIcon
          fill={
            window.location.pathname === "/addcompany" ? "white" : "#575757"
          }
        />
      ),
      list: "Company",
      link: "/addcompany",
    },
    {
      svg: (
        <ProfileIcon
          fill={window.location.pathname === "/profile" ? "white" : "#575757"}
        />
      ),
      list: "Profile",
      link: "/profile",
    },
  ];

  return (
    <div className=" min-h-screen mx-auto">
      <div className="bg-[#262627] pb-[38px] pt-[73px] fixed top-0 left-0 right-0 z-[100]">
        <div className="max-w-[500px] mx-auto relative">
          <div className="flex justify-center items-center">
            <Link
              to={`/user/${getIdUserParams()}}`}
              className="absolute left-[40px]"
            >
              Exit
            </Link>
            <p className="text-center">{title}</p>
            {listActive && <DropDownCompany />}
          </div>
        </div>
      </div>
      <div className="mt-[130px]">{children}</div>
      <div className="py-2.5 mx-auto flex justify-between fixed bottom-0 left-0 right-0 rounded border-slate-800 bg-[#1D1D1F]">
        <div className="max-w-[500px] container mx-auto flex justify-between">
          {menuList.map((items, index) => (
            <NavLink
              to={items.link}
              style={({ isActive }) =>
                isActive ? activeStyle : { color: "#575757" }
              }
              key={index}
              className="items"
            >
              {items.svg}
              <p className="bg-transparent mt-[10px] text-[11px]">
                {items.list}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
