import { Link, NavLink } from "react-router-dom";
import AdminCompanyIcon from "../../assets/svg/AdminCompanyIcon";
import AdminContactIcon from "../../assets/svg/AdminContactIcon";
import ExitSvg from "../../assets/svg/ExitSvg";
import MediaAdminIcon from "../../assets/svg/MediaAdminIcon";
import ProductAdminIcon from "../../assets/svg/ProductAdminIcon";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import { getIdUserParams } from "../helper";
import DropDown from "./DropDown";
interface IListMenu {
  dropdown: any;
}
interface IHeaderAdmin {
  children?: JSX.Element;
  title: string;
  arrayList?: IListMenu[];
}

export default function HeaderAdmin({
  children,
  title,
  arrayList,
}: IHeaderAdmin) {
  let activeStyle = {
    color: "white",
  };

  const menuList = [
    {
      svg: (
        <AdminContactIcon
          fill={
            window.location.pathname === "/contact-phone" ? "white" : "#575757"
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
    <div>
      <div className="bg-[#262627] pb-[38px] pt-[73px]">
        <div className="max-w-[500px] mx-auto relative">
          <div className="flex justify-center items-center w-full">
            <Link
              to={`/user/${getIdUserParams()}`}
              className="absolute left-[50px]"
            >
              <ExitSvg />
            </Link>
            <p className="w-full text-center">{title}</p>
            {arrayList?.map((item, index: any) => (
              <DropDown items={item.dropdown} key={index} />
            ))}
          </div>
        </div>
      </div>
      {children}
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
