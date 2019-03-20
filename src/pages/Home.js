import React, { Component } from "react";
import Splash from "../components/Splash/Splash";
import { withRouter } from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        const { history } = this.props;
        setTimeout(() => history.push("/login"), 4000);
    }
    render() {
        return <Splash />;
    }
}
export default withRouter(Home);
