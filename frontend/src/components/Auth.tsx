import { useState } from "react"
import Register from "./register"
import Login from "./Login"


export default function Auth() {
  const [showLogin, setShowLogin] = useState(true)
  const [status, setStatus] = useState<null | boolean>(null)

  return (
    <div className="container">
      <h2>{showLogin ? "Login" : "Register"} Page</h2>

      <button onClick={() => { setShowLogin(true); setStatus(null) }}>Login</button>
      <button onClick={() => { setShowLogin(false); setStatus(null) }}>Register</button>

      {showLogin ? (
        <Login onLoginStatus={setStatus} />
      ) : (
        <Register onRegisterStatus={setStatus} />
      )}

      {status === true && <p>Success!</p>}
      {status === false && <p>Failed. Try again.</p>}
    </div>
  )
}
