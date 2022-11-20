import React, { useState } from "react";
import ArrowsIcons from "../../assets/svg/ArrowIcons";

import "./style.scss";

interface IBlock {
  array?: any;
  title: string;
}

export default function Accordion({ array, title }: IBlock) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`accordion ${
        active ? "active" : ""
      } py-[11px] px-[15px] bg-[#0B0B0B] rounded-[2px] mb-[10px] `}
    >
      <div
        className="text-white cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <div className="flex items-center justify-between">
          <p>● {title}</p>
          <div className="accordion__icon">
            <ArrowsIcons />
          </div>
        </div>

        {array?.map((items: any, index: any) => (
          <div className="accordion__content " key={index}>
            <p className="text-[16px] font-[400] pb-[21px] pt-[50px]">
              {items?.title}
            </p>
            <p className="accordion__content pl-[10px] font-[300] py-[11px] rounded-[3px] bg-[#131313]">
              {items?.back_cart}
              {items?.back_account}
              {items?.email}
              {items?.phone_number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
