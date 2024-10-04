import React from 'react'
import img from "../images/Group 1116602997.png"

const Otp = () => {
  return (
    <div>
       <div className="w-full mx-auto bg-white rounded-lg shadow-lg flex items-center">
                    <div className="w-1/2 p-10">
                        <div className='bg-white p-8 rounded-lg shadow-md w-[500px] mx-9'>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Enter OTP</h2>
                        <p className="text-gray-600 mb-6">Please enter the 6 digit code that send to your phone number.</p>
                        <div className="flex space-x-2 mb-6 ">
                            <input type="text" className="w-12 h-12 border rounded-lg text-center text-xl" maxLength="1" />
                            <input type="text" className="w-12 h-12 border rounded-lg text-center text-xl" maxLength="1" />
                            <input type="text" className="w-12 h-12 border rounded-lg text-center text-xl" maxLength="1" />
                            <input type="text" className="w-12 h-12 border rounded-lg text-center text-xl" maxLength="1" />
                            <input type="text" className="w-12 h-12 border rounded-lg text-center text-xl" maxLength="1" />
                            <input type="text" className="w-12 h-12 border rounded-lg text-center text-xl" maxLength="1" />
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center text-gray-600">
                                <i className="far fa-clock mr-2"></i>
                                <span>00:30 sec</span>
                            </div>
                            <a href="#" className="text-blue-600">Resend OTP</a>
                        </div>
                        <button className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg">Verify</button>
                        </div>                   
                    </div>
                    <div className="w-1/2 bg-blue-50 p-10 relative">
                        <div className="flex flex-col items-center justify-center h-full">
                            <h1 className="text-2xl font-bold text-blue-600 mb-2">Hospital</h1>
                            <img src={img} alt="Illustration of a person using medical technology" />
                            <p className="text-gray-600 mb-6">You Can stay your Hospital and Contact With Your Facility</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Otp
