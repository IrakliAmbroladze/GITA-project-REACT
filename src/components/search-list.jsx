/* eslint-disable react/prop-types */
const List = ({ list }) => (
  <ul>
    {list.length == 0 ? (
      <li>No match found.</li>
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

export default List;
