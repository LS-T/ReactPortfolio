import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css";

function Contact() {
    return (
        <Container>
            <Container>
                <div className="post-heading text-center">
                    <h3 className="">Contact</h3>
                    <hr className="mx-auto w-50" />
                </div>
            </Container>
            <Row className="row">
                <Col size="md-6">
                    <div className="card text-center contact">
                        <i className="card-icon fab fa-github"></i>
                        <a className="nav-link poppin links" href="https://github.com/LS-T">Github</a>
                        <hr className="mx-auto w-50" />
                    </div>
                </Col>
                <Col size="md-6">
                    <div className="card text-center contact">
                        <i className="card-icon far fa-envelope"></i>
                        <p className="poppin">leo.s.teruel@gmail.com</p>
                        <hr className="mx-auto w-50" />
                    </div>
                </Col>
                <Col size="md-6">
                    <div className="card text-center contact">
                        <i className="card-icon fab fa-linkedin"></i>
                        <a className ="nav-link poppin links" href="https://www.linkedin.com/in/leo-teruel-366376161/">LinkedIn</a>
                        <hr className="mx-auto w-50" />
                    </div>
                </Col>
                <Col size="md-6">
                    <div className="card text-center contact">
                        <i className="card-icon fas fa-phone"></i>
                        <p className="poppin">(404)-953-2469</p>
                        <hr className="mx-auto w-50" />
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Contact;