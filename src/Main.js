import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/cp_tech/Footer";

// eigene tech Komponenten
import { PlanentenspielDatenschutz } from "./components/cp_planetenspiel_datenschutz/PlanetenspielDatenschutz";
import { BuchstabenspielDatenschutz } from "./components/cp_buchstabenspiel_datenschutz/BuchstabenspielDatenschutz";

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
          <Container>Steffen hier 3</Container>
        </div>
        <Footer />
      </div>
    );
  }
}

/*
<div className="page-container">
        <div className="content-wrap">
          <Container>Steffen hier</Container>
        </div>
        <Footer />
      </div>

 <Router>
              <Routes>
                <Route
                  exact
                  path="/buchstabenspieldatenschutz"
                  component={() => <BuchstabenspielDatenschutz />}
                />
                <Route
                  exact
                  path="/planentenspieldatenschutz"
                  component={() => <PlanentenspielDatenschutz />}
                />
              </Routes>
            </Router>
            */
