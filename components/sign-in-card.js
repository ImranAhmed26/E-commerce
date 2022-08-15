import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SignInCard = () => {
  const baseURL = "https://idbdev.com/motion2/public/api/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post(baseURL, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("response is: ", response.data);
      });
  };

  console.log(email, password);

  return (
    <div>
      <div className="flex flex-col w-80 h-96 bg-gray-100 mx-auto mt-20 rounded drop-shadow-md p-6">
        <div className="font-bold text-2xl text-gray-700 px-6 py-4">Sign In</div>
        <form className="px-6 py-8">
          <div className="my ">
            <input
              className="p-2 rounded w-full"
              type="text"
              placeholder="name@example.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="my-3">
            <input
              className="p-2 rounded w-full"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
            />
          </div>
          <button
            className="w-full bg-rose-400 hover:bg-rose-500 duration-150 transition-all rounded-md text-center py-1 text-lg text-gray-700 font-bold cursor-pointer"
            // type="submit"
            onClick={((event) => event.preventDefault(), handleSubmit)}
          >
            Sign In
          </button>
          <div className="pt-4">
            Dont have an account?{" "}
            <span className="font-semibold text-rose-400 cursor-pointer">Sign Up</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInCard;
