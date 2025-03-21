/* eslint-disable react/prop-types */

const SortEmployees = ({ onClick, sortModal, employees }) => {
  return (
    <div>
      <button onClick={onClick}>Sort</button>
      {sortModal && (
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
  );
};

export default SortEmployees;
