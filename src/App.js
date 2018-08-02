import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout.js";
import zupage from "zupage";
import getUrls from "get-urls";
import axios from "axios";

class App extends Component {
  state = { post: { body: "", images: [], page: {} }, products: [] };

  async componentDidMount() {
    // const post = await zupage.getPost('4122d340-7bdb-4996-8400-f3d582d84280');
    const post = await zupage.getCurrentPost();
    var urls = Array.from(getUrls(post.body));
    // urls.map(url => {
    //   var product = getProduct(url);
    //   products = this.state.products;
    //
    // });
    var products = this.getProducts(urls);
    console.log(urls);
    this.setState({ post: post, products: products });
    console.log("Response!", post);
  }

  getProducts = props => {
    var etsyURLParts = props[0].match(
      /^((http|https):\/\/)?(www.)?etsy.com\/listing\/(\d+)(\/.*)?$/
    );
    var listingID;
    if (etsyURLParts) {
      listingID = etsyURLParts[4];
    }
    if (listingID) {
      console.log(listingID);
      axios
        .get(
          "https://openapi.etsy.com/v2/listings/" +
            listingID +
            "/?api_key=94ydtmmscugbijpzkytncfh6&includes=Images"
        )
        .then(response => console.log(response));
    }
  };

  render() {
    return <Layout style={{ height: "100vh", width: "100vw" }} />;
  }
}

export default App;
