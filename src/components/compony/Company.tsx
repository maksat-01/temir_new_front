import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionCompany } from "./reducer/ActionCompany";
import { getActionCompanyDetails } from "./reducer/ActionComponyDetails";

export default function Company() {
  const dispatch = useAppDispatch();
  const { company } = useAppSelector((state) => state.ReducerCompany);
  const { details } = useAppSelector((state) => state.ReducerCompanyDetails);
  const [fieldsForId, setFieldsForId] = useState("");

  useEffect(() => {
    dispatch(getActionCompany());
    dispatch(getActionCompanyDetails(fieldsForId));
  }, [fieldsForId]);

  const defaultPage = company[0];

  return (
    <div className="max-w-[500px] mx-auto px-[22px]">
      <div className="w-full mt-[20px] flex flex-col mb-[33px]">
        <div className="flex justify-evenly mb-[40px]">
          {company.map((items, index) => (
            <button
              className="rounded-[50px] px-[25px] py-[9px] mx-[4px] border-[1px] border-white"
              key={index}
              onClick={() => setFieldsForId(items.id)}
            >
              {items.name}
            </button>
          ))}
        </div>
        <div className="mb-[33px]">
          <p className="text-center px-[20px] text-[22px] font-[600]">
            {details?.name ? details?.name : defaultPage?.name}
          </p>
          <p className="text-center px-[20px] text-[14px] text-[#E1E1E1] mb-[40px]">
            {details?.activity ? details?.activity : defaultPage?.activity}
          </p>
          <img
            src={details?.image ? details?.image : defaultPage?.image}
            alt="no img"
            className="w-full h-auto rounded-[16px] mb-[19px] object-cover"
          />

          <p className="text-center text-[#BEBEBE] text-[18px]">
            {details?.description
              ? details?.description
              : defaultPage?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
