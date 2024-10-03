import { useState } from "react";
import img from "../images/registraion.jpeg";
import "../style/register.css";

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
      <div className="registerForm h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-1/2">
              <div className="shadow-xl p-6 rounded-xl register-item">
                <h2 className="text-4xl font-semibold mb-5">Registraion</h2>
                <form method="post" onSubmit={(e) => submitData(e)}>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Fisrt Name"
                      className="mr-5 mb-2"
                      name="fisrtName"
                      onChange={(e) => getValue(e)}
                    />
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="mb-2"
                      name="lastName"
                      onChange={(e) => getValue(e)}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="mr-5 my-3"
                      name="email"
                      onChange={(e) => getValue(e)}
                    />
                    <input
                      type="number"
                      placeholder="Enter Phone Number"
                      className="my-3"
                      name="number"
                      onChange={(e) => getValue(e)}
                    />
                  </div>
                  <div>
                    <select name="country" onChange={(e) => getValue(e)}>
                      <option>Select Country</option>
                      <option value={"India"}>India</option>
                      <option value={"America"}>America</option>
                      <option value={"Canada"}>Canada</option>
                      <option value={"England"}>England</option>
                      <option value={"Newzeland"}>Newzeland</option>
                    </select>
                    <select name="state" onChange={(e) => getValue(e)}>
                      <option>Select State</option>
                      <option value={"Gujarat"}>Gujarat</option>
                      <option value={"Hariyana"}>Hariyana</option>
                      <option value={"Rajasthan"}>Rajasthan</option>
                      <option value={"Bihaar"}>Bihaar</option>
                      <option value={"Mahrashtra"}>Mahrashtra</option>
                    </select>
                    <select name="city" onChange={(e) => getValue(e)}>
                      <option>Select City</option>
                      <option value={"Surat"}>Surat</option>
                      <option value={"Vadodara"}>Vadodara</option>
                      <option value={"Rajkot"}>Rajkot</option>
                      <option value={"Ahemadabad"}>Ahemadabad</option>
                      <option value={"Junagadh"}>Junagadh</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="hospital"
                      className="hospitalSelect"
                      onChange={(e) => getValue(e)}
                    >
                      <option>Select Hospital</option>
                      <option value={"Cancer Hospital"}>Cancer Hospital</option>
                      <option value={"Simimer Hospital"}>
                        Simimer Hospital
                      </option>
                      <option value={"Apple Hospital"}>Apple Hospital</option>
                      <option value={"Ram Raj Hospital"}>
                        Ram Raj Hospital
                      </option>
                      <option value={"Kiraan Hospital"}>Kiraan Hospital</option>
                    </select>
                  </div>

                  <div className="pass">
                    <input
                      type="text"
                      className="mt-2"
                      placeholder="Enter Password"
                      name="pass"
                      onChange={(e) => getValue(e)}
                    />
                  </div>
                  <div className="confirmPass">
                    <input
                      type="text"
                      className="my-5"
                      placeholder="Enter Confirm Password"
                      name="confirmPass"
                      onChange={(e) => getValue(e)}
                    />
                  </div>
                  <div className="flex items-center">
                    <input type="radio" className="radioInput ml-2" />
                    <label className="text-sm ml-1">I agree to all the <span className="text-[#5678E9] text-base font-normal">T&C</span> and <span className="text-[#5678E9] text-base font-normal">Privacy Policies</span></label>
                  </div>
                  <button type="submit" className="inline-block w-full bg-[#f6f8fb] py-3 px-4   ">Register</button>
                </form>
              </div>
            </div>
            <div className="w-1/2">
              <div className="ml-20">
              <img src={img} alt="" title="" className="h-screen" width={"w-full"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
