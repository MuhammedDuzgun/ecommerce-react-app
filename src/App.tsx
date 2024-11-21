import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Navbar from "./customer/components/NavBar/Navbar";
import customTheme from "./Theme/customTheme";
import Home from "./customer/pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
