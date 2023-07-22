import React  from "react";
import { setLogin } from "../utils/Isauth";
import { useRouter } from "next/router";
import { Login_Page} from "@/utils/Constants";
import Link from "next/link";   
import { useSelector } from "react-redux";
import store from "../Store/baseStore";
import  loginUser  from "../Store/loginStore";
import { useState } from "react";


const SingUp = () => {

  const router = useRouter();
  const {loggedIn} = useSelector(state => state.login)
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("")
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [cf , setCf] = useState("");
  const [cc , setCc] = useState("");
  const [lc , setLc] = useState("");
  const [ac , setAc] = useState("");


  const onSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    

    const content = await response.json();
    console.log(content);
    if (content.success) {
      setLogin(true);
      router.push("/");
    } else {
      alert("Invalid Credentials");
    }
  };



  return (
    <div id="log_sign">
      <h1>
        <span className="bg-primary-content text-transparent bg-clip-text">
          Sign Up
        </span>
      </h1>
      <form action="">
        <div className="mockup-code form-menu form-control  ">



        <label className="label">
            <span className="label-text">
              <pre data-prefix="$" className="text-success">
                <code>Username:

                  <span className="user_cf" >(Using the Codeforces username is recommended, if available.)</span>
                </code>
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
              <pre data-prefix="#" className="text-teal-600">
                <code>Name:</code>
              </pre>{" "}
            </span>
          </label>
          <div className="input-box">
            <input
              type="text"
              value={name}
              placeholder="Chetan Saini"
              className="input input-bordered w-full "
              onChange={(e) => setName(e.target.value)}
            />
          </div>



          <label className="label">
            <span className="label-text">
              <pre data-prefix="@" className="text-lime-600">
                <code>Email:</code>
              </pre>{" "}
            </span>
          </label>
          <div className="input-box">
            <input
              type="email"
              value={email}
              placeholder="chetansaini123@xyz.com"
              className="input input-bordered w-full "
              onChange={(e) => setEmail(e.target.value)}
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


          <label className="label">
            <span className="label-text">
              <pre data-prefix="!" className="text-purple-700">
                <code>Confirm Password:</code>
              </pre>
            </span>
          </label>
          <div className="input-box">
            <input
              type="password"
              value={confirmPassword}
              placeholder="*********"
              className="input input-bordered w-full "
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>

          <label className="label">
            <span className="label-text">
              <pre data-prefix="&" className="text-yellow-700	">
                <code>Codeforces Username:</code>
              </pre>
            </span>
          </label>
          <div className="input-box">
            <input
              type="text"
              value={cf}
              placeholder="chetan_saini"
              className="input input-bordered w-full "
              onChange={(e) => setCf(e.target.value)} 
            />
          </div>


          <label className="label">
            <span className="label-text">
              <pre data-prefix="?" className="text-slate-300">
                <code>Codechef Username:</code>
              </pre>
            </span>
          </label>
          <div className="input-box">
            <input
              type="text"
              value={cc}
              placeholder="chetan_saini21"
              className="input input-bordered w-full "
              onChange={(e) => setCc(e.target.value)} 
            />
          </div>



          <label className="label">
            <span className="label-text">
              <pre data-prefix="*" className="text-stone-400">
                <code>Leetcode Username:</code>
              </pre>
            </span>
          </label>
          <div className="input-box">
            <input
              type="text"
              value={lc}
              placeholder="chetan_saini21"
              className="input input-bordered w-full "
              onChange={(e) => setLc(e.target.value)} 
            />
          </div>



          <label className="label">
            <span className="label-text">
              <pre data-prefix=":" className="text-orange-700">
                <code>Atcoder Username:</code>
              </pre>
            </span>
          </label>
          <div className="input-box">
            <input
              type="text"
              value={ac}
              placeholder="chetan_saini12"
              className="input input-bordered w-full "
              onChange={(e) => setAc(e.target.value)} 
            />
          </div>


          <button className="btn btn-outline btn-success" onClick={onSignUp} >SignUp</button>
          <Link href={Login_Page} >
            <span className="signup">Already have an account? - Login</span>
          </Link>
          
        </div>
      </form>
    </div>
  );
};

export default SingUp;
