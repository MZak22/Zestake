import { useState } from "react"

type Props = { onRegisterStatus: (status: boolean) => void }

export default function Register({ onRegisterStatus }: Props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleRegister(event: React.FormEvent) {
    event.preventDefault()
    const registerData = { username, password }

    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    })
      .then(res => res.json())
      .then(data => {
        onRegisterStatus(data.status === "success")
      })
  }

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label>Username:</label>
        <input value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}
