import { Key, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuList from "../../assets/svg/MenuList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import { getActionCompany } from "../compony/reducer/ActionCompany";
import {
  getIdCompanyForDelete,
  getIdUserParams,
  setIdCompany,
} from "../helper";
import "./style.scss";

export default function DropDownCompany() {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { company } = useAppSelector((state) => state.ReducerCompany);

  const deleteCompanyList = (id: any) => {
    API.delete(`company/${id}`)
      .then((res) => {
        dispatch(getActionCompany());
      })
      .catch((error) => {
        console.log(error);
        alert("Error");
      });
  };

  const filterCompanyList = company.filter(
    (items) => items.user === getIdUserParams()
  );

  useEffect(() => {
    dispatch(getActionCompany());
  }, []);
  return (
    <div className="w-72 ml-auto font-medium text-black absolute right-0">
      <div
        className="bg-transparent max-w-[20px] ml-auto mr-[20px] p-2 flex items-center justify-end rounded"
        onClick={() => setActive(!active)}
      >
        <MenuList />
      </div>
      <ul
        style={{ display: active ? "block" : "none" }}
        className={`z-[100] bg-white mt-2 overflow-y-auto max-h-60 absolute w-[100%] rounded-[4px]`}
      >
        <li
          className="p-2 text-sm text-black cursor-pointer"
          onClick={() => {
            navigate(`/bank-details`);
            setActive(false);
          }}
        >
          Bank details/cards
        </li>

        {filterCompanyList?.map((item: any, index: Key | null | undefined) => (
          <li
            onClick={() => {
              navigate(`/company-information/${item?.id}`);
              setActive(false);
              setIdCompany(item.id);
            }}
            key={index}
            className="p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer"
          >
            {item?.name}
          </li>
        ))}
        <li
          className="p-2 text-sm text-black cursor-pointer"
          onClick={() => {
            navigate(`/addcompany/`);
            setActive(false);
          }}
        >
          Add company
        </li>
        <li
          onClick={() => deleteCompanyList(getIdCompanyForDelete())}
          className="p-2 text-sm text-[#960404] cursor-pointer"
        >
          Delete this company
        </li>
      </ul>
    </div>
  );
}
