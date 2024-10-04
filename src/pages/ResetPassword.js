import React from "react";
import img from "../images/Group 1116602997.png";

const ResetPassword = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Reset Password
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="new-password"
              >
                New Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="new-password"
                  type="password"
                  placeholder="Enter New Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Enter Confirm Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>
            <button
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Reset Password
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-gray-50 flex items-center justify-center relative">
          <div className="text-center">
            <div className="mb-4">
              <img
                src={img}
                alt="Illustration of a person using medical technology"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
