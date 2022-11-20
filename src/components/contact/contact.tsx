import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionBankCard } from "./reducer/AcctionBankCard";
import { getActionBankAccount } from "./reducer/ActionBankAccount";
import { getActionEmail } from "./reducer/ActionEmail";
import Accordion from "./Accordion";
import { getActionCall } from "./reducer/AcctionCall";

const Contact = () => {
  const dispatch = useAppDispatch();
  const { bankAcc, bankCart, email, phone } = useAppSelector(
    (state) => state.ReducerContact
  );

  useEffect(() => {
    dispatch(getActionBankAccount());
    dispatch(getActionEmail());
    dispatch(getActionBankCard());
    dispatch(getActionCall());
  }, []);

  return (
    <div className="max-w-[419px] mx-auto px-[22px]">
      <Accordion title="Bank cart" array={bankCart} />
      <Accordion title="E-amil" array={email} />
      <Accordion title="Bank details" array={bankAcc} />
      <Accordion title="Call" array={phone} />
    </div>
  );
};

export default Contact;
