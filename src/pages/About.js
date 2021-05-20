import React from "react";
import Container from "../components/Container";
import Bio from "../components/Bio";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import Background from "../components/Background";

function About() {
  return (
    <div>
      <Hero >
        <Background/>
      </Hero>
      <Container style={{ marginTop: 20 }}>
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">About me</h3>
          <hr className="mx-auto w-50"></hr>
        </div>
        <Row>
          <Col size="md-6">
            <img id="self" src="../images/me.jpg" height="450" width="450" alt="self" />
          </Col>
          <Col size="md-6">
            <Bio />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;
