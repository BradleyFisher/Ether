import { Component } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Authentication from "../pages/Authentication/Authentication";
import Dashboard from "../pages/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
}

export default App;
