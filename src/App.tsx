import Median from "median-js-bridge";
import React, { useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    Median.onReady(() => {
      window.alert("Median app ready!");
    });
  }, []);

  return (
    <div className="App">
      <h1 className="App-title">Median React App</h1>
      <p className="App-only">
        App Only: To use this demo for testing open the current page within your
        Median.co app.
      </p>

      <button
        className="App-button"
        onClick={() => {
          window.alert(`isNativeApp: ${Median.isNativeApp()}`);
        }}
      >
        Median.isNativeApp()
      </button>
    </div>
  );
};

export default App;
