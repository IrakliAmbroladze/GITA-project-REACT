import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: null,
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="text-3xl p-5">GITA REACT</div>
      <form onSubmit={handleSubmit} className="flex flex-col p-5">
        <label htmlFor="name">name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md"
        />
        <br />
        <label htmlFor="email">email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md"
        />
        <br />
        <label htmlFor="address">upoad proof of address: </label>
        <input
          type="file"
          id="address"
          name="address"
          onChange={handleChange}
        />
        {formData.address && (
          <div className="flex justify-center">
            <img
              src={URL.createObjectURL(formData.address)}
              alt="Preview"
              className="mt-2 h-20 rounded w-40 h-40 "
            />
          </div>
        )}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
