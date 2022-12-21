import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MediaAdminImage from "./MediaAdminImage";
import MediaAdminVideo from "./MediaAdminVideo";

interface IMediaAdmin {
  children?: JSX.Element;
}

export default function MediaAdmin() {
  const [currentTab, setCurrentTab] = useState<any>("1");

  const tab = [
    {
      id: 1,
      tabTable: "Photo",
      tabContent: <MediaAdminImage />,
    },
    {
      id: 2,
      tabTable: "Video",
      tabContent: <MediaAdminVideo />,
    },
  ];

  const handleClick = (e: any) => {
    setCurrentTab(e.target?.id);
  };

  return (
    <div className="max-w-[500px] mx-auto bg-[#151515] relative">
      <div className="bg-[#262627]">
        <div className="fixed left-0 right-0 z-[99] flex justify-evenly bg-[#262627] mb-[31px] pb-[20px]">
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
      </div>
      {tab.map((tab, index) => (
        <div key={index}>
          {currentTab === `${tab.id}` && (
            <div className="pt-[76px]">{tab.tabContent}</div>
          )}
        </div>
      ))}
    </div>
  );
}
