import { useState, useEffect } from "react";
import { FetchEmplyees } from "./utils/fetch-all-data";
import { Filter } from "./components/create-input-component";
import { Search } from "./components/create-input-component";
import FilterList from "./components/filter-list";
import List from "./components/search-list";
import "./App.css";

function App() {
  const getLocalStorage = (key) => localStorage.getItem(key) || "";

  const [searchTerm, setSearchTerm] = useState(getLocalStorage("search"));
  const [filterTerm, setFilterTerm] = useState(getLocalStorage("filter"));
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
    const storageItems = { search: searchTerm, filter: filterTerm };

    Object.entries(storageItems).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }, [searchTerm, filterTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFilter = (event) => {
    setFilterTerm(event.target.value);
  };

  const searchedEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredEmployees = employees.filter((employee) =>
    employee.department.toLowerCase().includes(filterTerm.toLowerCase())
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
      <div className="text-3xl p-5 text-center mb-5">GITA REACT</div>
      <div className="flex gap-6">
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
          {searchTerm != "" && <List list={searchedEmployees} />}
        </div>
        <div>
          <Filter search={filterTerm} onSearch={handleFilter} />
          {filterTerm != "" && <FilterList list={filteredEmployees} />}
        </div>
      </div>
    </div>
  );
}

export default App;
