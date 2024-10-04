
import Navbar from "./componets/Navbar";
import Forget from "./pages/Forget";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ResetPassword from "./pages/ResetPassword";
import DashBoard from "./pages/DashBoard";

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
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
