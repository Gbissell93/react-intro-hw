import React, { Component } from "react";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "purple",
      redButton: "red",
      blueButton: "blue",
      greenButton: "green",
    };
  }

  handleChangeSidebarColor = (color) => {
    this.setState({
      backgroundColor: color,
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          width: "20%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <li>
            <button
              onClick={() => {
                this.setState({
                  backgroundColor: "red",
                });
              }}
            >
              Red
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.setState({
                  backgroundColor: "blue",
                });
              }}
            >
              Blue
            </button>
          </li>
          <li>
            <button
              color={this.state.greenButton}
              onClick={() => {
                this.setState({
                  backgroundColor: "green",
                });
              }}
            >
              Green
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default Sidebar;
