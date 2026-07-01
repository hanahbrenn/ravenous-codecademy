import React from "react";
import "./App.css";
import BusinessList from "./components/BusinessList/BusinessList";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Ravenous</h1>
        <BusinessList />
      </div>
    );
  }
}

export default App;
