/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import TextInput from "./text-input";

const createInputComponent =
  (id, label) =>
  ({ search, onSearch }) =>
    <TextInput id={id} label={label} value={search} onChange={onSearch} />;

export const Filter = createInputComponent("filter", "Filter");
export const Search = createInputComponent("search", "Search");
