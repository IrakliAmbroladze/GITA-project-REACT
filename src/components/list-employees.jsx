/* eslint-disable react/prop-types */

const ListEmployees = ({ onClick, listModal, employees }) => {
  return (
    <div>
      <button onClick={onClick}>List</button>
      {listModal && (
        <ul className="fixed">
          {employees.map((employee, index) => (
            <li key={index}>
              {employee.name} - {employee.department} - {employee.role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListEmployees;
