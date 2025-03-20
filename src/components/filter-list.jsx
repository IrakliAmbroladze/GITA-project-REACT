/* eslint-disable react/prop-types */
const FilterList = ({ list }) => (
  <ul>
    {list.length == 0 ? (
      <li>No match found.</li>
    ) : (
      list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />)
    )}
  </ul>
);

const Item = ({ name, department }) => (
  <li>
    {department} - {name}
  </li>
);

export default FilterList;
