import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/loading/Loading";

export default function ProductsAdmin() {
  const [data, setData] = useState<any>([]);
  const { id } = useParams();

  useEffect(() => {
    axios("http://64.227.177.107:8000/client_part/product/").then(
      ({ data }) => {
        setData(data.results);
      }
    );
  }, []);

  const yourData = data.filter((el: any) => el.user === id);

  return (
    <div className="text-center pt-[30px]">
      {yourData.length <= 0 ? (
        <Loading />
      ) : (
        yourData.map((el: any, index: number) => (
          <div className="pb-[50px]" key={index}>
            <img
              src={el.image}
              alt="no image"
              className="w-full h-[240px] rounded-lg object-cover pb-[10px]"
            />
            <h3 className="pb-[10px] text-[22px]">{el.title}</h3>
            <h3 className="text-[18px]">{el.description}</h3>
          </div>
        ))
      )}
    </div>
  );
}
