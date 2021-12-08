import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/cp_tech/Footer";

// eigene tech Komponenten
import { PlanentenspielDatenschutz } from "./components/cp_planetenspiel_datenschutz/PlanetenspielDatenschutz";
import { BuchstabenspielDatenschutz } from "./components/cp_buchstabenspiel_datenschutz/BuchstabenspielDatenschutz";
import { Home } from "./components/cp_tech/Home";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kommtnoch_imstate: "",
    };
  }

  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Container>
            <Router>
              <Routes>
                <Route
                  path="/buchstabenspieldatenschutz"
                  element={<BuchstabenspielDatenschutz />}
                />
                <Route
                  path="/planentenspieldatenschutz"
                  element={<PlanentenspielDatenschutz />}
                />
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
