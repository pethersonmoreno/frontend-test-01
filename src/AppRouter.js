import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Splash from "./components/Splash/Splash";
import Login from "./pages/Login";

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/splash" component={Splash} />
    <Route path="/login" component={Login} />
  </Router>
);
export default AppRouter;
