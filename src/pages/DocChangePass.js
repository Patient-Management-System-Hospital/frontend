import React from "react";
import { Link } from "react-router-dom";

const DocChangePass = () => {
  return (
    <div>
      <div className="flex h-screen">
        <aside className="w-64 bg-white shadow-md">
          <div className="p-6">
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40"
                alt="Hospital Logo"
                className="w-10 h-10"
              />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-blue-600">Hospital</h1>
                <p className="text-sm text-gray-500">Tagline here</p>
              </div>
            </div>
          </div>
          <nav className="mt-6">
            <a
              href="#"
              className="flex items-center px-6 py-2 text-gray-700 hover:bg-blue-100"
            >
              <i className="fas fa-tachometer-alt"></i>
              <span className="ml-3">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-2 text-gray-700 hover:bg-blue-100"
            >
              <i className="fas fa-user-md"></i>
              <span className="ml-3">Doctor Management</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-2 text-gray-700 hover:bg-blue-100"
            >
              <i className="fas fa-users"></i>
              <span className="ml-3">Patient Management</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-2 text-gray-700 hover:bg-blue-100"
            >
              <i className="fas fa-file-invoice-dollar"></i>
              <span className="ml-3">Billing And Payments</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-2 text-gray-700 hover:bg-blue-100"
            >
              <i className="fas fa-chart-line"></i>
              <span className="ml-3">Reporting And Analytics</span>
            </a>
          </nav>
          <div className="mt-auto">
            <a
              href="#"
              className="flex items-center px-6 py-2 text-red-600 hover:bg-red-100"
            >
              <i className="fas fa-sign-out-alt"></i>
              <span className="ml-3">Logout</span>
            </a>
          </div>
        </aside>
        <main className="flex-1 bg-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div className="text-gray-600">
              <a href="#" className="text-gray-500">
                Profile Setting
              </a>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Quick Search"
                className="px-4 py-2 border rounded-md"
              />
              <i className="fas fa-search ml-2 text-gray-500"></i>
              <div className="ml-6 flex items-center">
                <img
                  src="https://placehold.co/40x40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-gray-700">Lincoln Philips</p>
                  <p className="text-sm text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">
              Profile Setting
            </h2>
            <div className="flex mt-6">
              <div className="w-1/3">
                <div className="flex flex-col items-center">
                  <img
                    src="https://placehold.co/100x100"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full"
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    Lincoln Philips
                  </h3>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold">Menu</h4>
                  <ul className="mt-4">
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md">
                      <i className="fas fa-user"></i>
                      <Link to={"/dashboard"} className="ml-3">
                        Profile
                      </Link>
                    </li>
                    <li className="flex items-center px-4 py-2 text-blue-600 bg-blue-100 rounded-md">
                      <i className="fas fa-lock"></i>
                      <Link to={"/changePass"} className="ml-3">
                        Change Password
                      </Link>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md">
                      <i className="fas fa-file-alt"></i>
                      <Link to={"/terms"} className="ml-3">
                        Terms & Condition
                      </Link>
                    </li>
                    <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md">
                      <i className="fas fa-shield-alt"></i>
                      <Link to={"/privacy"} className="ml-3">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-2/3 ml-6">
                <h3 className="text-xl font-semibold">Change Password</h3>
                <p className="mt-2 text-gray-600">
                  To change your password, please fill in the fields below. Your
                  password must contain at least 8 characters, it must also
                  include at least one upper case letter, one lower case letter,
                  one number and one special character.
                </p>
                <form className="mt-6">
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter Current Password"
                        className="w-full px-4 py-2 border rounded-md"
                      />
                      <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">New Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter New Password"
                        className="w-full px-4 py-2 border rounded-md"
                      />
                      <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter Confirm Password"
                        className="w-full px-4 py-2 border rounded-md"
                      />
                      <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-md"
                  >
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocChangePass;
