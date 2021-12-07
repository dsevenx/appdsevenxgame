import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Footer.css";

export class Footer extends Component {
  render() {
    const lJahr = new Date().getFullYear();
    return (
      <div class="main-footer">
        <Container>
          <Row>
            <p />
          </Row>
          <Row className="mr-3 mb-3">
            <Col>
              <a href="./impressum">@{lJahr} DsevenX / Impressum</a>
            </Col>
            <Col>All rights reserved</Col>
            <Col>
              <a href="./datenschutz">Datenschutz / Privacy</a>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    );
  }
}
