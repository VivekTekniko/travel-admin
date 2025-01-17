import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import s from "./dashboard.module.css";


const Home = () => {
  return (
    <>
      <div style={{ paddingInline: "1rem" }}>
        <div className="dashboard-section">
          {
            <div
              className={s["dashboard-header-container"]}
              style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              <Card className={s["dashbord-content"]}>
                <div class={s["dashboard-main-card"]}>
                  <div class={s["dashboard-card-content"]}>
                    <div class={s["card-title"]}>
                      <h4>Today Lead</h4>
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className={s["dashbord-content"]}>
                <div class={s["dashboard-main-card"]}>
                  <div class={s["dashboard-card-content"]}>
                    <div class={s["card-title"]}>
                      <h4>Total Lead </h4>
                      <h5>100</h5>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
           }
        </div>
       
      </div>
    </>
  );
};

export default Home;
