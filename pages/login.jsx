import React from "react";
import { setLogin } from "../utils/Isauth";
import { useRouter } from "next/router";
import { Sign_Up_Page } from "@/utils/Constants";
import Link from "next/link";

const Login = () => {
  return (
    <div id="login">
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
              placeholder="chetan_saini"
              className="input input-bordered w-full "
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
              placeholder="*********"
              className="input input-bordered w-full "
            />
          </div>
          <button className="btn btn-outline btn-success">Login</button>
          <Link href={Sign_Up_Page} >
            <span className="signup">New user? - Sign Up</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
