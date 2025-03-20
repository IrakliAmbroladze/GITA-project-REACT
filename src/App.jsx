import { useState, useEffect } from "react";
import { FetchEmplyees } from "./utils/fetch-all-data";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [listOpen, setListOpen] = useState(false);
  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setEmployees(await FetchEmplyees());
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    loadEmployees();
  }, []);

  const handleListClick = () => {
    setListOpen(() => !listOpen);
  };

  return (
    <div>
      <div className="text-3xl p-5">GITA REACT</div>
      <div>
        <button onClick={handleListClick}>List</button>
        {listOpen && (
          <ul>
            {employees.map((employee, index) => (
              <li key={index}>
                {employee.name} - {employee.department} - {employee.role}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
