import { useState } from "react";
import img from "../assets/Group 1116603021.png";
import vector from "../assets/Vector 2.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const getValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(registerData);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">Registration</h2>
          <form method="post" onSubmit={(e)=>submitData(e)}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="FistName"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>getValue(e)}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="LastName"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>getValue(e)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>getValue(e)}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  name="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>getValue(e)}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Country<span className="text-red-500">*</span>
                </label>
                <select name="Selecct Country" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>getValue(e)}>
                  <option>Select Country</option>
                  <option value={"India"}>India</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  State<span className="text-red-500">*</span>
                </label>
                <select name="Select State" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>getValue(e)}>
                  <option>Select State</option>
                  <option value={"GUJARAT"}>Gujarat</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  City<span className="text-red-500">*</span>
                </label>
                <select name="City" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>getValue(e)}>
                  <option>Select City</option>
                  <option value={"Surat"}>Surat</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Select Hospital<span className="text-red-500">*</span>
              </label>
              <select name="Hospital" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>getValue(e)}>
                <option>Select Hospital</option>
                <option value={"Kiraan Hospitaal"}>Kiran Hosspital</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="pass"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>getValue(e)}
                />
                <i className="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter Confirm Password"
                  name="ConfirmPass"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>getValue(e)}
                />
                <i className="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2 text-sm">
                  I agree to all the{" "}
                  <a href="#" className="font-semibold text-blue-500 hover:text-blue-800">
                    T&amp;C
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-semibold text-blue-500 hover:text-blue-800">
                    Privacy Policies
                  </a>
                  .
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="font-semibold text-blue-500 hover:text-blue-800">
              Login
            </Link>
          </p>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center ml-16">
          <img
            src={img}
            alt="Illustration of a doctor with medical icons around"
            className="mb-4"
          />
          <h1 className="text-3xl font-semibold">Hospital</h1>
          <p className="text-gray-600">
            You Can stay your Hospital and Contact With Your Facility
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
