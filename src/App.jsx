import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [preview, setPreview] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA verification!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: captchaValue }),
      });

      const data = await response.json();
      if (!data.success) {
        alert("CAPTCHA verification failed! Try again.");
        return;
      }

      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error verifying CAPTCHA:", error);
      alert("Server error. Please try again.");
    }
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

        <ReCAPTCHA
          sitekey="6LeRROMqAAAAANzN4jWPVuK6MJkwN4nxcU8edBV1"
          onChange={(value) => setCaptchaValue(value)}
        />

        <br />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
