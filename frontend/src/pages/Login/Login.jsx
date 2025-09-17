import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";

import { loginWithEmail, signInWithGoogle } from "../../features/auth/authAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(dispatch, email, password);
      navigate("/dashboard"); // register success hole home e pathabe
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle(dispatch); // helper call kore Redux e user set hobe
      navigate("/"); // login successful hole home e pathano
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };
  // try {
  //   const result = await signInWithPopup(auth, provider);
  //   dispatch(setUser(result.user)); // redux এ user save
  //   navigate("/");
  // } catch (error) {
  //   console.error("Google login failed:", error.message);
  // }

  return (
    <div
      className="min-h-screen relative flex justify-center items-center"
      style={{
        // backgroundImage: `url(${pic4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative md:flex gap-4 p-6 rounded-2xl bg-[#0f1729]">
        {/* <div className="relative">
          <img
            className="w-[450px] h-full rounded-xl object-cover"
            // src={pic1}
            alt=""
          />
        </div> */}

        <div className="card bg-[#0f1729] w-full max-w-sm py-10">
          <h1 className="text-4xl text-[#FFFEFF] ml-7 mt-2">
            Login Your Account
          </h1>

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered w-full mb-2"
                required
              />
              <label className="text-base text-white hover:text-gray-400">
                <Link to="/forgetPass" className="link">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-4 flex justify-center">
              <button className="btn bg-blue-600 w-full border-none text-white hover:bg-blue-700">
                Login
              </button>
            </div>
          </form>

          <p className="text-white ml-6">
            Don't have an account? <NavLink to="/register">Register</NavLink>
          </p>

          <div className="divider divider-warning py-4 text-[#D0CFD1]">
            OR register with
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="text-lg btn w-5/6 mx-auto bg-[#2B2738] text-[#D0CFD1] hover:text-black"
          >
            <FcGoogle className="" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
