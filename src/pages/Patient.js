import React, { useState } from "react";
import img from "../images/Group 1116603021.png";
import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";

const Patient = () => {
    
    const [patientData,setPatientData]= useState({})
    const [showPassword, setShowPassword] = useState(false);

  const getPatientValue = (e)=>{
    const  name = e.target.name;
    const value = e.target.value;
    setPatientData({...patientData,[name]:value});
  }

  const submitData = (e)=>{
    e.preventDefault()
    console.log(patientData)
    try{
      axios.post("http://localhost:3000/patientData",patientData )
      alert("data Added Successfully  ")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <div class="flex justify-center items-center min-h-screen">
        <div class="bg-white shadow-md rounded-lg p-8 w-full flex">
          <div class="w-1/2 pr-8">
            <h2 class="text-2xl font-semibold mb-6">Registration</h2>
            <form class="space-y-4" onSubmit={(e)=>submitData(e)}>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    First Name<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    onChange={(e)=>getPatientValue(e)}
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Last Name<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    onChange={(e)=>getPatientValue(e)}
                  />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Email Address<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    onChange={(e)=>getPatientValue(e)}
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Phone Number<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="number"
                    placeholder="Enter Phone Number"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    onChange={(e)=>getPatientValue(e)}
                  />
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Age<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter Age"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    onChange={(e)=>getPatientValue(e)}
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Height (cm)<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="height"
                    placeholder="Enter Height"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    onChange={(e)=>getPatientValue(e)}
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Weight (Kg)<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="weight"
                    placeholder="Enter Weight"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    onChange={(e)=>getPatientValue(e)}
                  />
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Gender<span class="text-red-500">*</span>
                  </label>
                  <select name="gender" onChange={(e)=>getPatientValue(e)} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option>Select Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"other"}>Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Blood Group<span class="text-red-500">*</span>
                  </label>
                  <select name="bloodgroup" onChange={(e)=>getPatientValue(e)} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option>Select Group</option>
                    <option value={"A+"}>A+</option>
                    <option value={"A-"}>A</option>
                    <option value={"B+"}>B+</option>
                    <option value={"B-"}>B-</option>
                    <option value={"AB+"}>AB+</option>
                    <option value={"AB-"}>AB-</option>
                    <option value={"O+"}>O+</option>
                    <option value={"O-"}>O-</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Date of Birth<span class="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    onChange={(e)=>getPatientValue(e)}
                  />
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Country<span class="text-red-500">*</span>
                  </label>
                  <select name="country" onChange={(e)=>getPatientValue(e)} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option>Select Country</option>
                    <option value={"India"}>India</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    State<span class="text-red-500">*</span>
                  </label>
                  <select name="state" onChange={(e)=>getPatientValue(e)} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option>Select State</option>
                    <option value={"gujarat"}>Gujarat</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    City<span class="text-red-500">*</span>
                  </label>
                  <select name="city" onChange={(e)=>getPatientValue(e)} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option>Select City</option>
                    <option value={"Surat"}>Surat</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="add"
                  placeholder="Enter Address"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  onChange={(e)=>getPatientValue(e)}
                />
              </div>
              <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="pass"
                  className={"w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}
                  onChange={(e)=>getPatientValue(e)}
                />
                <i
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } absolute right-3 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                 type={showPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  name="ConfirmPass"
                  className={"w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}
                  onChange={(e)=>getPatientValue(e)}
                />
                <i              
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } absolute right-3 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              
            </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label class="ml-2 block text-sm text-gray-900">
                  I agree to all the{" "}
                  <a href="#" class="text-blue-600">
                    T&C
                  </a>{" "}
                  and{" "}
                  <a href="#" class="text-blue-600">
                    Privacy Policies
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white py-2 rounded-md"
              >
                Register
              </button>
              <p class="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <a href="#" class="text-blue-600">
                  Login
                </a>
              </p>
            </form>
          </div>
          <div class="w-1/2 flex justify-center items-center">
            <div class="text-center">
              <img
                src={img}
                alt="Illustration of a doctor with medical icons"
                class="mb-4"
              />
              <h2 class="text-2xl font-semibold">Hospital</h2>
              <p class="text-gray-600">
                You Can stay your Hospital and Contact With Your Facility
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
