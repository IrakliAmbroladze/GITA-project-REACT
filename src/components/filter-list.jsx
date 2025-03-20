/* eslint-disable react/prop-types */
const FilterList = ({ list }) => (
  <ul>
    {list.length == 0 ? (
      <li>No match found.</li>
    ) : (
      list.map(({ department, name }, index) => (
        <li key={index}>
          {department} - {name}
        </li>
      ))
    )}
  </ul>
);

export default FilterList;
