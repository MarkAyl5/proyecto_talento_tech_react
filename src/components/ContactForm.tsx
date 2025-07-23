import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div className="max-w-lg mx-auto my-16 bg-white rounded-lg shadow-lg p-8">
      <h2 className="font-poppins text-2xl font-bold mb-6 text-center">Contactanos</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-1 font-poppins">
          Nombre
          <input className="border p-2 rounded" required />
        </label>
        <label className="flex flex-col gap-1 font-poppins">
          Email
          <input type="email" className="border p-2 rounded" required />
        </label>
        <label className="flex flex-col gap-1 font-poppins">
          Mensaje
          <textarea className="border p-2 rounded" rows={4} required />
        </label>
        <button className="bg-strongblue text-white px-8 py-3 rounded font-poppins mt-2" type="submit">Enviar</button>
      </form>
    </div>
  );
} 