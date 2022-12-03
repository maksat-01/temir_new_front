import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
  useState,
} from "react";
import { Link, NavLink, To, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div className="w-72 ml-auto font-medium text-black absolute right-0">
      <div
        className="bg-transparent max-w-[20px] ml-auto p-2 flex items-center justify-end rounded"
        onClick={() => setActive(active ? false : true)}
      >
        <MenuList />
      </div>
      <ul
        style={{ display: active ? "block" : "none" }}
        className={`z-[100] bg-white mt-2 overflow-y-auto max-h-60 absolute w-[100%]`}
      >
        {items?.map((item: any, index: Key | null | undefined) => (
          <li
            onClick={() => {
              navigate(item?.link);
              setActive(false);
            }}
            key={index}
            className="p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer"
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
