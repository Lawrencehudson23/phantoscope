import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import "./App.less";
const PillowPage = () => (
  <div>
    <h1>Pillow Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pillow" component={PillowPage} />
      </Switch>
    </div>
  );
}

export default App;
