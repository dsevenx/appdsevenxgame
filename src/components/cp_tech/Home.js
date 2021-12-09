import React, { Component } from "react";
import { Row, Col, Container, Image, Card } from "react-bootstrap";
import IMG_BUCHSTABEN from "../../assets/Burcu_Icon_1024.png";
import IMG_PLANETENSPIEL from "../../assets/LaunchScreen-iPhoneLandscape.png";
import IMG_KIRIS_ORGANIZER from "../../assets/Kiris_180_180.png";

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
                          <p>Willkommen bei DsevenX APPs</p>
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
            <Col xs={1}></Col>
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
                              <h3>astronomische Objektespiel</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                Hier geht es zur Datenschutzerklärung vom
                                <Card.Link href="./planentenspieldatenschutz">
                                  {" "}
                                  PlanetenspielUndApp2b{" "}
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
                            src={IMG_KIRIS_ORGANIZER}
                            alt="es fehlt IMG_KIRIS_ORGANIZER"
                            fluid
                            className="card-img-top"
                          />
                          <Card.Body>
                            <Card.Title>
                              <h3>ToDo Organizer / Arbeitsorganisation</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                Hier geht es zur Datenschutzerklärung von
                                <Card.Link href="./kirisorganizer">
                                  {" "}
                                  KirisOrganizer{" "}
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
                              <h3>Buchstaben- und Zahlenspiel</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                Hier geht es zur Datenschutzerklärung vom
                                <Card.Link href="./buchstabenspieldatenschutz">
                                  {" "}
                                  buchstaben lernen app{" "}
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
