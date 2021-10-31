import React, { Component } from "react";
import Sidebar from "./sideNav";
import Body from "./body";
class FlexBox extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Sidebar />
        <Body />
      </div>
    );
  }
}
export default FlexBox;
