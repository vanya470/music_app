import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AudioProvider from "./contex/AudioContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AudioProvider>
    <App />
  </AudioProvider>
);