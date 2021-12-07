import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eigene tech Komponenten
import { Main } from "./Main";

export default class App extends Component {
  render() {
    return (
      <div>
        <Main></Main>
      </div>
    );
  }
}
