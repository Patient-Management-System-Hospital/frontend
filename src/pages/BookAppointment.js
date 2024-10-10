import React, { useEffect, useState } from "react";
import Frame from "../images/Frame 1116602772.png";
import axios from "axios";
import ObjectImg from "../images/OBJECTS.png";

const BookAppointment = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [hospitalData, setHospitalData] = useState([]);

  useEffect(() => {
    getDoctors();
    getHospital();
  }, []);

  const getDoctors = async () => {
    const res = await axios.get("http://localhost:3000/doctor");
    setDoctorData(res.data);
  };

  const getHospital = async () => {
    const res = await axios.get("http://localhost:3000/hopital");
    setHospitalData(res.data);
  };

  console.log(doctorData, hospitalData);

  return (
    <div>
      <div className="flex h-screen">
        <div className="w-64 h-full">
          <aside className="w-full bg-white shadow-md h-auto">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/40x40"
                  alt="Hospital Logo"
                  className="mr-2"
                />
                <div>
                  <h1 className="text-xl font-bold text-blue-500">Hospital</h1>
                  <p className="text-sm text-gray-500">tagline here</p>
                </div>
              </div>
            </div>
            <nav className="mt-6">
              <ul>
                <li className="flex items-center p-3 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-file-medical-alt mr-3"></i>
                  <span>Personal Health Record</span>
                </li>
                <li className="flex items-center p-3 text-gray-700 bg-blue-100">
                  <i className="fas fa-calendar-alt mr-3"></i>
                  <span>Appointment Booking</span>
                </li>
                <li className="flex items-center p-3 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-prescription-bottle-alt mr-3"></i>
                  <span>Prescription Access</span>
                </li>
                <li className="flex items-center p-3 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-video mr-3"></i>
                  <span>Teleconsultation Access</span>
                </li>
                <li className="flex items-center p-3 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-comments mr-3"></i>
                  <span>Chat</span>
                </li>
                <li className="flex items-center p-3 text-gray-700 hover:bg-blue-100">
                  <i className="fas fa-file-invoice-dollar mr-3"></i>
                  <span>Bills</span>
                </li>
              </ul>
            </nav>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
              <img src={ObjectImg} alt="Appointment Icon" className="mb-a inline-block" />
              <h2 className="text-lg font-bold">Hospital appointment</h2>
              <p className="text-sm text-gray-500 mb-4">
                You have to fill up the form to be admitted to the hospital.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Appointment
              </button>
            </div>
            <div className="p-6">
              <button className="w-full bg-red-500 text-white py-2 rounded-lg">
                Logout
              </button>
            </div>
          </aside>
        </div>
        <main className="flex-1 p-6">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center text-gray-500">
              <i className="fas fa-home mr-2"></i>
              <span>Appointment Booking</span>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Quick Search"
                className="border border-gray-300 rounded-lg py-2 px-4 mr-4"
              />
              <div className="relative">
                <i className="fas fa-bell text-gray-500"></i>
                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="flex items-center ml-4">
                <img
                  src="https://placehold.co/40x40"
                  alt="User Avatar"
                  className="rounded-full mr-2"
                />
                <div>
                  <h2 className="text-sm font-semibold">Lincoln Philips</h2>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </header>
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Appointment Booking</h2>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-gray-700">Specialty</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Specialty</option>
                  {doctorData.map((v, i) => {
                    return (
                      <>
                        <option value={v.Specialty_type}>
                          {v.Specialty_type}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Country</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Country</option>
                  <option value={"India"}>India</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">State</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select State</option>
                  <option className="Gujarat">Gujarat</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select City</option>
                  <option value={"Surat"}>Surat</option>
                  <option value={"Ahemadabad"}>Ahemadabad</option>
                  <option value={"Rajkot"}>Rajkot</option>
                  <option value={"Vadodara"}>Vadodara</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Hospital</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Hospital</option>
                  {hospitalData.map((v, i) => {
                    return (
                      <>
                        <option value={v.hospitalName}>{v.hospitalName}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Doctor</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Doctor</option>
                  {doctorData.map((v, i) => {
                    return (
                      <>
                        <option value={v.name}>{v.name}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Appointment Type</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-4">
                  <option>Select Appointment Type</option>
                  <option value={"Online"}>Online</option>
                  <option value={"Offline"}>Online</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                src={Frame}
                alt="No Appointment Illustration"
                className="mb-4 w-72 h-auto object-cover"
              />
              <p className="text-gray-500">No Appointment Found Yet</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BookAppointment;
