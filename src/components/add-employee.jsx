/* eslint-disable react/prop-types */
import { useState } from "react";

const AddEmployee = ({ onAdd, onClick, addEmployeeModal }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !department || !role) return;
    onAdd({ name, department, role });
    setName("");
    setDepartment("");
    setRole("");
    setMessage("success!");
    setTimeout(() => setMessage(""), 1000);
  };

  return (
    <div>
      <button onClick={onClick}>Add New Employee</button>
      {addEmployeeModal && (
        <div className="fixed">
          <form onSubmit={handleSubmit} className="flex flex-col mt-5 gap-5">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
          {message && (
            <p className="mt-3 text-center text-green-500">{message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AddEmployee;
