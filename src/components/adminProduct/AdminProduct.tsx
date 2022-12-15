import React, { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionProduct } from "../../components/products/reducer/ActionProduct";
import API from "../api/Api";
import { getActionProductAdmin } from "./reducer/ActionProductAdmin";
import { getIdUserParams } from "../helper";
import AdminProductAdded from "./AdminProductAdded";

export default function AdminProduct() {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useAppDispatch();
  const [productId, setProductId] = useState("");
  const [btnDefinition, setBtnDefinition] = useState("");
  const [active, setActive] = useState(true);
  const { products } = useAppSelector((state) => state.ReducerProduct);
  const { product } = useAppSelector((state) => state.ProductAdminReducer);
  const [postDataProduct, setPostDataProduct] = useState({
    user: getIdUserParams(),
    title: "",
    description: "",
    image: "",
  });
  const [changeProduct, setChangeProduct] = useState({
    user: getIdUserParams(),
    title: "",
    description: "",
    image: "",
  });
  const [createImageSecondary, setCreateImageSecondary] = useState<any>({
    id: "",
    image: "",
  });

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setChangeProduct({ ...changeProduct, image: i });
      setPostDataProduct({ ...postDataProduct, image: i });
    }
  };

  const changeToServer = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "user",
      changeProduct.user.length > 0 ? changeProduct.user : product.user
    );
    formData.append(
      "title",
      changeProduct.title.length > 0 ? changeProduct.title : product.title
    );
    formData.append(
      "description",
      changeProduct.description.length > 0
        ? changeProduct.description
        : product.description
    );
    changeProduct.image && formData.append("image", changeProduct.image);

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

  const blobToBase64 = (blob: any) =>
    new Promise((resolve, reject) => {
      const file = blob.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

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

  useEffect(() => {
    dispatch(getActionProduct());
    dispatch(getActionProductAdmin(productId));
  }, []);

  console.log(product.id === createImageSecondary.id, "IDP");

  return (
    <div className="pt-[28px] pb-[57px]">
      <div className="max-w-[500px] mx-auto px-[22px]">
        <AdminProductAdded productId={productId} />
        <p className="text-center mb-[38px]">Added products</p>
        {products.map((items, index) => (
          <div className="mb-[33px]" key={index}>
            <input
              id="file-upload"
              onChange={(e) => {
                uploadToClient(e);
                blobToBase64(e).then((data) => {
                  setCreateImageSecondary({
                    ...createImageSecondary,
                    image: data,
                  });
                });
              }}
              accept="image/png, image/gif, image/jpeg"
              type="file"
              style={{ display: "none" }}
              ref={ref}
            />
            {items.id === createImageSecondary.id ? (
              <img
                src={createImageSecondary.image}
                alt="no img"
                onClick={() => {
                  !active && ref?.current?.click();
                }}
                className="w-full object-cover h-[222px] rounded-[16px] mb-[19px] object-cover"
              />
            ) : (
              <img
                src={items.image}
                alt="no img"
                onClick={() => {
                  !active && ref?.current?.click();
                }}
                className="w-full object-cover h-[222px] rounded-[16px] mb-[19px] object-cover"
              />
            )}

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
                onChange={(e) =>
                  setChangeProduct({ ...changeProduct, title: e.target.value })
                }
              />
            </div>
            <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
              <label className="pl-[16px] text-[12px] text-[#6750A4]">
                Theme to product:
              </label>
              <textarea
                disabled={active || btnDefinition !== items.id}
                defaultValue={items.description}
                placeholder="Enter your text..."
                style={{ resize: "none" }}
                className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
                onChange={(e) =>
                  setChangeProduct({
                    ...changeProduct,
                    description: e.target.value,
                  })
                }
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
                    setCreateImageSecondary({
                      ...createImageSecondary,
                      id: items.id,
                    });
                    setProductId(items.id);
                    setActive(!active);
                    setBtnDefinition(items.id);
                    dispatch(getActionProductAdmin(items.id));
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
