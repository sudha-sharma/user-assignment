//React imports
import React from "react";
//Router imports
import { Redirect, Router } from "@reach/router";
//Local imports
import List from "./components/user-list.component";

const App = () => {
  return (
    <div>
      <div className="container mt-3">
        <Router>
          <List path="users" />
          <Redirect from="/" to="/users" default noThrow />
        </Router>
      </div>
    </div>
  );
};

export default App;
