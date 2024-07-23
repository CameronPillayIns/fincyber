import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <title>Fincyber</title>
        <meta name="description" content="Digital Compliance" />
        <meta name='keywords' content='Kyc, Kye, Due Diligence, compliance, FICA, FIC, Criminal Checks, Risk assesment '></meta>
      </Helmet>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
