import React from "react";
import "./App.css";
import FlexBox from "./components/flexBody";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Header name="Gregory!" />
      <FlexBox />
      <Footer />
    </div>
  );
}

export default App;
