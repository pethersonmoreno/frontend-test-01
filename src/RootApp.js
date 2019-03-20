import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Splash from "./components/Splash/Splash";
import Login from "./pages/Login";
import App from "./templates/App";
import Trailers from "./pages/Trailers";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core";
import MainApp from "./templates/MainApp";
import theme from "./theme";

const AppRoute = () => (
    <App>
        <Route path="/app/trailers" component={Trailers} />
    </App>
);
const RootApp = () => (
    <MuiThemeProvider theme={theme}>
        <Router>
            <CssBaseline />
            <MainApp>
                <Route path="/" exact component={Home} />
                <Route path="/splash" component={Splash} />
                <Route path="/login" component={Login} />
                <Route path="/app" component={AppRoute} />
            </MainApp>
        </Router>
    </MuiThemeProvider>
);
export default RootApp;
