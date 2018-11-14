import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Main from "./containers/Main";

library.add(faUser);

class App extends Component {
  render() {
    return <Main />;
  }
}

export default App;
