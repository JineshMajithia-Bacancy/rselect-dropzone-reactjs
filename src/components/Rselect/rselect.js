import React, { Component } from "react";
import Select from "react-select";

const optionsTech = [
  { value: "Apple", label: "Apple" },
  { value: "Banana", label: "Banana" },
  { value: "Orange", label: "Orange" },
  { value: "Mango", label: "Mango" },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "2px solid black",
    color: state.isSelected ? "black" : "darkgrey",
  }),
  control: (styles) => ({ ...styles, backgroundColor: "lightgrey" }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.3 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
};

class rSelect extends Component {
  state = {
    inputValue: null,
  };
  handleChange = (inputValue) => {
    this.setState({ inputValue });
  };
  render() {
    return (
      <div>
        <Select
          placeholder="Select a fruit"
          options={optionsTech}
          onChange={this.handleChange}
          value={this.state.inputValue}
          styles={customStyles}
          autoFocus
          isSearchable
        />
      </div>
    );
  }
}

export default rSelect;
