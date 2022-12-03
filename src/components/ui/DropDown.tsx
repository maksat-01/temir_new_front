import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
  useState,
} from "react";
import { Link, NavLink, To } from "react-router-dom";
import MenuList from "../../assets/svg/MenuList";
import "./style.scss";

interface DropdownProps {
  activeClass?: any;
  items?: any;
  onClick?: () => void;
}

export default function DropDown(props: DropdownProps) {
  const { activeClass, items, onClick } = props;
  const [active, setActive] = useState(false);
  return (
    <div className="w-72 font-medium h-80 text-black">
      <div
        className="bg-[#262627] w-full p-2 flex items-center justify-end rounded"
        onClick={() => setActive(active ? false : true)}
      >
        <MenuList />
      </div>
      <ul
        style={{ display: active ? "block" : "none" }}
        className={` bg-white mt-2 overflow-y-auto max-h-60`}
      >
        {items?.map((item: any, index: Key | null | undefined) => (
          <Link to={item?.page} key={index}>
            <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
