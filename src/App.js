import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout.js";
import zupage from "zupage";
import getUrls from "get-urls";

class App extends Component {
  state = { post: { body: "", images: [], page: {} } };

  async componentDidMount() {
    // const post = await zupage.getPost('4122d340-7bdb-4996-8400-f3d582d84280');
    const post = await zupage.getCurrentPost();
    console.log(getUrls(post.body));
    this.setState({ post });
    console.log("Response!", post);
  }

  render() {
    return <Layout style={{ height: "100vh", width: "100vw" }} />;
  }
}

export default App;
