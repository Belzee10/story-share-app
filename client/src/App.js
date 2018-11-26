import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComments,
  faUser,
  faList,
  faCheck,
  faImage
} from "@fortawesome/free-solid-svg-icons";
import Main from "./containers/Main";

library.add(faComments, faUser, faList, faCheck, faImage);

class App extends Component {
  render() {
    return <Main />;
  }
}

export default App;
