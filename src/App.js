import React from "react";
import "./App.css";
import SplitPane from "react-split-pane";
import MapContainer from "./Map/MapContainer";
import Cards from "./AllCards/Cards";

function App() {
  return (
    <div className="page">
      <SplitPane split="vertical" minSize={500} defaultSize={900}>
        <div className="left-pane">
          <Cards />
        </div>
        <MapContainer />
      </SplitPane>
    </div>
  );
}

export default App;
