import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// eigene tech Komponenten
import { Datenschutz } from "./components/Datenschutz";
import { Home } from "./components/cp_tech/Home";
import { Impressum } from "./components/Impressum";
import { Footer } from "./components/cp_tech/Footer";

export default class App extends Component {
  // jetzt render3
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Container>
            <Router>
              <Switch>
                <Route
                  path="/planentenspieldatenschutz"
                  exact
                  component={() => (
                    <Datenschutz app_name="'PlanetenspielUndApp2b'" />
                  )}
                />
                <Route
                  path="/buchstabenspieldatenschutz"
                  exact
                  component={() => (
                    <Datenschutz app_name="'buchstaben lernen app'" />
                  )}
                />
                <Route
                  path="/kirisorganizer"
                  exact
                  component={() => <Datenschutz app_name="'KirisOrganizer'" />}
                />
                <Route path="/impressum" component={() => <Impressum />} />
                <Route path="/" component={() => <Home />} />
              </Switch>
            </Router>
          </Container>
        </div>
        <Footer css_chen="main-footer-all" />
      </div>
    );
  }
}
