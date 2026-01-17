import { useState } from "react"
import { useNavigate } from "react-router-dom"

type Props = { onLoginStatus: (status: boolean) => void }

export default function Login({ onLoginStatus }: Props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(""); // do komunikatu o błędzie
  const navigate = useNavigate(); // hook do przekierowania

  function handleLogin(event: React.FormEvent) {
    event.preventDefault()
    const loginData = { username, password }

    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(data => {
        const success = data.status === "success";
        onLoginStatus(success);

        if (success) {
          navigate("/dashboard"); // ✅ przekierowanie po poprawnym logowaniu
        } else {
          setError("Niepoprawny login lub hasło");
        }
      })
      .catch(() => setError("Błąd połączenia z serwerem"));
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  )
}
