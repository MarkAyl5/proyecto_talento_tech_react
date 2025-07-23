import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      login("admin");
      navigate("/");
    } else if (username && password) {
      login("user");
      navigate("/");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <h1 className="font-poppins text-3xl font-bold">Iniciar sesión</h1>
      <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-1 font-poppins">
          Usuario
          <input className="border p-2" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1 font-poppins">
          Contraseña
          <input type="password" className="border p-2" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        {error && <p className="text-red-500 font-poppins text-sm">{error}</p>}
        <button className="bg-strongblue text-white px-8 py-3 rounded font-poppins mt-2" type="submit">Ingresar</button>
      </form>
      <div className="flex flex-col gap-2 mt-4 text-center">
        <p className="text-sm text-gray-500">Para acceder como admin usa:<br/> <b>admin</b> / <b>admin123</b></p>
        <p className="text-sm text-gray-500">Cualquier otro usuario y contraseña será usuario normal.</p>
      </div>
    </div>
  );
} 