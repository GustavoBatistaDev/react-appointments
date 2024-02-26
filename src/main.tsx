import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/authentication/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
