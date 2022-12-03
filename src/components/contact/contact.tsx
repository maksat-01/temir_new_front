import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionBankCard } from "./reducer/AcctionBankCard";
import { getActionBankAccount } from "./reducer/ActionBankAccount";
import { getActionEmail } from "./reducer/ActionEmail";
import Accordion from "./Accordion";
import { getActionCall } from "./reducer/AcctionCall";

const Contact = () => {
  const dispatch = useAppDispatch();
  // const { bankAcc, bankCart, email, phone } = useAppSelector(
  //   (state) => state.ReducerContact
  // );
  const { user } = useAppSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(getActionBankAccount());
    dispatch(getActionEmail());
    dispatch(getActionBankCard());
    dispatch(getActionCall());
  }, []);

  return (
    <div className="max-w-[600px] w-full  mx-auto px-[5px]">
      <Accordion title="Bank cart" array={user.user_email} />
      <Accordion title="E-amil" array={user.user_email} />
      <Accordion title="Bank details" array={user.user_email} />
      <Accordion title="Call" array={user.user_phone} />
    </div>
  );
};

export default Contact;
