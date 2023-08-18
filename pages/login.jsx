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
    const response = await fetch("http://localhost:7000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    

    const content = await response.json();
    console.log(content);
    if (content.success) {

      store.dispatch(loginUser({username : username, loggedIn : true}));
      console.log("Login Success");
      router.push("/");
    } else {
      alert(content.message);
    }
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
