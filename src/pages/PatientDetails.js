import React from 'react'

const PatientDetails = () => {
  return (
    <div>
      <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-6">
        <div className="text-2xl font-bold text-blue-600 mb-10">Hospital</div>
        <nav className="space-y-6">
          <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
            Personal Health Record
          </a>
          <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
            Appointment Booking
          </a>
          <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
            Prescription Access
          </a>
          <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
            Teleconsultation Access
          </a>
          <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
            Chat
          </a>
          <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
            Bills
          </a>
        </nav>

        <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg">
          Appointment
        </button>

        <button className="mt-auto w-full bg-red-500 text-white py-2 rounded-md mt-4">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 bg-gray-50 overflow-y-auto">
        {/* Patient Details */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Patient Details</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Edit Profile</button>
          </div>
          <div className="flex mt-4 space-x-10">
            <img
              className="w-24 h-24 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Patient"
            />
            <div className="flex-1 grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
              <div><span className="font-semibold">Name: </span>Marcus Philips</div>
              <div><span className="font-semibold">Number: </span>99130 44537</div>
              <div><span className="font-semibold">Email: </span>John@gmail.com</div>
              <div><span className="font-semibold">Gender: </span>Male</div>
              <div><span className="font-semibold">Height (cm): </span>160</div>
              <div><span className="font-semibold">Weight (Kg): </span>50</div>
              <div><span className="font-semibold">DOB: </span>2 Jan, 2022</div>
              <div><span className="font-semibold">Age: </span>20 Years</div>
              <div><span className="font-semibold">Blood Group: </span>B+</div>
              <div><span className="font-semibold">City: </span>Ahmedabad</div>
              <div><span className="font-semibold">State: </span>Gujarat</div>
              <div><span className="font-semibold">Address: </span>B-408 Swastik society, Mota Varacha, Rajkot</div>
            </div>
          </div>
        </div>

        {/* Medical History */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Medical History</h2>
            <a href="#" className="text-blue-500 hover:underline">View All History</a>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {/* History Cards */}
            {['Dulce Schleifer', 'Dulce Workman', 'Miracle Septimus'].map((name, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-600 text-sm">2 Jan, 2022</p>
                <p className="text-gray-700 mt-2">Patient Issue</p>
                <p className="text-sm text-gray-500 mt-1">Lorem Ipsum is the standard dummy text since the 1500s...</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prescriptions */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Prescriptions</h2>
            <a href="#" className="text-blue-500 hover:underline">View All Prescriptions</a>
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="px-4 py-2">Hospital Name</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Disease Name</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { hospital: "Apollo Hospitals", date: "2 Jan, 2022", disease: "Colds and Flu" },
                { hospital: "Medanta The Medicity", date: "2 Jan, 2022", disease: "Allergies" },
                { hospital: "Manipal Hospitals", date: "2 Jan, 2022", disease: "Diarrhea" }
              ].map((prescription, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{prescription.hospital}</td>
                  <td className="px-4 py-2">{prescription.date}</td>
                  <td className="px-4 py-2">{prescription.disease}</td>
                  <td className="px-4 py-2">
                    <button className="text-blue-500 hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Test Reports */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Test Reports</h2>
            <a href="#" className="text-blue-500 hover:underline">View All Reports</a>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {/* Report Cards */}
            {['Dr. Marcus Philips', 'Dr. Zaire Saris', 'Dr. Ryan Carder'].map((doctor, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{doctor}</h3>
                <p className="text-gray-600 text-sm">2 Jan, 2022</p>
                <p className="text-sm text-gray-500 mt-1">Diseases: Viral Infection</p>
                <p className="text-green-500 font-semibold mt-2">Pathology Test</p>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Status */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Patient Status</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-hospital"></i>
              </div>
              <div>
                <h3 className="font-semibold">Shamuba Hospital</h3>
                <p className="text-sm text-gray-500">2 Jan, 2022</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PatientDetails
