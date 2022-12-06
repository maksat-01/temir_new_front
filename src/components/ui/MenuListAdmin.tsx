import { useNavigate } from "react-router-dom";
import DropDownCompany from "./DropDowmCompany";
import DropDown from "./DropDown";
interface IListMenu {
  dropdown: any;
}
interface IHeaderAdmin {
  children?: JSX.Element;
  title: string;
  arrayList?: IListMenu[];
  listCompany?: boolean;
}

export default function MenuListAdmin() {
  const navigate = useNavigate();
  const menuList = [
    {
      list: "Contacts",
      link: "/admin-contacts",
    },
    {
      list: "Media",
      link: "/admin-media",
    },
    {
      list: "Produts",
      link: "/admin-product",
    },
    {
      list: "Company",
      link: "/addcompany",
    },
  ];
  return (
    <div>
      <div className="bg-[#262627] py-[10px]">
        <div className="max-w-[450px] mx-auto relative">
          <div className="flex justify-between items-center">
            {menuList.map((items, index) => (
              <p
                key={index}
                onClick={() => navigate(items.link)}
                className="cursor-pointer"
              >
                {items.list}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
