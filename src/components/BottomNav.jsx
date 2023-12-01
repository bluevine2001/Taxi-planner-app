import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("courses"); // Utilisation d'une seule variable d'état
  const navigate = useNavigate();

  const tabs = [
    { name: "courses", icon: "fa-car", path: "/" },
    { name: "contacts", icon: "fa-user-friends", path: "/contacts" },
    {
      name: "add",
      icon: "fa-plus",
      path: "/add",
    },
    { name: "repertoire", icon: "fa-folder-open", path: "/repertoire" },
    { name: "home", icon: "fa-home", path: "/dashboard" },
  ];

  const handleTabClick = (tabName, path) => {
    setActiveTab(tabName);
    navigate(path);
  };

  return (
    <div className="">
      <div className="btm-nav btm-nav-lg bg-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`text-info bg-slate-800 ${
              tab.name === activeTab ? "active" : ""
            } ${tab.extraClass || ""}`}
            onClick={() => handleTabClick(tab.name, tab.path)}
          >
            <i
              className={`fas ${tab.icon} ${
                tab.name === activeTab ? "text-cyan-500" : ""
              }`}
            ></i>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
