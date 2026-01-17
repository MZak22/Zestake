// import { useState } from "react"
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Register from "./Register"
// import Login from "./Login" 
// import Dashboard from "./Dashboard"
// import Topmenu from "./Topmenu";
// import Home from "./Home";


// export default function Auth() {
//   const [status, setStatus] = useState<null | boolean>(null)
//   const [view, setView] = useState<'home' | 'login' | 'register' | 'dashboard'>('home')

//   function handleLoginStatus(success: boolean) {
//     setStatus(success)

//     if (success) {
//       setView("dashboard")
//     }
//   }

//   if (view === "dashboard") {
//     return <Dashboard />
//   }
//   return (
//     <div className="container">
//       <Topmenu view={view} setView={setView} />
//           {view === "home" && <Home />}
//           {view === "login" && <Login onLoginStatus={handleLoginStatus} />}
//           {view === "register" && <Register onRegisterStatus={setStatus} />}
//       </div>
//   )
// }
