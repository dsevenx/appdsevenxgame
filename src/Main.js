import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// eigene tech Komponenten
import { Datenschutz } from "./components/Datenschutz";
import { Home } from "./components/cp_tech/Home";
import { Impressum } from "./components/Impressum";
import { Footer } from "./components/cp_tech/Footer";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kommtnoch_imstate: "",
    };
  }
  // jetzt render3
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Container>
            <Router>
              <Routes>
                <Route
                  path="/planentenspieldatenschutz"
                  element={<Datenschutz app_name="'PlanetenspielUndApp2b'" />}
                />
                <Route
                  path="/buchstabenspieldatenschutz"
                  element={<Datenschutz app_name="'buchstaben lernen app'" />}
                />
                <Route
                  path="/kirisorganizer"
                  element={<Datenschutz app_name="'KirisOrganizer'" />}
                />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
          </Container>
        </div>
        <Footer css_chen="main-footer-all" />
      </div>
    );
  }
}
