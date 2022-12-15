import { NavLink, useNavigate } from "react-router-dom";
import MediaAdminIcon from "../../assets/svg/MediaAdminIcon";
import AdminCompanyIcon from "../../assets/svg/AdminCompanyIcon";
import ProductAdminIcon from "../../assets/svg/ProductAdminIcon";
import AdminContactIcon from "../../assets/svg/AdminContactIcon";
import DropDownCompany from "./DropDowmCompany";

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
  const menuList = [
    {
      svg: <AdminContactIcon />,
      list: "Contacts",
      link: "/admin-contacts",
    },
    {
      svg: <MediaAdminIcon />,
      list: "Media",
      link: "/admin-media",
    },
    {
      svg: <ProductAdminIcon />,
      list: "Produts",
      link: "/admin-product",
    },
    {
      svg: <AdminCompanyIcon />,
      list: "Company",
      link: "/addcompany",
    },
  ];
  return (
    <div className=" min-h-screen mx-auto">
      <div className="bg-[#262627] pb-[38px] pt-[73px]">
        <div className="max-w-[500px] mx-auto relative">
          <div className="flex justify-center items-center">
            <p className="text-center">{title}</p>
            {listActive && <DropDownCompany />}
          </div>
        </div>
      </div>
      {children}
      <div className="py-2.5 mx-auto flex justify-between fixed bottom-0 left-0 right-0 rounded border-slate-800 bg-[#1D1D1F]">
        <div className="max-w-[500px] container mx-auto flex justify-between">
          {menuList.map((items, index) => (
            <NavLink
              to={items.link}
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
              }}
              className="link"
            >
              {items.svg}
              <p className="text-white bg-transparent mt-[10px] text-[11px]">
                {items.list}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
