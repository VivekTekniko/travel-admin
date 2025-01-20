import React, { useState } from "react";
import s from "./auth.module.css";
import logo from "../../assets/icons/travel-logo.png";
import { FaRegUser } from "react-icons/fa";
import MuiAppBar from "@mui/material/AppBar";
import { FiLock } from "react-icons/fi";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import Custombutton from "../../Common/Custombutton";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Cookies from "js-cookie";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Login = () => {
  const navigate = useNavigate()
  const [showPass, setshowPass] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginshow, setloginshow] = useState(true);

const handleClick =async()=>{
let payload ={
  userName:email,
  password:password
}
 let res  = await axios.post("https://triptaktix.com/api/user/login",payload)
 try {
  if(res?.data?.success){
    const token = res.data.token;
    Cookies.set("token", token, { secure: false }, { sameSite: "strict" }, { expires: 365 });
    Cookies.set("auth", true, { secure: false }, { sameSite: "strict" }, { expires: 365 });
    navigate("/dashboard");
  }
 } catch (error) {
  
 }
}
 

  return (
    <>
    <AppBar position="fixed" className="mob-nav" >
        <section className={s["header-top-section"]} style={{backgroundColor:"#e82e79"}}>
          <div className={s["header-container"]}>
            <div className={s["header-content"]}>
              <div className="header-content-left" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
               
                <div style={{width:"140px",margin:'10px'}}>
                <img src={logo} style={{ width: "100%" }} alt="logo" draggable="false" />
              
                </div>
              </div>
              <div style={{ color: "#2c3e50" }} className={s["header-content-right"]}>
               
              </div>
            </div>
          </div>
        </section>
      </AppBar>
      <section className="login-section">
        <div className="login-container">
          <div className={s["login-content"]}>
            <div className={s["login-content-left"]}>
              <div className={s["logo-img"]}>
                {/* <img src={logo} style={{ width: "100%" }} alt="logo" draggable="false" /> */}
                <h2 className="font-bold "style={{color:"White"}}>TripTakTix</h2>
              </div>
            </div>
            <div className={s["login-content-right"]}>
              <div className={s["login-title"]}>
                <h2>Welcome Back! </h2>
              </div>
              {loginshow && (
                <div className={s["form-container"]}>
                  <div className={s["login-form"]}>
                    <label>Email address</label>
                    <div className={`${s.inputBox}`}>
                      <FaRegUser size={14} style={{ color: "#000" }} />
                      <input type="email" placeholder="Email*" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className="login-form">
                      <label>Password</label>
                      <div className={`${s.inputBox}`}>
                        <FiLock size={18} style={{ color: "#000" }} />
                        <input
                          type={showPass ? "text" : "password"}
                          value={password}
                          maxLength={25}
                          placeholder="Password*"
                          onChange={(e) => setpassword(e.target.value)}
                        />
                        {showPass ? (
                          <BsEyeSlash className={s.showHideEye} style={{ color: "#000" }} onClick={() => setshowPass(false)} />
                        ) : (
                          <BsEye className={s.showHideEye} style={{ color: "#000" }} onClick={() => setshowPass(true)} />
                        )}
                      </div>
                    </div>
                    
                  </div>
                  <div className={s["form-login-btn"]} >
                   <button onClick={()=>handleClick()}>Login</button>
                  </div>
                </div>
              )}
              {!loginshow && (
                <div className={s["form-container"]}>
                  <div className={s["login-form"]}>
                    <label>Email address</label>
                    <div className={`${s.inputBox}`}>
                      <FaRegUser size={14} style={{ color: "#000" }} />
                      <input type="text" disabled placeholder="Email*" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                  </div>
                  <div className="login-form">
                    <label>Password</label>
                    <div className={`${s.inputBox}`}>
                      <FiLock size={18} style={{ color: "#000" }} />
                      <input
                        type={showPass ? "text" : "password"}
                        value={password}
                        maxLength={25}
                        placeholder="Password*"
                        // onChange={(e) => setpassword(e.target.value)}
                      />
                      {showPass ? (
                        <BsEyeSlash className={s.showHideEye} style={{ color: "#000" }} onClick={() => setshowPass(false)} />
                      ) : (
                        <BsEye className={s.showHideEye} style={{ color: "#000" }} onClick={() => setshowPass(true)} />
                      )}
                    </div>
                  </div>
                  {/* <div className="login-form">
                    <label>OTP</label>
                    <div className={`${s.inputBox}`}>
                      <input
                        type="text"
                        value={otp}
                        placeholder="otp*"
                        onChange={(e) => {
                          if (e.target.value.length > 8) {
                            return;
                          }
                          setotp(e.target.value);
                        }}
                      />
                    </div>
                    <p>
                      <Timer time={60} email={email} />
                    </p>
                  </div> */}
                  <div className={s["forgot-password"]}>
                    Forgot password? <span >Reset</span>
                  </div>
                  <div className={s["form-login-btn"]} >
                    <Custombutton>Verify</Custombutton>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Login;
