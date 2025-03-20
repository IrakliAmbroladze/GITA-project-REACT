/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FetchEmplyees } from "./utils/fetch-all-data";
import "./App.css";

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch}
      className="border"
    />
  </div>
);

function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || "React"
  );

  const [employees, setEmployees] = useState([]);
  const [listOpen, setListOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
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

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const List = ({ list }) => (
    <ul>
      {list.length == 0 ? (
        <li>no data</li>
      ) : (
        list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />)
      )}
    </ul>
  );

  const Item = ({ name, department, role }) => (
    <li>
      {name} - {department} - {role}
    </li>
  );

  const handleListClick = () => {
    sortOpen && setSortOpen((prev) => !prev);
    setListOpen((prev) => !prev);
  };
  const handleSortClick = () => {
    listOpen && setListOpen((prev) => !prev);
    setSortOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="text-3xl p-5">GITA REACT</div>
      <div className="flex gap-60">
        <div>
          <button onClick={handleListClick}>List</button>
          {listOpen && (
            <ul className="fixed">
              {employees.map((employee, index) => (
                <li key={index}>
                  {employee.name} - {employee.department} - {employee.role}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button onClick={handleSortClick}>Sort</button>
          {sortOpen && (
            <ul className="fixed">
              {employees
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((employee, index) => (
                  <li key={index}>
                    {employee.name} - {employee.department} - {employee.role}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div>
          <Search search={searchTerm} onSearch={handleSearch} />
          <List list={searchedEmployees} />
        </div>
      </div>
    </div>
  );
}

export default App;
