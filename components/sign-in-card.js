import React from "react";

const handleSubmit = () => {};

const SignInCard = () => {
  return (
    <div>
      <div className="flex flex-col w-80 h-96 bg-gray-100 mx-auto mt-20 rounded drop-shadow-md p-6">
        <div className="font-bold text-2xl text-gray-700 px-6 py-4">Sign In</div>
        <form className="px-6 py-8">
          <div className="my ">
            {/* <h1>Email</h1> */}
            <input className="p-2 rounded w-full" placeholder="name@example.com" />
          </div>
          <div className="my-3">
            {/* <h1>Password</h1> */}
            <input className="p-2 rounded w-full" placeholder="Password" />
          </div>
          <button
            className="w-full bg-rose-400 hover:bg-rose-500 duration-150 transition-all rounded-md text-center py-1 text-lg text-gray-700 font-bold cursor-pointer"
            type="submit"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <div className="pt-4" onClick={handleSubmit}>
            Dont have an account?{" "}
            <span className="font-semibold text-rose-400 cursor-pointer">Sign Up</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInCard;
