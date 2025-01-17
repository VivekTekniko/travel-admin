import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import s from "./sidebar.module.css";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import Cookies from "js-cookie";
import logo from "../../assets/icons/travel-logo.png"
const Sidebar = ({ open }) => {
  const navigate = useNavigate();

  const role = Cookies.get("role")
  const [menuItems, setmenuItems] = useState([
    {
      title: "Total Customer",
      icons: <RxDashboard size={20} />,
      navigate: "dashboard",
      show: false,
      subItems: [],
    },
    {
      title: "Total Lead",
      icons: <FaUsers size={20} />,
      navigate: "customer-table",
      show: false,
      subItems: []
    },
    {
      title: "User Managment",
      icons: <FaUsers size={20} />,
      navigate: "assign-leads",
      show: false,
      subItems: []
    },
    {
      title: "CMS",
      icons: <FaUsers size={20} />,
      navigate: "assign-leads",
      show: false,
      subItems: []
    },
   
   
  ]);
  return (
    <>
      <section className={s["sidebar"]}>
        <div className={`${s["collapsed-logo"]} ${open ? `${s["logo-section"]}` : `${s["logo-section-hide"]}`}`} style={{ marginLeft: "1rem" }}>
          <img style={{ width: "95%", margin: "auto", backgroundColor:"#fff" }} src={logo}
           alt="logo" draggable="false" />
        </div>
       
    {menuItems.map((data,i)=>{
      return(
        <div key={i}>
        <div
          className={s["sidebar-content"]}
          onClick={() => navigate(`/${data?.navigate}`)}
        >
          <div className={s["sidebar-item"]}>
            <div className="sidebaricons">{data?.icons}</div>
            <div
              className={
                open ? `${s["sidebar-title"]}` : `${s["sidebar-title-hide"]}`
              }
            >
              {data.title}
            </div>
          </div>
        </div>
      </div>
      )
    })}
      </section>
    </>
  );
};

export default Sidebar;
