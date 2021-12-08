import React, { Component } from "react";
import { Row, Col, Container, Image, Card } from "react-bootstrap";
import IMG_BUCHSTABEN from "../../assets/Burcu_Icon_1024.png";
import IMG_PLANETENSPIEL from "../../assets/LaunchScreen-iPhoneLandscape.png";

export class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={4}></Col>
            <Col>
              <div className="mt-5 d-flex justify-content-middle">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h4>
                          <p>Willkommen bei DsevenX APP-games</p>
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={3}></Col>
            <Col xs={3}>
              <div>
                <table className="mt-5 d-flex justify-content-middle">
                  <tbody>
                    <tr>
                      <td>
                        <Card>
                          <Image
                            src={IMG_PLANETENSPIEL}
                            alt="es fehlt IMG_PLANETENSPIEL"
                            fluid
                            className="card-img-top"
                          />
                          <Card.Body>
                            <Card.Title>
                              <h3>Buchstabenspiel</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                Hier geht es zur Datenschutzerklärung vom
                                <Card.Link href="./planentenspieldatenschutz">
                                  {" "}
                                  Planetenspiel{" "}
                                </Card.Link>{" "}
                                .
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>

            <Col xs={3}>
              <div>
                <table className="mt-5 d-flex justify-content-middle">
                  <tbody>
                    <tr>
                      <td>
                        <Card>
                          <Image
                            src={IMG_BUCHSTABEN}
                            alt="es fehlt IMG_BUCHSTABEN"
                            fluid
                            className="card-img-top"
                          />
                          <Card.Body>
                            <Card.Title>
                              <h3>Planetenspiel</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                Hier geht es zur Datenschutzerklärung vom
                                <Card.Link href="./buchstabenspieldatenschutz">
                                  {" "}
                                  Buchstabenspiel{" "}
                                </Card.Link>{" "}
                                .
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mt-5 d-flex justify-content-middle">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h4>
                          <p></p>
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
