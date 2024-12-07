import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export class Footer extends Component {
  render() {
    const lJahr = new Date().getFullYear();
    return (
        <div class="main-footer main-footer-all ">
          <Container>
            <Row>
              <p />
            </Row>
            <Row className="mr-3 mb-3">
              <Col>
                <a href="./impressum">@{lJahr} DsevenX / Impressum</a>
              </Col>
              <Col>All rights reserved</Col>
            </Row>
            <Row></Row>
          </Container>
        </div>
    
    );
  }
}
