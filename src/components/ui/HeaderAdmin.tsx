import { NavLink } from "react-router-dom";
import AdminCompanyIcon from "../../assets/svg/AdminCompanyIcon";
import AdminContactIcon from "../../assets/svg/AdminContactIcon";
import MediaAdminIcon from "../../assets/svg/MediaAdminIcon";
import ProductAdminIcon from "../../assets/svg/ProductAdminIcon";
import DropDownCompany from "./DropDowmCompany";
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
    <div>
      <div className="bg-[#262627] pb-[38px] pt-[73px]">
        <div className="max-w-[500px] mx-auto relative">
          <div className="flex justify-center items-center">
            <p className="text-center">{title}</p>
            {arrayList?.map((item, index: any) => (
              <DropDown items={item.dropdown} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[500px] mx-auto">{children}</div>
      <div className="max-w-md px-7 py-2.5 mx-auto flex  justify-between fixed bottom-0 left-0 right-0 rounded border-slate-800 bg-[#1D1D1F]">
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
  );
}
