/* eslint-disable react/prop-types */

const AddEmployee = ({ onClick, addEmployeeModal }) => {
  return (
    <div>
      <button onClick={onClick}>Add New Employee</button>
      {addEmployeeModal && (
        <div className="fixed">This is to Add a New Customer</div>
      )}
    </div>
  );
};

export default AddEmployee;
