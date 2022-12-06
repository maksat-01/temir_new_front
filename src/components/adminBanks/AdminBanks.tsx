import React, { useEffect, useState } from "react";
import AccountsBank from "./AccontsBank";
import CardsBank from "./CardsBank";
import ModalBanks from "./ModalBanks";

import "./style.scss";

export default function AdminBanks() {
  const [currentTab, setCurrentTab] = useState<any>(0);

  const tab = [
    {
      id: 1,
      tabTable: "Accounts",
      tabContent: <AccountsBank />,
    },
    {
      id: 2,
      tabTable: "Card",
      tabContent: <CardsBank />,
    },
  ];

  const handleClick = (e: any) => {
    setCurrentTab(e.target?.id);
  };

  useEffect(() => {
    setCurrentTab("1");
  }, []);

  return (
    <div>
      <div className="flex justify-evenly bg-[#262627] mb-[31px] pb-[20px]">
        {tab.map((tab, index) => (
          <button
            key={index}
            id={`${tab.id}`}
            disabled={currentTab === `${tab.id}`}
            onClick={handleClick}
          >
            {tab.tabTable}
          </button>
        ))}
      </div>

      <div className="max-w-[500px]">
        <div>
          {tab.map((tab, index) => (
            <div key={index}>
              {currentTab === `${tab.id}` && <div>{tab.tabContent}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
