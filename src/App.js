import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout.js";

class App extends Component {
  render() {
    return <Layout style={{ height: "100vh", width: "100vh" }} />;
  }
}

export default App;
