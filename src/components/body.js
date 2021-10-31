import React, { Component } from "react";
import Box from "./Box";
export class Body extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: "100%",
          padding: "0 30px",
          backgroundColor: "lightgray",
        }}
      >
        <Box
          style={{ alignSelf: "center" }}
          bg="https://source.unsplash.com/random/250x250"
        />
        <p>
          Randomly selected image from unsplash api above. <br />
          Enjoy random earth, wind, and fire themed images below
        </p>
        <div style={{ display: "flex" }}>
          <Box bg="https://source.unsplash.com/random/250x250/?earth" />
          <Box bg="https://source.unsplash.com/random/250x250/?wind" />
          <Box bg="https://source.unsplash.com/random/250x250/?fire" />
        </div>
      </div>
    );
  }
}

export default Body;
