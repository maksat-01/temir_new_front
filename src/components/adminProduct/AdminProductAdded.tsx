import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import AddPhotoSvg from "../../assets/svg/AddPhotoSvg";
import { useAppDispatch, useAppSelector } from "../../hooks";
import API from "../api/Api";
import { getIdUserParams } from "../helper";
import { getActionProduct } from "../products/reducer/ActionProduct";
import { getActionProductAdmin } from "./reducer/ActionProductAdmin";

interface IAdminProductAdded {
  productId: string;
}

export default function AdminProductAdded({ productId }: IAdminProductAdded) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useAppDispatch();
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
  const [validate, setValidate] = useState({
    title: false,
    description: false,
    image: false,
  });
  const [createImage, setCreateImage] = useState<any>();

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setChangeProduct({ ...changeProduct, image: i });
      setPostDataProduct({ ...postDataProduct, image: i });
    }
  };

  const postToServer = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", postDataProduct.user);
    formData.append("description", postDataProduct.description);
    formData.append("title", postDataProduct.title);
    postDataProduct.image?.length === 0
      ? console.log("error")
      : formData.append("image", postDataProduct.image);

    if (
      !postDataProduct.title &&
      !postDataProduct.description &&
      !postDataProduct.image
    ) {
      setValidate({ ...validate, description: true, image: true, title: true });
    } else if (!postDataProduct.title && !postDataProduct.description) {
      setValidate({ ...validate, description: true, title: true });
    } else if (!postDataProduct.title) {
      setValidate({ ...validate, title: true });
    } else if (!postDataProduct.description) {
      setValidate({ ...validate, description: true });
    } else if (!postDataProduct.image) {
      setValidate({ ...validate, image: true });
    } else {
      await API.post(`product/`, formData)
        .then(() => {
          alert("success");
          dispatch(getActionProduct());
          dispatch(getActionProductAdmin(productId));
        })
        .catch((e) => {
          alert("Error");
        });
    }

    setCreateImage("");
    setPostDataProduct({
      user: getIdUserParams(),
      title: "",
      description: "",
      image: "",
    });
  };

  const inputChange = (e: any) => {
    setPostDataProduct({ ...postDataProduct, [e.target.name]: e.target.value });
  };

  const blobToBase64 = (blob: any) =>
    new Promise((resolve, reject) => {
      const file = blob.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  useEffect(() => {
    dispatch(getActionProduct());
    dispatch(getActionProductAdmin(productId));
  }, []);

  return (
    <div>
      <div
        className={`py=[20px] bg-[#28282A] w-full h-[222px] rounded-[16px] mb-[13px] flex flex-col justify-center items-center ${
          validate.image && "border border-[#FF0000]"
        }`}
        onClick={() => ref.current?.click()}
      >
        {createImage && (
          <img
            src={createImage}
            alt="no image"
            className="h-[222px] rounded-[16px] w-full object-cover"
          />
        )}
        <input
          id="file-upload"
          onChange={(e) => {
            blobToBase64(e).then((data) => {
              setCreateImage(data);
            });
            uploadToClient(e);
          }}
          accept="image/png, image/gif, image/jpeg"
          type="file"
          style={{ display: "none" }}
          ref={ref}
        />
        {!createImage && <AddPhotoSvg />}
        {!createImage && <p className="font-[600]"> + Add photo</p>}
      </div>
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[10px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Theme to product:
        </label>
        <input
          type="text"
          placeholder="Enter your text..."
          {...register("title", { required: true })}
          value={postDataProduct.title}
          name="title"
          className="bg-transparent w-[100%] pl-[16px]"
          onChange={(e) => inputChange(e)}
        />
        {validate?.title && (
          <p className="text-red-500 text-[12px] pl-[16px]">required fields</p>
        )}
      </div>
      <div className="text-black pb-[8px] bg-[#E7E0EC] rounded-[4px] mb-[28px]">
        <label className="pl-[16px] text-[12px] text-[#6750A4]">
          Theme to product:
        </label>
        <textarea
          placeholder="Enter your text..."
          {...register("description", { required: true })}
          value={postDataProduct.description}
          name="description"
          className={`bg-transparent w-[100%] pl-[16px] max-h-auto`}
          onChange={(e) => inputChange(e)}
        ></textarea>
        {validate?.description && (
          <p className="text-red-500 text-[12px] pl-[16px]">required fields</p>
        )}
      </div>
      <div className="flex justify-center mb-[74px] ">
        <button
          onClick={(e: any) => {
            postToServer(e);
          }}
          className="px-[45px] text-[14px] py-[10px] bg-white text-black font-[500] rounded-[50px]"
        >
          Add
        </button>
      </div>
    </div>
  );
}
