import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import ModalBankDetails from "./ModalBankDetails";
import { CompanyReducer } from "./reducer/ReducerCompany";
import "./style.scss";

export default function Company() {
  const dispatch = useAppDispatch();
  const { company } = useAppSelector((state) => state.ReducerCompany);
  const [details, setDetails] = useState<any>();
  const [modal, setModal] = React.useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios("http://64.227.177.107:8000/client_part/company/").then(
      ({ data }) => {
        const yourCompany = data.results.filter((el: any) => el.user === id);
        setDetails(yourCompany[0]);

        dispatch(CompanyReducer.actions.CompanySuccess(data.results));
      }
    );
  }, []);

  const defaultPage = company[0];

  const yourCompany = company.filter((el) => el.user === id);

  return (
    <div className="max-w-[500px] mx-auto px-[2px]">
      <div className=" mt-[20px] flex flex-col mb-[33px]">
        <div
          className="flex justify-center mb-[40px] example"
          style={{
            overflowX: "scroll",
          }}
        >
          {yourCompany.map((items, index) => (
            <button
              className="rounded-[50px] px-[25px] py-[9px] mx-[4px] border-[1px] border-white"
              style={{
                background: items.id === details?.id ? "white" : "black",
                color: items.id === details?.id ? "black" : "white",
                whiteSpace: "nowrap",
              }}
              key={index}
              onClick={() => {
                setDetails(null);
                setDetails(items);
              }}
            >
              {items.name}
            </button>
          ))}
        </div>
        {details && (
          <div className="mb-[33px] w-full">
            <p className="text-center px-[20px] text-[22px] font-[600]">
              {details?.name ? details?.name : defaultPage?.name}
            </p>
            <p className="text-center px-[20px] text-[14px] text-[#E1E1E1] mb-[40px]">
              {details?.activity ? details?.activity : defaultPage?.activity}
            </p>
            <img
              src={details?.image ? details?.image : defaultPage?.image}
              alt="no img"
              className="w-full rounded-[16px] mb-[19px] h-[222px] object-cover"
            />
            <p className="text-center text-[#BEBEBE] text-[18px] w-full mb-[31px]">
              {details?.description}
            </p>
            <button className="bg-[#0B0B0B] mb-[10px] w-full py-[23px] text-center fony-[700] text-[16px] rounded-[4px]">
              <a
                href={
                  details?.visit_website_url
                    ? details?.visit_website_url
                    : defaultPage?.visit_website_url
                }
              >
                Visit website
              </a>
            </button>
            <button className="bg-[#0B0B0B] mb-[10px] w-full py-[23px] text-center fony-[700] text-[16px] rounded-[4px]">
              <a
                href={
                  details?.address_url
                    ? details?.address_url
                    : defaultPage?.address_url
                }
              >
                Address
              </a>
            </button>
            <button
              onClick={() => setModal(!modal)}
              className="bg-[#0B0B0B] mb-[10px] w-full py-[23px] text-center fony-[700] text-[16px] rounded-[4px]"
            >
              Bank details
            </button>
          </div>
        )}
      </div>
      {modal && <ModalBankDetails modal={modal} setModal={setModal} />}
    </div>
  );
}
