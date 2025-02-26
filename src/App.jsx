import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    // setFormData({ ...formData, [e.target.id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      GITA REACT
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="address">address: </label>
        <input
          type="file"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
