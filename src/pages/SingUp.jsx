import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, singUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await singUp(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-full h-screen text-white">
        <img
          className="hidden sm:block absolute w-full h-full object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/ab839420-28fa-41a0-80cf-c03b3b45903e/BR-pt-20230306-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold ">Sing Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  className="p-3 my-4 bg-gray-600 rounded"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className="p-3 my-4 bg-gray-600 rounded"
                />
                  <Link  className="bg-red-600 rounded text-white font-bold py-3 my-6 text-center" to="/">
                <button>
                    Sing Up
                </button>
                    </Link>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="" /> Remember me{" "}
                  </p>
                  <p className="">Need Help?</p>
                </div>
                <div className="flex my-6">
                  <p className="text-gray-600">Already subscribed Netflix?</p>
                  <span>
                    <Link to="/logIn">Sing In.</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
