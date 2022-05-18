import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

/**
 * This is basic  dropdown list component
 */
export default function ListDropDown({
  label,
  list,
  selectedOptions,
  setSelectedOptions,
  isMulti,
  maxMenuHeight,
}) {
  const styles = {
    menuList: (base) => ({
      ...base,
      color: "black",
    }),
  };
  return (
    <div htmlFor={label} style={{ maxHeight: "200px" }}>
      {label}
      <Select
        styles={styles}
        isClearable
        value={selectedOptions}
        maxMenuHeight={maxMenuHeight}
        isMulti={isMulti}
        components={animatedComponents}
        onChange={setSelectedOptions}
        options={list}
      />
    </div>
  );
}
