import React, { Component } from "react";
import { Container, Header, Image, Grid, Button } from "semantic-ui-react";

class Layout extends Component {
  state = { images: [], title: "", imageSRC: "", count: 0 };

  async componentWillReceiveProps(newProps) {
    // console.log("New Props on the hero", newProps);

    await this.setState({ images: newProps.images, title: newProps.title });
    // console.log("did await", this.state);
    this.changeHeroImage();
  }

  render() {
    return (
      <Container
        style={{
          backgroundColor: "rgba(211, 228, 242, 0.7)",
          height: "100vh",
          width: "100vw"
        }}
        textAlign="center">
        <Grid columns={5} style={{ paddingTop: "7%" }}>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={6}>
              <Image
                fluid
                className="Box-Shadow"
                src="http://laserdiscdivision.com/wp-content/uploads/2018/01/light-blue-loveseat-design-stunning-rectangular-shape-can-be-occupied-two-people-legs-long-beige-round-wood.jpg"
              />
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column textAlign="left" width={3}>
              <Header size="huge" style={{ paddingTop: "7%" }}>
                {" "}
                CHIC SOFA
              </Header>
              <Container style={{ paddingTop: "7%" }}>$1,499</Container>
              <Button.Group style={{ marginTop: "75%" }}>
                <Button>-</Button>
                <Button>1</Button>
                <Button>+</Button>
              </Button.Group>
              <Grid columns={2} style={{ marginTop: "25%" }}>
                {/* <Grid.Column width={8}>
                  <Button primary>Buy</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button secondary>More</Button>
                </Grid.Column> */}

                <div>
                  <Button
                    className="Box-Shadow"
                    primary
                    style={{ marginRight: "1 px" }}
                    size="big">
                    Buy
                  </Button>
                  <Button secondary style={{ marginLeft: "1 px" }}>
                    More
                  </Button>
                </div>
                {/* <Button.Group>
                  <Button primary>Buy</Button>
                  <Button secondary>More</Button>
                </Button.Group> */}
              </Grid>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
          <Grid.Row style={{ marginTop: "7%" }}>
            <Grid.Column width={3} />
            <Grid.Column width={10}>
              <Header as="h3" dividing>
                Description
              </Header>
              <Container textAlign="left">
                Lorem ipsum dolor amet readymade drinking vinegar forage tbh
                keytar stumptown shabby chic locavore meggings vexillologist
                echo park whatever single-origin coffee actually. Kitsch poutine
                cray food truck fixie banjo. Everyday carry la croix gastropub
                copper mug +1, small batch raclette drinking vinegar.
                Vexillologist green juice yr put a bird on it organic waistcoat.
              </Container>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
        </Grid>
        {/* <Grid centered>
          <Grid.Column width={6}>
            <div
              style={{ height: "100%", width: "100%", backgroundColor: "blue" }}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <div
              style={{ height: "100%", width: "100%", backgroundColor: "red" }}
            />
          </Grid.Column>
        </Grid> */}
      </Container>
    );
  }
}

export default Layout;
