import React from "react";
import { Button } from "antd";
import "antd/lib/button/style";
import "./App.less";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <h1>Create React Project with Ant Design and Less Support</h1>
      <Button type="primary">Hi</Button>
    </div>
  );
}

export default App;
