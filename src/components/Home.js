import React, { Component } from "react";
import RSelect from "./Rselect/rselect";
import LanguageSelect from "./Language/languageSelect";
import DropZone from "./dropzone/dropzone";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h5>Rselect</h5>
        <br />
        <RSelect />
        <br />
        <h5>Animated Select</h5>
        <br />
        <LanguageSelect />
        <br />
        <h5>Dropzone</h5>
        <br />
        <DropZone />
      </div>
    );
  }
}
