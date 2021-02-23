import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./dropzone.css";
class Basic extends Component {
  state = {
    files: [],
    disabled: false,
  };
  onDrop = (files) => {
    this.setState({ files }, console.log(files));
  };

  render() {
    const files = this.state.files.map((file) => (
      <li key={file.name} style={{ color: "green", padding: "3px" }}>
        {file.name} - {file.size} bytes
      </li>
    ));
    return (
      <Dropzone
        onDrop={this.onDrop}
        accept="image/png, image/jpg, image/jpeg, image/bmp, image/gif"
        maxFiles="3"
        multiple
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <section>
            <div {...getRootProps()} className="main">
              <input {...getInputProps()} />
              {!isDragActive && "Click here or drop a file to upload !"}
              {isDragActive && !isDragReject && "Drop it like it's hot !"}
              {isDragReject && "File type not accepted, sorry!"}
              <br />
            </div>
            <aside>
              <br />
              <h5>Files you uploaded.</h5>
              <ol>{files}</ol>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default Basic;
