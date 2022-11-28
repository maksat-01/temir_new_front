import React, { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionProduct } from "../../components/products/reducer/ActionProduct";
import AddPhotoSvg from "../../assets/svg/AddPhotoSvg";
import API from "../api/Api";
import { getActionProductAdmin } from "./reducer/ActionAdminProduct";
import { getIdUserParams } from "../helper";

export default function AdminProduct() {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.ReducerProduct);
  const [updateImage, setUpdateImage] = useState("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [descUpdate, setDescUpdate] = useState("");
  const [productId, setProductId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [active, setActive] = useState(true);
  const [btnDefinition, setBtnDefinition] = useState("");

  const deletePost = (post: any) => {
    console.log(post.id);
    API.delete(`product/${post.id}`)
      .then(() => {
        dispatch(getActionProduct());
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setUpdateImage(i);
      setImage(i);
    }
  };

  const changeToServer = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", getIdUserParams());
    formData.append("title", titleUpdate);
    formData.append("description", descUpdate);
    updateImage?.length === 0
      ? console.log("error")
      : formData.append("image", updateImage);

    await API.patch(`product/${productId}`, formData)
      .then(() => {
        alert("success");
        dispatch(getActionProduct());
        dispatch(getActionProductAdmin(productId));
      })
      .catch(() => {
        alert("Error");
      });
  };

  const postToServer = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", getIdUserParams());
    formData.append("description", description);
    formData.append("title", title);
    updateImage?.length === 0
      ? console.log("error")
      : formData.append("image", image);

    await API.post(`product/`, formData)
      .then(() => {
        alert("success");
        dispatch(getActionProduct());
        dispatch(getActionProductAdmin(productId));
      })
      .catch(() => {
        alert("Error");
      });
  };

  useEffect(() => {
    dispatch(getActionProduct());
  }, []);

  return (
    <div>
      <div className="bg-[#262627] mb-[28px]">
        <p className="text-center pt-[70px] pb-[38px]">Product</p>
      </div>

      <div className="max-w-[419px] mx-auto px-[22px]">
        <div
          className="py=[20px] bg-[#28282A] h-[222px] rounded-[16px] mb-[13px] flex flex-col justify-center items-center"
          onClick={() => ref.current?.click()}
        >
          <input
            id="file-upload"
            onChange={(e) => uploadToClient(e)}
            accept="image/png, image/gif, image/jpeg"
            type="file"
            style={{ display: "none" }}
            ref={ref}
          />
          <AddPhotoSvg />
          <p className="pt-[5px]">+ Upload file</p>
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to product:
          </label>
          <input
            type="text"
            placeholder="Enter your text..."
            value={title}
            className="bg-transparent w-[100%] pl-[16px]"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[28px]">
          <label className="pl-[16px] text-[12px] text-[#6750A4]">
            Theme to product:
          </label>
          <textarea
            placeholder="Enter your text..."
            value={description}
            style={{ resize: "none" }}
            className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center mb-[74px]">
          <button
            onClick={(e: any) => {
              postToServer(e);
              setTitle("");
              setDescription("");
            }}
            className="px-[45px] text-[14px] py-[10px] bg-white text-black font-[500] rounded-[50px]"
          >
            Add
          </button>
        </div>
        <p className="text-center mb-[38px]">Added products</p>
        {product.map((items, index) => (
          <div className="mb-[33px]" key={index}>
            <input
              id="file-upload"
              onChange={(e) => uploadToClient(e)}
              accept="image/png, image/gif, image/jpeg"
              type="file"
              style={{ display: "none" }}
              ref={ref}
            />
            <img
              src={items.image}
              alt="no img"
              onClick={() => {
                !active && ref?.current?.click();
              }}
              className="w-full object-cover h-[222px] rounded-[16px] mb-[19px] object-cover"
            />
            <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
              <label className="pl-[16px] text-[12px] text-[#6750A4]">
                Theme to product:
              </label>
              <input
                disabled={active || btnDefinition !== items.id}
                defaultValue={items.title}
                type="text"
                placeholder="Enter your text..."
                className="bg-transparent w-[100%] pl-[16px]"
                onChange={(e) => setTitleUpdate(e.target.value)}
              />
            </div>
            <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
              <label className="pl-[16px] text-[12px] text-[#6750A4]">
                Theme to product:
              </label>
              <textarea
                disabled={active || btnDefinition !== items.id}
                defaultValue={items.title}
                placeholder="Enter your text..."
                style={{ resize: "none" }}
                className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
                onChange={(e) => setDescUpdate(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end pt-[30px] pb-[50px]">
              <button
                onClick={() => deletePost(items)}
                className="px-[20px] mr-[15px] text-[14px] py-[10px] border-[1.5px] border-[#FF0000] text-[#FF0000] font-[500] rounded-[50px]"
              >
                delete
              </button>
              {active && (
                <button
                  style={{ background: "rgba(208, 188, 255, 0.08)" }}
                  className="px-[20px]  text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] font-[500] rounded-[50px]"
                  onClick={() => {
                    setProductId(items.id);
                    setActive(!active);
                    setBtnDefinition(items.id);
                  }}
                >
                  change
                </button>
              )}
              {!active && btnDefinition === items.id && (
                <button
                  className="px-[20px]  text-[14px] py-[10px] bg-white text-black font-[500] rounded-[50px]"
                  onClick={(e: any) => {
                    setActive(true);
                    changeToServer(e);
                  }}
                >
                  save
                </button>
              )}
              {!active && btnDefinition === items.id && (
                <button
                  style={{ background: "rgba(208, 188, 255, 0.08)" }}
                  className="px-[20px] ml-[14px] text-[14px] py-[10px] border-[1px] border-[#D0BCFF] text-[#D0BCFF] text-black font-[500] rounded-[50px]"
                  onClick={() => {
                    setActive(true);
                  }}
                >
                  cencel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
