import Navbar from "./componets/Navbar";
import Forget from "./pages/Forget";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ResetPassword from "./pages/ResetPassword";
import DashBoard from "./pages/DashBoard";
import EditProfile from "./pages/EditProfile";
import ChangePass from "./pages/ChangePass";
import TermCondition from "./pages/TermCondition";
import Privacy from "./pages/Privacy";
import DoctorManagement from "./pages/DoctorManagement";
import AddDoctor from "./pages/AddDoctor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetPass" element={<Forget/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/reset" element={<ResetPassword/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/edit" element={<EditProfile/>}/>
        <Route path="/changePass" element={<ChangePass/>}/>
        <Route path="/terms" element={<TermCondition/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/doctorMangement" element={<DoctorManagement/>}/>
        <Route path="/addDoc" element={<AddDoctor/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
