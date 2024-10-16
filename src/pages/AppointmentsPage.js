import React, { useEffect, useState } from 'react'
import Calender from '../componets/Calender';
import AppointmentList from '../componets/AppointmentList';
import axios from 'axios';


const AppointmentsPage = () => {

    const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments().then(setAppointments);
  }, []);

    const fetchAppointments = ()=>{
       return axios.get('http://localhost:3000/appointments').then((res) => res.data);
    }

  const handleDelete = (id) => {
    deleteAppointment(id).then(() => {
      setAppointments((prev) => prev.filter((a) => a.id !== id));
    });
  };

  const deleteAppointment = (id) => {
    return axios.delete(`http://localhost:3000/appointments/${id}`);
  };

  return (
    <div>
      <div>
      <Calender events={appointments} onDateClick={() => {}} />
      <AppointmentList appointments={appointments} onDelete={handleDelete} />
    </div>
    </div>
  )
}

export default AppointmentsPage
