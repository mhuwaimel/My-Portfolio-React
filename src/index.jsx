// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './assets/scss/main.scss';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
