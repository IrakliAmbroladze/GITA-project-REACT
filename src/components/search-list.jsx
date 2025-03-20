/* eslint-disable react/prop-types */
const List = ({ list }) => (
  <ul>
    {list.length == 0 ? (
      <li>No match found.</li>
    ) : (
      list.map(({ department, name, role }, index) => (
        <li key={index}>
          {name} - {department} - {role}
        </li>
      ))
    )}
  </ul>
);

export default List;
