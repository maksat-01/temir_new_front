import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionBankCard } from "./reducer/AcctionBankCard";
import { getActionBankAccount } from "./reducer/ActionBankAccount";
import { getActionEmail } from "./reducer/ActionEmail";
import Accordion from "./Accordion";
import { getActionCall } from "./reducer/AcctionCall";
import { getIdUserParams } from "../helper";
import { getActionFollows } from "../adminFollowMe/reducer/ActionFollows";

const Contact = () => {
  const dispatch = useAppDispatch();
  const { bankAcc, bankCart } = useAppSelector((state) => state.ReducerContact);
  const { folows } = useAppSelector((state) => state.ReducerFollows);
  const { socials } = useAppSelector((state) => state.SocialsReducer);
  const { user } = useAppSelector((state) => state.getUser);
  console.log(user, "user");

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

  return (
    <div className=" max-w-[800px]  mx-auto px-[5px]">
      <Accordion title="Call" array={user.user_phone} />
      <Accordion title="Connect" array={filterFollows} />
      <Accordion title="Follow" array={filterSocials} />
      <Accordion title="Bank cart" array={filterBankCart} />
      <Accordion title="E-amil" array={user.user_email} />
      <Accordion title="Bank details" array={filterBankAcc} />
    </div>
  );
};

export default Contact;
