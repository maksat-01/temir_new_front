import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionBankCard } from "./reducer/AcctionBankCard";
import { getActionBankAccount } from "./reducer/ActionBankAccount";
import { getActionEmail } from "./reducer/ActionEmail";
import Accordion from "./Accordion";
import { getActionCall } from "./reducer/AcctionCall";
import { getIdUserParams } from "../helper";
import { getActionFollows } from "../adminFollowMe/reducer/ActionFollows";
import API from "../api/Api";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { bankAcc, bankCart, email, phone } = useAppSelector(
    (state) => state.ReducerContact
  );
  const { folows } = useAppSelector((state) => state.ReducerFollows);
  const { socials } = useAppSelector((state) => state.SocialsReducer);

  useEffect(() => {
    dispatch(getActionFollows());
    dispatch(getActionBankAccount());
    dispatch(getActionEmail());
    dispatch(getActionBankCard());
    dispatch(getActionCall());
  }, []);

  const filterBankCart = bankCart.filter((el) => el.user === getIdUserParams());
  const filterBankAcc = bankAcc.filter((el) => el.user === getIdUserParams());
  const filterFollows = folows.filter((el) => el.user === getIdUserParams());
  const filterSocials = socials.filter((el) => el.user === getIdUserParams());
  const filterEmail = email.filter((el) => el.user === getIdUserParams());
  const filterPhone = phone?.filter((el) => el.user === getIdUserParams());

  function saveContact() {
    API.post(`save-contact/count`, {
      user: id,
      count: 1,
    })
      .then((res) => {
        alert("Success");
        console.log(res);
      })
      .catch((e) => {
        alert("Error");
        console.log(e);
      });
  }

  return (
    <div className=" max-w-[800px]  mx-auto px-[5px]">
      <Accordion title="Call" array={filterPhone} />
      <Accordion title="Connect" array={filterFollows} />
      <Accordion title="Follow" array={filterSocials} />
      <Accordion title="Bank cart" array={filterBankCart} />
      <Accordion title="E-amil" array={filterEmail} />
      <Accordion title="Bank details" array={filterBankAcc} />
      <button
        onClick={saveContact}
        className="w-full py-[10px] text-center rounded-[7px] border-2 border-[rgba(190, 190, 190, 0.17)] mt-[10px]"
      >
        Save contact
      </button>
    </div>
  );
};

export default Contact;
