import { useState, useEffect } from "react";
import { FetchEmplyees } from "./utils/fetch-all-data";
import { Filter } from "./components/create-input-component";
import { Search } from "./components/create-input-component";
import ListEmployees from "./components/list-employees";
import SortEmployees from "./components/sort-employees";
import AddEmployee from "./components/add-employee";
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
  const [addFormOpen, setAddFormOpen] = useState(false);

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

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem(
      "employees",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("employees") || "[]"),
        newEmployee,
      ])
    );
  };

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
    addFormOpen && setAddFormOpen((prev) => !prev);
    setListOpen((prev) => !prev);
  };
  const handleSortClick = () => {
    listOpen && setListOpen((prev) => !prev);
    addFormOpen && setAddFormOpen((prev) => !prev);
    setSortOpen((prev) => !prev);
  };
  const handleFormClick = () => {
    listOpen && setListOpen((prev) => !prev);
    sortOpen && setSortOpen((prev) => !prev);
    setAddFormOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="text-3xl p-5 text-center mb-5">GITA REACT</div>
      <div className="flex justify-between">
        <div className="flex gap-6">
          <ListEmployees
            onClick={handleListClick}
            listModal={listOpen}
            employees={employees}
          />
          <SortEmployees
            onClick={handleSortClick}
            sortModal={sortOpen}
            employees={employees}
          />
        </div>
        <AddEmployee
          onClick={handleFormClick}
          addEmployeeModal={addFormOpen}
          onAdd={addEmployee}
        />
        <div className="flex gap-6">
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
    </div>
  );
}

export default App;
