import React, { useEffect }  from "react";
import { setLogin } from "../utils/Isauth";
import { useRouter } from "next/router";
import { Login_Page} from "@/utils/Constants";
import Link from "next/link";   
import { useSelector } from "react-redux";
import store from "../Store/baseStore";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from '../Store/loginStore'
import { Base_Url } from "@/utils/Constants";
import axios from "axios";


const SingUp = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const {loggedIn} = useSelector(state => state.login)
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password , setconfirm_password] = useState("")
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [codeforcesURL , setCodeforcesURL] = useState("");
  const [codechefURL , setCodechefURL] = useState("");
  const [leetcodeURL , setLeetcodeURL] = useState("");
  const [atcoderURL , setAtcoderURL] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, [loggedIn]);



  const onSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${Base_Url}/auth/signup`,
      {
         name, email, password , confirm_password , username , leetcodeURL , codeforcesURL , codechefURL , atcoderURL
      }).then((res)=>{
        if (res.data.success) {
          dispatch(loginUser({
            userName: username
          }));
          setLogin(true);
          
          router.push("/");
        } else {
          setError(res.data.message);
        }
      })
      .catch((err)=>{
        console.error("Error fetching data:", err);
      })
  }catch{
    console.error("Error fetching data")
  }
  }



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
              value={confirm_password}
              placeholder="*********"
              className="input input-bordered w-full "
              onChange={(e) => setconfirm_password(e.target.value)} 
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
              value={codeforcesURL}
              placeholder="chetan_saini"
              className="input input-bordered w-full "
              onChange={(e) => setCodeforcesURL(e.target.value)} 
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
              value={codechefURL}
              placeholder="chetan_saini21"
              className="input input-bordered w-full "
              onChange={(e) => setCodechefURL(e.target.value)} 
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
              value={leetcodeURL}
              placeholder="chetan_saini21"
              className="input input-bordered w-full "
              onChange={(e) => setLeetcodeURL(e.target.value)} 
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
              value={atcoderURL}
              placeholder="chetan_saini12"
              className="input input-bordered w-full "
              onChange={(e) => setAtcoderURL(e.target.value)} 
            />
          </div>

          {error && 
          <div className=" error alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>{error}</span>
          </div>
}


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
