import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header style={{ backgroundColor: "blue", height: "50px" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>
          {this.props.name}
        </h1>
      </header>
    );
  }
}
export default Header;
