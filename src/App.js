import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import Thanks from './components/Thanks'

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
        <BrowserRouter>
         <Switch>
        <Route path="/register">
         <Register /> 
        </Route>

        <Route path="/login">
         <Login />
        </Route>

        <Route exact path="/">
          <Products />
        </Route>
         
         <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/thanks">
          <Thanks />
        </Route>
        
      </Switch>
      </BrowserRouter>
       </div>
       </ThemeProvider>
       </React.StrictMode>
  );
}

export default App;
