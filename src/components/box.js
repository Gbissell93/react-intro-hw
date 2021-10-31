import React, { Component } from "react";

export class Box extends Component {
  render() {
    return (
      <div
        style={{
          height: "250px",
          width: "250px",
          backgroundImage: `url(${this.props.bg})`,
        }}
      ></div>
    );
  }
}

export default Box;
