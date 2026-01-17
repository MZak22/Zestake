import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topmenu from "./components/Topmenu";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
    <Topmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLoginStatus={() => {}} />} />
        <Route path="/register" element={<Register onRegisterStatus={() => {}} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
