import React from "react";
import img from "../assets/Group 1116603021.png"
import { Link } from "react-router-dom";

const Login = () => {
  const getValue = () => {};

  const submitData = () => {};

  return (
    <>
      <div className="flex h-screen">
                    <div className="w-1/2 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-md w-auto">
                            <h2 className="text-2xl font-semibold mb-6">Login</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                        Email or Phone<span className="text-red-500">*</span>
                                    </label>
                                    <input className="shadow appearance-none border rounded w-[550px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter Email or Phone Number" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                        Password<span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" />
                                        <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <label className="flex items-center text-sm">
                                        <input className="mr-2 leading-tight" type="checkbox" />
                                        <span className="text-gray-700">Remember me</span>
                                    </label>
                                    <Link to={"/forgetPass"} className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800" >
                                        Forgot password ?
                                    </Link>
                                </div>
                                <div className="mb-4">
                                    <button  className="w-full bg-blue-500 font-semibold text-white py-2 rounded-md hover:bg-blue-600" type="button">
                                        Login
                                    </button>
                                </div>
                                <div className="text-center">
                                    <span className="text-gray-700">Don’t have an account ? </span>
                                    <Link to={"/"} className="font-semibold text-blue-500 hover:text-blue-800">Registration</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-1/2 bg-blue-50 flex items-center justify-center relative">
                        <div className="text-center">
                            <img src={img} alt="Illustration of a doctor with medical icons" className="mb-6" />
                            <h1 className="text-3xl font-semibold text-gray-800 mb-2">Hospital</h1>
                            <p className="text-gray-600 mb-4">You Can stay your Hospital and Contact With Your Facility</p>
                            <div className="flex justify-center">
                                <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  );
};

export default Login;
