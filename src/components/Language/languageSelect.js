import React, { Component } from "react";
import { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";

const animatedComponent = makeAnimated();
const options = [
  { value: "English", label: " English" },
  { value: "Gujarati", label: "Gujarati" },
  { value: "Hindi", label: "Hindi" },
];
const controlStyles = {
  borderRadius: "1px solid black",
  padding: "5px",
  background: "lightgrey",
  color: "white",
};
const ControlComponent = (props) => (
  <div style={controlStyles}>
    {<p>Select Languages</p>}
    <components.Control {...props} />
  </div>
);
class Hobby extends Component {
  state = {
    inputValue: [],
  };
  handleChange = (inputValue) => {
    this.setState({ inputValue });
  };
  render() {
    return (
      <div>
        <CreatableSelect
          options={options}
          placeholder="You can add more languages by typing too !"
          onChange={this.handleChange}
          value={this.state.inputValue}
          isClearable
          isSearchable
          isMulti
          components={
            ({ animation: animatedComponent }, { Control: ControlComponent })
          }
        />
      </div>
    );
  }
}

export default Hobby;
