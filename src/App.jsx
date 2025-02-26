import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!formData.address) return;

    const objectUrl = URL.createObjectURL(formData.address);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [formData.address]);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md"
          aria-label="Enter your name"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md"
          aria-label="Enter your email"
        />
        <br />
        <label htmlFor="address">Upload proof of address:</label>
        <input
          type="file"
          id="address"
          name="address"
          accept="image/*"
          onChange={handleChange}
        />
        {preview && (
          <div className="flex justify-center">
            <img
              src={preview}
              alt="Address Preview"
              className="mt-2 w-40 h-40 rounded"
            />
          </div>
        )}
        <br />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
