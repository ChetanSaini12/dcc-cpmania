import React, { useEffect }  from "react";
import { setLogin } from "../utils/Isauth";
import { useRouter } from "next/router";
import { Sign_Up_Page } from "@/utils/Constants";
import Link from "next/link";   
import { useSelector } from "react-redux";
import store from "../Store/baseStore";
import  {loginUser}  from "../Store/loginStore";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Base_Url } from "@/utils/Constants";
import axios from "axios";


const Login = () => {

  const router = useRouter();
  const {loggedIn} = useSelector(state => state.login)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(loginUser({userName : username}));
      router.push("/");
    }
  }, [loggedIn]);


  const onLogin = async (e) => {
    e.preventDefault();
    await axios.post(`${Base_Url}/auth/login`,{
      username,
      password
    }).then((res)=>{
      store.dispatch(loginUser({username : username, loggedIn : true}));
      console.log("Login Success");
      router.push("/");
    }).catch((err)=>{
      alert(err.message);
    })
  };



  return (
    <div id="log_sign">
      <h1>
        <span className="bg-primary-content text-transparent bg-clip-text">
          Login
        </span>
      </h1>
      <form action="">
        <div className="mockup-code form-menu form-control  ">
          <label className="label">
            <span className="label-text">
              <pre data-prefix="$" className="text-success">
                <code>Username:</code>
              </pre>{" "}
            </span>
          </label>
          <div className="input-box">
            <input
              type="text"
              value={username}
              placeholder="chetan_saini"
              className="input input-bordered w-full "
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <label className="label">
            <span className="label-text">
              <pre data-prefix=">" className="text-warning">
                <code>Password:</code>
              </pre>
            </span>
          </label>
          <div className="input-box">
            <input
              type="password"
              value={password}
              placeholder="*********"
              className="input input-bordered w-full "
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button className="btn btn-outline btn-success" onClick={onLogin} >Login</button>
          <Link href={Sign_Up_Page} >
            <span className="signup">New user? - Sign Up</span>
          </Link>
          
        </div>
      </form>
    </div>
  );
};

export default Login;
