/* eslint-disable react/prop-types */
const TextInput = ({ id, label, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}: </label>
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      className="border"
    />
  </div>
);

export default TextInput;
