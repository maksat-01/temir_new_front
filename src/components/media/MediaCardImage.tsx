import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionImage } from "./reducer/ActionImage";

export default function MediaCardImage() {
  const dispatch = useAppDispatch();
  const { photos } = useAppSelector((state) => state.ReducerImage);
  useEffect(() => {
    dispatch(getActionImage());
  }, []);

  return (
    <div className="max-w-[400px]">
      {photos.map((items, index) => (
        <div key={index} className="mb-[33px]">
          <img
            src={items.image}
            alt="no img"
            className="w-full h-auto bg-white rounded-[16px] mb-[19px] object-cover"
          />
          <p className="text-center px-[20px] text-[22px]">{items.title}</p>
        </div>
      ))}
    </div>
  );
}
