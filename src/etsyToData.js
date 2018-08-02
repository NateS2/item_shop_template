import React, { Component } from "react";
import { Container, Header, Image, Grid, Button } from "semantic-ui-react";

//https://openapi.etsy.com/v2/listings/519140155/?api_key=94ydtmmscugbijpzkytncfh6&includes=Images

class EtsyToData extends Component {
  state = { images: [], title: "", imageSRC: "", count: 0 };

  async componentWillReceiveProps(newProps) {
    // console.log("New Props on the hero", newProps);

    await this.setState({ images: newProps.images, title: newProps.title });
    // console.log("did await", this.state);
  }

  render() {}
}

export default EtsyToData;
